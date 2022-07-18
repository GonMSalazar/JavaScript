let nombre = ' Soy Gonzalo ';
let apellido = 'Salazar';
let saludo = 'Les doy la bienvenida!';
let fraseCompleta = saludo + nombre + apellido;

console.log(fraseCompleta);

let frase = ' JavaScript ' + ' es un lenguaje ' + 'esencial para crear ' + ' sitios web poderosos.';

console.log(frase);

let numeroString1 = "Maradona 10";
let numeroString2 = " Ginobili 20";
let numeroString3 = " Messi 30";

let concatenaNumeros = numeroString1 + numeroString2 + numeroString3;

console.log(concatenaNumeros);

var nombre1 = prompt("Cuál es tu nombre?");

console. warn(nombre1)

sexo = prompt ('Introduce tu sexo')

if (sexo == 'masculino'){
    alert('podes entrar si sos mayor de 18');

    edad = prompt("Introduce tu edad");
    if (edad >= 18){
        alert("Puedes entrar, eres mayor de edad.");
       } else {
        alert("No puedes entrar, eres menor de edad.");
       }
}

else if(sexo == 'femenino'){
    alert('mujeres solo mayores de 20');

    edad = prompt("Introduce tu edad");
    if (edad >= 20){
        alert("Puedes entrar, eres mayor de edad.");
       } else {
        alert("No puedes entrar, eres menor de edad.");
       }
}else{
    alert('no has introducido tu sexo correctamente')
}
