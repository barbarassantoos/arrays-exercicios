
const numbers = [8,15,23,88,5]

const string = ["Today", "Tomorrow", "Yesterday"]

const mix = [7,"Sunny", false ]

//A)Imprima a **quantidade de itens** de cada array (utilize um `console.log()` para cada impressão).
console.log(numbers.length);
console.log(string.length);
console.log(mix.length);

// b) Imprima o **primeiro item** do primeiro array, o **segundo item** do segundo array, e o **terceiro item** do terceiro array.
console.log(`o primeiro item da nossa variavel denominada como numbers é ${numbers[0]}`);
console.log(`o segundo item da nossa variavel denominada como strings é ${string[1]}`)
console.log(`o terceiro  item da nossa terceira denominada como mix é ${string[2]}`)

// c) **Verifique** se um item está incluído no primeiro array e depois no terceiro array. Imprima o resultado dessas verificações no `console.log()`. 
// A primeira impressão deve retornar um booleano **true** e a segunda deve retornar um booleano **false**.
 console.log(numbers.includes(88))
 console.log(mix.includes("Rainy"))
