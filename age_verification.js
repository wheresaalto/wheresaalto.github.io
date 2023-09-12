function checkAge() {
    var age;

if((age = prompt("What is your age?", "")) != null){

// check age for alcohol //
    if (age >= 19) {
        document.write("You can drive, go to the casino, and purchase alcohol!");
// check age for casino \\
    } else if (age >= 18) {
        document.write("You can drive and go to the casino!");
// check age for driving //
    } else if (age >= 16 && age < 18) { 
        document.write("You can drive!");
// if the variable does not meet any of these statements, this message is printed //
    } else { 
        document.write("You are not old enough to drive, go to the casino, or purchase alcohol.");
        }
    }
}

// reference: I learned this from https://www2.cs.sfu.ca/CourseCentral/290/dixon/Notes/Sbcc/notes/drink_ex.html and combined it with previous knowlegde and class code // 

