let numberOfPets = {
  dogs: 2,
  cats: 2,
  fish: 1
};

for (let currentPet in numberOfPets) {
  console.log(`${currentPet} ${numberOfPets[currentPet]}`);
}