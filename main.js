// setTimeout(()=> {

//     setTimeout(()=>{
//         console.log("Hola Toni")

//         setTimeout(()=>{

//             console.log("Hola Paco");

//             setTimeout(()=>{

//                 console.log("Hola Gastón");
//             }, 200);

//             console.log("Hola Marta");
//         }, 5000);
//     },200)

//     console.log("Hola Vincenzo");

//     setTimeout(()=>{

//         console.log("Hola Pedro")
//     }, 400);

//     console.log("Hola Mery");

//     setTimeout(()=>{
//         console.log("Hola Christian");
//     }, 3000);
// },1480);

// vin, mery, toni, pedro, christian, paco, marta, gaston

// const suma = (a,b) => {
//     return a + b;
// }
// setTimeout(()=> {
//     console.log(suma(4,5));
// },1000);


// const sumaConRetraso = (num1, num2, miCallback) => {
//     const suma = num1 + num2;
  
//     setTimeout(() => {
//       sumaConRetraso()
//     }, 1000);
//   }
  
//   const miCallback = (resultado) => {
//     console.log("La suma es: " + resultado);
// }
// sumaConRetraso(5, 7, miCallback);
  
  //Declaración
// const miPrimeraPromesa = new Promise((resolve, reject)=>{

//     let videojuego = "Last of Us";

//     if(videojuego !== "Sonic"){
//         reject("El juego era incorrecto");
//     } else {
//         resolve("El juego quizá es otro....");
//     }
// })

// //Ejecución

// //Lo que devuelva resolve ira en resultado... lo que devuelva reject irá en error...
// miPrimeraPromesa
//     .then(
//         resultado => {
//             console.log("che vira.....")
//         }
//     )
//     .catch(error => console.log(error))



    
