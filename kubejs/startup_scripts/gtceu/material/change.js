GTCEuStartupEvents.materialModification(event => {
    GTMaterials.Glass.addFlags(GTMaterialFlags.GENERATE_ROD, GTMaterialFlags.GENERATE_BOLT_SCREW)
    GTMaterials.Copper.addFlags(GTMaterialFlags.GENERATE_ROD, GTMaterialFlags.GENERATE_BOLT_SCREW)
    GTMaterials.Diamond.addFlags(GTMaterialFlags.GENERATE_ROD, GTMaterialFlags.GENERATE_BOLT_SCREW)
    GTMaterials.Neodymium.addFlags(GTMaterialFlags.GENERATE_RING)
})