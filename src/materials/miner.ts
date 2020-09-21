import { createResource } from './utils'

// iron
createResource('iron', { upgrade: 0, from: [] })
createResource('crushedIron', { upgrade: 1, from: [{ name: 'iron', quantity: 5, constant: true }] })
createResource('ironConcentrate', { upgrade: 2, price: 2.4, from: [{ name: 'crushedIron', quantity: 3 }] })

// copper
createResource('copper', { upgrade: 0, from: [] })
createResource('crushedCopper', { upgrade: 1, from: [{ name: 'copper', quantity: 5, constant: true }] })
createResource('copperConcentrate', { upgrade: 2, price: 2.7, from: [{ name: 'crushedCopper', quantity: 3 }] })

// gold
createResource('gold', { upgrade: 0, from: [] })
createResource('crushedGold', { upgrade: 1, from: [{ name: 'gold', quantity: 5, constant: true }] })
createResource('goldConcentrate', { upgrade: 2, price: 3, from: [{ name: 'crushedGold', quantity: 3 }] })


// limestone
createResource('limestone', { upgrade: 0, price: 0.02, from: [] })
createResource('crushedLimestone', { upgrade: 1, from: [{ name: 'limestone', quantity: 5, constant: true }] })

// coal
createResource('coal', { upgrade: 0, price: 0.2, from: [] })
