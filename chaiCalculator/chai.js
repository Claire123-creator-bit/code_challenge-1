// chai.js

// Function to calculate ingredients needed for making Kenyan Chai
function calculateChaiIngredients(numberOfCups) {
  // Ingredient quantities per cup
  const waterPerCup = 200; // ml
  const milkPerCup = 50;   // ml
  const teaLeavesPerCup = 1; // tablespoon
  const sugarPerCup = 2;     // teaspoons

  // Calculate total ingredients needed
  const totalWater = waterPerCup * numberOfCups;
  const totalMilk = milkPerCup * numberOfCups;
  const totalTeaLeaves = teaLeavesPerCup * numberOfCups;
  const totalSugar = sugarPerCup * numberOfCups;

  // Output the results to the console
  console.log(`To make ${numberOfCups} cups of Kenyan Chai, you will need:`);
  console.log(`Water: ${totalWater} ml`);
  console.log(`Milk: ${totalMilk} ml`);
  console.log(`Tea Leaves (Majani): ${totalTeaLeaves} tablespoons`);
  console.log(`Sugar (Sukari): ${totalSugar} teaspoons\n`);
  console.log("Enjoy your Chai Bora!");
}

// Prompt user and run the function
const cups = Number(prompt("Karibu! How many cups of Chai Bora would you like to make?"));
if (!isNaN(cups) && cups > 0) {
  calculateChaiIngredients(cups);
} else {
  console.log("Please enter a valid number of cups.");
}