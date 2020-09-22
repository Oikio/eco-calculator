import { createResource } from './utils'

// iron
createResource('iron', { upgrade: 0, from: [] })
createResource('crushedIron', { upgrade: 3, from: [{ name: 'iron', quantity: 4, constant: true }] })
createResource('ironConcentrate', { upgrade: 3, price: 8, from: [{ name: 'crushedIron', quantity: 2.5 }] })

// copper
createResource('copper', { upgrade: 0, from: [] })
createResource('crushedCopper', { upgrade: 3, from: [{ name: 'copper', quantity: 4, constant: true }] })
createResource('copperConcentrate', { upgrade: 2, price: 14, from: [{ name: 'crushedCopper', quantity: 3 }] })

// gold
createResource('gold', { upgrade: 0, from: [] })
createResource('crushedGold', { upgrade: 3, from: [{ name: 'gold', quantity: 4, constant: true }] })
createResource('goldConcentrate', { upgrade: 2, price: 15, from: [{ name: 'crushedGold', quantity: 3 }] })


// limestone
createResource('limestone', { upgrade: 0, price: 0.1, from: [] })
createResource('crushedLimestone', { upgrade: 3, from: [{ name: 'limestone', quantity: 4, constant: true }] })

// coal
createResource('coal', { upgrade: 0, price: 1, from: [] })
