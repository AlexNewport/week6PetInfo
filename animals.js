const petsData = [
    {
        petName: "Stella",
        age: 7,
        weightInKilos: 24,
        breed: "Dalmation"
    },
    {
        petName: "Cody",
        age: 8,
        weightInKilos: 22,
        breed: "Corgi"
    },
    {
        petName: "Mango",
        age: 2,
        weightInKilos: 11,
        breed: "Persian"
    },
    {
        petName: "Lucy",
        age: 4,
        weightInKilos: 35,
        breed: "Ball Python"
    },
    {
        petName: "Buhmie",
        age: 1,
        weightInKilos: 28,
        breed: "Bull-dog"
    }
];

function showInfo() {
    let petNum = parseInt(prompt(`Please enter the number between 1 and ${petsData.length}`));
    let petNumElement = document.querySelector("#petNum");
    petNumElement.value = petNum;

    petNum -= 1;

    let petInfoElement = document.querySelector(".selectedPetInfo");
    petInfoElement.innerHTML = `${petsData[petNum].petName} is ${petsData[petNum].age} years old.
    It weighs ${petsData[petNum].weightInKilos} and is a ${petsData[petNum].breed}`;
}