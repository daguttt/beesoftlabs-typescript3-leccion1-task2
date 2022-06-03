abstract class Character {
  abstract get name(): string;
  abstract get alias(): string;
  introduce(): string {
    return `Hi! I'm ${this.name}. Well known as ${this.alias}`;
  }
  walk(): string {
    return "I can walk";
  }
}

class Spiderman extends Character {
  get name(): string {
    return "Peter Parker";
  }
  get alias(): string {
    return "Spiderman";
  }
  swing(): string {
    return `(${this.alias}) I'm swinging through the city`;
  }
}

class GreenGlobin extends Character {
  get name(): string {
    return "Norman Osborn";
  }
  get alias(): string {
    return "Green Globin";
  }
  fly(): string {
    return `(${this.alias}) I'm flying with my glider`;
  }
}

const spiderman = new Spiderman();
const greenGlobin = new GreenGlobin();

console.log(spiderman.introduce());
console.log(greenGlobin.introduce());
console.log();
console.log(spiderman.swing());
console.log(greenGlobin.fly());
console.log();
console.log(spiderman.walk());
console.log(greenGlobin.walk());
