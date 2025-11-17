function formatValue<T>(value: T): string | number | boolean | undefined {
  if (typeof value === "string") return value.toUpperCase();
  else if (typeof value === "number") return value * 10;
  else if (typeof value === "boolean") return !value;
}



function getLength<T>(value: T): number | string {
  if (typeof value === "string" || Array.isArray(value)) {
    return value.length;
  } else {
    return "Function either string or array";
  }
}


class Person {
  constructor(public name: string, public age: number) {
    this.name = name;
    this.age = age;
  }
  getDetails(): void {
    console.log(`'Name: ${this.name}, Age: ${this.age}'`);
  }
}



type Book = {
  title: string;
  rating: number;
};

function isValidRating(rating: number): boolean {
  if (rating >= 0 && rating <= 5) return true;
  else return false;
}

function filterByRating(value: Book[]): Book[] {
  return value
    .filter((item) => item.rating >= 4 && isValidRating(item.rating))
    .map((item) => ({
      ...item,
      rating: Number(item.rating.toFixed(1)),
    }));
}


type User = {
  id: number;
  name: string;
  email: string;
  isActive: boolean;
};

function filterActiveUsers(value: User[]): User[] {
  return value.filter((value) => value.isActive === true);
}



interface Book {
  title: string;
  author: string;
  publishedYear: number;
  isAvailable: boolean;
}

function printBookDetails(value: Book): void {
  const { title, author, publishedYear, isAvailable } = value;
  console.log(
    `Title: ${title}, Author: ${author}, Published: ${publishedYear},  Available: ${
      isAvailable ? "Yes" : "No"
    }`
  );
}


type GenericArray<T> = Array<T>; 

function getUniqueValues(
  value1: (number | string)[],
  value2: (number | string)[]
): (number | string)[] {
  const ANS: GenericArray<number | string> = [];
  for (let i = 0; i < value1.length; ++i) {
    let flag: boolean = false;
    for (let j = 0; j < ANS.length; ++j) {
      if (ANS[j] === value1[i]) {
        flag = true;
        break;
      }
    }
    if (!flag) {
      ANS.push(value1[i] as number | string);
    }
  }

  for (let i = 0; i < value2.length; ++i) {
    let flag: boolean = false;
    for (let j = 0; j < ANS.length; ++j) {
      if (ANS[j] === value2[i]) {
        flag = true;
        break;
      }
    }
    if (!flag) {
      ANS.push(value2[i] as number | string);
    }
  }

  return ANS;
}






type CalculateTotalPrice = {
  name: string;
  price: number;
  quantity: number;
  discount?: number;
};
function calculateTotalPrice(value: CalculateTotalPrice[]): number | undefined {
  const ANS = value.reduce((acc, item) => {
    const withoutDiscount = item.price * item.quantity;
    if (item.discount) {
      const dicountP = (item.discount / 100) * withoutDiscount;
      return acc + (withoutDiscount - dicountP);
    } else {
      return acc + withoutDiscount;
    }
  }, 0);
  return ANS;
}
