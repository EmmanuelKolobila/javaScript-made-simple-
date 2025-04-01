const student = {
    fname: "kolobila",
    lname: "Emmanuel",
    age: 23,
    class: "Bsc. Computer Science",
    level: "200",
    favoriteColor: "red",
    favoriteFood: "rice",
    favoriteSport: "football",

    fullname: function() {
        return this.fname + " " + this.lname;
    },
    myAge: function() {
        return this.age;
    },
    schoolRecord: function(){
        return this.class + " " + this.level;
    }
}
document.getElementById("fullname").innerHTML = "Your name is: " + student.schoolRecord();
