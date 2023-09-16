const data = [
    { name: "john", age: 24, profession: "developer" },
    { name: "jane", age: 27, profession: "admin" },
  ];
  
  // 1. Print Developers
  function PrintDeveloper() {
    console.log(data[0]);
  }
  // 2. Add Data
  function addData() {

    // Collect details from the user using prompts
const name = prompt("Enter a name:");
const age = parseInt(prompt("Enter an age:"));
const profession = prompt("Enter a profession:");

// Create a new object with the collected details
const newPerson = { name, age, profession };

// Add the new object to the data array
data.push(newPerson);

// Print the updated data array
console.log(data);
  }
  
  // 3. Remove Admins
  function removeAdmin() {
   
      
      // Use the filter() method to extract all non-admins
      const nonAdmins = data.filter(item => item.profession !== "admin");
      
      console.log(nonAdmins);
      
     
  }
  
  // 4. Concatenate Array
  function concatenateArray() {

      // Merge the objects into a single object using the spread operator
      const mergedObject = {...data[0], ...data[1]};
      
      console.log(mergedObject);
      
      
  }
  
  // 5. Average Age
  function averageAge() {

    const sumOfAges =  data.reduce((total, person) => total + person.age, 0);

// Calculate the average age
const averageAge = sumOfAges / data.length;

// Log the average age
console.log("Average Age:", averageAge);
  }
  
  // 6. Age Check
  function checkAgeAbove25() {
    // Check if at least one person is older than 25
const isOlderThan25 = data.some(person => person.age > 25);

if (isOlderThan25) {
  console.log("At least one person is older than 25.");
} else {
  console.log("No person is older than 25.");
}

  }
  
  // 7. Unique Professions
  function uniqueProfessions() {
    const distinctProfessions = [];

// Iterate through the data array and collect distinct professions
data.forEach(person => {
  if (!distinctProfessions.includes(person.profession)) {
    distinctProfessions.push(person.profession);
  }
});

// Log the distinct professions
console.log("Distinct Professions:", distinctProfessions);
  }
  
  // 8. Sort by Age
  function sortByAge() {

    // Sort the array by age in ascending order (youngest to oldest)
const d = data.sort((a, b) => a.age - b.age);

// Log the sorted array
console.log(d);
  }
  
  // 9. Update Profession
  function updateJohnsProfession() {
    
    // Find John's object by name and update his profession
for (let i = 0; i < data.length; i++) {
    if (data[i].name === "john") {
      data[i].profession = "manager";
      break; // Stop the loop once John's object is found and updated
    }
  }
  
  console.log(data);
  }
  
  // 10. Profession Count
  function getTotalProfessions() {

    // Initialize counters for developers and admins
let developerCount = 0;
let adminCount = 0;

// Iterate through the data array and count the professions
for (let i = 0; i < data.length; i++) {
  if (data[i].profession === "developer") {
    developerCount++;
  } else if (data[i].profession === "admin") {
    adminCount++;
  }
}

// Print the counts
console.log("Total Developers:", developerCount);
console.log("Total Admins:", adminCount);
  }
  