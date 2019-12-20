function add(x: number, y: number) {
  return x + y;
}

const result: number = add(1, 2);

function buildUserInfo(name: string = "-", email: string = "-") {
  return {name, email};
}

const user = buildUserInfo();

const add2: (a: number, b: number) => number = (a: number, b: number) => a + b;

interface Storage {
  a: string
}

interface ColdStorage {
  b: string
}

function store(type: "통조리"): Storage;
function store(type: "아이스크림"): ColdStorage;

function store(type: "통조리" | "아이스크림") {
  if (type === "통조리") {
    return {a: "통조리"};
  } else if (type === "아이스크림") {
    return {b: "아이스크림"};
  } else {
    throw new Error("unsupported type");
  }
}

const s: ColdStorage = store("아이스크림");
s.b;
