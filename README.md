### **1.What are some differences between interfaces and types in TypeScript?**

| `interface`                                                                                                               | `type`                                                                                                  |
| ------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- |
| ইন্টারফেস মূলত object এর structure তৈরি করার জন্য use করা হয়। অবজেক্ট কোন property রাখবে কোন টাইপ ডিফাইন করবে তা বলে দেয়। | টাইপ একটি type Alias. আমরা টাইপ দিয়ে object ছাড়াও union,primitive, tuple সবকিছু ডিক্লেয়ার করতে পারিData |
| Interface automatically merge হয়                                                                                          | however type not will merge automatically                                                                                           |
| EXTENDS                                                                                                                   | INTERSECTION and high flexibilty                                                                        |

### interface code example

`Example:`

```ts
interface User {
  name: string;
  age: number;
}

interface User {
  address: string;
}
//merger automatically |
```

`Example`

```ts
type User = {
  name: string;
  age: number;
};
type Status = "success" | "error" | "pending"; //union
```

### **2.What is the use of the keyof keyword in TypeScript? Provide an example**.

**keyof হচ্ছে TypeScript এর একটা operator,we can say its type operator
যেটা কোনো object type এর সব property নামগুলোকে (`basically key`)
একটা union type আকারে দেয়।**

`Example: `

```ts
type Person = {
  name: string;
  age: number;
  city: string;
};
type PersonKeys = keyof Person;
```

**keyof Person মানে হলো —
"Person" টাইপের property গুলোর নামগুলোর union।**

**আরেকটু সহজভাবে বললে keyof নিশ্চিত করে যে আমরা এমন কিছু access করছি,
যা সত্যিই সেই object এর property —
বাইরে থেকে কিছু নয়।আমি নিশ্চিত এই property এর ভিতরে এটি আছে**

### **3.Explain the difference between any, unknown, and never types in TypeScript.**

**All are typescript data type**

### 1.any:

**any মানে হচ্ছে—TypeScript কিছুই চেক করবে না। যেকোনো কিছু assign করা যায়, যেকোনো অপারেশন করা যায় সহজেই।একটু বেশি flexibility দেয়**

`Example:`

```ts
let x: any = 10;
x = "hello";
x = true;
```

### 2.unknown:

**টাইপ জানা নেই, কিন্তু এই টাইপ নিয়ে কাজ করতে হলে টাইপ চেকিং করতে হয়।**

`Example: `

```ts
let y: unknown = "hello";
y = 10;

if (typeof y === "string") {
  y.toUpperCase();
}
```

**We Can say it is little better than any**

### 3.Never:

**never মানে এমন টাইপ যার কোনো value possible না।এমন সব ফাংশনে ইউজ করতে পারি যা কখনও রিটার্ন করে না।error throw করার জন্য ইউজ করা যেতে পারে**

`Example:`

```ts
function alwaysFail(): never {
  throw new Error("eassy pizzy lemon squizy");
}
```

### 4.**What is the use of enums in TypeScript? Provide an example of a numeric and string enum.**

**Enum হলো এমন একটা ডাটা টাইপ যা দিয়ে আমরা কিছু নির্দিষ্ট মানকে নাম দিয়ে গ্রুপ করতে পারি। কোডের বুঝতে সুবিধা হয় ,নির্দিষ্ট কিছু মানকে একসাথে logically গ্রুপ করা যায় **

`Example:`

```ts
enum Direction {
  Up,
  Down,
  Left,
  Right,
}

let move: Direction = Direction.Left;
console.log(move);
```

### **5.Provide an example of using union and intersection types in TypeScript.**

## union:

**Union type দিয়ে বোঝানো হয় একটা ভেরিয়েবল একাধিক টাইপের মধ্যে যেকোনো একটাই হতে পারে**

`Example:`

```ts
let value: number | string;

value = 10;
value = "hello";
```

## Intersection:

**Intersection type দিয়ে বোঝানো হয় টাইপ হবে একসাথে সব টাইপের প্রপার্টি থাকবে**
`Example: `

```ts
type Person = {
  name: string;
  age: number;
};

type Employee = {
  employeeId: number;
};

type EmployeePerson = Person & Employee;

const emp: EmployeePerson = {
  name: "Rahim",
  age: 30,
  employeeId: 1234,
};
```
