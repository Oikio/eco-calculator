import { createResource } from './utils'

createResource('steelPlate', { upgrade: 3, from: [{ name: 'steelBar', quantity: 3 }] })
createResource('steelGear', { upgrade: 3, from: [{ name: 'steelBar', quantity: 2 }, { name: 'epoxy', quantity: 1 }] })
