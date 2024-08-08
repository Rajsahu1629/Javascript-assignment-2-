
// Input
const expenses = [
    { name: "Food", amount: 50 },
    { name: "Transportation", amount: 30 },
    { name: "Internet", amount: 45 },
    { name: "Groceries", amount: 80 }
  ];
  
let  calculateTotalExpenses = expenses.reduce((acc,curr)=>{
    return acc + curr.amount
},0);




 //const totalExpenses = calculateTotalExpenses(expenses);
  console.log(calculateTotalExpenses); // Output should be: 205
  
  