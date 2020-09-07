export const productOfAllOtherNumbers = (arr) => {
  const products = Array(arr.length).fill(0);

  let productBefore = 1;

  for (let i = 0; i < arr.length; i++) {
    products[i] = productBefore;
    productBefore *= arr[i];
  }

  let productAfter = 1;

  for (let j = arr.length - 1; j > -1; j--) {
    products[j] *= productAfter;
    productAfter *= arr[j];
  }

  return products;
};
