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
// kata 2
function firstNonConsecutive (arr) {
  for(let i = 1;i < arr.length;i++){
    if(arr[i] !== arr[i - 1] + 1){
      return arr[i];
    }
  }
  return null;
}
//kata 3
function sakuraFall(v) {
  // your code here
  if(v <= 0){
    return 0;
  }
    return (5 * 80)/v
}