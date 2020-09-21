import { createResource } from './utils'

// iron
createResource('ironBar', { upgrade: 2, from: [{ name: 'ironConcentrate', quantity: 0.5 }] })
createResource('ironPipe', { upgrade: 2, from: [{ name: 'ironBar', quantity: 2 }] })
createResource('nails', { upgrade: 2, from: [{ name: 'ironBar', quantity: 1 / 16 }] })

// copper
createResource('copperBar', { upgrade: 2, from: [{ name: 'copperConcentrate', quantity: 0.5 }] })
createResource('copperPipe', { upgrade: 2, from: [{ name: 'copperBar', quantity: 2 }] })

// gold
createResource('goldBar', { upgrade: 2, from: [{ name: 'goldConcentrate', quantity: 0.5 }] })

// steel
createResource('quicklime', { upgrade: 2, from: [{ name: 'crushedLimestone', quantity: 1 }] })
createResource('steelBar', { upgrade: 2, from: [{ name: 'coal', quantity: 1 }, { name: 'quicklime', quantity: 1 }, { name: 'ironBar', quantity: 2 }] })
createResource('rebar', { upgrade: 2, from: [{ name: 'steelBar', quantity: 2 }] })
createResource('rivet', { upgrade: 2, from: [{ name: 'steelBar', quantity: 1 / 3 }] })
createResource('steelPipe', { upgrade: 2, from: [{ name: 'steelBar', quantity:2 }] })

// instruments
createResource('ironInstrument', { upgrade: 2, from: [{ name: 'board', quantity: 4 }, { name: 'ironBar', quantity: 4 }] })
