const getProducts = () => new Promise((resolve,) => {
  setTimeout(() => {
    return resolve({
      status: 200, data: [
        {id: 123, name: 'Cresent'},
        {id: 124, name: 'Monark'},
        {id: 125, name: 'Super73'},
        {id: 126, name: 'Stålhästen'},
        {id: 127, name: 'Yamaha'},
        {id: 128, name: 'Scott'},
        {id: 129, name: 'Cargobike'}
      ]
    });
  }, 300);
});

const getColors = () => new Promise((resolve,) => {
  setTimeout(() => {
    return resolve({data: [
        {color: "#000000", name: "black", ids: [123, 124, 125, 126, 127, 128, 129]},
        {color: "#971c1c", name: "red", ids: [123, 124]},
        {color: "#198C19", name: "green", ids: [127, 128, 129]},
        {color: "#663399", name: "rebeccapurple", ids: [126, 128, 125]},
        {color: "#c93c03", name: "orange", ids: [123, 125, 129]},
        {color: "#144c86", name: "blue", ids: [124]},
      ]
    });
  }, 300);
});

export default class Store {

  static state = {
    products: [],
    colors: []
  };

  static async findAllAsync() {
    const {products} = this.state;
    let newState = {};
    if (!products.length) {

      const [colors, products] = await Promise.all([
        getColors(),
        getProducts()
      ]);
      if (products.status === 200) {
        newState = {
          products: products.data,
          colors: colors.data
        };
        this.state = newState;
      }
    return newState;
    }
    return this.state;
  }

  static findById(id) {
    return this.state.products.find(item => item.id.toString() === id);
  }

  static getColors(id) {
    return this.state.colors;
  }
}