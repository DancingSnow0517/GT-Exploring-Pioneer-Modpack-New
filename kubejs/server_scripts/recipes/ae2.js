ServerEvents.recipes(event => {
    // storage processor
    event.recipes.gtceu.assembler('storage_processor_1')
        .itemInputs('#forge:plates/steel', 'ae2:logic_processor')
        .itemOutputs('kubejs:storage_processor_1')
        .EUt(GTValues.VA[GTValues.LV])
        .duration(5 * 20)

    event.recipes.gtceu.assembler('storage_processor_2')
        .itemInputs('#forge:plates/aluminium', 'ae2:logic_processor')
        .itemOutputs('kubejs:storage_processor_2')
        .EUt(GTValues.VA[GTValues.LV])
        .duration(5 * 20)

    event.recipes.gtceu.assembler('storage_processor_3')
        .itemInputs('#forge:plates/stainless_steel', 'ae2:logic_processor')
        .itemOutputs('kubejs:storage_processor_3')
        .EUt(GTValues.VA[GTValues.LV])
        .duration(5 * 20)

    event.recipes.gtceu.assembler('storage_processor_4')
        .itemInputs('#forge:plates/titanium', 'ae2:engineering_processor')
        .itemOutputs('kubejs:storage_processor_4')
        .EUt(GTValues.VA[GTValues.HV])
        .duration(5 * 20)

    event.recipes.gtceu.assembler('storage_processor_5')
        .itemInputs('#forge:plates/tungsten_steel', 'ae2:engineering_processor')
        .itemOutputs('kubejs:storage_processor_5')
        .EUt(GTValues.VA[GTValues.HV])
        .duration(5 * 20)

    event.recipes.gtceu.assembler('storage_processor_6')
        .itemInputs('#forge:plates/rhodium_plated_palladium', 'ae2:engineering_processor')
        .itemOutputs('kubejs:storage_processor_6')
        .EUt(GTValues.VA[GTValues.HV])
        .duration(5 * 20)

    event.recipes.gtceu.assembler('storage_processor_7')
        .itemInputs('#forge:plates/naquadah_alloy', 'ae2:engineering_processor')
        .itemOutputs('kubejs:storage_processor_7')
        .EUt(GTValues.VA[GTValues.IV])
        .duration(5 * 20)

    event.recipes.gtceu.assembler('storage_processor_8')
        .itemInputs('gtceu:darmstadtium_plate', 'ae2:engineering_processor')
        .itemOutputs('kubejs:storage_processor_8')
        .EUt(GTValues.VA[GTValues.IV])
        .duration(5 * 20)

    event.recipes.gtceu.assembler('storage_processor_9')
        .itemInputs('gtceu:cosmic_neutronium_plate', 'ae2:engineering_processor')
        .itemOutputs('kubejs:storage_processor_9')
        .EUt(GTValues.VA[GTValues.IV])
        .duration(5 * 20)

    // printed processor
    event.remove({'type': 'ae2:inscriber', 'output': /ae2:printed_\w+/})
    event.custom({
        'type': 'ae2:inscriber',
        'ingredients': {
            'middle': {
                'tag': 'forge:plates/silicon'
            },
            'top': {
                'item': 'ae2:silicon_press'
            }
        },
        'mode': 'inscribe',
        'result': {
            'item': 'ae2:printed_silicon'
        }
    })
    event.recipes.gtceu.forming_press('forming_press/printed_silicon')
        .notConsumable('ae2:silicon_press')
        .itemInputs('#forge:plates/silicon')
        .itemOutputs('ae2:printed_silicon')
        .EUt(GTValues.VA[GTValues.LV])
        .duration(10 * 20)
    event.custom({
        'type': 'ae2:inscriber',
        'ingredients': {
            'middle': {
                'tag': 'forge:plates/certus_quartz'
            },
            'top': {
                'item': 'ae2:calculation_processor_press'
            }
        },
        'mode': 'inscribe',
        'result': {
            'item': 'ae2:printed_calculation_processor'
        }
    })
    event.recipes.gtceu.forming_press('forming_press/printed_calculation_processor')
        .notConsumable('ae2:calculation_processor_press')
        .itemInputs('#forge:plates/certus_quartz')
        .itemOutputs('ae2:printed_calculation_processor')
        .EUt(GTValues.VA[GTValues.LV])
        .duration(10 * 20)
    event.custom({
        'type': 'ae2:inscriber',
        'ingredients': {
            'middle': {
                'tag': 'forge:plates/gold'
            },
            'top': {
                'item': 'ae2:logic_processor_press'
            }
        },
        'mode': 'inscribe',
        'result': {
            'item': 'ae2:printed_logic_processor'
        }
    })
    event.recipes.gtceu.forming_press('forming_press/printed_logic_processor')
        .notConsumable('ae2:logic_processor_press')
        .itemInputs('#forge:plates/gold')
        .itemOutputs('ae2:printed_logic_processor')
        .EUt(GTValues.VA[GTValues.LV])
        .duration(10 * 20)
    event.custom({
        'type': 'ae2:inscriber',
        'ingredients': {
            'middle': {
                'tag': 'forge:plates/diamond'
            },
            'top': {
                'item': 'ae2:engineering_processor_press'
            }
        },
        'mode': 'inscribe',
        'result': {
            'item': 'ae2:printed_engineering_processor'
        }
    })
    event.recipes.gtceu.forming_press('forming_press/printed_engineering_processor')
        .notConsumable('ae2:engineering_processor_press')
        .itemInputs('#forge:plates/diamond')
        .itemOutputs('ae2:printed_engineering_processor')
        .EUt(GTValues.VA[GTValues.LV])
        .duration(10 * 20)

    // cell component
    event.remove({'output': /.+cell_component.+/})
    event.remove({'output': /bigger_ae2:\w+_cell_component/})

    const circuits = ['ulv', 'lv', 'mv', 'hv', 'ev', 'iv', 'luv', 'zpm', 'uv', 'uhv', 'uev', 'uiv', 'uxv', 'opv', 'max']
    const boards = [
        'gtceu:resin_circuit_board',
        'gtceu:resin_printed_circuit_board',
        'gtceu:phenolic_circuit_board',
        'gtceu:phenolic_printed_circuit_board',
        'gtceu:plastic_circuit_board',
        'gtceu:plastic_printed_circuit_board',
        'gtceu:epoxy_circuit_board',
        'gtceu:epoxy_printed_circuit_board',
        'gtceu:fiber_reinforced_circuit_board',
        'gtceu:fiber_reinforced_printed_circuit_board'
    ]

    /**
     *
     * @param {OutputItem_} output
     * @param {number} circuit_level
     * @param {InputItem_} inputA
     * @param {InputItem_} inputC
     */
    const cell_component = (output, circuit_level, inputA, inputC) => {
        event.recipes.minecraft.crafting_shaped(output, [
            'BAB',
            'ACA',
            'BAB'
        ], {
            'A': inputA,
            'B': `#gtceu:circuits/${circuits[circuit_level]}`,
            'C': inputC
        })
        event.recipes.gtceu.circuit_assembler(`circuit_assembler/1x_${output.split(':')[1]}_tin`)
            .itemInputs(`2x #gtceu:circuits/${circuits[circuit_level]}`, inputC, `${boards[circuit_level]}`)
            .itemOutputs(output)
            .inputFluids('gtceu:tin 144')
            .EUt(GTValues.VA[Math.ceil((circuit_level + 1) / 3)])
            .duration(10 * 20)
        event.recipes.gtceu.circuit_assembler(`circuit_assembler/4x_${output.split(':')[1]}_tin`)
            .itemInputs(`2x #gtceu:circuits/${circuits[circuit_level + 1]}`, `4x ${inputC}`, `4x ${boards[circuit_level]}`)
            .itemOutputs(`4x ${output}`)
            .inputFluids('gtceu:tin 576')
            .EUt(GTValues.VA[Math.ceil((circuit_level + 1) / 3) + 1])
            .duration(10 * 20)
        event.recipes.gtceu.circuit_assembler(`circuit_assembler/16x_${output.split(':')[1]}_tin`)
            .itemInputs(`2x #gtceu:circuits/${circuits[circuit_level + 2]}`, `16x ${inputC}`, `16x ${boards[circuit_level]}`)
            .itemOutputs(`16x ${output}`)
            .inputFluids('gtceu:tin 2304')
            .EUt(GTValues.VA[Math.ceil((circuit_level + 1) / 3) + 2])
            .duration(10 * 20)
        event.recipes.gtceu.circuit_assembler(`circuit_assembler/64x_${output.split(':')[1]}_tin`)
            .itemInputs(`2x #gtceu:circuits/${circuits[circuit_level + 3]}`, `64x ${inputC}`, `64x ${boards[circuit_level]}`)
            .itemOutputs(`64x ${output}`)
            .inputFluids('gtceu:tin 9216')
            .EUt(GTValues.VA[Math.ceil((circuit_level + 1) / 3) + 3])
            .duration(10 * 20)
        event.recipes.gtceu.circuit_assembler(`circuit_assembler/1x_${output.split(':')[1]}_soldering_alloy`)
            .itemInputs(`2x #gtceu:circuits/${circuits[circuit_level]}`, inputC, `${boards[circuit_level]}`)
            .itemOutputs(output)
            .inputFluids('gtceu:soldering_alloy 72')
            .EUt(GTValues.VA[Math.ceil((circuit_level + 1) / 3)])
            .duration(10 * 20)
        event.recipes.gtceu.circuit_assembler(`circuit_assembler/4x_${output.split(':')[1]}_soldering_alloy`)
            .itemInputs(`2x #gtceu:circuits/${circuits[circuit_level + 1]}`, `4x ${inputC}`, `4x ${boards[circuit_level]}`)
            .itemOutputs(`4x ${output}`)
            .inputFluids('gtceu:soldering_alloy 288')
            .EUt(GTValues.VA[Math.ceil((circuit_level + 1) / 3) + 1])
            .duration(10 * 20)
        event.recipes.gtceu.circuit_assembler(`circuit_assembler/16x_${output.split(':')[1]}_soldering_alloy`)
            .itemInputs(`2x #gtceu:circuits/${circuits[circuit_level + 2]}`, `16x ${inputC}`, `16x ${boards[circuit_level]}`)
            .itemOutputs(`16x ${output}`)
            .inputFluids('gtceu:soldering_alloy 1152')
            .EUt(GTValues.VA[Math.ceil((circuit_level + 1) / 3) + 2])
            .duration(10 * 20)
        event.recipes.gtceu.circuit_assembler(`circuit_assembler/64x_${output.split(':')[1]}_soldering_alloy`)
            .itemInputs(`2x #gtceu:circuits/${circuits[circuit_level + 3]}`, `64x ${inputC}`, `64x ${boards[circuit_level]}`)
            .itemOutputs(`64x ${output}`)
            .inputFluids('gtceu:soldering_alloy 4608')
            .EUt(GTValues.VA[Math.ceil((circuit_level + 1) / 3) + 3])
            .duration(10 * 20)
    }
    cell_component('ae2:cell_component_1k', 0, '#forge:dusts/certus_quartz', 'ae2:logic_processor')
    cell_component('ae2:cell_component_4k', 1, 'ae2:cell_component_1k', 'kubejs:storage_processor_1')
    cell_component('ae2:cell_component_16k', 2, 'ae2:cell_component_4k', 'kubejs:storage_processor_2')
    cell_component('ae2:cell_component_64k', 3, 'ae2:cell_component_16k', 'kubejs:storage_processor_3')
    cell_component('ae2:cell_component_256k', 4, 'ae2:cell_component_64k', 'kubejs:storage_processor_4')
    cell_component('megacells:cell_component_1m', 5, 'ae2:cell_component_256k', 'kubejs:storage_processor_5')
    cell_component('megacells:cell_component_4m', 6, 'megacells:cell_component_1m', 'kubejs:storage_processor_6')
    cell_component('megacells:cell_component_16m', 7, 'megacells:cell_component_4m', 'kubejs:storage_processor_7')
    cell_component('megacells:cell_component_64m', 8, 'megacells:cell_component_16m', 'kubejs:storage_processor_8')
    cell_component('megacells:cell_component_256m', 9, 'megacells:cell_component_64m', 'kubejs:storage_processor_9')

    // processor
    event.recipes.gtceu.assembler('assembler/logic_processor')
        .itemInputs('ae2:printed_logic_processor', 'ae2:printed_silicon')
        .inputFluids('gtceu:redstone 144')
        .itemOutputs('ae2:logic_processor')
        .EUt(GTValues.VA[GTValues.LV])
        .duration(3.2 * 20)
    event.recipes.gtceu.assembler('assembler/calculation_processor')
        .itemInputs('ae2:printed_calculation_processor', 'ae2:printed_silicon')
        .inputFluids('gtceu:redstone 144')
        .itemOutputs('ae2:calculation_processor')
        .EUt(GTValues.VA[GTValues.LV])
        .duration(3.2 * 20)
    event.recipes.gtceu.assembler('assembler/engineering_processor')
        .itemInputs('ae2:printed_engineering_processor', 'ae2:printed_silicon')
        .inputFluids('gtceu:redstone 144')
        .itemOutputs('ae2:engineering_processor')
        .EUt(GTValues.VA[GTValues.LV])
        .duration(3.2 * 20)

    // 充能赛特斯石英
    event.recipes.gtceu.mixer('mixer/charged_certus_quartz_crystal_water')
        .itemInputs('3x #forge:gems/certus_quartz', '#forge:dusts/sodium')
        .inputFluids('minecraft:water 500')
        .itemOutputs('3x ae2:charged_certus_quartz_crystal')
        .EUt(GTValues.VA[GTValues.LV])
        .duration(45 * 20)
    event.recipes.gtceu.mixer('mixer/charged_certus_quartz_crystal_distilled_water')
        .itemInputs('3x #forge:gems/certus_quartz', '#forge:dusts/sodium')
        .inputFluids('gtceu:distilled_water 500')
        .itemOutputs('3x ae2:charged_certus_quartz_crystal')
        .EUt(GTValues.VA[GTValues.LV])
        .duration(25 * 20)

    // 福鲁伊克斯水晶
    event.recipes.gtceu.mixer('mixer/fluix_crystal_water')
        .itemInputs('ae2:charged_certus_quartz_crystal', '#forge:dusts/redstone', '#ae2:all_nether_quartz')
        .inputFluids('minecraft:water 500')
        .itemOutputs('3x #forge:gems/fluix')
        .EUt(GTValues.VA[GTValues.LV])
        .duration(45 * 20)
    event.recipes.gtceu.mixer('mixer/fluix_crystal_distilled_water')
        .itemInputs('ae2:charged_certus_quartz_crystal', '#forge:dusts/redstone', '#ae2:all_nether_quartz')
        .inputFluids('gtceu:distilled_water 500')
        .itemOutputs('3x #forge:gems/fluix')
        .EUt(GTValues.VA[GTValues.LV])
        .duration(25 * 20)

    // 外壳
    event.remove({'output': /.+cell_housing/})
    event.remove({'id': /^ae2:network\/cells\/(?=.)(?!.*_storage$).*$/})
    event.remove({'id': /^megacells:cells\/(?=.)(?!.*_with_housing$).*$/})
    event.recipes.minecraft.crafting_shaped('ae2:item_cell_housing', [
        'CBC',
        'D D',
        'AEF'
    ], {
        'A': '#forge:tools/hammers',
        'B': 'gtceu:certus_quartz_plate',
        'C': 'ae2:quartz_glass',
        'D': '#forge:plates/steel',
        'E': '#forge:plates/aluminium',
        'F': '#forge:tools/screwdrivers'
    })
    event.recipes.gtceu.assembler('assembler/item_cell_housing')
        .itemInputs('gtceu:certus_quartz_plate', '2x ae2:quartz_glass', '2x #forge:plates/steel', '#forge:plates/aluminium')
        .itemOutputs('ae2:item_cell_housing')
        .EUt(GTValues.VA[GTValues.LV])
        .duration(5 * 20)
    event.recipes.minecraft.crafting_shaped('ae2:fluid_cell_housing', [
        'CBC',
        'D D',
        'AEF'
    ], {
        'A': '#forge:tools/hammers',
        'B': 'gtceu:certus_quartz_plate',
        'C': 'ae2:quartz_glass',
        'D': '#forge:plates/gold',
        'E': '#forge:plates/aluminium',
        'F': '#forge:tools/screwdrivers'
    })
    event.recipes.gtceu.assembler('assembler/fluid_cell_housing')
        .itemInputs('gtceu:certus_quartz_plate', '2x ae2:quartz_glass', '2x #forge:plates/gold', '#forge:plates/aluminium')
        .itemOutputs('ae2:fluid_cell_housing')
        .EUt(GTValues.VA[GTValues.LV])
        .duration(5 * 20)
    event.recipes.minecraft.crafting_shaped('megacells:mega_item_cell_housing', [
        'CBC',
        'D D',
        'AEF'
    ], {
        'A': '#forge:tools/hammers',
        'B': 'gtceu:certus_quartz_plate',
        'C': 'ae2:quartz_glass',
        'D': '#forge:plates/steel',
        'E': '#forge:plates/stainless_steel',
        'F': '#forge:tools/screwdrivers'
    })
    event.recipes.gtceu.assembler('assembler/mega_item_cell_housing')
        .itemInputs('gtceu:certus_quartz_plate', '2x ae2:quartz_glass', '2x #forge:plates/steel', '#forge:plates/stainless_steel')
        .itemOutputs('megacells:mega_item_cell_housing')
        .EUt(GTValues.VA[GTValues.HV])
        .duration(5 * 20)
    event.recipes.minecraft.crafting_shaped('megacells:mega_fluid_cell_housing', [
        'CBC',
        'D D',
        'AEF'
    ], {
        'A': '#forge:tools/hammers',
        'B': 'gtceu:certus_quartz_plate',
        'C': 'ae2:quartz_glass',
        'D': '#forge:plates/gold',
        'E': '#forge:plates/stainless_steel',
        'F': '#forge:tools/screwdrivers'
    })
    event.recipes.gtceu.assembler('assembler/mega_fluid_cell_housing')
        .itemInputs('gtceu:certus_quartz_plate', '2x ae2:quartz_glass', '2x #forge:plates/gold', '#forge:plates/stainless_steel')
        .itemOutputs('megacells:mega_fluid_cell_housing')
        .EUt(GTValues.VA[GTValues.HV])
        .duration(5 * 20)

    // 升级卡
    event.remove({output: 'ae2wtlib:magnet_card'})
    event.recipes.minecraft.crafting_shaped('ae2wtlib:magnet_card', [
        'ABA',
        'CDC',
        'CCC'
    ], {
        'A': '#forge:plates/lapis',
        'B': 'ae2:annihilation_plane',
        'C': '#forge:ingots/magnetic_neodymium',
        'D': 'ae2:advanced_card'
    })
    event.remove({output: 'ae2wtlib:quantum_bridge_card'})
    event.recipes.minecraft.crafting_shaped('ae2wtlib:quantum_bridge_card', [
        ' A ',
        'BCB',
        'EDE'
    ], {
        'A': 'ae2:wireless_receiver',
        'B': 'ae2:fluix_pearl',
        'C': 'ae2:advanced_card',
        'D': 'ae2:singularity',
        'E': '#forge:plates/ender_eye'
    })

    event.remove({output: /ae2:\w+_card/})
    event.recipes.minecraft.crafting_shaped('ae2:basic_card', [
        'AB ',
        'CDB',
        'AB'
    ], {
        'A': '#forge:plates/gold',
        'B': '#forge:plates/aluminium',
        'C': '#forge:plates/red_alloy',
        'D': 'ae2:calculation_processor'
    })
    event.recipes.minecraft.crafting_shaped('ae2:advanced_card', [
        'AB ',
        'CDB',
        'AB'
    ], {
        'A': '#forge:plates/diamond',
        'B': '#forge:plates/stainless_steel',
        'C': '#forge:plates/red_alloy',
        'D': 'ae2:calculation_processor'
    })

    event.recipes.minecraft.crafting_shaped('ae2:capacity_card', [
        'AB',
        'BC'
    ], {
        'A': 'ae2:basic_card',
        'B': 'ae2:cell_component_1k',
        'C': 'ae2:charged_certus_quartz_crystal'
    })
    event.recipes.minecraft.crafting_shaped('ae2:crafting_card', [
        'AB',
        'BC'
    ], {
        'A': 'ae2:basic_card',
        'B': 'ae2:cell_component_1k',
        'C': '#forge:workbenches'
    })
    event.recipes.minecraft.crafting_shaped('ae2:redstone_card', [
        'AB',
        'BC'
    ], {
        'A': 'ae2:basic_card',
        'B': 'minecraft:redstone_torch',
        'C': 'ae2:calculation_processor'
    })
    event.recipes.minecraft.crafting_shaped('ae2:void_card', [
        'AB',
        'BC'
    ], {
        'A': 'ae2:basic_card',
        'B': 'ae2:cell_component_1k',
        'C': 'trashcans:item_trash_can'
    })
    event.recipes.minecraft.crafting_shaped('ae2:fuzzy_card', [
        'AB',
        'CD'
    ], {
        'A': 'ae2:advanced_card',
        'B': 'ae2:logic_processor',
        'C': 'ae2:calculation_processor',
        'D': 'ae2:engineering_processor'
    })
    event.recipes.minecraft.crafting_shaped('ae2:inverter_card', [
        'AB',
        'BC'
    ], {
        'A': 'ae2:advanced_card',
        'B': 'minecraft:redstone_torch',
        'C': 'ae2:calculation_processor'
    })
    event.recipes.minecraft.crafting_shaped('ae2:equal_distribution_card', [
        'AB',
        'BC'
    ], {
        'A': 'ae2:advanced_card',
        'B': 'naturesaura:item_distributor',
        'C': 'ae2:calculation_processor'
    })
    event.recipes.minecraft.crafting_shaped('ae2:speed_card', [
        'AB',
        'CD'
    ], {
        'A': 'ae2:advanced_card',
        'B': 'ae2:logic_processor',
        'C': 'ae2:engineering_processor',
        'D': '#forge:gems/fluix'
    })
    event.recipes.minecraft.crafting_shaped('ae2:energy_card', [
        'AB',
        'CD'
    ], {
        'A': 'ae2:advanced_card',
        'B': 'ae2:logic_processor',
        'C': 'ae2:engineering_processor',
        'D': 'ae2:dense_energy_cell'
    })
    event.remove({output: /megacells:\w+_card/})
    event.recipes.minecraft.crafting_shaped('megacells:greater_energy_card', [
        'AB',
        'CD'
    ], {
        'A': 'ae2:advanced_card',
        'B': 'ae2:logic_processor',
        'C': 'ae2:engineering_processor',
        'D': 'megacells:mega_energy_cell'
    })

    event.recipes.minecraft.crafting_shaped('ae2:memory_card', [
        'ABC',
        'DED'
    ], {
        'A': 'ae2:calculation_processor',
        'B': '#gtceu:circuits/ev',
        'C': '#forge:plates/stainless_steel',
        'D': '#forge:plates/gold',
        'E': '#forge:plates/red_alloy'
    })
    event.recipes.minecraft.crafting_shapeless('betterp2p:advanced_memory_card', [
        'ae2:memory_card',
        'ae2:network_tool'
    ])

    // 设备
    const ex_machine = (ae, ex) => {
        event.recipes.minecraft.crafting_shaped(ex, [
            'ABA',
            'BCB',
            'ABA'
        ], {
            'A': '#forge:plates/titanium',
            'B': ae,
            'C': 'ae2:engineering_processor',
        })
        event.recipes.gtceu.assembler(`assembler/${ex.split(':')[1]}`)
            .itemInputs('4x #forge:plates/titanium', `4x ${ae}`, 'ae2:engineering_processor')
            .itemOutputs(ex)
            .circuit(2)
            .EUt(GTValues.VA[GTValues.HV])
            .duration(5 * 20)
    }

    event.remove({output: 'ae2:inscriber'})
    event.remove({output: 'expatternprovider:ex_inscriber'})
    event.recipes.minecraft.crafting_shaped('ae2:inscriber', [
        'ABA',
        'CDC',
        'ABA'
    ], {
        'A': '#forge:plates/aluminium',
        'B': '#forge:gems/fluix',
        'C': 'minecraft:sticky_piston',
        'D': 'gtceu:mv_forming_press'
    })
    ex_machine('ae2:inscriber', 'expatternprovider:ex_inscriber')
    
    event.remove({output: 'ae2:charger'})
    event.remove({output: 'expatternprovider:ex_charger'})
    event.recipes.minecraft.crafting_shaped('ae2:charger', [
        'ABA',
        'CDC',
        'ABA'
    ], {
        'A': '#forge:plates/aluminium',
        'B': '#forge:gems/fluix',
        'C': 'gtceu:copper_single_cable',
        'D': 'gtceu:mv_electrolyzer'
    })
    ex_machine('ae2:charger', 'expatternprovider:ex_charger')

    event.remove({output: 'ae2:crafting_unit'})
    event.remove({output: 'megacells:mega_crafting_unit'})
    event.recipes.minecraft.crafting_shaped('ae2:crafting_unit', [
        'ABA',
        'CDC',
        'AEA'
    ], {
        'A': '#forge:plates/aluminium',
        'B': 'ae2:logic_processor',
        'C': '#gtceu:circuits/lv',
        'D': 'ae2:calculation_processor',
        'E': 'ae2:engineering_processor'
    })
    event.recipes.gtceu.assembler('assembler/crafting_unit')
        .itemInputs('4x #forge:plates/aluminium', '2x #gtceu:circuits/lv', 'ae2:logic_processor', 'ae2:calculation_processor', 'ae2:engineering_processor')
        .itemOutputs('ae2:crafting_unit')
        .circuit(2)
        .EUt(GTValues.VA[GTValues.LV])
        .duration(5 * 20)

    event.recipes.minecraft.crafting_shaped('megacells:mega_crafting_unit', [
        'ABA',
        'CDC',
        'AEA'
    ], {
        'A': '#forge:plates/titanium',
        'B': 'ae2:logic_processor',
        'C': '#gtceu:circuits/hv',
        'D': 'ae2:calculation_processor',
        'E': 'ae2:engineering_processor'
    })
    event.recipes.gtceu.assembler('assembler/mega_crafting_unit')
        .itemInputs('4x #forge:plates/titanium', '2x #gtceu:circuits/hv', 'ae2:logic_processor', 'ae2:calculation_processor', 'ae2:engineering_processor')
        .itemOutputs('megacells:mega_crafting_unit')
        .circuit(2)
        .EUt(GTValues.VA[GTValues.HV])
        .duration(5 * 20)

    event.remove({output: 'ae2:crafting_accelerator'})
    event.remove({output: 'bigger_ae2:4_core_crafting_accelerator'})
    event.remove({output: 'bigger_ae2:16_core_crafting_accelerator'})
    event.recipes.gtceu.assembler('assembler/crafting_accelerator')
        .itemInputs('ae2:crafting_unit', 'ae2:engineering_processor')
        .itemOutputs('ae2:crafting_accelerator')
        .EUt(GTValues.VA[GTValues.MV])
        .duration(20 * 20)
    event.recipes.gtceu.assembler('assembler/4_core_crafting_accelerator')
        .itemInputs('ae2:crafting_unit', '2x #gtceu:circuits/iv')
        .itemOutputs('bigger_ae2:4_core_crafting_accelerator')
        .EUt(GTValues.VA[GTValues.HV])
        .duration(20 * 20)
    event.recipes.gtceu.assembler('assembler/16_core_crafting_accelerator')
        .itemInputs('ae2:crafting_unit', '2x #gtceu:circuits/uv')
        .itemOutputs('bigger_ae2:16_core_crafting_accelerator')
        .EUt(GTValues.VA[GTValues.IV])
        .duration(20 * 20)

    event.remove({output: 'ae2:1k_crafting_storage'})
    event.remove({output: 'ae2:4k_crafting_storage'})
    event.remove({output: 'ae2:16k_crafting_storage'})
    event.remove({output: 'ae2:64k_crafting_storage'})
    event.remove({output: 'ae2:256k_crafting_storage'})
    event.recipes.gtceu.assembler('assembler/1k_crafting_storage')
        .itemInputs('ae2:crafting_unit', 'ae2:cell_component_1k')
        .itemOutputs('ae2:1k_crafting_storage')
        .EUt(GTValues.VA[GTValues.MV])
        .duration(5 * 20)
    event.recipes.gtceu.assembler('assembler/4k_crafting_storage')
        .itemInputs('ae2:crafting_unit', 'ae2:cell_component_4k')
        .itemOutputs('ae2:4k_crafting_storage')
        .EUt(GTValues.VA[GTValues.MV])
        .duration(5 * 20)
    event.recipes.gtceu.assembler('assembler/16k_crafting_storage')
        .itemInputs('ae2:crafting_unit', 'ae2:cell_component_16k')
        .itemOutputs('ae2:16k_crafting_storage')
        .EUt(GTValues.VA[GTValues.MV])
        .duration(5 * 20)
    event.recipes.gtceu.assembler('assembler/64k_crafting_storage')
        .itemInputs('ae2:crafting_unit', 'ae2:cell_component_64k')
        .itemOutputs('ae2:64k_crafting_storage')
        .EUt(GTValues.VA[GTValues.MV])
        .duration(5 * 20)
    event.recipes.gtceu.assembler('assembler/256k_crafting_storage')
        .itemInputs('ae2:crafting_unit', 'ae2:cell_component_256k')
        .itemOutputs('ae2:256k_crafting_storage')
        .EUt(GTValues.VA[GTValues.MV])
        .duration(5 * 20)

    event.remove({output: 'megacells:1m_crafting_storage'})
    event.remove({output: 'megacells:4m_crafting_storage'})
    event.remove({output: 'megacells:16m_crafting_storage'})
    event.remove({output: 'megacells:64m_crafting_storage'})
    event.remove({output: 'megacells:256m_crafting_storage'})
    event.recipes.gtceu.assembler('assembler/1m_crafting_storage')
        .itemInputs('megacells:mega_crafting_unit', 'megacells:cell_component_1m')
        .itemOutputs('megacells:1m_crafting_storage')
        .EUt(GTValues.VA[GTValues.EV])
        .duration(5 * 20)
    event.recipes.gtceu.assembler('assembler/4m_crafting_storage')
        .itemInputs('megacells:mega_crafting_unit', 'megacells:cell_component_4m')
        .itemOutputs('megacells:4m_crafting_storage')
        .EUt(GTValues.VA[GTValues.EV])
        .duration(5 * 20)
    event.recipes.gtceu.assembler('assembler/16m_crafting_storage')
        .itemInputs('megacells:mega_crafting_unit', 'megacells:cell_component_16m')
        .itemOutputs('megacells:16m_crafting_storage')
        .EUt(GTValues.VA[GTValues.EV])
        .duration(5 * 20)
    event.recipes.gtceu.assembler('assembler/64m_crafting_storage')
        .itemInputs('megacells:mega_crafting_unit', 'megacells:cell_component_64m')
        .itemOutputs('megacells:64m_crafting_storage')
        .EUt(GTValues.VA[GTValues.EV])
        .duration(5 * 20)
    event.recipes.gtceu.assembler('assembler/256m_crafting_storage')
        .itemInputs('megacells:mega_crafting_unit', 'megacells:cell_component_256m')
        .itemOutputs('megacells:256m_crafting_storage')
        .EUt(GTValues.VA[GTValues.EV])
        .duration(5 * 20)

    event.remove({type: 'minecraft:crafting_shaped', output: 'ae2:pattern_provider'})
    event.remove({type: 'minecraft:crafting_shaped', output: 'expatternprovider:ex_pattern_provider'})
    event.remove({output: 'megacells:mega_pattern_provider'})
    event.recipes.minecraft.crafting_shaped('ae2:pattern_provider', [
        'ABA',
        'CDE',
        'ABA'
    ], {
        'A': '#forge:plates/aluminium',
        'B': '#forge:workbenches',
        'C': 'ae2:annihilation_core',
        'D': 'gtceu:mv_machine_casing',
        'E': 'ae2:formation_core'
    })
    event.recipes.gtceu.assembler('assembler/pattern_provider')
        .itemInputs('4x #forge:plates/aluminium', '2x #forge:workbenches', 'ae2:annihilation_core', 'ae2:formation_core', 'gtceu:mv_machine_casing')
        .itemOutputs('ae2:pattern_provider')
        .circuit(2)
        .EUt(GTValues.VA[GTValues.MV])
        .duration(5 * 20)
    ex_machine('ae2:pattern_provider', 'expatternprovider:ex_pattern_provider')

    event.remove({type: 'minecraft:crafting_shaped', output: 'ae2:interface'})
    event.remove({type: 'minecraft:crafting_shaped', output: 'expatternprovider:ex_interface'})
    event.remove({output: 'megacells:mega_interface'})
    event.recipes.minecraft.crafting_shaped('ae2:interface', [
        'ABA',
        'CDE',
        'ABA'
    ], {
        'A': '#forge:plates/aluminium',
        'B': '#ae2:glass_cable',
        'C': 'ae2:annihilation_core',
        'D': 'gtceu:mv_machine_casing',
        'E': 'ae2:formation_core'
    })
    event.recipes.gtceu.assembler('assembler/interface')
        .itemInputs('4x #forge:plates/aluminium', '2x #ae2:glass_cable', 'ae2:annihilation_core', 'ae2:formation_core', 'gtceu:mv_machine_casing')
        .itemOutputs('ae2:pattern_provider')
        .circuit(2)
        .EUt(GTValues.VA[GTValues.MV])
        .duration(5 * 20)
    ex_machine('ae2:interface', 'expatternprovider:ex_interface')

    event.remove({output: 'ae2:molecular_assembler'})
    event.remove({output: 'expatternprovider:ex_molecular_assembler'})
    event.recipes.minecraft.crafting_shaped('ae2:molecular_assembler', [
        'ABA',
        'CDE',
        'ABA'
    ], {
        'A': '#forge:plates/aluminium',
        'B': 'ae2:quartz_glass',
        'C': 'ae2:annihilation_core',
        'D': 'gtceu:mv_assembler',
        'E': 'ae2:formation_core'
    })
    event.recipes.gtceu.assembler('assembler/molecular_assembler')
        .itemInputs('4x #forge:plates/aluminium', 'ae2:annihilation_core', 'ae2:formation_core', 'gtceu:mv_assembler')
        .inputFluids('gtceu:glass 288')
        .itemOutputs('ae2:molecular_assembler')
        .EUt(GTValues.VA[GTValues.MV])
        .duration(5 * 20)
    ex_machine('ae2:molecular_assembler', 'expatternprovider:ex_molecular_assembler')

    event.remove({output: 'ae2:drive'})
    event.remove({output: 'expatternprovider:ex_drive'})
    event.recipes.minecraft.crafting_shaped('ae2:drive', [
        'ABA',
        'CDC',
        'AEA'
    ], {
        'A': '#forge:plates/steel',
        'B': 'ae2:engineering_processor',
        'C': '#ae2:glass_cable',
        'D': 'ae2:chest',
        'E': '#gtceu:circuits/lv'
    })
    event.recipes.gtceu.assembler('assembler/drive')
        .itemInputs('4x #forge:plates/steel', '2x #ae2:glass_cable', 'ae2:engineering_processor', 'ae2:chest', '#gtceu:circuits/lv')
        .itemOutputs('ae2:drive')
        .circuit(2)
        .EUt(GTValues.VA[GTValues.MV])
        .duration(5 * 20)
    ex_machine('ae2:drive', 'expatternprovider:ex_drive')

    event.remove({output: 'ae2:energy_cell'})
    event.remove({output: 'ae2:dense_energy_cell'})
    event.remove({output: 'megacells:mega_energy_cell'})
    event.recipes.minecraft.crafting_shaped('ae2:energy_cell', [
        'ABA',
        'CDC',
        'AEA'
    ], {
        'A': '#forge:plates/certus_quartz',
        'B': '#forge:dusts/fluix',
        'C': '#gtceu:circuits/lv',
        'D': 'ae2:fluix_block',
        'E': 'gtceu:copper_octal_cable'
    })
    event.recipes.gtceu.assembler('assembler/energy_cell')
        .itemInputs('4x #forge:plates/certus_quartz', '2x #gtceu:circuits/lv', '#forge:dusts/fluix', 'ae2:fluix_block', 'gtceu:copper_octal_cable')
        .itemOutputs('ae2:energy_cell')
        .circuit(2)
        .EUt(GTValues.VA[GTValues.LV])
        .duration(10 * 20)
    
    event.recipes.minecraft.crafting_shaped('ae2:dense_energy_cell', [
        'AAA',
        'BCB',
        'ADA'
    ], {
        'A': 'ae2:energy_cell',
        'B': '#gtceu:circuits/ev',
        'C': 'ae2:engineering_processor',
        'D': 'gtceu:ev_battery_buffer_16x'
    })
    event.recipes.gtceu.assembler('assembler/dense_energy_cell')
        .itemInputs('5x ae2:energy_cell', '2x #gtceu:circuits/ev', 'ae2:engineering_processor', 'gtceu:ev_battery_buffer_16x')
        .itemOutputs('ae2:dense_energy_cell')
        .circuit(2)
        .EUt(GTValues.VA[GTValues.EV])
        .duration(10 * 20)
    
    event.recipes.minecraft.crafting_shaped('megacells:mega_energy_cell', [
            'AAA',
            'BCB',
            'ADA'
        ], {
            'A': 'ae2:dense_energy_cell',
            'B': '#gtceu:circuits/zpm',
            'C': 'ae2:engineering_processor',
            'D': 'gtceu:zpm_battery_buffer_16x'
        })
    event.recipes.gtceu.assembler('assembler/mega_energy_cell')
            .itemInputs('5x ae2:dense_energy_cell', '2x #gtceu:circuits/zpm', 'ae2:engineering_processor', 'gtceu:zpm_battery_buffer_16x')
            .itemOutputs('megacells:mega_energy_cell')
            .circuit(2)
            .EUt(GTValues.VA[GTValues.ZPM])
            .duration(10 * 20)

    event.remove({output: 'ae2:controller'})
    event.recipes.minecraft.crafting_shaped('ae2:controller', [
        'ABA',
        'CDC',
        'ABA'
    ], {
        'A': '#forge:plates/aluminium',
        'B': '#gtceu:circuits/mv',
        'C': 'ae2:engineering_processor',
        'D': 'ae2:fluix_block'
    })
    event.recipes.gtceu.assembler('assembler/controller')
        .itemInputs('4x #forge:plates/aluminium', '2x #gtceu:circuits/mv', '2x ae2:engineering_processor', 'ae2:fluix_block')
        .itemOutputs('ae2:controller')
        .circuit(2)
        .EUt(GTValues.VA[GTValues.LV])
        .duration(10 * 20)

    event.remove({output: 'ae2:chest'})
    event.recipes.minecraft.crafting_shaped('ae2:chest', [
        'ABA',
        'CDC',
        'ABA'
    ], {
        'A': '#forge:plates/steel',
        'B': '#gtceu:circuits/mv',
        'C': '#ae2:glass_cable',
        'D': 'ironchest:iron_chest'
    })
    event.recipes.gtceu.assembler('assembler/ae_chest')
        .itemInputs('4x #forge:plates/steel', '2x #gtceu:circuits/mv', '2x #ae2:glass_cable', 'ironchest:iron_chest')
        .itemOutputs('ae2:chest')
        .circuit(2)
        .EUt(GTValues.VA[GTValues.MV])
        .duration(5 * 20)

    event.remove({type: 'minecraft:crafting_shaped', output: 'ae2:energy_acceptor'})
    event.recipes.minecraft.crafting_shaped('ae2:energy_acceptor', [
        'ABA',
        'BCB',
        'ABA'
    ], {
        'A': '#forge:plates/aluminium',
        'B': '#forge:gems/fluix',
        'C': '#forge:plates/glowstone'
    })
    
    event.remove({output: 'ae2:condenser'})
    event.recipes.minecraft.crafting_shaped('ae2:condenser', [
        'ABA',
        'BCB',
        'ABA'
    ], {
        'A': '#forge:plates/aluminium',
        'B': 'gtceu:mv_electric_piston',
        'C': 'gtceu:mv_machine_hull'
    })

    event.remove({output: 'ae2:cell_workbench'})
    event.recipes.minecraft.crafting_shaped('ae2:cell_workbench', [
        'ABC',
        'DED',
        'FGF'
    ], {
        'A': '#forge:tools/screwdrivers',
        'B': 'gtceu:computer_monitor_cover',
        'C': '#forge:tools/wrenches',
        'D': '#forge:screws/aluminium',
        'E': '#forge:workbenches',
        'F': '#forge:plates/aluminium',
        'G': 'ae2:calculation_processor'
    })

    event.remove({output: 'ae2:io_port'})
    event.recipes.minecraft.crafting_shaped('ae2:io_port', [
        'ABA',
        'CAC',
        'BDB'
    ], {
        'A': '#ae2:glass_cable',
        'B': '#forge:plates/aluminium',
        'C': 'ae2:drive',
        'D': 'ae2:logic_processor'
    })

    event.remove({output: 'ae2:growth_accelerator'})
    event.recipes.minecraft.crafting_shaped('ae2:growth_accelerator', [
        'ABA',
        'CDC',
        'AEA'
    ], {
        'A': '#forge:plates/aluminium',
        'B': 'ae2:quartz_glass',
        'C': '#ae2:glass_cable',
        'D': 'gtceu:mv_autoclave',
        'E': 'ae2:engineering_processor'
    })

    event.remove({output: 'ae2:quantum_ring'})
    event.recipes.minecraft.crafting_shaped('ae2:quantum_ring', [
        'ABA',
        'DCE',
        'ABA'
    ], {
        'A': '#forge:plates/aluminium',
        'B': 'ae2:logic_processor',
        'C': 'ae2:energy_cell',
        'D': 'ae2:engineering_processor',
        'E': '#ae2:glass_cable'
    })
    event.recipes.gtceu.assembler('assembler/quantum_ring')
        .itemInputs('4x #forge:plates/aluminium', '2x ae2:logic_processor', 'ae2:energy_cell', 'ae2:engineering_processor', '#ae2:glass_cable')
        .itemOutputs('ae2:quantum_ring')
        .circuit(2)
        .EUt(GTValues.VA[GTValues.MV])
        .duration(5 * 20)

    event.remove({output: 'ae2:quantum_link'})
    event.recipes.minecraft.crafting_shaped('ae2:quantum_link', [
        'ABA',
        'BCB',
        'ABA'
    ], {
        'A': '#forge:plates/aluminium',
        'B': 'ae2:fluix_pearl',
        'C': 'ae2:quartz_glass'
    })
    event.recipes.gtceu.assembler('assembler/quantum_link')
        .itemInputs('4x #forge:plates/aluminium', '4x ae2:fluix_pearl', 'ae2:quartz_glass')
        .itemOutputs('ae2:quantum_link')
        .circuit(2)
        .EUt(GTValues.VA[GTValues.MV])
        .duration(5 * 20)

    // 其他
    event.remove({'output': 'ae2:wireless_receiver'})
    event.recipes.minecraft.crafting_shaped('ae2:wireless_receiver', [
        'ABA',
        ' C ',
        'DED'
    ], {
        'A': 'ae2:quartz_fiber',
        'B': 'ae2:fluix_pearl',
        'C': 'minecraft:ender_eye',
        'D': '#forge:plates/certus_quartz',
        'E': '#gtceu:circuits/hv'
    })
    event.recipes.gtceu.assembler('assembler/wireless_receiver')
        .itemInputs('minecraft:ender_eye', '2x ae2:quartz_fiber', 'ae2:fluix_pearl', '2x #forge:plates/certus_quartz', '#gtceu:circuits/hv')
        .itemOutputs('ae2:wireless_receiver')
        .EUt(GTValues.VA[GTValues.HV])
        .duration(5 * 20)

    event.recipes.gtceu.wiremill('wiremill/quartz_fiber')
        .itemInputs('#forge:gems/certus_quartz')
        .itemOutputs('2x ae2:quartz_fiber')
        .EUt(7)
        .duration(2.5 * 20)

    event.remove({output: 'ae2:wireless_booster'})
    event.recipes.minecraft.crafting_shaped('ae2:wireless_booster', [
        'ABC',
        'DED'
    ], {
        'A': '#forge:dusts/fluix',
        'B': '#forge:gems/certus_quartz',
        'C': '#forge:dusts/ender_pearl',
        'D': '#forge:plates/steel',
        'E': '#forge:plates/aluminium'
    })

    event.remove({output: 'ae2:annihilation_core'})
    event.recipes.minecraft.crafting_shaped('2x ae2:annihilation_core', [
        'ABA',
        'BCB',
        'ABA'
    ], {
        'A': '#forge:gems/nether_quartz',
        'B': 'ae2:logic_processor',
        'C': '#forge:gems/fluix'
    })
    event.recipes.gtceu.assembler('assembler/annihilation_core')
        .itemInputs('4x #forge:gems/nether_quartz', '4x ae2:logic_processor', '#forge:gems/fluix')
        .itemOutputs('2x ae2:annihilation_core')
        .circuit(4)
        .EUt(GTValues.VA[GTValues.MV])
        .duration(5 * 20)

    event.remove({output: 'ae2:formation_core'})
    event.recipes.minecraft.crafting_shaped('2x ae2:formation_core', [
        'ABA',
        'BCB',
        'ABA'
    ], {
        'A': '#forge:gems/certus_quartz',
        'B': 'ae2:logic_processor',
        'C': '#forge:gems/fluix'
    })
    event.recipes.gtceu.assembler('assembler/formation_core')
        .itemInputs('4x #forge:gems/certus_quartz', '4x ae2:logic_processor', '#forge:gems/fluix')
        .itemOutputs('2x ae2:formation_core')
        .circuit(4)
        .EUt(GTValues.VA[GTValues.MV])
        .duration(5 * 20)

    event.remove({output: 'ae2:fluix_pearl'})
    event.recipes.minecraft.crafting_shaped('ae2:fluix_pearl', [
        'ABA',
        'BCB',
        'ABA'
    ], {
        'A': '#forge:gems/fluix',
        'B': '#forge:gems/ender_eye',
        'C': '#forge:gems/ender_pearl'
    })
    event.remove({output: 'ae2netanalyser:network_analyser'})
    event.recipes.minecraft.crafting_shaped('ae2netanalyser:network_analyser', [
        'ABA',
        'CDC',
        'EFG'
    ], {
        'A': '#forge:gems/fluix',
        'B': 'ae2:wireless_receiver',
        'C': '#forge:screws/stainless_steel',
        'D': 'ae2:network_tool',
        'E': '#forge:tools/screwdrivers',
        'F': 'ae2:engineering_processor',
        'G': '#forge:tools/wrenches'
    })

    event.remove({output: 'ae2:fluix_glass_cable', input: 'ae2:quartz_fiber'})
    event.recipes.minecraft.crafting_shaped('2x ae2:fluix_glass_cable', [
        'ABA',
        'CCC',
        'ABA'
    ], {
        'A': '#forge:gems/certus_quartz',
        'B': '#forge:dusts/fluix',
        'C': 'ae2:quartz_fiber'
    })
    event.recipes.gtceu.assembler('assembler/fluix_glass_cable')
        .itemInputs('3x ae2:quartz_fiber', '2x #forge:dusts/fluix')
        .itemOutputs('2x ae2:fluix_glass_cable')
        .EUt(GTValues.VA[GTValues.MV])
        .duration(5 * 20)

    event.remove({output: 'ae2:fluix_covered_cable', input: 'ae2:fluix_glass_cable'})
    event.recipes.gtceu.assembler('assembler/fluix_covered_cable_rubber')
        .itemInputs('ae2:fluix_glass_cable')
        .inputFluids('gtceu:rubber 144')
        .itemOutputs('ae2:fluix_covered_cable')
        .circuit(24)
        .EUt(GTValues.VA[GTValues.MV])
        .duration(5 * 20)
    event.recipes.gtceu.assembler('assembler/fluix_covered_cable_silicone_rubber')
        .itemInputs('ae2:fluix_glass_cable')
        .inputFluids('gtceu:silicone_rubber 72')
        .itemOutputs('ae2:fluix_covered_cable')
        .circuit(24)
        .EUt(GTValues.VA[GTValues.MV])
        .duration(5 * 20)

    event.remove({output: 'ae2:fluix_covered_dense_cable', input: 'ae2:fluix_covered_cable'})
    event.recipes.gtceu.assembler('assembler/fluix_covered_dense_cable')
        .itemInputs('4x ae2:fluix_covered_cable')
        .inputFluids('gtceu:silicone_rubber 144')
        .itemOutputs('ae2:fluix_covered_dense_cable')
        .circuit(24)
        .EUt(GTValues.VA[GTValues.HV])
        .duration(10 * 20)

    event.remove({output: 'ae2:fluix_smart_cable', input: 'ae2:fluix_covered_cable'})
    event.recipes.gtceu.assembler('assembler/fluix_smart_cable_glass_cable')
        .itemInputs('4x #ae2:glass_cable', '#gtceu:circuits/mv')
        .inputFluids('gtceu:wrought_iron 144')
        .itemOutputs('4x ae2:fluix_smart_cable')
        .EUt(GTValues.VA[GTValues.MV])
        .duration(5 * 20)
    event.recipes.gtceu.assembler('assembler/fluix_smart_cable_covered_cable')
        .itemInputs('4x #ae2:covered_cable', '#gtceu:circuits/mv')
        .inputFluids('gtceu:wrought_iron 144')
        .itemOutputs('4x ae2:fluix_smart_cable')
        .EUt(GTValues.VA[GTValues.MV])
        .duration(5 * 20)

    event.remove({output: 'ae2:fluix_smart_dense_cable', input: 'ae2:fluix_covered_dense_cable'})
    event.remove({output: 'ae2:fluix_smart_dense_cable', input: 'ae2:fluix_smart_cable'})
    event.recipes.gtceu.assembler('assembler/fluix_smart_dense_cable_covered_dense_cable')
        .itemInputs('4x #ae2:covered_dense_cable', '#gtceu:circuits/hv')
        .inputFluids('gtceu:invar 144')
        .itemOutputs('4x ae2:fluix_smart_dense_cable')
        .EUt(GTValues.VA[GTValues.HV])
        .duration(5 * 20)
    event.recipes.gtceu.assembler('assembler/fluix_smart_dense_cable_smart_cable')
        .itemInputs('16x #ae2:smart_cable', '#gtceu:circuits/hv')
        .inputFluids('gtceu:invar 144')
        .itemOutputs('4x ae2:fluix_smart_dense_cable')
        .EUt(GTValues.VA[GTValues.HV])
        .duration(5 * 20)
    
    // 终端
    event.remove({output: 'ae2:semi_dark_monitor', type: 'minecraft:crafting_shaped'})
    event.recipes.gtceu.assembler('assembler/semi_dark_monitor')
        .itemInputs('gtceu:computer_monitor_cover', '2x #forge:plates/glowstone', '#forge:plates/aluminium', '#forge:plates/aluminium')
        .inputFluids('gtceu:soldering_alloy 144')
        .itemOutputs('ae2:semi_dark_monitor')
        .EUt(GTValues.VA[GTValues.LV])
        .duration(5 * 20)

    event.remove({output: 'ae2:terminal'})
    event.recipes.minecraft.crafting_shaped('ae2:terminal', [
        'ABA',
        'CDE',
        'AFA'
    ], {
        'A': '#forge:gems/nether_quartz',
        'B': '#gtceu:circuits/mv',
        'C': 'ae2:formation_core',
        'D': '#ae2:illuminated_panel',
        'E': 'ae2:annihilation_core',
        'F': '#forge:tools/screwdrivers'
    })
    event.recipes.gtceu.assembler('assembler/ae_terminal')
        .itemInputs('4x #forge:gems/nether_quartz', '#gtceu:circuits/mv', 'ae2:formation_core', 'ae2:annihilation_core', '#ae2:illuminated_panel')
        .itemOutputs('ae2:terminal')
        .EUt(GTValues.VA[GTValues.MV])
        .duration(5 * 20)

    event.recipes.gtceu.assembler('assembler/crafting_terminal')
        .itemInputs('ae2:terminal', 'ae2:calculation_processor', '#forge:workbenches')
        .itemOutputs('ae2:crafting_terminal')
        .EUt(GTValues.VA[GTValues.MV])
        .duration(5 * 20)

    event.recipes.gtceu.assembler('assembler/pattern_access_terminal')
        .itemInputs('#ae2:illuminated_panel', '#ae2:pattern_provider', 'ae2:engineering_processor')
        .itemOutputs('ae2:pattern_access_terminal')
        .EUt(GTValues.VA[GTValues.MV])
        .duration(5 * 20)

    event.recipes.gtceu.assembler('assembler/pattern_encoding_terminal')
        .itemInputs('ae2:crafting_terminal', 'ae2:engineering_processor')
        .itemOutputs('ae2:pattern_encoding_terminal')
        .EUt(GTValues.VA[GTValues.MV])
        .duration(5 * 20)
    
    event.remove({output: 'expatternprovider:ex_pattern_access_part'})
    ex_machine('ae2:pattern_encoding_terminal', 'expatternprovider:ex_pattern_access_part')

    event.recipes.gtceu.assembler('assembler/requester_terminal')
        .itemInputs('#ae2:illuminated_panel', 'ae2:logic_processor', 'merequester:requester')
        .itemOutputs('merequester:requester_terminal')
        .EUt(GTValues.VA[GTValues.MV])
        .duration(5 * 20)

    event.remove({output: 'ae2:wireless_terminal'})
    event.recipes.minecraft.crafting_shaped('ae2:wireless_terminal', [
        'ABA',
        'CDC',
        'CEC'
    ], {
        'A': 'ae2:wireless_receiver',
        'B': 'ae2:terminal',
        'C': '#forge:plates/nether_quartz',
        'D': 'ae2:engineering_processor',
        'E': 'ae2:dense_energy_cell'
    })
    const wireless_terminal = (ae_terminal, wireless_terminal) => {
        event.remove({output: wireless_terminal})
        event.recipes.gtceu.assembler(`assembler/${wireless_terminal.split(':')[1]}`)
            .itemInputs('ae2:wireless_terminal', ae_terminal)
            .itemOutputs(wireless_terminal)
            .EUt(GTValues.VA[GTValues.MV])
            .duration(30 * 20)
    }
    wireless_terminal('ae2:crafting_terminal', 'ae2:wireless_crafting_terminal')
    wireless_terminal('ae2:pattern_encoding_terminal', 'ae2wtlib:wireless_pattern_encoding_terminal')
    wireless_terminal('ae2:pattern_access_terminal', 'ae2wtlib:wireless_pattern_access_terminal')
    wireless_terminal('expatternprovider:ex_pattern_access_part', 'expatternprovider:wireless_ex_pat')
})