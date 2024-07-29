export const getImgPructCard = () => {
  // Створіть контекст Webpack для імпорту зображень з обома розширеннями
  const imagesPngContext = require.context(
    '../data/images/productsImg',
    false,
    /\.png$/
  );

  const imagesJpgContext = require.context(
    '../data/images/productsImg',
    false,
    /\.jpg$/
  );

  const images = {};

  imagesPngContext.keys().forEach(key => {
    const imageName = key.replace('./', '').replace('.png', '');
    images[imageName] = imagesPngContext(key);
  });

  imagesJpgContext.keys().forEach(key => {
    const imageName = key.replace('./', '').replace('.jpg', '');
    // Якщо зображення з таким ім'ям вже є, не перезаписуйте його
    if (!images[imageName]) {
      images[imageName] = imagesJpgContext(key);
    }
  });

  return images;
};
