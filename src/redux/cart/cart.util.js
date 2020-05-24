export const addItemsToCart = (cart, itemToAdd) => {
  const existingItem = cart.find(item => item.id === itemToAdd.id);

  if (existingItem) {
    return cart.map(item =>
      item.id === itemToAdd.id ? { ...item, quantity: item.quantity + 1 } : item
    );
  }
  return [...cart, { ...itemToAdd, quantity: 1 }];
};

export const subItemsFromCart = (cart, itemToSub) => {
  const existingItem = cart.find(item => item.id === itemToSub.id);

  if (existingItem.quantity === 1) {
    return [...cart.filter(item => item.id !== itemToSub.id)];
  }
  return cart.map(item =>
    item.id === itemToSub.id ? { ...item, quantity: item.quantity - 1 } : item
  );
};

export const removeFromCart = (cart, itemToRemove) => {
  return [...cart.filter(item => item.id !== itemToRemove.id)];
};
