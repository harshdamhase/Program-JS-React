const student =["snehha","neha","yogi","harsha"];
// student.pop();
console.log(student.pop());//remove last element from array

console.log(student.push("pinki"));//add last element in array.
console.log(student);

console.log(student.unshift("Rtc")); //add element at the start of array.
console.log(student);

console.log(student.shift());//remove start element from arrya
console.log(student);

console.log(student.join(',')); //it separates element from array by separtor comma

const b=['html','css']
console.log(student.concat(b));//add two array

console.log(student.splice(1,2,"css",'104'));//insertion and deletion at same time
console.log(student);
console.log(student.reverse());//reverse every element in array.


