{/*
Program a function that reverses the words in a text string,
 eg. myFunction ("Hello World") will return "dlroW olleH".
*/}


let reverseTex = (r = "") =>{
    return console.log(r.split("").reverse().join(""));
}

reverseTex('Hello World');