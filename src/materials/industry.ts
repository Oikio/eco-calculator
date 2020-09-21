import { createResource } from './utils'

createResource('steelPlate', { upgrade: 3, from: [{ name: 'steelBar', quantity: 3 }] })
createResource('steelGear', { upgrade: 3, from: [{ name: 'steelBar', quantity: 2 }, { name: 'epoxy', quantity: 1 }] })

createResource('electricMachinistTable', { upgrade: 3, from: [{ name: 'steelBar', quantity: 12 }, { name: 'ironPlate', quantity: 12 }, { name: 'ironGear', quantity: 8 }] })

createResource('rubberWheel', { upgrade: 3, from: [{ name: 'steelBar', quantity: 4 }, { name: 'rubber', quantity: 8 }] })
createResource('radiator', { upgrade: 3, from: [{ name: 'heatSink', quantity: 4 }, { name: 'copperWiring', quantity: 8 }] })
createResource('steelAxle', { upgrade: 3, from: [{ name: 'steelBar', quantity: 4 }, { name: 'epoxy', quantity: 3 }] })
createResource('steelGearbox', { upgrade: 3, from: [{ name: 'steelBar', quantity: 8 }, { name: 'steelGear', quantity: 4 }] })
createResource('advancedComustionEngine', {
  upgrade: 3, from: [
    { name: 'steelPlate', quantity: 16 },
    { name: 'rivet', quantity: 12 },
    { name: 'ironPiston', quantity: 6 },
    { name: 'valve', quantity: 6 },
    { name: 'servo', quantity: 6 },
    { name: 'advancedCircuit', quantity: 6 },
    { name: 'radiator', quantity: 3 },
  ]
})

createResource('truck', {
  upgrade: 3,
  from: [
    { name: 'gearbox', quantity: 4 },
    { name: 'celluloseFiber', quantity: 8 },
    { name: 'steelPlate', quantity: 16 },
    { name: 'combustionEngine', quantity: 1, constant: true },
    { name: 'rubberWheel', quantity: 4, constant: true },
    { name: 'radiator', quantity: 1, constant: true },
    { name: 'steelAxle', quantity: 1, constant: true }
  ]
})

createResource('skidSteer', {
  upgrade: 3,
  from: [
    { name: 'gearbox', quantity: 4 },
    { name: 'celluloseFiber', quantity: 8 },
    { name: 'steelPlate', quantity: 16 },
    { name: 'advancedComustionEngine', quantity: 1, constant: true },
    { name: 'rubberWheel', quantity: 4, constant: true },
    { name: 'radiator', quantity: 2, constant: true },
    { name: 'steelAxle', quantity: 1, constant: true }
  ]
})

createResource('excavator', {
  upgrade: 3,
  from: [
    { name: 'gearbox', quantity: 4 },
    { name: 'celluloseFiber', quantity: 8 },
    { name: 'steelPlate', quantity: 16 },
    { name: 'advancedComustionEngine', quantity: 1, constant: true },
    { name: 'rubberWheel', quantity: 4, constant: true },
    { name: 'radiator', quantity: 2, constant: true },
    { name: 'steelAxle', quantity: 1, constant: true }
  ]
})
