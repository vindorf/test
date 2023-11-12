// // const data = {
// //     name: {
// //       firstName: 'ana',
// //       lastName: 'marino',
// //     },
// //     isStudent: true,
// //     favoriteFootballTeam: 'fc barcelona',
// //     hometown: {
// //       city: 'buenos aires',
// //       country: 'argentina',
// //     },
// //   };
// //  let{name: {firstName, lastName}, favoriteFootballTeam, hometown:{city, country}} = data
// // console.log(` name: ${firstName} ${lastName} balabala: ${favoriteFootballTeam} home: ${city}`)


// const campuses = ['madrid', 'barcelona', 'miami'];
 
// let [firstc, secondc, thirdc ] = campuses;

// console.log(secondc);

// const [first] = campuses;

// console.log(`erster c: ${first}`);

// const [, fi] = campuses

// console.log(fi);

// const [, ,ti, four= 'paris'] = campuses
// console.log(ti);
// console.log(four);

// const europeanCampuses = [
//     ['madrid', 'es'],
//     ['barcelona', 'es'],
//     ['berlin', 'de'],
//     ['paris', 'fr'],
//     ['amsterdam', 'nl'],
//     ['lisbon', 'pt'],
//   ];
// const [[spC], [sp2C], [gC], [fC]] = europeanCampuses;

// console.log(gC);

// const [a, b] = [1];
// console.log(a * b);

// const [c, d = 1] = [2];
// console.log(c*d);

// let [e, f = 2, g, h = 1] = [3, 4];
// // e = 3;
// // f = 4; wird überschrieben von rechts her
// // g = undefined;
// // h = 1;
// console.log(e, f, g, h);


// const reptiles = ['snake', 'lizard', 'alligator'];
// const mammals = ['puppy', 'kitten', 'bunny'];

// const an = reptiles.concat(mammals);
// console.log(an);

// console.log([...reptiles,...mammals]);

// console.log(reptiles.slice());
// console.log(...mammals);
// console.log([...mammals]);
// console.log({...mammals});

// console.log([...mammals[1]]);
// console.log(...mammals[0]);
// console.log({...mammals[1]});


// function myFunction(arg1, arg2) {
//     console.log(arg1);
//     console.log(arg2);
//   }

//   myFunction('Hans', 'Dampf')

//   function add(){
//     let sum = 0;
//     for(i=0;i<arguments.length;i++) {
//         sum += arguments[i];
//     }
//     console.log(sum);
//     console.log(arguments);
//   } 

//   add(1,4,2,6,8);


//   const customer = {
//     name: {
//       firstName: 'ivan',
//       lastName: 'zoro',
//     },
//     age: 32,
//     preferences: [
//       {
//         tech: ['cameras', 'smartwatches'],
//         books: ['science fiction', 'coding'],
//       },
//     ],
//   };

  
//   const {name:{firstName, lastName}, age, preferences: [{tech, books}]} = customer;
  
//   console.log(lastName, age, tech[0]);

//   console.log(...firstName,...books,...tech);
  