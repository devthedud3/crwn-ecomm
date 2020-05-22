export const addItemsToCart = (cart, itemToAdd) => {
  const existingItem = cart.find(item => item.id === itemToAdd.id);

  if (existingItem) {
    return cart.map(item =>
      item.id === itemToAdd.id
        ? { ...item, quantitiy: item.quantitiy + 1 }
        : item
    );
  }
  return [...cart, { ...itemToAdd, quantitiy: 1 }];
};
