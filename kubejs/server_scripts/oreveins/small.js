// priority 0
// noinspection DuplicatedCode

const NETHER = 'minecraft:the_nether'
const END = 'minecraft:the_end'

GTCEuServerEvents.oreVeins(event => {
    event.add('kubejs:sulfur_small', vein => {
        vein.weight(100)
        vein.clusterSize(35)
        vein.density(0.3)
        vein.layer('all')
        vein.dimensions(NETHER)
        vein.heightRangeUniform(5, 40)
        vein.layeredVeinGenerator(generator => generator
            .buildLayerPattern(pattern => pattern
                .layer(l => l.weight(3).mat(GTMaterials.Sulfur).size(2, 4))
                .layer(l => l.weight(2).mat(GTMaterials.Pyrite).size(1, 1))
                .layer(l => l.weight(1).mat(GTMaterials.Sphalerite).size(1, 1))
            )
        )
        vein.surfaceIndicatorGenerator(indicator => indicator
            .surfaceRock(GTMaterials.Sulfur)
            .placement('above')
        )
    })
    event.add('kubejs:molybdenum_small', vein => {
        vein.weight(10)
        vein.clusterSize(30)
        vein.density(0.5)
        vein.layer('all')
        vein.dimensions(NETHER, END)
        vein.heightRangeUniform(20, 60)
        vein.dikeVeinGenerator(generator => generator
            .withBlock(GTMaterials.Wulfenite, 2, 40, 60)
            .withBlock(GTMaterials.Molybdenite, 2, 30, 50)
            .withBlock(GTMaterials.Molybdenum, 2, 20, 40)
            .withBlock(GTMaterials.Powellite, 1, 20, 60)
        )
        vein.surfaceIndicatorGenerator(indicator => indicator
            .surfaceRock(GTMaterials.Molybdenum)
            .placement('above')
        )
    })
    event.add('kubejs:redstone_small', vein => {
        vein.weight(60)
        vein.clusterSize(30)
        vein.density(0.25)
        vein.layer('all')
        vein.dimensions(NETHER)
        vein.heightRangeUniform(5, 40)
        vein.layeredVeinGenerator(generator => generator
            .buildLayerPattern(patten => patten
                .layer(l => l.weight(3).mat(GTMaterials.Redstone).size(2, 4))
                .layer(l => l.weight(1).mat(GTMaterials.Ruby).size(1, 1))
                .layer(l => l.weight(1).mat(GTMaterials.Cinnabar).size(1, 1))
            )
        )
        vein.surfaceIndicatorGenerator(indicator => indicator
            .surfaceRock(GTMaterials.Redstone)
            .placement("above")
        )
    })
    event.add('kubejs:copper_small', vein => {
        vein.weight(80)
        vein.clusterSize(50)
        vein.density(1)
        vein.layer('all')
        vein.dimensions(NETHER, END)
        vein.heightRangeUniform(5, 60)
        vein.veinedVeinGenerator(generator => generator
            .oreBlock(GTMaterials.Chalcopyrite, 3)
            .oreBlock(GTMaterials.Pyrite, 2)
            .oreBlock(GTMaterials.Iron, 1)
            .rareBlock(GTMaterials.Copper, 1)
            .rareBlockChance(0.075)
            .veininessThreshold(0.1)
            .maxRichnessThreshold(0.175)
            .minRichness(0.4)
            .maxRichness(0.7)
            .edgeRoundoffBegin(3)
            .maxEdgeRoundoff(0.1)
        )
        vein.surfaceIndicatorGenerator(indicator => indicator
            .surfaceRock(GTMaterials.Chalcopyrite)
            .placement("above")
        )
    })
    event.add('kubejs:iron_small', vein => {
        vein.weight(120)
        vein.clusterSize(50)
        vein.density(1)
        vein.layer('all')
        vein.dimensions(NETHER)
        vein.heightRangeUniform(10, 40)
        vein.veinedVeinGenerator(generator => generator
            .oreBlock(GTMaterials.Goethite, 3)
            .oreBlock(GTMaterials.YellowLimonite, 2)
            .oreBlock(GTMaterials.Hematite, 2)
            .rareBlock(GTMaterials.Malachite, 1)
            .rareBlockChance(0.075)
            .veininessThreshold(0.1)
            .maxRichnessThreshold(0.175)
            .minRichness(0.4)
            .maxRichness(0.7)
            .edgeRoundoffBegin(3)
            .maxEdgeRoundoff(0.1)
        )
        vein.surfaceIndicatorGenerator(indicator => indicator
            .surfaceRock(GTMaterials.Goethite)
            .placement("above")
        )
    })
    event.add('kubejs:beryllium_small', vein => {
        vein.weight(30)
        vein.clusterSize(20)
        vein.density(0.4)
        vein.layer('all')
        vein.dimensions(NETHER)
        vein.heightRangeUniform(5, 60)
        vein.layeredVeinGenerator(generator => generator
            .buildLayerPattern(patten => patten
                .layer(l => l.weight(3).mat(GTMaterials.Beryllium).size(2, 4))
                .layer(l => l.weight(1).mat(GTMaterials.Emerald).size(1, 1))
                .layer(l => l.weight(1).mat(GTMaterials.Thorium).size(1, 1))
            )
        )
        vein.surfaceIndicatorGenerator(indicator => indicator
            .surfaceRock(GTMaterials.Beryllium)
            .placement("above")
        )
    })
    event.add('kubejs:electrotine_small', vein => {
        vein.weight(40)
        vein.clusterSize(35)
        vein.density(0.3)
        vein.layer('all')
        vein.dimensions(NETHER)
        vein.heightRangeUniform(5, 50)
        vein.layeredVeinGenerator(generator => generator
            .buildLayerPattern(pattern => pattern
                .layer(l => l.weight(2).mat(GTMaterials.Saltpeter).size(1, 2))
                .layer(l => l.weight(2).mat(GTMaterials.Diatomite).size(1, 2))
                .layer(l => l.weight(2).mat(GTMaterials.Electrotine).size(1, 2))
                .layer(l => l.weight(1).mat(GTMaterials.Alunite).size(1, 1))
            )
        )
        vein.surfaceIndicatorGenerator(indicator => indicator
            .surfaceRock(GTMaterials.Electrotine)
            .placement('above')
        )
    })
    event.add('kubejs:tetrahedrite_small', vein => {
        vein.weight(80)
        vein.clusterSize(50)
        vein.density(1)
        vein.layer('all')
        vein.dimensions(NETHER, END)
        vein.heightRangeUniform(80, 120)
        vein.veinedVeinGenerator(generator => generator
            .oreBlock(GTMaterials.Tetrahedrite, 3)
            .oreBlock(GTMaterials.Copper, 2)
            .rareBlock(GTMaterials.Stibnite, 1)
            .rareBlockChance(0.125)
            .veininessThreshold(0.1)
            .maxRichnessThreshold(0.175)
            .minRichness(0.4)
            .maxRichness(0.7)
            .edgeRoundoffBegin(3)
            .maxEdgeRoundoff(0.1)
        )
        vein.surfaceIndicatorGenerator(indicator => indicator
            .surfaceRock(GTMaterials.Chalcopyrite)
            .placement("above")
        )
    })
    event.add('kubejs:nether_quartz_small', vein => {
        vein.weight(40)
        vein.clusterSize(35)
        vein.density(0.3)
        vein.layer('all')
        vein.dimensions(NETHER)
        vein.heightRangeUniform(40, 80)
        vein.layeredVeinGenerator(generator => generator
            .buildLayerPattern(pattern => pattern
                .layer(l => l.weight(3).mat(GTMaterials.NetherQuartz).size(2, 4))
                .layer(l => l.weight(1).mat(GTMaterials.Quartzite).size(1, 2))
            )
        )
        vein.surfaceIndicatorGenerator(indicator => indicator
            .surfaceRock(GTMaterials.NetherQuartz)
            .placement('above')
        )
    })
    event.add('kubejs:quartzite_small', vein => {
        vein.weight(40)
        vein.clusterSize(35)
        vein.density(0.3)
        vein.layer('all')
        vein.dimensions(NETHER)
        vein.heightRangeUniform(80, 120)
        vein.layeredVeinGenerator(generator => generator
            .buildLayerPattern(pattern => pattern
                .layer(l => l.weight(2).mat(GTMaterials.Quartzite).size(2, 4))
                .layer(l => l.weight(2).mat(GTMaterials.CertusQuartz).size(2, 4))
                .layer(l => l.weight(2).mat(GTMaterials.Barite).size(1, 2))
            )
        )
        vein.surfaceIndicatorGenerator(indicator => indicator
            .surfaceRock(GTMaterials.NetherQuartz)
            .placement('above')
        )
    })
    event.add('kubejs:manganese_small', vein => {
        vein.weight(20)
        vein.clusterSize(40)
        vein.density(0.8)
        vein.layer('all')
        vein.dimensions(NETHER, END)
        vein.heightRangeUniform(20, 30)
        vein.dikeVeinGenerator(generator => generator
            .withBlock(GTMaterials.Grossular, 2, 26, 30)
            .withBlock(GTMaterials.Spessartine, 2, 24, 28)
            .withBlock(GTMaterials.Pyrolusite, 2, 20, 25)
            .withBlock(GTMaterials.Tantalite, 1, 20, 30)
        )
        vein.surfaceIndicatorGenerator(indicator => indicator
            .surfaceRock(GTMaterials.Grossular)
            .placement("above")
        )
    })

    event.add('kubejs:gold_small', vein => {
        vein.weight(160)
        vein.clusterSize(40)
        vein.density(0.9)
        vein.layer('all')
        vein.dimensions(END)
        vein.heightRangeUniform(20, 40)
        vein.veinedVeinGenerator(generator => generator
            .oreBlock(GTMaterials.Magnetite, 3)
            .oreBlock(GTMaterials.VanadiumMagnetite, 1)
            .rareBlock(GTMaterials.Gold, 1)
            .rareBlockChance(0.075)
            .veininessThreshold(0.1)
            .maxRichnessThreshold(0.175)
            .minRichness(0.4)
            .maxRichness(0.7)
            .edgeRoundoffBegin(3)
            .maxEdgeRoundoff(0.1)
        )
        vein.surfaceIndicatorGenerator(indicator => indicator
            .surfaceRock(GTMaterials.Magnetite)
            .placement("above")
        )
    })

    event.add('kubejs:magnetite_small', vein => {
        vein.weight(160)
        vein.clusterSize(40)
        vein.density(0.9)
        vein.layer('all')
        vein.dimensions(END)
        vein.heightRangeUniform(20, 100)
        vein.veinedVeinGenerator(generator => generator
            .oreBlock(GTMaterials.Magnetite, 3)
            .oreBlock(GTMaterials.Iron, 1)
            .rareBlock(GTMaterials.VanadiumMagnetite, 1)
            .rareBlockChance(0.075)
            .veininessThreshold(0.1)
            .maxRichnessThreshold(0.175)
            .minRichness(0.4)
            .maxRichness(0.7)
            .edgeRoundoffBegin(3)
            .maxEdgeRoundoff(0.1)
        )
        vein.surfaceIndicatorGenerator(indicator => indicator
            .surfaceRock(GTMaterials.Magnetite)
            .placement("above")
        )
    })

    event.add('kubejs:cassiterite_small', vein => {
        vein.weight(50)
        vein.clusterSize(30)
        vein.density(0.4)
        vein.layer('all')
        vein.dimensions(END)
        vein.heightRangeUniform(50, 130)
        vein.layeredVeinGenerator(generator => generator
            .buildLayerPattern(patten => patten
                .layer(l => l.weight(2).mat(GTMaterials.Cassiterite).size(2, 4))
                .layer(l => l.weight(1).mat(GTMaterials.Tin).size(1, 1))
            )
        )
        vein.surfaceIndicatorGenerator(indicator => indicator
            .surfaceRock(GTMaterials.Cassiterite)
            .placement("above")
        )
    })

    event.add('kubejs:olivine_small', vein => {
        vein.weight(60)
        vein.clusterSize(45)
        vein.density(0.45)
        vein.layer('all')
        vein.dimensions(END)
        vein.heightRangeUniform(10, 40)
        vein.dikeVeinGenerator(generator => generator
            .withBlock(GTMaterials.Bentonite, 2, 30, 40)
            .withBlock(GTMaterials.Magnesite, 2, 20, 35)
            .withBlock(GTMaterials.Olivine, 2, 10, 20)
            .withBlock(GTMaterials.Calcite, 1, 10, 40)
        )
        vein.surfaceIndicatorGenerator(indicator => indicator
            .surfaceRock(GTMaterials.Olivine)
            .placement('above')
        )
    })

    event.add('kubejs:nickel_small', vein => {
        vein.weight(40)
        vein.clusterSize(40)
        vein.density(0.35)
        vein.layer('all')
        vein.dimensions(END)
        vein.heightRangeUniform(20, 50)
        vein.layeredVeinGenerator(generator => generator
            .buildLayerPattern(pattern => pattern
                .layer(l => l.weight(2).mat(GTMaterials.Garnierite).size(2, 4))
                .layer(l => l.weight(2).mat(GTMaterials.Nickel).size(2, 4))
                .layer(l => l.weight(1).mat(GTMaterials.Cobaltite).size(1, 1))
                .layer(l => l.weight(1).mat(GTMaterials.Pentlandite).size(1, 1))
            )
        )
        vein.surfaceIndicatorGenerator(indicator => indicator
            .surfaceRock(GTMaterials.Nickel)
            .placement('above')
        )
    })

    event.add('kubejs:lapis_small', vein => {
        vein.weight(50)
        vein.clusterSize(45)
        vein.density(0.25)
        vein.layer('all')
        vein.dimensions(END)
        vein.heightRangeUniform(30, 70)
        vein.dikeVeinGenerator(generator => generator
            .withBlock(GTMaterials.Lazurite, 3, 50, 70)
            .withBlock(GTMaterials.Sodalite, 2, 40, 60)
            .withBlock(GTMaterials.Lapis, 2, 30, 40)
            .withBlock(GTMaterials.Calcite, 1, 30, 70)
        )
        vein.surfaceIndicatorGenerator(indicator => indicator
            .surfaceRock(GTMaterials.Lapis)
            .placement('above')
            .density(0.15)
            .radius(3)
        )
    })

    event.add('kubejs:scheelite_small', vein => {
        vein.weight(40)
        vein.clusterSize(40)
        vein.density(0.35)
        vein.layer('all')
        vein.dimensions(END)
        vein.heightRangeUniform(20, 60)
        vein.layeredVeinGenerator(generator => generator
            .buildLayerPattern(pattern => pattern
                .layer(l => l.weight(2).mat(GTMaterials.Scheelite).size(2, 4))
                .layer(l => l.weight(1).mat(GTMaterials.Tungstate).size(1, 1))
                .layer(l => l.weight(1).mat(GTMaterials.Lithium).size(1, 1))
            )
        )
        vein.surfaceIndicatorGenerator(indicator => indicator
            .surfaceRock(GTMaterials.Nickel)
            .placement('above')
        )
    })
})