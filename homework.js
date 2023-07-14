//Q1. Create an array of number and filter numbers which are not perfect squares.
const number=[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 16];
for(let i=1; i<100; i++){
    

}
    const newnumber=number.filter( (p) => {return(p*0.5)===parseInt(p*0.5)});
        console.log(newnumber);

//Q2. Create an array of names and filter names with length greater than 5.

const names=['Priyanshu', 'Gaurav', 'Shashwat', 'Riya', 'Shubh', 'Addy', 'Alankrit'];
const newnames=names.filter( (n) => {return n.length<5});
        console.log(newnames);


// Q3. Create an array of full names and use map to keep only first name.
const names1=['Priyanshu Chaubey', 'Gaurav Mishra', 'Shashwat Rajpoot', 'Riya Tiwari', 'Shubhdeep singh', 'Addy Nagar', ];
const newnames1=names1. map( (b) => {return b.split(" ")[0]});
 console.log(newnames1);
 
 //Q4. Create a function to print all prime numbers in given range parameters.
 let range=(2, 100) 
    for (let range = 2; range <= 100; range++) {
      let isPrime = true;
      if (range > 1) {
        for (let i = 2; i <= Math.sqrt(range); i++) {
          if (range % i === 0) {
            isPrime = false;
            break;
          }
        }
        if (isPrime) {
          console.log(range);
        }
      }
    }