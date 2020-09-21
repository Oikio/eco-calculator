import { createResource } from './utils'

// Electronic Assembly
createResource('goldFlakes', { upgrade: 3, from: [{ name: 'goldBar', quantity: 0.5 }] })
createResource('electricMotor', { upgrade: 3, from: [{ name: 'basicCircuit', quantity: 4 }, { name: 'copperWiring', quantity: 10 }, { name: 'steelBar', quantity: 8 }] })
createResource('substrat', { upgrade: 3, from: [{ name: 'fiberglass', quantity: 4 }, { name: 'epoxy', quantity: 4 }] })
createResource('basicCircuit', { upgrade: 3, from: [{ name: 'copperWiring', quantity: 6 }, { name: 'goldFlakes', quantity: 10 }, { name: 'substrat', quantity: 2 }] })
createResource('advancedCircuit', { upgrade: 3, from: [{ name: 'copperWiring', quantity: 4 }, { name: 'goldWiring', quantity: 4 }, { name: 'goldFlakes', quantity: 10 }, { name: 'substrat', quantity: 2 }] })
createResource('lightBulb', { upgrade: 3, from: [{ name: 'glass', quantity: 2 }, { name: 'copperWiring', quantity: 6 }] })


// Line
// createResource('jawCrusher', { upgrade: 3, from: [{ name: 'glass', quantity: 2 }, { name: 'copperWiring', quantity: 6 }] })
// createResource('steelCeilingLight', { upgrade: 3, from: [{ name: 'glass', quantity: 2 }, { name: 'copperWiring', quantity: 6 }] })
// createResource('steelFloorLamp', { upgrade: 3, from: [{ name: 'glass', quantity: 2 }, { name: 'copperWiring', quantity: 6 }] })
// createResource('steelTableLight', { upgrade: 3, from: [{ name: 'glass', quantity: 2 }, { name: 'copperWiring', quantity: 6 }] })
//createResource('windTurbine', { upgrade: 3, from: [{ name: 'steelBar', quantity: 8 }, { name: 'gearboxes', quantity: 4 },{ name: 'advancedCircuit', quantity: 4 }] })