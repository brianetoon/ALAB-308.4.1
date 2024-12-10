let mainString = `ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26`;


// Part 2 - Expanding Fucntionality:
console.log("- Part 2 - Generate 2D Array:")

function generate2DArray(str) {
  let arr2D = [];
  let arr1D = str.split("\n");

  arr1D.forEach(row => {
    arr2D.push(row.split(","));
  });

  return arr2D;
}
const Array2D = generate2DArray(mainString);
console.log(Array2D);


// Part 3 - Transforming Data:
console.log("- Part 3 - Generate Object Array:")

function generateObjectArray(arr2D) {
  let objectArray = [];
  let headers = arr2D[0];

  for (i = 1; i < arr2D.length; i++) {

    const obj = arr2D[i].reduce((acc, item, index) => {
      acc[headers[index].toLowerCase()] = item;
      return acc;
    }, {});

    objectArray.push(obj);
  }

  return objectArray;
}
const objectArray = generateObjectArray(Array2D);
console.log(objectArray);


// Part 4 - Sorting & Manipulating Data:
console.log("- Part 4 - Sorting & Manipulating Data:")

// Remove the last element from the sorted array.
console.log("Remove last element from array:")
objectArray.pop();
console.log(objectArray);

// Insert the following object at index 1:
// { id: "48", name: "Barry", occupation: "Runner", age: "25" }
console.log("Insert new object at index 1:")
objectArray.splice(1, 0, { id: "48", name: "Barry", occupation: "Runner", age: "25" });
console.log(objectArray);

// Add the following object to the end of the array:
// { id: "7", name: "Bilbo", occupation: "None", age: "111" }
console.log("Add object to end of the array:")
objectArray.push({ id: "7", name: "Bilbo", occupation: "None", age: "111" });
console.log(objectArray);

// Calculate average age
function calculateAverageAge(arr) {
  let totalAge = 0

  for (i = 0; i < arr.length; i++) {
    totalAge += parseInt(arr[i].age);
  }
 return totalAge / arr.length;
}

const averageAge = calculateAverageAge(objectArray);
console.log(`Average age: ${averageAge}`);


// Part 5 - Full Circle:
console.log("- Part 5 - Generate CSV String:");

function generateCSVString(objArray) {
  let csvString = '';

  // Extract obj keys and concat them to csvString
  const keyArray = Object.keys(objArray[0]);
  csvString += keyArray.join(",") + "\n";

  // Extract values from each obj and concat them to csvString
  for (i = 0; i < objArray.length; i++) {
    const strArray =  Object.values(objArray[i]);
    csvString += strArray.join(",") + "\n";
  }

  return csvString;
}
console.log(generateCSVString(objectArray));
