jsnack2. Generatore di "nomi cognomi" casuali: prendendo una lista di nomi e una
// lista di cognomi, Gatsby vuole generare una falsa lista di 3 invitati.

// Lista nomi
const name = ["Vittorio" , "Francesco", "Zefiro" , "Carlo", "Nicola"];
console.log(name);

// Lista cognomi
const surname = ["Partipilo" , "Genuardi" , "Giurgi", "Sarli" , "Turchetta"];
console.log(surname);

// Lista nomi-cognomi casuali
const namesurname = [];

// Genero nomi e cognomi casuali e li inserisco nella lista
for (let i = 0; i < 3; i++) {

    j = 0;

    z= 0;
    
    j = Math.floor(Math.random() * name.length);
    console.log(j, name[j]);

    z = Math.floor(Math.random() * surname.length);
    console.log(z, surname[z]);

    namesurname[i] = name[j] + " " + surname[z];
}

// Output
console.log(namesurname);

