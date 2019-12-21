interface User {
  name: String
}

interface Product {
  id: string;
  price: number;
}

class Cart {
  // protected user: User;
  // private readonly store: { [index: string]: Product };

  constructor(public user: User, private store: { [index: string]: Product } = {}) {
    // this.user = user;
    // this.store = {};
  }

  put(id: string, product: Product) {
    this.store[id] = product;
  }

  get(id: string): Product {
    return this.store[id];
  }
}

class PromotionCart extends Cart {
  addPromotion() {
    this.user
  }
}

const cart2 = new PromotionCart({name: 'john'});
cart2.addPromotion();
const cartJohn = new Cart({name: "john"});
const cartJay = new Cart({name: "jay"});

