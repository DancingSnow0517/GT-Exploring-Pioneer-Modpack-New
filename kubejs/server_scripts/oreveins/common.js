// priority 80
const OVERWORLD = 'minecraft:overworld'

const AETHER = 'aether:the_aether'
const TWILIGHT_FOREST = "twilightforest:twilight_forest"

const MOON = 'ad_astra:moon'
const VENUS = 'ad_astra:venus'
const MARS = 'ad_astra:mars'
const MERCURY = 'ad_astra:mercury'
const GLACION = 'ad_astra:glacio'

const DEIMOS = 'kubejs:deimos'
const CERES = 'kubejs:ceres'
const GANYMEDE = 'kubejs:ganymede'
const IO = 'kubejs:io'
const ROSE_128b = 'kubejs:rose_128b'

GTCEuServerEvents.oreVeins(event => {
    event.removeAll()
    event.add('kubejs:diamond', vein => {
        vein.weight(50)
        vein.clusterSize(35)
        vein.density(0.25)
        vein.layer('all')
        vein.dimensions(OVERWORLD, TWILIGHT_FOREST, GANYMEDE, MERCURY)
        vein.heightRangeUniform(-60, 10)
        vein.layeredVeinGenerator(generator => generator
            .buildLayerPattern(pattern => pattern
                .layer(l => l.weight(3).mat(GTMaterials.Graphite).size(2, 4))
                .layer(l => l.weight(2).mat(GTMaterials.Coal).size(1, 1))
                .layer(l => l.weight(1).mat(GTMaterials.Diamond).size(1, 1))
            )
        )
        vein.surfaceIndicatorGenerator(indicator => indicator
            .surfaceRock(GTMaterials.Diamond)
            .placement('above')
            .density(0.1)
            .radius(2)
        )
    })
    event.add('kubejs:lapis', vein => {
        vein.weight(50)
        vein.clusterSize(45)
        vein.density(0.25)
        vein.layer('all')
        vein.dimensions(OVERWORLD, TWILIGHT_FOREST, DEIMOS, CERES)
        vein.heightRangeUniform(-20, 50)
        vein.dikeVeinGenerator(generator => generator
            .withBlock(GTMaterials.Lazurite, 3, 20, 50)
            .withBlock(GTMaterials.Sodalite, 2, -5, 40)
            .withBlock(GTMaterials.Lapis, 2, -20, 20)
            .withBlock(GTMaterials.Calcite, 1, -20, 50)
        )
        vein.surfaceIndicatorGenerator(indicator => indicator
            .surfaceRock(GTMaterials.Lapis)
            .placement('above')
            .density(0.15)
            .radius(3)
        )
    })
    event.add('kubejs:iron', vein => {
        vein.weight(120)
        vein.clusterSize(50)
        vein.density(1)
        vein.layer('all')
        vein.dimensions(OVERWORLD, TWILIGHT_FOREST, MARS, CERES, GANYMEDE, MERCURY)
        vein.heightRangeUniform(-40, 60)
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
    event.add('kubejs:vermiculite', vein => {
        vein.weight(80)
        vein.clusterSize(35)
        vein.density(0.75)
        vein.layer('all')
        vein.dimensions(OVERWORLD)
        vein.heightRangeUniform(80, 200)
        vein.dikeVeinGenerator(generator => generator
            .withBlock(GTMaterials.Chalcocite, 3, 80, 200)
            .withBlock(GTMaterials.get('vermiculite'), 2, 80, 200)
            .withBlock(GTMaterials.Cassiterite, 2, 80, 200)
            .withBlock(GTMaterials.Alunite, 1, 80, 200)
        )
        vein.surfaceIndicatorGenerator(indicator => indicator
            .surfaceRock(GTMaterials.get('vermiculite'))
            .placement("above")
        )
    })
    event.add('kubejs:oil_sand', vein => {
        vein.weight(40)
        vein.clusterSize(40)
        vein.density(0.6)
        vein.layer('all')
        vein.dimensions(OVERWORLD)
        vein.heightRangeUniform(20, 80)
        vein.dikeVeinGenerator(generator => generator
            .withBlock(GTMaterials.Oilsands, 1, 20, 80)
        )
        vein.surfaceIndicatorGenerator(indicator => indicator
            .surfaceRock(GTMaterials.Oilsands)
            .placement("above")
        )
    })
    event.add('kubejs:coal', vein => {
        vein.weight(80)
        vein.clusterSize(60)
        vein.density(1.3)
        vein.layer('all')
        vein.dimensions(OVERWORLD, TWILIGHT_FOREST)
        vein.heightRangeUniform(-20, 80)
        vein.veinedVeinGenerator(generator => generator
            .oreBlock(GTMaterials.Coal, 3)
            .rareBlock(GTMaterials.get('lignite'), 1)
            .rareBlockChance(0.2)
            .veininessThreshold(0.1)
            .maxRichnessThreshold(0.175)
            .minRichness(0.4)
            .maxRichness(0.7)
            .edgeRoundoffBegin(3)
            .maxEdgeRoundoff(0.1)
        )
        vein.surfaceIndicatorGenerator(indicator => indicator
            .surfaceRock(GTMaterials.Coal)
            .placement("above")
        )
    })
    event.add('kubejs:manganese', vein => {
        vein.weight(20)
        vein.clusterSize(40)
        vein.density(0.8)
        vein.layer('all')
        vein.dimensions(OVERWORLD, CERES, IO)
        vein.heightRangeUniform(-40, -10)
        vein.dikeVeinGenerator(generator => generator
            .withBlock(GTMaterials.Grossular, 2, -20, -10)
            .withBlock(GTMaterials.Spessartine, 2, -30, -10)
            .withBlock(GTMaterials.Pyrolusite, 2, -40, -20)
            .withBlock(GTMaterials.Tantalite, 1, -40, -10)
        )
        vein.surfaceIndicatorGenerator(indicator => indicator
            .surfaceRock(GTMaterials.Grossular)
            .placement("above")
        )
    })
    event.add('kubejs:redstone', vein => {
        vein.weight(60)
        vein.clusterSize(30)
        vein.density(0.25)
        vein.layer('all')
        vein.dimensions(OVERWORLD, MARS, GANYMEDE, MERCURY, VENUS)
        vein.heightRangeUniform(-60, -10)
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
    event.add('kubejs:mica', vein => {
        vein.weight(20)
        vein.clusterSize(25)
        vein.density(0.25)
        vein.layer('all')
        vein.dimensions(OVERWORLD)
        vein.heightRangeUniform(-40, 10)
        vein.layeredVeinGenerator(generator => generator
            .buildLayerPattern(patten => patten
                .layer(l => l.weight(2).mat(GTMaterials.Kyanite).size(2, 4))
                .layer(l => l.weight(2).mat(GTMaterials.Mica).size(1, 2))
                .layer(l => l.weight(1).mat(GTMaterials.Cassiterite).size(1, 1))
                .layer(l => l.weight(1).mat(GTMaterials.Pollucite).size(1, 1))
            )
        )
        vein.surfaceIndicatorGenerator(indicator => indicator
            .surfaceRock(GTMaterials.Mica)
            .placement("above")
        )
    })
    event.add('kubejs:copper', vein => {
        vein.weight(80)
        vein.clusterSize(50)
        vein.density(1)
        vein.layer('all')
        vein.dimensions(OVERWORLD, MOON, CERES)
        vein.heightRangeUniform(-60, 70)
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
    event.add('kubejs:talc', vein => {
        vein.weight(40)
        vein.clusterSize(35)
        vein.density(1)
        vein.layer('all')
        vein.dimensions(OVERWORLD, TWILIGHT_FOREST, CERES)
        vein.heightRangeUniform(10, 60)
        vein.dikeVeinGenerator(generator => generator
            .withBlock(GTMaterials.Soapstone, 2, 40, 60)
            .withBlock(GTMaterials.Talc, 2, 25, 50)
            .withBlock(GTMaterials.GlauconiteSand, 2, 10, 35)
            .withBlock(GTMaterials.Pentlandite, 1, 10, 60)
        )
        vein.surfaceIndicatorGenerator(indicator => indicator
            .surfaceRock(GTMaterials.Talc)
            .placement("above")
        )
    })
    event.add('kubejs:gold', vein => {
        vein.weight(160)
        vein.clusterSize(40)
        vein.density(0.9)
        vein.layer('all')
        vein.dimensions(OVERWORLD, TWILIGHT_FOREST, MARS)
        vein.heightRangeUniform(-30, 70)
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
    event.add('kubejs:zeolite', vein => {
        vein.weight(60)
        vein.clusterSize(30)
        vein.density(0.4)
        vein.layer('all')
        vein.dimensions(OVERWORLD)
        vein.heightRangeUniform(40, 70)
        vein.layeredVeinGenerator(generator => generator
            .buildLayerPattern(patten => patten
                .layer(l => l.weight(1).mat(GTMaterials.Zeolite).size(2, 4))
                .layer(l => l.weight(1).mat(GTMaterials.FullersEarth).size(2, 4))
                .layer(l => l.weight(1).mat(GTMaterials.GlauconiteSand).size(1, 1))
            )
        )
        vein.surfaceIndicatorGenerator(indicator => indicator
            .surfaceRock(GTMaterials.Zeolite)
            .placement("above")
        )
    })
    event.add('kubejs:lignite', vein => {
        vein.weight(160)
        vein.clusterSize(50)
        vein.density(0.6)
        vein.layer('all')
        vein.dimensions(OVERWORLD)
        vein.heightRangeUniform(80, 140)
        vein.veinedVeinGenerator(generator => generator
            .oreBlock(GTMaterials.get('lignite'), 3)
            .rareBlock(GTMaterials.Coal, 1)
            .rareBlockChance(0.1)
            .veininessThreshold(0.1)
            .maxRichnessThreshold(0.175)
            .minRichness(0.4)
            .maxRichness(0.7)
            .edgeRoundoffBegin(3)
            .maxEdgeRoundoff(0.1)
        )
        vein.surfaceIndicatorGenerator(indicator => indicator
            .surfaceRock(GTMaterials.get('lignite'))
            .placement("above")
        )
    })
    event.add('kubejs:apatite', vein => {
        vein.weight(60)
        vein.clusterSize(25)
        vein.density(0.3)
        vein.layer('all')
        vein.dimensions(OVERWORLD, TWILIGHT_FOREST)
        vein.heightRangeUniform(-10, 60)
        vein.layeredVeinGenerator(generator => generator
            .buildLayerPattern(patten => patten
                .layer(l => l.weight(2).mat(GTMaterials.Apatite).size(2, 4))
                .layer(l => l.weight(1).mat(GTMaterials.TricalciumPhosphate).size(2, 4))
                .layer(l => l.weight(1).mat(GTMaterials.Pyrochlore).size(1, 1))
            )
        )
        vein.surfaceIndicatorGenerator(indicator => indicator
            .surfaceRock(GTMaterials.Apatite)
            .placement("above")
        )
    })
    event.add('kubejs:basaltic_mineral_sand', vein => {
        vein.weight(80)
        vein.clusterSize(30)
        vein.density(0.3)
        vein.layer('all')
        vein.dimensions(OVERWORLD)
        vein.heightRangeUniform(30, 60)
        vein.layeredVeinGenerator(generator => generator
            .buildLayerPattern(patten => patten
                .layer(l => l.weight(2).mat(GTMaterials.BasalticMineralSand).size(2, 4))
                .layer(l => l.weight(2).mat(GTMaterials.GraniticMineralSand).size(2, 4))
                .layer(l => l.weight(1).mat(GTMaterials.FullersEarth).size(1, 2))
                .layer(l => l.weight(1).mat(GTMaterials.Gypsum).size(1, 1))
            )
        )
        vein.surfaceIndicatorGenerator(indicator => indicator
            .surfaceRock(GTMaterials.BasalticMineralSand)
            .placement("above")
        )
    })
    event.add('kubejs:magnetite', vein => {
        vein.weight(160)
        vein.clusterSize(40)
        vein.density(0.9)
        vein.layer('all')
        vein.dimensions(OVERWORLD, TWILIGHT_FOREST, MARS)
        vein.heightRangeUniform(50, 180)
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
    event.add('kubejs:garnet_sand', vein => {
        vein.weight(80)
        vein.clusterSize(30)
        vein.density(0.3)
        vein.layer('all')
        vein.dimensions(OVERWORLD)
        vein.heightRangeUniform(30, 60)
        vein.layeredVeinGenerator(generator => generator
            .buildLayerPattern(patten => patten
                .layer(l => l.weight(2).mat(GTMaterials.GarnetSand).size(2, 4))
                .layer(l => l.weight(2).mat(GTMaterials.Cassiterite).size(2, 4))
                .layer(l => l.weight(1).mat(GTMaterials.Asbestos).size(1, 2))
                .layer(l => l.weight(1).mat(GTMaterials.Diatomite).size(1, 1))
            )
        )
        vein.surfaceIndicatorGenerator(indicator => indicator
            .surfaceRock(GTMaterials.GarnetSand)
            .placement("above")
        )
    })
    event.add('kubejs:salt', vein => {
        vein.weight(50)
        vein.clusterSize(30)
        vein.density(0.4)
        vein.layer('all')
        vein.dimensions(OVERWORLD, TWILIGHT_FOREST, MARS)
        vein.heightRangeUniform(40, 70)
        vein.layeredVeinGenerator(generator => generator
            .buildLayerPattern(patten => patten
                .layer(l => l.weight(2).mat(GTMaterials.Salt).size(2, 4))
                .layer(l => l.weight(2).mat(GTMaterials.RockSalt).size(2, 4))
                .layer(l => l.weight(1).mat(GTMaterials.Lepidolite).size(1, 2))
                .layer(l => l.weight(1).mat(GTMaterials.Spodumene).size(1, 1))
            )
        )
        vein.surfaceIndicatorGenerator(indicator => indicator
            .surfaceRock(GTMaterials.Salt)
            .placement("above")
        )
    })
    event.add('kubejs:cassiterite', vein => {
        vein.weight(50)
        vein.clusterSize(30)
        vein.density(0.4)
        vein.layer('all')
        vein.dimensions(OVERWORLD, TWILIGHT_FOREST, MOON, IO, VENUS)
        vein.heightRangeUniform(80, 220)
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
    event.add('kubejs:olivine', vein => {
        vein.weight(60)
        vein.clusterSize(45)
        vein.density(0.45)
        vein.layer('all')
        vein.dimensions(TWILIGHT_FOREST, CERES)
        vein.heightRangeUniform(-40, 20)
        vein.dikeVeinGenerator(generator => generator
            .withBlock(GTMaterials.Bentonite, 2, 0, 20)
            .withBlock(GTMaterials.Magnesite, 2, -20, 10)
            .withBlock(GTMaterials.Olivine, 2, -40, -10)
            .withBlock(GTMaterials.Calcite, 1, -40, 20)
        )
        vein.surfaceIndicatorGenerator(indicator => indicator
            .surfaceRock(GTMaterials.Olivine)
            .placement('above')
        )
    })
    event.add('kubejs:molybdenum', vein => {
        vein.weight(10)
        vein.clusterSize(30)
        vein.density(0.5)
        vein.layer('all')
        vein.dimensions(TWILIGHT_FOREST, MOON, CERES, MERCURY)
        vein.heightRangeUniform(-30, 40)
        vein.dikeVeinGenerator(generator => generator
            .withBlock(GTMaterials.Wulfenite, 2, 10, 40)
            .withBlock(GTMaterials.Molybdenite, 2, -10, 30)
            .withBlock(GTMaterials.Molybdenum, 2, -30, 0)
            .withBlock(GTMaterials.Powellite, 1, -30, 40)
        )
        vein.surfaceIndicatorGenerator(indicator => indicator
            .surfaceRock(GTMaterials.Molybdenum)
            .placement('above')
        )
    })
    event.add('kubejs:sapphire', vein => {
        vein.weight(60)
        vein.clusterSize(45)
        vein.density(0.45)
        vein.layer('all')
        vein.dimensions(TWILIGHT_FOREST)
        vein.heightRangeUniform(-40, 20)
        vein.dikeVeinGenerator(generator => generator
            .withBlock(GTMaterials.Almandine, 2, 0, 20)
            .withBlock(GTMaterials.Pyrope, 2, -20, 10)
            .withBlock(GTMaterials.Sapphire, 2, -40, -10)
            .withBlock(GTMaterials.GreenSapphire, 1, -40, 20)
        )
        vein.surfaceIndicatorGenerator(indicator => indicator
            .surfaceRock(GTMaterials.Sapphire)
            .placement('above')
        )
    })
    event.add('kubejs:lead', vein => {
        vein.weight(40)
        vein.clusterSize(40)
        vein.density(0.35)
        vein.layer('all')
        vein.dimensions(TWILIGHT_FOREST)
        vein.heightRangeUniform(-30, 20)
        vein.layeredVeinGenerator(generator => generator
            .buildLayerPattern(pattern => pattern
                .layer(l => l.weight(3).mat(GTMaterials.Galena).size(2, 4))
                .layer(l => l.weight(2).mat(GTMaterials.Silver).size(1, 2))
                .layer(l => l.weight(2).mat(GTMaterials.Lead).size(1, 1))
            )
        )
        vein.surfaceIndicatorGenerator(indicator => indicator
            .surfaceRock(GTMaterials.Lead)
            .placement('above')
        )
    })
    event.add('kubejs:nickel', vein => {
        vein.weight(40)
        vein.clusterSize(40)
        vein.density(0.35)
        vein.layer('all')
        vein.dimensions(TWILIGHT_FOREST)
        vein.heightRangeUniform(-30, 20)
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

    event.add('kubejs:quartzite', vein => {
        vein.weight(20)
        vein.clusterSize(40)
        vein.density(0.35)
        vein.layer('all')
        vein.dimensions(MOON, MARS, IO, VENUS)
        vein.heightRangeUniform(-30, 60)
        vein.layeredVeinGenerator(generator => generator
            .buildLayerPattern(pattern => pattern
                .layer(l => l.weight(2).mat(GTMaterials.Quartzite).size(2, 4))
                .layer(l => l.weight(2).mat(GTMaterials.Barite).size(2, 4))
                .layer(l => l.weight(1).mat(GTMaterials.CertusQuartz).size(1, 1))
                .layer(l => l.weight(1).mat(GTMaterials.CertusQuartz).size(1, 1))
            )
        )
        vein.surfaceIndicatorGenerator(indicator => indicator
            .surfaceRock(GTMaterials.Quartzite)
            .placement('above')
        )
    })

    event.add('kubejs:monazite', vein => {
        vein.weight(20)
        vein.clusterSize(40)
        vein.density(0.35)
        vein.layer('all')
        vein.dimensions(MOON, DEIMOS, CERES, IO, VENUS)
        vein.heightRangeUniform(-30, 60)
        vein.layeredVeinGenerator(generator => generator
            .buildLayerPattern(pattern => pattern
                .layer(l => l.weight(2).mat(GTMaterials.Bastnasite).size(2, 4))
                .layer(l => l.weight(2).mat(GTMaterials.Bastnasite).size(2, 4))
                .layer(l => l.weight(1).mat(GTMaterials.Monazite).size(1, 1))
                .layer(l => l.weight(1).mat(GTMaterials.Neodymium).size(1, 1))
            )
        )
        vein.surfaceIndicatorGenerator(indicator => indicator
            .surfaceRock(GTMaterials.Monazite)
            .placement('above')
        )
    })

    event.add('kubejs:ilmenite', vein => {
        vein.weight(16)
        vein.clusterSize(35)
        vein.density(0.4)
        vein.layer('all')
        vein.dimensions(MOON, CERES, MERCURY)
        vein.heightRangeUniform(-10, 60)
        vein.layeredVeinGenerator(generator => generator
            .buildLayerPattern(patten => patten
                .layer(l => l.weight(2).mat(GTMaterials.Ilmenite).size(2, 4))
                .layer(l => l.weight(1).mat(GTMaterials.Chromite).size(1, 1))
            )
        )
        vein.surfaceIndicatorGenerator(indicator => indicator
            .surfaceRock(GTMaterials.Ilmenite)
            .placement("above")
        )
    })

    event.add('kubejs:bauxite', vein => {
        vein.weight(16)
        vein.clusterSize(35)
        vein.density(0.4)
        vein.layer('all')
        vein.dimensions(MOON, CERES, MERCURY)
        vein.heightRangeUniform(-40, 60)
        vein.layeredVeinGenerator(generator => generator
            .buildLayerPattern(patten => patten
                .layer(l => l.weight(2).mat(GTMaterials.Bauxite).size(2, 4))
                .layer(l => l.weight(2).mat(GTMaterials.Ilmenite).size(1, 1))
                .layer(l => l.weight(1).mat(GTMaterials.Aluminium).size(1, 1))
            )
        )
        vein.surfaceIndicatorGenerator(indicator => indicator
            .surfaceRock(GTMaterials.Bauxite)
            .placement("above")
        )
    })

    event.add('kubejs:galena', vein => {
        vein.weight(40)
        vein.clusterSize(40)
        vein.density(0.35)
        vein.layer('all')
        vein.dimensions(MOON, MARS, VENUS)
        vein.heightRangeUniform(-40, 10)
        vein.layeredVeinGenerator(generator => generator
            .buildLayerPattern(pattern => pattern
                .layer(l => l.weight(3).mat(GTMaterials.Galena).size(2, 4))
                .layer(l => l.weight(2).mat(GTMaterials.Silver).size(1, 2))
                .layer(l => l.weight(2).mat(GTMaterials.Lead).size(1, 1))
            )
        )
        vein.surfaceIndicatorGenerator(indicator => indicator
            .surfaceRock(GTMaterials.Galena)
            .placement('above')
        )
    })
})