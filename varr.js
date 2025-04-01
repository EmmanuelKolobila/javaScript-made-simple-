let x = 4;
let y = x+6 ;

document.getElementById("demo").innerHTML = "The value of y is: " +  y + "<br>" + "The value of x is: " + x;


// function one, this function prints my name and age
let output = myName("kwaku", "Emmanuel,", 23, "red");
document.getElementById("name").innerHTML = "Your name is: " + output;

function myName(fname, lname, age, color) {
    return fname + " " + lname + " " + "I am " + age + " years old" + " and my favorite color is " + color;
}

