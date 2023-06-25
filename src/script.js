const buttons = document.querySelectorAll(".button");
const ratingNumber = document.getElementById("ratingNu");

buttons.forEach((button) => {
    button.addEventListener("mousedown", function() {
        button.classList.remove("hover");
        button.classList.remove("clicked");
        button.classList.add("down");
    })
    button.addEventListener("mouseup", function() {
        button.classList.remove("down");
        button.classList.add("hover");
    })
});

function afterClick(buttonId) {
  const clickedButton = document.getElementById(buttonId);
  const buttonValue = clickedButton.innerText;
  
  buttons.forEach((button) => {
    if(button.getAttribute("id") != buttonId){
        button.classList.remove("clicked");
    } 

  });
  clickedButton.classList.add("clicked");
    

  ratingNumber.innerHTML = buttonValue;
}



function submitAnswer() {
  const thanksS = document.getElementById("thanksS");
  const ratingS = document.getElementById("ratingS");

  buttons.forEach((button) => {
    if(button.classList.contains("clicked")) {
      thanksS.style.display = "flex";
      ratingS.style.display = "none";    
    } 
  })

  /*if (ratingNumber.innerText != "" && ratingNumber.innerText != null) {
    thanksS.style.display = "flex";
    ratingS.style.display = "none";
  }*/
}

document.getElementById("submitStars").addEventListener("click", submitAnswer)

