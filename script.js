const femaleNames = ['Asia', 'Kasia', 'Ola', 'Jola'];
const maleNames = ['Piotrek', 'Marek', 'Arek', 'Jarek'];

// let allNames = [...femaleNames, ...maleNames]; //lepiej tak
let allNames = femaleNames.concat(maleNames); // czy tak? Czy wszystko jedno?

const newName = prompt("Podaj nowe imie: ");

if(allNames.indexOf(newName) == -1){
    allNames.push(newName);
}else{
    alert("Imię już istnieje");
}


