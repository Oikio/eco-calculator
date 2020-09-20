import { createResource } from './utils'

// clay
createResource('clay', { upgrade: 0, price: 0.06, from: [] })
createResource('mortar', { upgrade: 0, price: 0.04, from: [] })
createResource('brick', { upgrade: 2, from: [{ name: 'clay', quantity: 1 }, { name: 'mortar', quantity: 4 }] })

// glass
createResource('sand', { upgrade: 0, price: 0.06, from: [] })
createResource('glass', { upgrade: 2, from: [{ name: 'sand', quantity: 3 }] })
