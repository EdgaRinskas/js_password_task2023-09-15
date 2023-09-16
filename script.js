// Task 1: PASSWORD
console.groupCollapsed("SLAPTAŽODIS");

// 1. Patikrinkite, ar slaptažodis yra trumpesnis nei 16 simboliai.
// 2. Jei slaptažodis yra ilgesnis nei 15 simbolių:
//    2.1. Patikrinkite, ar jis ilgesnis nei 20 simbolių. Jei ilgesnis, parašykite: "Slaptažodis yra tinkamas".
//    2.2. Jei jis nėra ilgesnis nei 20 simbolių, parašykite: "Slaptažodis yra tinkamas. Tačiau rekomenduojama, kad jis būtų ilgesnis nei 21 simbolis."

// 3. Jei slaptažodis neturi simbolių (#), parašykite: "Slaptažodis turi turėti simbolį #".

// Įveskite slaptažodį:
const password = prompt("Įveskite slaptažodį:");

if (password.length < 16) {
    console.log("Slaptažodis per trumpas. Jis turi būti bent 16 simbolių ilgio.");
} else if (password.length > 15) {
    if (password.length > 20) {
        console.log("Slaptažodis yra tinkamas.");
    } else {
        console.log("Slaptažodis yra tinkamas. Tačiau rekomenduojama, kad jis būtų ilgesnis nei 21 simbolis.");
    }
    if (!password.includes("#")) {
        console.log("Slaptažodis turi turėti simbolį #.");
    }
}

console.groupEnd(); // Uždaryti grupę

// Task 2: AGE
console.groupCollapsed("AMŽIUS");

// 1. Remiantis vaiko amžiumi, nustatykite, į kurį klasę vaikas turi teisę būti priimtas:
//    1. Vaikai neeina į mokyklą iki 6 metų.
//    2. 7-10 metų vaikai eina į pradinę mokyklą.
//    3. 11-14 metų vaikai eina į pradinę mokyklą.
//    4. 15-18 metų vaikai eina į vidurinę mokyklą.
//    5. 19+ jau yra baigę mokyklą.

// 6.1. Jei amžius yra mažesnis nei 0, parašykite, kad įvestas amžius per mažas.
// 6.2. Jei amžius yra daugiau nei 120, parašykite, kad įvestas amžius per didelis.

// 7.1. Jei amžius yra 6 metai, parašykite: "Galbūt dar neeina į mokyklą, bet gali būti pirmokas."
// 7.2. Jei amžius yra 10 metai, parašykite: "Galbūt mokosi pradžios mokykloje, bet gali būti ir penktokas."
// 7.3. Jei amžius yra 14 metai, parašykite: "Galbūt mokosi pradžios mokykloje, bet gali būti ir devintokas."
// 7.4. Jei amžius yra 18 metai, parašykite: "Galbūt mokosi vidurinėje mokykloje, bet gali būti jau baigęs mokyklą."

// 8. Jei amžius neįvestas (t.y., tai nėra skaičius), parašykite: "Amžius nenurodytas teisingai, amžius turi būti skaičius."
// 9. Naudokite prompt funkciją įvesti amžių.
const ageInput = prompt("Įveskite savo amžių:");

const age = parseInt(ageInput);

if (isNaN(age)) {
    console.log("Amžius nenurodytas teisingai, amžius turi būti skaičius.");
} else {
    if (age < 0) {
        console.log("Įvestas amžius per mažas.");
    } else if (age > 120) {
        console.log("Įvestas amžius per didelis.");
    } else {
        if (age === 6) {
            console.log("Galbūt dar neeina į mokyklą, bet gali būti pirmokas.");
        } else if (age === 10) {
            console.log("Galbūt mokosi pradžios mokykloje, bet gali būti ir penktokas.");
        } else if (age === 14) {
            console.log("Galbūt mokosi pradžios mokykloje, bet gali būti ir devintokas.");
        } else if (age === 18) {
            console.log("Galbūt mokosi vidurinėje mokykloje, bet gali būti jau baigęs mokyklą.");
        }
    }
}

console.groupEnd(); // Uždaryti grupęgithu
