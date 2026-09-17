const products = [
  { name: "Laptop", price: 1000, inStock: true },
  { name: "Mouse", price: 30, inStock: false },
  { name: "Keyboard", price: 70, inStock: true },
  { name: "Monitor", price: 300, inStock: false },
  { name: "Headphones", price: 120, inStock: true }
];
const onlyStock=products.filter(product=>product.inStock);
const itemOnlt=onlyStock.map((product)=>{
    return `${product.name} - ${product.price}`
    
});
console.log(onlyStock)
console.log(itemOnlt);

// maps:-Changes/transforms every item
// filter:-select or remove items 