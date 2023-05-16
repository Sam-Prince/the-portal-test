import fs from "fs"
import { parse } from "csv-parse"
import { Product } from "./types/types"
import sortProducts from "./sortProducts"
import writeCSV from "./util/writeCSV"

const READ_FILE = "hb_test.csv"
const WRITE_FILE = "result.csv"
const productList: Product[] = []

fs.createReadStream(READ_FILE)
  .pipe(parse({ delimiter: ",", from_line: 2 }))
  .on("data", (row) => {
    productList.push({product_code: row[0], quantity: row[1], pick_location: row[2]})
  })
  .on("error", (error) => {
    throw error
  })
  .on("end", () => {
    sortProducts(productList)
    writeCSV(WRITE_FILE, productList)
    console.log("sort complete and writen to results.csv")
  })

