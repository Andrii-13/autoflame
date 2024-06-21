import productsData from '../data/productsData.json';

export const selectedWork = work => {
  if (work === 'all') {
    return productsData;
  }
  return productsData.filter(product => product.works === work);
};

export const selectedProduct = (data, product) => {
  if (product === 'all') {
    return data;
  }

  return data.filter(productItem => productItem.name === product);
};


