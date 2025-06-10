// fee.js

// Function to estimate mobile money transaction fee
function estimateTransactionFee(amountToSend) {
  const minFee = 10;  // KES
  const maxFee = 70;  // KES
  const feePercent = 0.015; // 1.5%

  // Calculate initial fee
  let calculatedFee = amountToSend * feePercent;

  // Apply min and max limits
  if (calculatedFee < minFee) {
    calculatedFee = minFee;
  } else if (calculatedFee > maxFee) {
    calculatedFee = maxFee;
  }

  const totalAmount = amountToSend + calculatedFee;

  // Output the results to the console
  console.log(`Sending KES ${amountToSend}:`);
  console.log(`Calculated Transaction Fee: KES ${calculatedFee.toFixed(2)}`);
  console.log(`Total amount to be debited: KES ${totalAmount.toFixed(2)}\n`);
  console.log("Send Money Securely!");
}

// Prompt user and run the function
const amount = Number(prompt("Unatuma Ngapi? (KES):"));
if (!isNaN(amount) && amount > 0) {
  estimateTransactionFee(amount);
} else {
  console.log("Please enter a valid amount.");
}