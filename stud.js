// Prompting function


function studentGrading(){
    let prompt = require('prompt-sync')();
    //
    // get input from the user.
    //
    let marks = prompt('Input your Marks: ');

    // Conditional statements for grading
    if(marks > 79 && marks <= 100){ 
        console.log('Your Grade is A');
    }//
    else if(marks >= 60 && marks <= 79){
        console.log("Your grade is B"); 
    }
    else if ( marks >= 49 && marks <=59){
        console.log('Your grade is C')
    }
    else if (marks >= 40 && marks <= 48){
        console.log('Your grade is D' )
        
    }
    else if (marks < 40 && marks >=0){
        console.log("Your grade is E")
    }
    else{
        console.log('Invalid marks');
    } //we finish off with else for invalid marks 
}

// Calling the prompting function 
studentGrading();


