/* creation de variable */

let sentence = "Le film n'est pas si mal, j'aime bien";

let wordNot = sentence.substring(0,25);
console.log(wordNot);

let wordBad = sentence.substring(26);
console.log(wordBad);

/* remplacement des mots */

 console.log(sentence.replace("n'est pas si mal", "est bon"));

 console.log(sentence);

