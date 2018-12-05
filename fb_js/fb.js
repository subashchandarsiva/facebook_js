// Create an object and an array which we will use in our facebook exercise. 


// 1. Create an object that has properties "username" and "password". Fill those values in with strings.

var users={
 username:"subash",
 password:"chandar",
};
var user2={
 username:"chandar",
 password:"subash",
};
var user3={
 username:"shanthi",
 password:"shanthi",
};

// 2. Create an array which contains the object you have made above and name the array "database".

var database =[users,user2,user3];

// 3. Create an array called "newsfeed" which contains 3 objects with properties "username" and "timeline".
var newsfeed=[
    {
        username:"saran",
        timeline:"29th october",
    },
    {
        username:"kumar",
        timeline:"20th october",
    },
    {
        username:"lone",
        timeline:"2nd october",
    }
];
function isValid(user,pass){
    // database.forEach(function(i){

    //     i.username===user;
    //     i.password===pass;
    //     console.log(i.username);
    //     return true;
    // })
    // return false;
    for(var i=0;i<database.length;i++){
        if(database[i].username===user && database[i].password===pass){
           // console.log("success");
            return true;
        }
    }
    return false;
}

//console.log(newsfeed);

function Login(user,pass){
    if(isValid(user,pass)){
        console.log(newsfeed,"Inlogin");
    }
    
    // if(user===database[0].username && pass===database[0].password){
        
    //     console.log(newsfeed)
        
    // }
    else{
        console.log(user,pass);
        alert("Wrong username or password");
    }
}

var usernameprompt = prompt("what is your username?");
var passwordprompt = prompt("what is your password?");

Login(usernameprompt,passwordprompt);
// isValid(usernameprompt,passwordprompt);