{/* Program a function that counts 
the number of characters in a text string, eg. myFunction ("Hello World") will return 10. */}




const characters = (c = "") =>{
    const letters = c;

    if(!c){
        console.warn('No insertates ninguna cadena');
    } else{
    let text1 = "The text: ";
    let text2 = "has ";
    let text3 = "characters ";
    console.log(text1 + `${c}` + ` ${text2}` + letters.length + ` ${text3}`);

    }
};

characters('Hello World from JavaScript');

//Gilbert E. Tineo