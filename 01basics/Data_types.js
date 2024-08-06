 

console.log(null > 0);
console.log(null >= 0);
console.log(null < 0);
console.log(null <= 0);
console.log(null == 0);

/*
false
true
false
true
false

this occurs because 
the comparison oerator and  equality operator act differently
the comparison operator converts null to 0
 
*/
console.log(undefined > 0);
console.log(undefined >= 0);
console.log(undefined < 0);
console.log(undefined <= 0);
console.log(undefined == 0);

// all values will be false


// 0, null, undefined, NaN, "" are falsy values
// falsy values are not equal to each other


// primitive data types are stored in stack memory
// reference data types are stored in heap memory

// types of primitive data types
// 1. number
// 2. string
// 3. boolean
// 4. null
// 5. undefined
// 6. symbol
// 7. bigint

// types of reference data types
// 1. object
// 2. array
// 3. function
// 4. date
// 5. regex
// 6. map
// 7. set
// 8. weakmap
// 9. weakset
// 10. promise
// 11. typed array
// 12. array buffer
// 13. data view
// 14. generator


//  is javascript is dynamic or static language
// javascript is a dynamic language
// javascript is dynamically typed language


// what id difference in javascript and typescript
// javascript is a dynamic language
// typescript is a statically typed language


//  what do we mean by dynamic language
// in dynamic language the type of variable is determined at runtime


const id = Symbol("id");
const id1 = Symbol("id");
console.log(id);
console.log(id1);

 // false
