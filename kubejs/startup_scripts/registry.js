Platform.mods.kubejs.name = 'GT Exploring Pioneer'

StartupEvents.registry('item', event => {
    event.create('twilight_crystal')
        .tooltip(Text.translatable('tooltip.kubejs.twilight_crystal'))
        .rarity('uncommon')

    event.create('storage_processor_1')
    event.create('storage_processor_2')
    event.create('storage_processor_3')
    event.create('storage_processor_4')
    event.create('storage_processor_5')
    event.create('storage_processor_6')
    event.create('storage_processor_7')
    event.create('storage_processor_8')
    event.create('storage_processor_9')
})

StartupEvents.registry('block', event => {

})