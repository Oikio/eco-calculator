import { createResource } from './utils'

// engineer
createResource('ironWheel', { upgrade: 1, from: [{ name: 'ironBar', quantity: 6 }] })

// iron
createResource('ironPlate', { upgrade: 2, from: [{ name: 'ironBar', quantity: 1 }] })
createResource('ironPiston', { upgrade: 2, from: [{ name: 'ironBar', quantity: 2 }, { name: 'ironPipe', quantity: 2 }] })
createResource('screws', { upgrade: 2, from: [{ name: 'ironBar', quantity: 1 / 4 }] })
createResource('ironGear', { upgrade: 2, from: [{ name: 'ironBar', quantity: 1 }] })
createResource('gearbox', { upgrade: 2, from: [{ name: 'ironBar', quantity: 2 }, { name: 'ironGear', quantity: 4 }] })

// gold
createResource('goldWiring', { upgrade: 2, from: [{ name: 'goldBar', quantity: 4 }] })

// copper
createResource('copperWiring', { upgrade: 2, from: [{ name: 'copperBar', quantity: 4 }] })
createResource('heatSink', { upgrade: 2, from: [{ name: 'copperBar', quantity: 8 }] })

// complex
createResource('valve', { upgrade: 3, from: [{ name: 'steelPlate', quantity: 4 }, { name: 'steelPipe', quantity: 4 }, { name: 'steelGearbox', quantity: 1, constant: true }] })
createResource('combustionEngine', { upgrade: 2, from: [{ name: 'ironPiston', quantity: 6 }, { name: 'gearbox', quantity: 4 }, { name: 'ironPlate', quantity: 12 }, { name: 'rivet', quantity: 8 }] })
createResource('boiler', { upgrade: 2, from: [{ name: 'ironPlate', quantity: 15 }, { name: 'screws', quantity: 10 }] })
createResource('portableSteamEngine', {
  upgrade: 2, from: [
    { name: 'ironPiston', quantity: 8 },
    { name: 'screws', quantity: 18 },
    { name: 'ironPlate', quantity: 12 },
    { name: 'boiler', quantity: 3 },
    { name: 'ironGear', quantity: 12 }]
})
createResource('ironAxle', { upgrade: 2, from: [{ name: 'ironBar', quantity: 2 }] })
createResource('steamTruck', {
  upgrade: 2,
  from: [
    { name: 'ironPlate', quantity: 12 },
    { name: 'ironPipe', quantity: 8 },
    { name: 'screws', quantity: 24 },
    { name: 'leatherHide', quantity: 20 },
    { name: 'lumber', quantity: 30 },
    { name: 'portableSteamEngine', quantity: 1, constant: true },
    { name: 'ironWheel', quantity: 4, constant: true },
    { name: 'ironAxle', quantity: 1, constant: true }
  ]
})
createResource('servo', { upgrade: 2, from: [{ name: 'basicCircuit', quantity: 2 }, { name: 'fiberglass', quantity: 5 }] })
