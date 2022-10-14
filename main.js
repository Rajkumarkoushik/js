// Display time
var button = document.getElementById("demo");
document.getElementById("btn1").addEventListener("click", function(){
    button.innerHTML = Date();
    button.classList.toggle("remove");
})

// On hover and hover out effect

document.querySelector(".hover").addEventListener("mouseover", function(){
document.querySelector(".practice").innerHTML += "mouseover! <br>"
})
document.querySelector(".hover").addEventListener("mouseout", function(){
document.querySelector(".practice").innerHTML += "moused out! <br>"
})
document.querySelector(".hover").addEventListener("click", function(){
document.querySelector(".practice").innerHTML += "clicked! <br>"
})



// Digital clock
function showTime(){
    var date = new Date();
    var hh = date.getHours();
    var mm = date.getMinutes();
    var ss= date.getSeconds();
    var session = "AM";
    
    if(hh == 0){
        hh = 12;
    }
    if(hh > 12){
        hh = hh - 12;
        session = "PM";
    }

    hh = (hh < 10) ? "0" + hh :hh;
    mm = (mm < 10) ? "0" + mm :mm;
    ss = (ss < 10) ? "0" + ss :ss;

    var time = hh + ":" +  mm + ":" + ss + " " + session;

    document.querySelector(".digital-clock").innerText = time;
    document.querySelector(".digital-clock").textContent= time;
    setTimeout(showTime, 1000);
}

showTime();

let names = ["koushik", "rajkumar", "Raghu", "mani", "Raja", "Ramu"];

names[2] = "satish";
names.pop();
names.push("Srinivas <br>");
names[0] = "Nagu"
document.write(names);

let bank = 200;
bank = 100;

document.write(bank);

let letters = ["<br> Koushik", "Raj", "Sunny"];
let newLetters = letters ;

newLetters.push("Ram <br>");
document.write(letters);


const tweet = {
    name: "<br> Koushik", age : 25, tweets : 30
};

const newTweet = tweet;
newTweet.tweets = 25;

document.write(tweet.tweets);

const videos = ["Name is Koushik", "Age is 24 <br>"];




videos.forEach(function(video){
    document.write("<br> My <br>");
    
    document.write(video);
    
});

// Higher order function
function repeater(fn){
    fn();
    fn();
    fn();
    fn();
    fn();
}
repeater (function(){
    document.write("Hello There! <br>");
});

// Ternary Operator

   
  let ages =  document.querySelector(".sub-btn");
  ages.addEventListener("click", function(){
        let age = document.querySelector(".age").value;
        let vote = (age < 18) ? "Too Young " : "Old enough";
        document.querySelector(".para-demo").innerHTML = vote + " to vote.";
        document.querySelector(".para-demo").classList.toggle("none");
    });

//  Loops condition

let text = "";
for (let i = 0; i < 10; i++){
    text += "Koushik" + i + "<br>";
}
document.querySelector(".loop").innerHTML = text;
    

// Arrow function starts
const kouTime = document.querySelector(".koushik-btn");
const kouDemo = document.querySelector(".kou-demo");

kouTime.addEventListener("click", () => {
    kouDemo.innerHTML = Date();
    

});

// Arrow function ends

// Function   

// function learnFunction(){
//     let alert = prompt("What is your name");
//     console.log("My name is " + alert );
// }
// learnFunction();

// Function

 
