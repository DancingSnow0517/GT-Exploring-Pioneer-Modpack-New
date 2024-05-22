import json
import os
import shutil
from pathlib import Path

import requests
import toml

mod_path = Path() / 'mods'
index_path = mod_path / '.index'


def download_file(filename, url):
    req = requests.get(url, stream=True)
    os.makedirs('build/overrides/mods', exist_ok=True)
    with open(f'build/overrides/mods/{filename}', 'wb') as f:
        for chunk in req.iter_content(chunk_size=1024):
            f.write(chunk)


def main():
    build_number = os.environ.get('GITHUB_RUN_NUMBER', None)
    with open('modpack_info.json', encoding='utf-8') as f:
        pack_info = json.load(f)
    manifest = {
        'manifestType': 'minecraftModpack',
        'manifestVersion': 1,
        'minecraft': {
            "version": "1.20.1",
            'modLoaders': [
                {
                    'id': 'forge-47.2.0',
                    'primary': True
                }
            ]
        },
        'name': pack_info['name'],
        'author': pack_info['author'],
        'version': pack_info['version'] if build_number is None else pack_info['version'] + f'+build.{build_number}',
        'files': [],
        'overrides': 'overrides',
    }

    if os.path.exists('build'):
        shutil.rmtree('build')

    os.mkdir('build')
    os.mkdir('build/overrides')
    os.mkdir('build/overrides/mods')

    files = list(filter(lambda x: x.endswith('.toml'), os.listdir(index_path)))
    files = [index_path / file for file in files]
    for file in files:
        info = toml.load(file)
        if info['download']['mode'] == 'metadata:curseforge':
            manifest['files'].append({
                'fileID': info['update']['curseforge']['file-id'],
                'projectID': info['update']['curseforge']['project-id'],
                'required': True
            })
        elif info['download']['mode'] == 'url':
            download_file(info['filename'], info['download']['url'])

    for files in pack_info['files']:
        download_file(files['filename'], files['url'])

    with open('build/manifest.json', 'w', encoding='utf-8') as f:
        json.dump(manifest, f, indent=4, ensure_ascii=False)

    shutil.copytree('config', 'build/overrides/config')
    shutil.copytree('kubejs', 'build/overrides/kubejs')
    shutil.copytree('defaultconfigs', 'build/overrides/defaultconfigs')

    # 替换任务书为本地键的版本
    shutil.copytree(
        'config/ftbquests/localized_quests/chapters',
        'build/overrides/config/ftbquests/quests/chapters',
        dirs_exist_ok=True
    )
    shutil.rmtree('build/overrides/config/ftbquests/localized_quests')

    print(f'name={manifest["name"]}-{manifest["version"]}')


if __name__ == '__main__':
    main()
