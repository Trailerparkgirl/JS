class Human {
    constructor(weapon){
        this.weapon = weapon;
        this.health = 100;
    }
    receiveDamage() {
        this.life = this.health - 10;
    }
    attack(){
        console.log("Swing "+ this.weapon);
    }
}
class Warrior extends Human{
    attack(){
        super.attack();
        console.log("zin")
    }
}
const alexander = new Warrior('sword');
alexander.attack();
