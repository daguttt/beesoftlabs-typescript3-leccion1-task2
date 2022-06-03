abstract class Character {
  abstract get name(): string;
  abstract get alias(): string;
  introduce(): string {
    return `Hi! I'm ${this.name}. Well known as ${this.alias}`;
  }
  walk(): string {
    return "I can walk";
  }
  throwPower<TypePower extends Power>(power: TypePower) {
    for (let _ of [1, 2, 3]) {
      console.log(`(${this.alias}) ${power.message}`);
    }
  }
}

interface Power {
  powerName: string;
  damage: number;
  message: () => string;
}
class SpiderWebBall implements Power {
  public powerName = "Spider Web Ball";
  public damage = 1800;
  message(): string {
    return `Throwing ${this.powerName}, I hit ${this.damage} per time`;
  }
}

class Grenade implements Power {
  public powerName = "Grenade";
  public damage = 1500;
  message(): string {
    return `Throwing ${this.powerName}, I hit ${this.damage} per time`;
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

spiderman.throwPower<SpiderWebBall>(new SpiderWebBall());
greenGlobin.throwPower<Grenade>(new Grenade());
