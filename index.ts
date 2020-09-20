import { config } from './config'
import { getResult } from './src/materials'

const result = getResult(config)(process.argv[2] as any, process.argv[3] as any || 1)

console.log('--------------------------')
Object.keys(result.resources).sort().forEach((name) => {
  console.log(`${name} | quantity: ${result.resources[name].quantity.toFixed(2)}, price: ${result.resources[name].price.toFixed(2)}`)
})
console.log('----')
console.log(`sum: ${result.sum.toFixed(2)}`)
console.log(`with ${config.profit.toFixed(2)} profit: ${(result.sum + result.sum * config.profit).toFixed(2)}`)
console.log('--------------------------')
