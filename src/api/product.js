export const getListProduct = () => {
  return new Promise((resolve, reject) => {
    fetch("https://private-4639ce-ecommerce56.apiary-mock.com/home")
      .then(res => res.json())
      .then(response => {
        resolve(response);
      })
      .catch(e => {
        reject(e);
      });
  });
};
