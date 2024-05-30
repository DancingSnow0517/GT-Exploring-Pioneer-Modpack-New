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
})