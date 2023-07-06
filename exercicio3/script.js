const numbers = [8,15,23,88,5]

const string = ["Today", "Tomorrow", "Yesterday"]

const mix = [7,"Sunny", false ]

const numbersCopy = numbers.slice()
const stringCopy = string.slice()
const mixCopy = mix.slice()
//-------------------------------------------------
// a) Adicione um item `number` ao **início** do primeiro array. Utilize `console.log()` para exibir o original e a cópia.
numbersCopy.unshift(10)
console.log(`Adicionando mais um item na copia:${numbersCopy}`);
console.log(numbers);

// b) Remova o **último item** do segundo array. Utilize `console.log()` para exibir o original e a cópia.
stringCopy.pop()
console.log(`Removendo o ultimo item ficamos com:${stringCopy}`);
console.log(string);

// c) Remova o **segundo item** do terceiro array. Utilize `console.log()` para exibir o original e a cópia.
mixCopy.splice ( 2,1 )
console.log(`Removendo o segundo item ficamos com:${mixCopy}`);
console.log(string);



  