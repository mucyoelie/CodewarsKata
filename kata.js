class Hero {
  // add default values here
    constructor(name = "Hero") {
      this.name = name;
      this.position = "00";
      this.health = 100;
      this.damage = 5;
      this.experience = 0;
        
    }
}
const hero1 = new Hero();
console.log(hero1);