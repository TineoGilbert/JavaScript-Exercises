{/*
2) Program a function that returns the text 
trimmed according to the number of characters indicated, 
eg. myFunction ("Hello World", 4) will return "Hello".

*/}

const myText = (c = "", end = 0) =>{
    let start = 0;
    let text = c;


     if(!c && !end){
        console.error('Both fields are empty');
    }
    
    else if(!c || !end){
        console.warn('One of the two fields are empty');
    }
    
    else{

        console.log(text.slice(start,end));
    }
    
}


myText('JavaScript',5);

//Gilbert E. Tineo