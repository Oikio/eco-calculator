import { createResource } from './utils'


createResource('goldFlakes', { upgrade: 3, from: [{ name: 'goldBar', quantity: 0.5 }] })
createResource('substrat', { upgrade: 3, from: [{ name: 'fiberglass', quantity: 4 }, { name: 'epoxy', quantity: 4 }] })
createResource('basicCircuit', { upgrade: 3, from: [{ name: 'copperWiring', quantity: 6 }, { name: 'goldFlakes', quantity: 10 }, { name: 'substrat', quantity: 2 }] })
