import { Product } from "./types/types"

export default function sortProducts(products: Product[]): Product[] {
  products.sort((a, b) => {
    const [aBay, aShelf] = a.pick_location.split(" ")
    const [bBay, bShelf] = b.pick_location.split(" ")
    
    if (aBay.length > bBay.length) {
      return 1
    }
    if (aBay.length < bBay.length) {
      return -1
    }
    if (aBay > bBay) {
      return 1
    }
    if (aBay < bBay) {
      return -1
    }
    if (aShelf.length > bShelf.length) {
      return 1
    }
    if (aShelf.length < bShelf.length) {
      return -1
    }
    if (aShelf > bShelf) {
      return 1
    }
    if (aShelf < bShelf) {
      return -1
    }
    return 0
  })
  return products
}