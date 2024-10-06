const name = "Luiz Otávio";
const lastName = "Miranda";
const age = 30;
const weight = 84;
const heightMeters = 1.80;
let imc; //peso / (altura * altura)
let bornYear;

imc = weight / (heightMeters * heightMeters);
bornYear = 2024 - age;

console.log(name + lastName + "tem" + age + "anos, pesa" + weight + "Kg");
console.log(`tem ${heightMeters}, de altura e seu IMC ${imc}`);
console.log(name, "nasceu em", bornYear,".");