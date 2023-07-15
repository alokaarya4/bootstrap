const user ={
    name:'RAJU',
    email:'raju12@mail.com',
    password: '73647'

};

console.log(user.email);
console.log(typeof user);

console.log( user['password']);
user .address ='lucknow';

console.log(user);
user.password = 'dvdgdgvdg';
console.log(user);

for(let k of Object.keys(user)){
    console.log(k);
}
for(let k of Object.values(user)){
    console.log(k)
}
for(let k of Object.entries(user)){
    console.log(k);
}

const laptop =[
    { brand: "hp",model:"pavilion",price:69999,colors:["black","silver"]},
    { brand: "lenovo",model:"Thinkpad",price:56000,colors:["black"]},
    { brand: "hp",model:"Elitebook",price:68000,colors:["blue"]},
    {
        brand:"asus",
        model: "ultrabook",
        price:89999,
        colors:["silver","black","white"],
    },
];
//syntex to get the price of ultrabook
//syntex to replace silver color with gray in ultrabook

console.log(laptop[3].price);

console.log(laptop[3].color='gray');
console.log(laptop);

for(let lap of laptop){
    console.log(lap.brand);
}
//syntex to fillter laptops having price less than 70000
//syntext to fillter laptops having black color

const res1 = laptop.filter( (l) => {return l.price < 60000} );
console.log(res1);

console.log(['red','biue','black'].includes('green'));
const res2=laptop.filter((lappy)=>{return lappy.colors.includes('black')})
console.log(laptop);
console.log(res2);


console.log(['red','blue','black'].includes('green'));


//Find the sum of all laptop prices.

let sum = 0;

for(let i=0; i<laptop.length;i++){
    const iprice = parseInt(laptop[i].price);
    sum=sum +iprice
}

console.log("total cost:"+sum);

console.log('-------------------------');

//adding10% discount to all the laptop

const diprice= laptop.map((laptop) => {
    const p =parseInt(laptop.price);

    const dp =p*0.9;
    laptop.price =dp.toString();
    return laptop;
});

//fillter the all laptop having price more than 40000 and 60000(use fillter)

const a = laptop.filter((l) => {return l.price > 40000 && l.price <70000});
console.log(a);