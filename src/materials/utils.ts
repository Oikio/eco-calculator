import { config } from '../../config'
import { ResName } from './dict'

type Formula = {
  upgrade: number,
  price?: number,
  from: { name: ResName, quantity: number, constant?: boolean }[]
}
const resourceTree: { [key: string]: Formula } = {}


interface Result {
  sum: number
  resources: { [key: string]: { quantity: number, price: number } }
}

export const createResource = (name: ResName, formula: Formula) => {
  if (resourceTree[name]) throw new Error(`already have resource: ${name}`)
  resourceTree[name] = formula
}

const getRes = (name: ResName) => {
  const res = resourceTree[name]
  if (!res) throw new Error(`no res: ${name}`)
  return res
}

const countQuantity = (upgrades: number[], upgrade: number, count: number, constant = false) => constant ? count : [1, ...upgrades][upgrade] * count

const countPrice = (upgrades, basePrice: number, name: ResName): number => {
  const res = getRes(name)
  if (res.price) return res.price * basePrice

  const price = res.from.reduce<number>(
    (sum, nextRec) => {
      return sum + countPrice(upgrades, basePrice, nextRec.name) * countQuantity(upgrades, res.upgrade, nextRec.quantity, nextRec.constant)
    },
    0
  )

  return price
}


const reduceRes =
  (conf: typeof config, name: ResName, count: number, isSubSubRes = false) =>
    (result: Result, nextRec: { name: ResName, quantity: number, constant?: boolean }) => {
      const res = getRes(name)
      const quantityOfSubRes = countQuantity(conf.upgrades, res.upgrade, nextRec.quantity, nextRec.constant) * count
      const priceOfSubRes = countPrice(config.upgrades, config.basePrice, nextRec.name) * quantityOfSubRes
      const resultRes = result.resources[nextRec.name]


      if (!resultRes) {
        result.resources[nextRec.name] = { quantity: quantityOfSubRes, price: priceOfSubRes }
      } else {
        resultRes.quantity += quantityOfSubRes
        resultRes.price += priceOfSubRes
      }

      // counting towards sum
      if (!isSubSubRes) {
        result.sum += priceOfSubRes
      }

      // count all subres
      if (process.argv[4] === '1') {
        const subRes = getRes(nextRec.name)
        if (subRes.from) subRes.from.reduce((prev, next) => {
          return reduceRes(conf, nextRec.name, quantityOfSubRes, true)(prev, next)
        }, result)
      }

      return result
    }

export const getResult = (conf: typeof config) => (name: ResName, count: any) => {
  const res = getRes(name)

  return res.from.reduce<Result>(reduceRes(conf, name, parseInt(count, 10)), { sum: res.price ? countPrice(config.upgrades, config.basePrice, name) * count : 0, resources: {} })
}
