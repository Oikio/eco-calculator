import { createResource } from './utils'

createResource('au1', { upgrade: 2, from: [{ name: 'clay', quantity: 12 }, { name: 'brick', quantity: 20 }] })
createResource('au2', { upgrade: 2, from: [{ name: 'sand', quantity: 10 }, { name: 'glass', quantity: 20 }, { name: 'au1', quantity: 1, constant: true }] })
createResource('au3', { upgrade: 2, from: [{ name: 'nails', quantity: 10 }, { name: 'ironBar', quantity: 6 }, { name: 'au2', quantity: 1, constant: true }] })
createResource('au4', { upgrade: 2, from: [{ name: 'ironPlate', quantity: 6 }, { name: 'ironPiston', quantity: 8 }, { name: 'lumber', quantity: 12 }, { name: 'au3', quantity: 1, constant: true }] })

createResource('mu1', { upgrade: 2, from: [{ name: 'steelBar', quantity: 6 }, { name: 'rivet', quantity: 20 }] })
createResource('mu2', { upgrade: 3, from: [{ name: 'steelPlate', quantity: 16 }, { name: 'steelGear', quantity: 10 }, { name: 'mu1', quantity: 1, constant: true }] })
createResource('mu3', { upgrade: 3, from: [{ name: 'basicCircuit', quantity: 8 }, { name: 'plastic', quantity: 15 }, { name: 'epoxy', quantity: 10 }, { name: 'mu2', quantity: 1, constant: true }] })
createResource('mu4', { upgrade: 3, from: [{ name: 'compositeLumber', quantity: 12 }, { name: 'mu3', quantity: 1, constant: true }] })
