import { createResource } from './utils'

// clay
createResource('clay', { upgrade: 0, price: 0.3, from: [] })
createResource('mortar', { upgrade: 0, price: 0.2, from: [] })
createResource('brick', { upgrade: 2, from: [{ name: 'clay', quantity: 1 }, { name: 'mortar', quantity: 4 }] })

// glass
createResource('sand', { upgrade: 0, price: 0.3, from: [] })
createResource('glass', { upgrade: 2, from: [{ name: 'sand', quantity: 3 }] })
createResource('framedGlass', { upgrade: 3, from: [{ name: 'glass', quantity: 6 }, { name: 'steelBar', quantity: 2 }] })

// cement
createResource('cement', { upgrade: 0, price: 2, from: [] })
createResource('reinforcedConcrete', { upgrade: 0, price: 3.9, from: [] })
