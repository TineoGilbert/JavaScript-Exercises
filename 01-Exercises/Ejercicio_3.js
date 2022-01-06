{/*
Program a function that, given a String, returns an Array of texts separated 
by a certain character, eg. myFunction ('hello how are you', '') 
will return ['hello', 'what', 'are you'].

*/}



const separatedTex = (yourText = "") =>{
    let myText = yourText;

    if(!yourText){
        console.warn('Emty input');
    } else{
        
        let splitText = myText.split(' ');
        console.log(splitText);
    }
};

separatedTex('hello how are you');


//Gilbert E. Tineo