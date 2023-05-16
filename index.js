// Sort the below array of employees in ascending order by age
// employees

// Json
// let employees = [
//     {firstName: 'John',lastName: 'Doe',age: 27,joinedDate: 'December 15, 2017'
//     },
//     {firstName: 'Ana',lastName: 'Rosy',age: 25,joinedDate: 'January 15, 2019'
//     },
//     { firstName: 'Zion',lastName: 'Albert',age: 30,  joinedDate: 'February 15, 2011'
//     }
// ];

let employees = [
        {firstName: 'John',lastName: 'Doe',age: 27,joinedDate: 'December 15, 2017'
        },
        {firstName: 'Ana',lastName: 'Rosy',age: 25,joinedDate: 'January 15, 2019'
        },
        { firstName: 'Zion',lastName: 'Albert',age: 30,  joinedDate: 'February 15, 2011'
        }
    ];
employees.sort((a,b)=>{
    return a.age-b.age
})
console.log(employees);


// 2. Write a JavaScript function to get the last element of an 
// array. Passing the parameter 'n' will return the last 'n' 
// elements of the array.


function getLastElement(arr, n) {
  n=arr.slice(-1)
  return n;
}
  const arr = [1, 2, 3, 4, 5];

  console.log(getLastElement(arr)); // 5 
  
  
//   3. Write a JavaScript program that prints the elements of the following array.
// Note : Use nested for loops.
// Sample array : const a = [[1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27], [7, 4, 28, 14], [3, 10, 26, 7]];
// Sample Output :
// "row 0"
// " 1"
// " 2"
// " 1"
// " 24"
// "row 1"

const a = [[1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27], [7, 4, 28, 14], [3, 10, 26, 7]];


a.forEach((item,index,array)=>{
  console.log(`\n"row ${index}"`);
  item.forEach((i,index,array)=>{
    console.log(`"${i}"`);
  })
})



// 4. Write a JavaScript function to find the difference between two arrays.

// Test Data:
// console.log(difference([1, 2, 3], [100, 2, 1, 10]));
// ["3", "10", "100"]

function difference(arr1, arr2) {
    return arr1.filter(x => !arr2.includes(x)).concat(arr2.filter(x => !arr1.includes(x)));
  }
  
  console.log(difference([1, 2, 3], [100, 2, 1, 10]));
  // Output: ["3", "10", "100"]
  

//   5. Write a JavaScript function to filter false, null, 0 and blank values from an array.

// Test Data :
// console.log(filter_array_values([58, '', 'abcd', true, null, false, 0]));
// [58, "abcd", true]

function filter_array_values(arr) {
    return arr.filter(x => x !== false && x !== null && x !== 0 && x !== '');
  }
  
  console.log(filter_array_values([58, '', 'abcd', true, null, false, 0]));
  // Output: [58, "abcd", true]
  