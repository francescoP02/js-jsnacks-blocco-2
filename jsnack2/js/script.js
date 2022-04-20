// 3. Generatore di "nomi cognomi" casuali: prendendo una lista di nomi e una
// lista di cognomi, Gatsby vuole generare una falsa lista di 3 invitati.

const name = ["Vittorio" , "Francesco", "Zefiro" , "Carlo", "Nicola"];
console.log(name);

const surname = ["Partipilo" , "Genuardi" , "Giurgi", "Sarli" , "Turchetta"];
console.log(surname);

const namesurname = [];

for (let i = 0; i < 3; i++) {

    j = 0;

    z= 0;
    
    j = Math.floor(Math.random() * name.length);
    console.log(j, name[j]);

    z = Math.floor(Math.random() * surname.length);
    console.log(z, surname[z]);

    namesurname[i] = name[j] + " " + surname[z];
}

console.log(namesurname);

