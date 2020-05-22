export const addItemsToCart = (cart, itemToAdd) => {
  const existingItem = cart.find(item => item.id === itemToAdd.id);

  if (existingItem) {
    return cart.map(item =>
      item.id === itemToAdd.id ? { ...item, quantity: item.quantity + 1 } : item
    );
  }
  return [...cart, { ...itemToAdd, quantity: 1 }];
};
