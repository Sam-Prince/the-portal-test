import sortProducts from "../src/sortProducts"

test("sortProducts returns correct answer", () => {
  const Products = [
    { product_code: 11081, quantity: 10, pick_location: "A 10" },
    { product_code: 59038, quantity: 7, pick_location: "A 4" },
    { product_code: 27808, quantity: 6, pick_location: "B 2" },
    { product_code: 50952, quantity: 1, pick_location: "AZ 5" },
    { product_code: 62055, quantity: 2, pick_location: "Z 5" },
    { product_code: 50378, quantity: 1, pick_location: "Z 4" },
  ]
  expect(sortProducts(Products)).toEqual([
    { product_code: 59038, quantity: 7, pick_location: "A 4" },
    { product_code: 11081, quantity: 10, pick_location: "A 10" },
    { product_code: 27808, quantity: 6, pick_location: "B 2" },
    { product_code: 50378, quantity: 1, pick_location: "Z 4" },
    { product_code: 62055, quantity: 2, pick_location: "Z 5" },
    { product_code: 50952, quantity: 1, pick_location: "AZ 5" },
  ])
})

test("sortProducts returns correct answer - same bay", () => {
  const Products = [
    { product_code: 11081, quantity: 10, pick_location: "A 10" },
    { product_code: 59038, quantity: 7, pick_location: "A 1" },
    { product_code: 27808, quantity: 6, pick_location: "A 2" },
    { product_code: 50952, quantity: 1, pick_location: "A 5" },
    { product_code: 62055, quantity: 2, pick_location: "A 8" },
    { product_code: 50378, quantity: 1, pick_location: "A 4" },
  ]
  expect(sortProducts(Products)).toEqual([
    { product_code: 59038, quantity: 7, pick_location: "A 1" },
    { product_code: 27808, quantity: 6, pick_location: "A 2" },
    { product_code: 50378, quantity: 1, pick_location: "A 4" },
    { product_code: 50952, quantity: 1, pick_location: "A 5" },
    { product_code: 62055, quantity: 2, pick_location: "A 8" },
    { product_code: 11081, quantity: 10, pick_location: "A 10" },
  ])
})

test("sortProducts returns correct answer - edge case", () => {
  const Products = [
    { product_code: 11081, quantity: 10, pick_location: "A 10" },
    { product_code: 59038, quantity: 7, pick_location: "A 1" },
    { product_code: 27808, quantity: 6, pick_location: "AZ 1" },
    { product_code: 50952, quantity: 1, pick_location: "AZ 10" },
    { product_code: 62055, quantity: 2, pick_location: "ZZ 8" },
    { product_code: 50378, quantity: 1, pick_location: "ZZ 2" },
  ]
  expect(sortProducts(Products)).toEqual([
    { product_code: 59038, quantity: 7, pick_location: "A 1" },
    { product_code: 11081, quantity: 10, pick_location: "A 10" },
    { product_code: 27808, quantity: 6, pick_location: "AZ 1" },
    { product_code: 50952, quantity: 1, pick_location: "AZ 10" },
    { product_code: 50378, quantity: 1, pick_location: "ZZ 2" },
    { product_code: 62055, quantity: 2, pick_location: "ZZ 8" },
  ])
})

