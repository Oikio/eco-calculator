import { createResource } from './utils'

// prime cut chain
createResource('bisonCarcass', { upgrade: 0, price: 10, from: [] })
createResource('rawMeat', { upgrade: 1, from: [{ name: 'bisonCarcass', quantity: 0.1 }] })
createResource('primeCut', { upgrade: 1, from: [{ name: 'rawMeat', quantity: 16 }] })