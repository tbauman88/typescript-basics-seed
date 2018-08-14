// Rest Parameters
// @ts-ignore
function sumAll(message, ...arr) {
  console.log(message);
  return arr.reduce((prev, next) => prev + next);
}

const sum = sumAll('Message!', 1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
console.log(sum);

// Array Spread Operators
const toppings = ['bacon', 'chilli'];
const newToppings = ['pepperoni'];
const allToppings = [...newToppings, ...toppings];
console.log(allToppings);

// Destructuring Arrays and Objects
const pizza = {
  name: 'Pepperoni',
  toppings: ['pepperoni']
};

// @ts-ignore
function order({ name: pizzaName, toppings: pizzaToppings }) {
  return { pizzaName, pizzaToppings }
}

const { pizzaName } = order(pizza);
const toppingss = ['pepperoni', 'bacon', 'chilli'];
const [ first, second, third ] = toppingss;

function logToppings([ first, second, third ]: any) {
  console.log(first, second, third);
}

logToppings(toppingss);

// Types
const pizzaCost: number = 10;
const pizzaToppings: number = 5;

function calcPrice (cost: number, toppings: number): number {
  return  cost + 1.5 * toppings;
}

const cost: number = calcPrice(pizzaCost, pizzaToppings);
console.log(`Pizza cost: ${cost}`);

const coupon: string = 'pizza25';
function normalizaCoupon(code: string): string {
  return code.toUpperCase();
}

const couponMessage: string = `Final coupon is ${normalizaCoupon(coupon)}`;
console.log(couponMessage);

const pizzas: number = 5;

function offerDiscount(orders: number): boolean {
  return orders >= 3;
}

if (offerDiscount(pizzas)) {
  console.log(`You're entitled to a discount!`)
} else {
  console.log(`Order more than 3 pizzas for a discount!`)
}

// Null, Undefined, Strict Null Checks
let coupon1: string | null = 'pizza25';

function removeCoupon(): void {
  coupon1 = null;
}
console.log(coupon1);
removeCoupon();
console.log(coupon1);

// Union and Literal Types
let pizzaSize: string = 'small';

function selectSize(size: 'small' | 'medium' | 'large'): void {
  pizzaSize = size
}

selectSize('medium');
console.log(`Pizza size: ${pizzaSize}`);

// Function types
let sumOrder: (price: number, quantity?: number) => number;
sumOrder = (x, y = 1) => x * y;
const total = sumOrder(25, 5);
console.log(`Total sum: ${total}`);

// Object types
let newPizza: { name: string, price: number; getName(): string } = {
  name: 'Plain Old Pepperoni',
  price: 20,
  getName() {
    return newPizza.name
  }
};
console.log(newPizza.getName());

// Array Types
let sizess: string[];
sizess = ['small', 'medium', 'large'];
let arrayToppings: Array<string>;
arrayToppings = ['pepperoni', 'bacon', 'chilli'];

// Tuple Types for Arrays
let pie: [string, number, boolean];
pie = ['Pepperoni', 20, true];

// Type Aliases
type Size = 'small' | 'medium' | 'large';
type Callback = (size: Size) => void;

let pieSize: Size = 'small';
const selectPieSize: Callback = (x) => pieSize = x;

selectPieSize('medium');

// Type Assetions
type Pizza = { name: string, toppings: number };
const pizzaPie: Pizza = { name: 'Blazing Inferno', toppings: 5 };
const serialized = JSON.stringify(pizzaPie);

function getNameFromJSON(obj: string) {
  return (JSON.parse(obj) as Pizza).name;
}
getNameFromJSON(serialized);

// Interfaces
interface Sizes {
  sizes: string[];
}

interface Pie extends Sizes {
  name: string;
  toppings?: number;
  getAvailableSizes(): void;
  [key: number]: string;

}

let piePizza: Pie;

function createPie(name: string, sizes: string[]): Pie {
  return {
    name,
    sizes,
    getAvailableSizes() {
      return this.sizes;
    }
  };
}

piePizza = createPie('Pepperoni', ['small', 'medium']);
piePizza[1] = 'xyz';
piePizza.toppings = 1;

// Setters and Getters (Accessors)
interface ISizes {
  availableSizes: string[];
}

abstract class CakeSizes implements ISizes{
  constructor(protected sizes: string[]) {}

  set availableSizes(sizes: string[]) {
    this.sizes = sizes
  }

  get availableSizes () {
    return this.sizes;
  }
}

interface ICake extends ISizes {
  readonly name: string;
  toppings: string[];
  updateSizes(sizes: string[]): void;
  addTopping(topping: string): void;
}

// Classes, Properties and Inheritance
class Cake extends CakeSizes implements ICake {
  public toppings: string[] = [];

  constructor(readonly name: string, sizes: string[]) {
    super(sizes);
  }

  public updateSizes(sizes: string[]) {
    this.sizes = sizes;
  }

  public addTopping(topping: string) {
    this.toppings.push(topping)
  }
}

const cake = new Cake('Vanilla', ['small', 'medium']);
cake.addTopping('vanilla');
cake.updateSizes(['large']);
console.log(cake.availableSizes);
console.log(cake);

// Static Properties and Methods
class Coupon {
  static allowed = ['Vanilla', 'Birthday']
  static create(percentage: number) {
    return `CAKE_RESTURANT_${percentage}`;
  }
}
console.log(Coupon.allowed);
console.log(Coupon.create(25));