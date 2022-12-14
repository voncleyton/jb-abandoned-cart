interface CartUrlItems {
  items: string[];
}

export const createCartUrl = (objectItems: CartUrlItems) => { 
  let urlCart = 'add?';
  const finalUrl = objectItems.items.length === 1 ? '&sc=1' : 'sc=1';

  objectItems.items.map((item: any) => {
    if(objectItems.items.length === 1){
      return urlCart += `sku=${item.id}&qty=${item.quantity}&seller=${item.seller}`;
    } else {
      return urlCart += `sku=${item.id}&qty=${item.quantity}&seller=${item.seller}&`;
    }
  });

  return urlCart + finalUrl;
}