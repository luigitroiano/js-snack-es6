//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////  //        //      //////   //////     //          ///
//  /// //      //  //   //       //        //  //      // //
//////  //     //    // //       //        //    //        //
//  /// //      //  //   //       //        //  //         //
//////  //////    //      //////   //////     //         //////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// JSnack 1
// L’utente inserisce due numeri in successione, con due
// prompt. Il software stampa il maggiore.
// const numero1 = Number(prompt(`Inserisci un numero`));
// const numero2 = Number(prompt(`Inserisci un numero`));

// const numeroMaggiore = (num1, num2) => 
//   num1 > num2 ? console.log(num1) : console.log(num2); 
// numeroMaggiore(numero1, numero2);

// JSnack2
// L’utente inserisce due parole in successione, con due
// prompt. Il software stampa prima la parola più corta, poi la
// parola più lunga.
// const parola1 = prompt(`Inserisce una parola`);
// const parola2 = prompt(`Inserisce una parola`);

// const parolaLunga = (word1, word2) => word1 > word2 ? console.log(word2) + console.log(word1) : console.log(word1) + console.log(word2);
// parolaLunga(parola1, parola2);

//JSnack3
// Il software deve chiedere per 5 volte all’utente di inserire un
// numero. Il programma stampa la somma di tutti i numeri
// inseriti. Esegui questo programma in due versioni, con il for
// e con il while.
////CICLO FOR
// const userArray = [];
// for (let i = 0; i < 5; i++) {
//   const userNumber = Number(prompt('Inserisci un numero'));
//   userArray.push(userNumber);
// };
// console.log(userArray);
// const somma1 = () => {
//   let sum = 0;
//   for (let index = 0; index < userArray.length; index++) {
//     sum = sum + userArray[index];
//   };
//   return sum;
// }
// console.log(somma1());
////CICLO WHILE
// const userArray2 = [];
// let y = 0;
// while (y < 5) {
//   const userNumber2 = Number(prompt('Inserisci un numero'));
//   userArray2.push(userNumber2);
//   y++
// };
// console.log(userArray2);
// const somma2 = () => {
//   let sum2 = 0;
//   for (let index2 = 0; index2 < userArray2.length; index2++) {
//     sum2 = sum2 + userArray2[index2];
//   };
//   return sum2;
// }
// console.log(somma2());