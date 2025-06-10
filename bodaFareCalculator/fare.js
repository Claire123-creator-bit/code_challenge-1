// fare.js

// Function to calculate boda boda fare
function calculateBodaFare(distanceInKm) {
  const baseFare = 50; // KES
  const chargePerKm = 15; // KES per kilometer

  // Calculate total fare
  const distanceCharge = distanceInKm * chargePerKm;
  const totalFare = baseFare + distanceCharge;

  // Output the results to the console
  
  console.log(`Uko kwote? Io ni ${distanceInKm} km:`);
  console.log(`Ukikalia Pikipiki: KES ${baseFare}`);
  console.log(`Mpaka Uko: KES ${distanceCharge}`);
  console.log(`Total: KES ${totalFare}\n`);
  console.log("Panda Pikipiki!");
}
// Export the function for use in other files
const distance = Number(prompt("Unafika wapi Mkubwa? Kilometer ngapi?:"));
if (!isNaN(distance) && distance >= 0) {
  calculateBodaFare(distance);
} else {
  console.log("Please enter a valid distance.");
}