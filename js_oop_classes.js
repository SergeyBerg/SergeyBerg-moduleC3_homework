class  ElectroPribor {
    constructor(name, power){
        this.name = name;
        this.power = power;
        this.isStatus = false;
    }

    metodOn() {
        console.log(this.name + " Вкл!");
        this.isStatus = true;
    }

    metodOff() {
        console.log(this.name + " Выкл!");
        this.isStatus = false;
    }
}

class Lamp extends  ElectroPribor {
    constructor (name, brand, power, typeLamp) {
        super(name, power);
        this.brand = brand;
        this.typeLamp = typeLamp;
        this.isStatus = true;
    }
}

class Computer extends ElectroPribor {
    constructor(name, brand, power, type, condition) {
        super(name, power);
        this.brand = brand;
        this.type = type;
        this.condition = condition;
        this.isStatus = false;
    }
}

const tableLamp = new Lamp("Настольная лампа", "noName", 12, "LED");
const noteBook = new Computer("Ноутбук", "HP", 111, "Переносной", "В рабочем состоянии");

tableLamp.metodOn();
noteBook.metodOff();

console.log(noteBook)
console.log(tableLamp)