import { createResource } from './utils'

createResource('wood', { upgrade: 1, price: 0.5, from: [] })
createResource('plantFibers', { upgrade: 1, price: 0.1, from: [] })
createResource('hewnLog', { upgrade: 1, price: 0.9, from: [] })
createResource('hewnChair', { upgrade: 1, from: [{ name: 'plantFibers', quantity: 12 }, { name: 'hewnLog', quantity: 12 }, { name: 'board', quantity: 12 }] })
createResource('board', { upgrade: 1, from: [{ name: 'hewnLog', quantity: 1 }] })

createResource('butcheryTable', { upgrade: 1, from: [{ name: 'board', quantity: 20 }, { name: 'wood', quantity: 15 }] })
createResource('strawBed', { upgrade: 1, from: [{ name: 'plantFibers', quantity: 40 }, { name: 'board', quantity: 15 }, { name: 'board', quantity: 15 }] })
createResource('smallWoodSign', { upgrade: 1, from: [{ name: 'board', quantity: 2 }, { name: 'hewnLog', quantity: 4 }, { name: 'wood', quantity: 5 }] })
createResource('hewnBench', { upgrade: 1, from: [{ name: 'hewnLog', quantity: 18 }, { name: 'board', quantity: 6 }] })
createResource('hewnTable', { upgrade: 1, from: [{ name: 'hewnLog', quantity: 15 }, { name: 'board', quantity: 6 }] })
createResource('woodenLatrine', { upgrade: 1, from: [{ name: 'hewnLog', quantity: 5 }, { name: 'board', quantity: 20 }] })

createResource('lumber', { upgrade: 1, price: 3.5, from: [] })
createResource('compositeLumber', { upgrade: 2, price: 7, from: [] })
