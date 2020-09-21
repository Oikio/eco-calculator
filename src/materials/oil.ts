import { createResource } from './utils'

createResource('epoxy', { upgrade: 3, price: 5, from: [] })
createResource('plastic', { upgrade: 3, price: 5, from: [] })
createResource('rubber', { upgrade: 3, price: 5, from: [] })
createResource('fiberglass', { upgrade: 3, price: 12, from: [{ name: 'plastic', quantity: 4 }, { name: 'glass', quantity: 3 }] })
