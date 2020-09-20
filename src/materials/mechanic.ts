import { createResource } from './utils'

// iron
createResource('ironPlate', { upgrade: 2, from: [{ name: 'ironBar', quantity: 1 }] })
createResource('ironPiston', { upgrade: 2, from: [{ name: 'ironBar', quantity: 2 }, { name: 'ironPipe', quantity: 2 }] })

// copper
createResource('copperWiring', { upgrade: 2, from: [{ name: 'copperBar', quantity: 4 }] })
