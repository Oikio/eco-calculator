import { createResource } from './utils'

// Electronic Assembly
createResource('goldFlakes', { upgrade: 3, from: [{ name: 'goldBar', quantity: 0.5 }] })
createResource('electricMotor', { upgrade: 3, from: [{ name: 'basicCircuit', quantity: 4 }, { name: 'copperWiring', quantity: 10 }, { name: 'steelBar', quantity: 8 }] })
createResource('substrat', { upgrade: 3, from: [{ name: 'fiberglass', quantity: 4 }, { name: 'epoxy', quantity: 4 }] })
createResource('basicCircuit', { upgrade: 3, from: [{ name: 'copperWiring', quantity: 6 }, { name: 'goldFlakes', quantity: 10 }, { name: 'substrat', quantity: 2 }] })
createResource('advancedCircuit', { upgrade: 3, from: [{ name: 'copperWiring', quantity: 4 }, { name: 'goldWiring', quantity: 4 }, { name: 'goldFlakes', quantity: 10 }, { name: 'substrat', quantity: 2 }] })
createResource('lightBulb', { upgrade: 3, from: [{ name: 'glass', quantity: 2 }, { name: 'copperWiring', quantity: 6 }] })
createResource('frothFloatationCell', { upgrade: 3, from: [{ name: 'steelPlate', quantity: 15 }, { name: 'steelPipe', quantity: 20 },{ name: 'advancedCircuit', quantity: 10 },{ name: 'electricMotor', quantity: 1, constant:true }] })


// Line
createResource('jawCrusher', { upgrade: 3, from: [{ name: 'steelBar', quantity: 25 }, { name: 'rubber', quantity: 25 }, { name: 'steelGear', quantity: 20 }, { name: 'electricMotor', quantity: 2, constant:true }] })
createResource('steelCeilingLight', { upgrade: 3, from: [{ name: 'steelBar', quantity: 8 }, { name: 'plastic', quantity: 6 }, { name: 'copperWiring', quantity: 5 }, { name: 'lightBulb', quantity: 1, constant:true }] })
createResource('steelFloorLamp', { upgrade: 3, from: [{ name: 'steelBar', quantity: 8 }, { name: 'plastic', quantity: 6 }, { name: 'copperWiring', quantity: 5 }, { name: 'lightBulb', quantity: 1, constant:true }] })
createResource('steelTableLight', { upgrade: 3, from: [{ name: 'steelBar', quantity: 8 }, { name: 'plastic', quantity: 6 }, { name: 'copperWiring', quantity: 5 }, { name: 'lightBulb', quantity: 1, constant:true }] })
createResource('windTurbine', { upgrade: 3, from: [{ name: 'steelBar', quantity: 8 }, { name: 'gearbox', quantity: 4 },{ name: 'advancedCircuit', quantity: 4 }] })

// Machinist table
createResource('transmissionPole', { upgrade: 3, from: [{ name: 'steelBar', quantity: 8 }, { name: 'copperWiring', quantity: 14 }, { name: 'lumber', quantity: 10 }] })