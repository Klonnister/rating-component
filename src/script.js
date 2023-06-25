const buttons = document.querySelectorAll(".button");
const ratingNumber = document.getElementById("ratingNu");

buttons.forEach((button) => {
    button.addEventListener("mousedown", function() {
      button.classList.add("down");
      button.classList.remove("hover");
    })
    button.addEventListener("mouseup", function() {
      button.classList.remove("down");
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

  if(!clickedButton.classList.contains("clicked")){
    clickedButton.classList.add("clicked");
    ratingNumber.innerHTML = buttonValue;
  } else {
    clickedButton.classList.remove("clicked");
    clickedButton.classList.add("hover");
    ratingNumber.innerHTML = "";
  }
}



function submitAnswer() {
  const thanksS = document.getElementById("thanksS");
  const ratingS = document.getElementById("ratingS");

  if (ratingNumber.innerText != "" && ratingNumber.innerText != null) {
    thanksS.style.display = "flex";
    ratingS.style.display = "none";
  } else {
    alert("Please select a number.")
  }
}

document.getElementById("submitStars").addEventListener("click", submitAnswer)

