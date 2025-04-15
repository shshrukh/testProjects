const words = [
    "apple", "banana", "cat", "dog", "elephant", "fish", "grape", "house", "ice", "jungle",
    "kite", "lemon", "monkey", "night", "orange", "pencil", "queen", "rabbit", "sun", "tree",
    "umbrella", "vase", "whale", "xylophone", "yarn", "zebra", "air", "book", "cloud", "desk",
    "eagle", "flag", "glass", "hat", "island", "jacket", "key", "lamp", "mountain", "nest",
    "ocean", "piano", "quiet", "river", "snow", "tiger", "uniform", "violin", "window", "yard",
    "zoo", "ant", "ball", "car", "drum", "engine", "feather", "gold", "hill", "ink",
    "jar", "kangaroo", "lion", "moon", "net", "owl", "pumpkin", "quilt", "rose", "star",
    "train", "unicorn", "village", "watch", "x-ray", "yo-yo", "zipper", "arch", "bridge", "circle",
    "dolphin", "earth", "fire", "giant", "hero", "idea", "jungle", "king"
]

wordsLength = words.length
const randomNumber = Math.floor(Math.random()*wordsLength);
const lettesList = document.getElementById('lettersList');
const remlives = document.querySelector('.remLives');


// making li for for each letters in words array

function creatingLi() {
    const li = document.createElement('li');
    li.classList.add('letter')
    li.innerText = '_';
   return lettesList.append(li)
}

// creatingLi();

//this will select a random word for words array.
const randomWord = words[randomNumber];
console.log(randomWord);

for (let index = 0; index < randomWord.length; index++) {
    // const element = randomWord[index];
    creatingLi();

}
const hiddenLetters = document.querySelectorAll('li');
// console.log(hiddenLetters);



const input = document.getElementById('input');
// console.log(input);

let lettersArray =[];


for (let index = 0; index < randomWord.length; index++) {
        const element = randomWord[index];
        lettersArray.push(element);
}

input.addEventListener('keyup', (e)=>{
    if (lettersArray.includes(e.key)) {
        lettersArray.findIndex((element, index,)=>{
            if (e.key == element) {
                hiddenLetters[index].innerText = element;
                input.children[0].value = '';
                
            }
        });
        
        // const index = lettersArray.findIndex(e.key);
        // console.log(index);
        
        
    }else{
        console.log('unhappy');
        input.children[0].value = '';
        // console.log(lettersArray);
        
    }
    
    
});
// console.log(lettersArray);



























// for (let index = 0; index < randomWord.length; index++) {
//     const element = randomWord[index];
//     lettersArray.push(element)
// }
// console.log(lettersArray);
// // targeting input button
// const btn = document.getElementById('input');
// console.dir(btn);

// btn.addEventListener('keyup',(e)=>{
//     if (lettersArray.includes(e.key)) {
//         hiddenLetters[0].innerText = e.key
        
//         setTimeout(() => {
//             btn.children[0].value = '';
            
//         }, 1000);
//     }else{
//         console.log('unhappy');
//         btn.children[0].value = '';
//     }
// });


// console.log(randomNumber);

