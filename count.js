document.getElementById("countButton").addEventListener("click", () => {
    const inputText = document.getElementById("userInput").value;
    const vowels = "aeiouAEIOU";
    let count = 0;
  
    // Loop through the input text to count vowels
    for (let char of inputText) {
      if (vowels.includes(char)) {
        count++;
      }
    }
  
    // Display the result
    const result = document.getElementById("result");
    result.innerText = "The number of vowels is: "+ count;
  });

  //code for dark-mode

  const inputEl = document.querySelector(".input");
  const bodyEl = document.querySelector("body");
  const footer = document.querySelector("footer");
  const con = document.querySelector(".con");
 


  inputEl.checked = JSON.parse(localStorage.getItem("mode"));

  updateBody();
  function updateBody(){
    if(inputEl.checked){
      bodyEl.style.background="linear-gradient(180deg, rgba(77, 76, 5, 0.604),black)";
      footer.style.background="grey";
      con.style.background="linear-gradient(80deg, rgba(250, 235, 215, 0.604),white)";
    }
    else{
      bodyEl.style.background="linear-gradient(80deg, rgba(250, 235, 215, 0.604),white)";
      footer.style.background="#100f0f8c";
      con.style.background="rgba(250, 235, 215, 0.604)";


    }
  }
  inputEl.addEventListener("input", () =>{
    updateBody();
    updateLocalStorage();
  });
  function updateLocalStorage(){
    localStorage.setItem("mode", JSON.stringify(inputEl.checked));
  }
//   function displayTime(){
//     const timeDisplay = document.getElementById("timeDispaly");
//     const currentTime =new
//     Date().toLocaleTimeString();
//     timeDisplay.textContent= "currentTime"+ currentTime;
//   }