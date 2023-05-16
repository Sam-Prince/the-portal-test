import { stringify } from "csv-stringify"
import { Product } from "../types/types"
import fs from "fs"

export default function writeCSV(filename: string, products: Product[]) {
  const writableStream = fs.createWriteStream(filename)
  stringify(products, { header: true }, (error, output) => {
    if (error) {
      throw error
    } else {
      writableStream.write(output)
    }
  })
}