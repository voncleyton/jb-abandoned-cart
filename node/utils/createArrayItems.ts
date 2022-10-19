export const createArrayItems = (items: any) => { 

  const products: any = [];
  
  items.map((item: any) => {
    products.push({
      id: item.id,
      product_name: item.name,
      image_url: item.imageUrl,
      price: item.price,
      quantity: item.quantity,
      product_url: item.imageUrl.split('.')[0] + '.myvtex.com' + item.detailUrl
    })
  })


  return products;
}