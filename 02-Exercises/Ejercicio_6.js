{/*
Program a function to count the number of times a word is repeated in long text,
 eg. miFuncion ("hello world bye world", "world") will return 2
*/}

const repeatWord = (c = "", t = "") =>{
    if(!c) return console.warn("You did not enter a text");

    if(!t) return console.warn("There is no word to evaluate");

    let i = 0;
    let counter = 0;

    while(i !== -1){
        i = c.indexOf(t,i);
        if(i !== -1){
            i++;
            counter++;
        };
    }

    return console.log(`The word ${t} ir repeated ${counter} times`);
}


repeatWord("Hello World World World Hello","World");