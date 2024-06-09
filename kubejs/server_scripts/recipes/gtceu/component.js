// 各种 GT 元件相关配方
ServerEvents.recipes(event => {
    event.replaceInput(
        {input: '#forge:rings/nickel_zinc_ferrite', output: 'gtceu:smd_inductor'},
        '#forge:rings/nickel_zinc_ferrite',
        '#forge:rings/neodymium'
    )
})