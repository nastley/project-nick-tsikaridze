



const theWords = ["hello",
 "campfire","hexagon","bicycle","cucumber","one","carpet","tree","palm","phone","airplane",
 "banana","jungle","coffee","train","metro","love","danger","potato","house","whiskey","trolley",
 "circus","easy","water","cactus","grass","boulder","chicken","pizza","orange","juice","beach","mountain",
 "umbrella","cable","teacher","station","airport","restraunt","board",
"hotel"];

var lastword = null;
var currentword = "";
var orderedletters = [];
var orderedstring = [];
var scrambledletters = [];
var scrambledcombined = "";
var guessedword = "";
var letterhint = true;
var incorrectguesses = 0;
var difficulty = 0.2;
var checkboxhTF = false;
var checkboxinTF = true;
var hintletters = "";
var wincounter = 0;
var hintlettercounter = -1;
const guessbutton = document.querySelector("#guess");







document.querySelector('#generate').addEventListener('click', generateButtonClicked);
document.querySelector("#guess").addEventListener('click', compareanswer);
document.querySelector("#leftbutton").addEventListener('click', leftbuttonclicked);
document.querySelector("#rightbutton").addEventListener('click', rightbuttonclicked);
document.getElementById("difficultysetting").addEventListener("click", difficultychanged)
document.getElementById("firstletterhintcheck").addEventListener("click", updatefirstlettersetting)
document.getElementById("wrongguesscheck").addEventListener("click", updatewrongguessessetting)


function generateButtonClicked () {



  
  document.getElementById("input").value = ""

  hintletters = ""

  whichword();

  split(currentword);

  scramble(orderedletters,currentword);

  document.querySelector(".thewords > h1").innerHTML = `Your Word Is: "${scrambledcombined}"`;
  
  guessedword = ""

  document.getElementById("warning").classList.remove("show")
  document.getElementById("correct").classList.remove("show")
  document.getElementById("wrong").classList.remove("show")
  document.getElementById("none").classList.remove("show")

  incorrectguesses = 0;

  if (checkboxhTF === false){
    document.getElementById("hint").innerText = ""
  }

}




function whichword (){

nthword = Math.floor(Math.random() * theWords.length);

currentword = theWords[nthword];


while (currentword === lastword){
  
  nthword = Math.floor(Math.random() * theWords.length);
  currentword = theWords[nthword];

}

lastword = currentword;

console.log(currentword);

}








function split (word) {


    var letterPicked = "";
    orderedletters = [];
    orderedstring = [];
    var i = 0;
    var letterAmount = word.length;


    
    while (i < letterAmount){
    

    
    letterPicked = word[i]
    

    orderedletters.push(letterPicked);
    orderedstring.push(letterPicked);
    
    i = i + 1;
  };

    console.log(orderedletters)
    console.log(typeof(orderedletters))
    // orderedletters = Object.keys(orderedletters)
    // console.log(orderedletters)
    // console.log(typeof(orderedletters))
    // orderedletters = toString(orderedletters)
    
    // console.log(typeof(orderedletters))
    // console.log(orderedletters)
if (letterhint == true){
  console.log(orderedstring)
  console.log(typeof(orderedstring))

  document.getElementById("hint").classList.add("show")
  document.getElementById("hint").innerText = `the first letter is:
  "${orderedstring[0]}"`

}else {
  document.getElementById("hint").classList.remove("show")
}

}





function scramble (toscramble, curword) {

let scrambledletters  = []
let scramblei = 0;






scrambledletters = toscramble.sort(function(){
  return Math.random() - difficulty ; 
})


checksameI = 0

while (checksameI < 10000){
  scramblei = 0
    if (scrambledletters === orderedletters) {
      while (scramblei < 4){
        scrambledletters = toscramble.sort(function(){
          return Math.random() - difficulty ; 
          // change the number to be higher for more difficulty and lower for less difficulty 0.2 by deafult
        })
        scramblei = scramblei + 1
        }
      }
      checksameI = checksameI + 1
}









console.log(scrambledletters)










  combinedword = ""
  
  
  var i2 = 0
  while (i2 < curword.length){
    combinedword = combinedword + scrambledletters[i2]
    i2 = i2 + 1}
    console.log(combinedword)
    scrambledcombined = combinedword;
}









// function checkanswer () {

// compareanswer(currentword)



// }





function compareanswer (){
  guessedword = document.getElementById("input").value;
  guessedword = guessedword.toLowerCase()
  console.log(guessedword + " is guessed word")
  console.log(currentword + " was correct answer")
  if (currentword == ""){
    document.getElementById("warning").classList.add("show")
    document.getElementById("correct").classList.remove("show")
    document.getElementById("wrong").classList.remove("show")
    document.getElementById("none").classList.remove("show")
    }else{
          if (currentword === guessedword){
          document.getElementById("correct").classList.add("show")
          document.getElementById("wrong").classList.remove("show")
          document.getElementById("none").classList.remove("show")
          document.getElementById("warning").classList.remove("show")
          wincounter = wincounter + 1
          document.getElementById("wincounter").classList.add("show")
          document.getElementById("wincounter").innerText = `correct guesses: 
${wincounter}`
          guessbutton.setAttribute("disabled", "");


          setTimeout(() => {
            generateButtonClicked()
            guessbutton.removeAttribute("disabled", "");
          }, 1000);




          }else if (guessedword == ""){
          document.getElementById("correct").classList.remove("show")
          document.getElementById("wrong").classList.remove("show")
          document.getElementById("none").classList.add("show")
          document.getElementById("warning").classList.remove("show")
          }else if (currentword != guessedword){
          document.getElementById("correct").classList.remove("show")
          document.getElementById("wrong").classList.add("show")
          document.getElementById("none").classList.remove("show")
          document.getElementById("warning").classList.remove("show")
          incorrectguesses = incorrectguesses + 1;
          
          if(checkboxhTF === true){
            hintlettercounter = hintlettercounter + 1
          }



          if (checkboxhTF === true){
          if (hintletters.length < currentword.length){
          hintletters = hintletters + orderedstring[hintlettercounter]
          document.getElementById("hint").innerText = `"${hintletters}"`}}


          




          if (checkboxinTF === true){
            document.getElementById("counter").classList.add("show")
                  document.getElementById("counter").innerText = `incorrect guesses: 
${incorrectguesses}`
          }else {
            document.getElementById("counter").classList.remove("show")
            document.getElementById("counter").innerText = ""
            incorrectguesses = 0
          }
          
          




          console.log(incorrectguesses)
          }
         }

}


var clickedleft = false
var clickedright = false


  function leftbuttonclicked(){
  if(clickedleft === false){
  console.log("leftbuttonclicked")
  document.querySelector(".configs").classList.add("openwindow")
  document.querySelector(".configs > div > p").classList.add("hide")
  document.querySelector(".configs-r > div > p").classList.add("hide")
  document.getElementById("leftbutton").classList.add("movearrow")
  document.getElementById("leftbutton").innerText = `←`;
  document.getElementById("rightbutton").classList.add("hide")



  setTimeout(() => {
    document.querySelector(`.textcont`).classList.remove("hide")
    document.querySelector(`.textcont  :nth-child(1)`).classList.add("setting1")
    document.querySelector(`.textcont  :nth-child(2)`).classList.add("setting2")
    document.querySelector(`.textcont  :nth-child(3)`).classList.add("setting3")
    document.querySelector(`.textcont  :nth-child(4)`).classList.add("setting4")
}, 900);

//if the user clicks the button before it reaches the end it does bug out but its very hard and can be fixed buy clicking the button again so i didnt bother fixing it





  clickedleft = !clickedleft}
  else{
    console.log("leftbuttonclicked to close")
    document.querySelector(".configs").classList.remove("openwindow")
    document.querySelector(".configs > div > p").classList.remove("hide")
    document.querySelector(".configs-r > div > p").classList.remove("hide")
    document.getElementById("leftbutton").classList.remove("movearrow")
    document.getElementById("leftbutton").innerText = `→`;
    document.getElementById("rightbutton").classList.remove("hide")


    document.querySelector(`.textcont`).classList.add("hide")
    document.querySelector(`.textcont  :nth-child(1)`).classList.remove("setting1")
    document.querySelector(`.textcont  :nth-child(2)`).classList.remove("setting2")
    document.querySelector(`.textcont  :nth-child(3)`).classList.remove("setting3")
    document.querySelector(`.textcont  :nth-child(4)`).classList.remove("setting4")




    clickedleft = !clickedleft
  }

  }




  function rightbuttonclicked(){
  console.log("rightbuttonclicked")


  if(clickedright === false){
    console.log("rightbuttonclicked")
    document.querySelector(".configs-r").classList.add("openwindow")
    document.querySelector(".configs > div > p").classList.add("hide")
    document.querySelector(".configs-r > div > p").classList.add("hide")
    document.getElementById("rightbutton").classList.add("movearrow-r")
    document.getElementById("rightbutton").innerText = `→`;
    document.getElementById("leftbutton").classList.add("hide")

setTimeout(() => {
    document.querySelector(`.textcont-r`).classList.remove("hide")
    document.querySelector(`.textcont-r  :nth-child(1)`).classList.add("setting1")
    document.querySelector(`.textcont-r  :nth-child(2)`).classList.add("setting2")
    document.querySelector(`.textcont-r  :nth-child(3)`).classList.add("setting3")
    document.querySelector(`.textcont-r  :nth-child(4)`).classList.add("setting4")
}, 900);


 






    clickedright = !clickedright}
    else{
      console.log("rightbuttonclicked to close")
      document.querySelector(".configs-r").classList.remove("openwindow")
      document.querySelector(".configs-r > div > p").classList.remove("hide")
      document.querySelector(".configs > div > p").classList.remove("hide")
      document.getElementById("rightbutton").classList.remove("movearrow-r")
      document.getElementById("rightbutton").innerText = `←`;
      document.getElementById("leftbutton").classList.remove("hide")


      document.querySelector(`.textcont-r`).classList.add("hide")
      document.querySelector(`.textcont-r  :nth-child(1)`).classList.remove("setting1")
      document.querySelector(`.textcont-r  :nth-child(2)`).classList.remove("setting2")
      document.querySelector(`.textcont-r  :nth-child(3)`).classList.remove("setting3")
      document.querySelector(`.textcont-r  :nth-child(4)`).classList.remove("setting4")




      clickedright = !clickedright
    }

  }


function difficultychanged(){
  console.log("difficultychanged")
  
  document.getElementById("difficultydisplay").innerText = document.getElementById("difficultysetting").value * 10

  difficulty = document.getElementById("difficultysetting").value

}

function updatefirstlettersetting () {
  checkboxhTF = !checkboxhTF
  console.log(checkboxhTF)
  letterhint = checkboxhTF
}

function updatewrongguessessetting () {
  checkboxinTF = !checkboxinTF
  console.log(checkboxinTF)

  if (checkboxinTF === false){
    document.getElementById("counter").innerText = ""
    incorrectguesses = 0
  }else{
    document.getElementById("counter").innerText = `incorrect guesses: 
${incorrectguesses}`
  }
}


