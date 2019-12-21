interface DB<T> {
  add(v: T): void;

  get(): T;
}

class D<T> implements DB<T> {
  add(v: T): void {
  }

  get(): T {
    return undefined;
  }
}

interface JSONSerializer {
  serialize(): string;
}

class LocalDB<T extends JSONSerializer> implements DB<T> {
  constructor(private localStorageKey: string) {
  }

  add(v: T) {
    localStorage.setItem(this.localStorageKey, v.serialize());
  }

  get(): T {
    const v = localStorage.getItem(this.localStorageKey);
    return v ? JSON.parse(v) : null;
  }
}

interface Vegetable {
  v: string;
}

interface Meat {
  m: string;
}

interface Cart2<T> {
  getItem(): T extends Vegetable ? Vegetable : Meat
}

const cart1: Cart2<Vegetable> = {
  getItem() {
    return {
      v: ""
    }
  }
};
cart1.getItem();