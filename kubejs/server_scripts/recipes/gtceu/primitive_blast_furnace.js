ServerEvents.recipes(event => {
    event.remove({'type': 'gtceu:primitive_blast_furnace'})

    event.remove({id: 'ad_astra:steel_ingot'})
    event.remove({id: 'ad_astra:steel_block'})
    event.remove({id: 'ad_astra:steel_ingot_from_steel_block'})

    event.shaped(
        'gtceu:large_primitive_blast_furnace', [
            'CAC',
            'ABA',
            'CAC'
        ], {
            'A': 'gtceu:primitive_blast_furnace',
            'B': '#forge:storage_blocks/steel',
            'C': 'gtceu:steel_screw'
        }
    )
    
    // 木炭 -> 钢
    event.recipes.gtceu.primitive_blast_furnace('primitive_blast_furnace/steel_from_charcoal_iron_ingot')
        .itemInputs('4x #forge:gems/charcoal', '#forge:ingots/iron')
        .itemOutputs('gtceu:steel_ingot', '2x gtceu:tiny_dark_ash_dust')
        .duration(90 * 20)
    
    event.recipes.gtceu.primitive_blast_furnace('primitive_blast_furnace/steel_from_charcoal_iron_dust')
        .itemInputs('4x #forge:gems/charcoal', '#forge:dusts/iron')
        .itemOutputs('gtceu:steel_ingot', '2x gtceu:tiny_dark_ash_dust')
        .duration(90 * 20)

    event.recipes.gtceu.primitive_blast_furnace('primitive_blast_furnace/steel_from_charcoal_dust_iron_ingot')
        .itemInputs('4x #forge:dusts/charcoal', '#forge:ingots/iron')
        .itemOutputs('gtceu:steel_ingot', '2x gtceu:tiny_dark_ash_dust')
        .duration(90 * 20)
    
    event.recipes.gtceu.primitive_blast_furnace('primitive_blast_furnace/steel_from_charcoal_dust_iron_dust')
        .itemInputs('4x #forge:dusts/charcoal', '#forge:dusts/iron')
        .itemOutputs('gtceu:steel_ingot', '2x gtceu:tiny_dark_ash_dust')
        .duration(90 * 20)

    // 煤炭 -> 钢
    event.recipes.gtceu.primitive_blast_furnace('primitive_blast_furnace/steel_from_coal_iron_ingot')
        .itemInputs('4x #forge:gems/coal', '#forge:ingots/iron')
        .itemOutputs('gtceu:steel_ingot', '2x gtceu:tiny_dark_ash_dust')
        .duration(90 * 20)
    
    event.recipes.gtceu.primitive_blast_furnace('primitive_blast_furnace/steel_from_coal_iron_dust')
        .itemInputs('4x #forge:gems/coal', '#forge:dusts/iron')
        .itemOutputs('gtceu:steel_ingot', '2x gtceu:tiny_dark_ash_dust')
        .duration(90 * 20)

    event.recipes.gtceu.primitive_blast_furnace('primitive_blast_furnace/steel_from_coal_dust_iron_ingot')
        .itemInputs('4x #forge:dusts/coal', '#forge:ingots/iron')
        .itemOutputs('gtceu:steel_ingot', '2x gtceu:tiny_dark_ash_dust')
        .duration(90 * 20)
    
    event.recipes.gtceu.primitive_blast_furnace('primitive_blast_furnace/steel_from_coal_dust_iron_dust')
        .itemInputs('4x #forge:dusts/coal', '#forge:dusts/iron')
        .itemOutputs('gtceu:steel_ingot', '2x gtceu:tiny_dark_ash_dust')
        .duration(90 * 20)
    
    // 焦煤 -> 钢
    event.recipes.gtceu.primitive_blast_furnace('primitive_blast_furnace/steel_from_coke_iron_ingot')
        .itemInputs('4x #forge:gems/coke', '#forge:ingots/iron')
        .itemOutputs('gtceu:steel_ingot', '2x gtceu:tiny_dark_ash_dust')
        .duration(60 * 20)
    
    event.recipes.gtceu.primitive_blast_furnace('primitive_blast_furnace/steel_from_coke_iron_dust')
        .itemInputs('4x #forge:gems/coke', '#forge:dusts/iron')
        .itemOutputs('gtceu:steel_ingot', '2x gtceu:tiny_dark_ash_dust')
        .duration(60 * 20)

    event.recipes.gtceu.primitive_blast_furnace('primitive_blast_furnace/steel_from_coke_dust_iron_ingot')
        .itemInputs('4x #forge:dusts/coke', '#forge:ingots/iron')
        .itemOutputs('gtceu:steel_ingot', '2x gtceu:tiny_dark_ash_dust')
        .duration(60 * 20)
    
    event.recipes.gtceu.primitive_blast_furnace('primitive_blast_furnace/steel_from_coke_dust_iron_dust')
        .itemInputs('4x #forge:dusts/coke', '#forge:dusts/iron')
        .itemOutputs('gtceu:steel_ingot', '2x gtceu:tiny_dark_ash_dust')
        .duration(60 * 20)

    // 木炭块 -> 钢
    event.recipes.gtceu.primitive_blast_furnace('primitive_blast_furnace/steel_from_charcoal_block_iron_dust')
        .itemInputs('2x #forge:storage_blocks/charcoal', '10x #forge:dusts/iron')
        .itemOutputs('10x gtceu:steel_ingot', '4x gtceu:dark_ash_dust')
        .duration(900 * 20)

    event.recipes.gtceu.primitive_blast_furnace('primitive_blast_furnace/steel_from_charcoal_block_iron_ingot')
        .itemInputs('2x #forge:storage_blocks/charcoal', '10x #forge:ingots/iron')
        .itemOutputs('10x gtceu:steel_ingot', '4x gtceu:dark_ash_dust')
        .duration(900 * 20)
    
    // 煤炭块 -> 钢
    event.recipes.gtceu.primitive_blast_furnace('primitive_blast_furnace/steel_from_coal_block_iron_dust')
        .itemInputs('2x #forge:storage_blocks/coal', '10x #forge:dusts/iron')
        .itemOutputs('10x gtceu:steel_ingot', '4x gtceu:dark_ash_dust')
        .duration(900 * 20)

    event.recipes.gtceu.primitive_blast_furnace('primitive_blast_furnace/steel_from_coal_block_iron_ingot')
        .itemInputs('2x #forge:storage_blocks/coal', '10x #forge:ingots/iron')
        .itemOutputs('10x gtceu:steel_ingot', '4x gtceu:dark_ash_dust')
        .duration(900 * 20)
    
    // 焦煤块 -> 钢
    event.recipes.gtceu.primitive_blast_furnace('primitive_blast_furnace/steel_from_coke_block_iron_dust')
        .itemInputs('2x #forge:storage_blocks/coke', '10x #forge:dusts/iron')
        .itemOutputs('10x gtceu:steel_ingot', '4x gtceu:dark_ash_dust')
        .duration(600 * 20)

    event.recipes.gtceu.primitive_blast_furnace('primitive_blast_furnace/steel_from_coke_block_iron_ingot')
        .itemInputs('2x #forge:storage_blocks/coke', '10x #forge:ingots/iron')
        .itemOutputs('10x gtceu:steel_ingot', '4x gtceu:dark_ash_dust')
        .duration(600 * 20)

})