//Ejercicio 1
const recipe = {
    name: "",
    ingredients: [
      { name: "Pan", quantity: 2 },
      { name: "Jamón", quantity: 1 },
      { name: "Queso", quantity: 1 },
    ]
  }
//Imprimir la cantidad del primer ingrediente.
console.log(recipe.ingredients[0].quantity)
//Imprimir los ingredientes con el siguiente formato:
const e=recipe.ingredients
for (var i = 0; i < recipe.ingredients.length;i++){
    console.log(`${e[i].quantity} de ${e[i].name}`)
}

// Ejercicio 2
const capitalizar = (str) => {
  return str
    .toLowerCase()
    .split(" ")
    .map((word) => word[0].toUpperCase() + word.substring(1))
    .join(" ");
};
console.log(capitalizar("hola mundo"));

//Ejercicio 4
const toUpperCase = (str) => {
  return str
    .split("")
    .map((letter) => {
      const charCode = letter.charCodeAt(0);
      if (charCode >= 97 && charCode <= 122) {
        return String.fromCharCode(charCode - 32);
      }
      return letter;
    })
    .join("");
};

console.log(toUpperCase("anita lava la tina"));

//Ejercicio 5
const esHexadecimal = (color) => {
  if (color[0] !== "#") return "Debe de empezar con #";

  const charactersQuantity = color.substring(1);
  if (charactersQuantity.length !== 3 && charactersQuantity.length !== 6)
    return " La cantidad de caracteres es entre 3 o 6 ";

  const Expre = /^[0-9a-f]+$/i;
  return Expre.test(color.substring(1))
    ? `${color} si es un color hexadecimal`
    : `${color} no es un color hexadecimal`;
};
console.log(esHexadecimal("#d45"));

//Ejercicio 6
const validarFecha = (fecha) => {
  const regex = /(0?[1-9]|[1|2][0-9]|3[0-1])\/(0?[0-9]|1[0-2])\/(\d*)/;
  return regex.test(fecha);
};

console.log(validarFecha("22/12/2000"));

//Ejercicio 7
const verificarEmail = (email) => {
  const regex = /(^\w{4,})+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  return regex.test(email);
};

console.log( verificarEmail("rival699@gma+il.com"));