{/*Program a function that repeats a text X times,
 eg. myFunction ('Hello World', 3) will return Hello World Hello World Hello World.*/}


 const myRepeatedText = (mytext = "", times = undefined) =>{
     

    let repeat = mytext;

    if(!repeat && !times){
        console.error('Both fields are emptys')
    }

    if(times === 0){
        console.warn('The numbers of times cant be {0}');
    }
    
     else if(!repeat || !times){
        console.warn('One of the two fields are empty');
    } else{

    for(let i = 1; i <= times; i++){
        console.info(`${repeat}  ${i}`);
    }
   }
 };

 myRepeatedText('Gilbert', 10);


 //Gilbert E. Tineo