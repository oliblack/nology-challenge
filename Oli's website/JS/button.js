

function pressSubmit() {

    var score = 0
    var answerText = document.getElementById("answerText")

    if(document.querySelector('input[name="guitar"]:checked').value == "15"){
        score++;
    };
    if(document.querySelector('input[name="japanese"]:checked').value == "3"){
        score++;
    };
    if(document.querySelector('input[name="golf"]:checked').value == "6"){
        score++;
    };
    if(document.querySelector('input[name="lyla"]:checked').value == "8"){
        score++;
    };
  
    switch (score) {
        case 0:
        answerText.innerHTML ="Terrible! you not 0 correct answers";
        answerText.style.color = "red";
          break;
        case 1:
        answerText.innerHTML ="Not great, only 1 correct answer";
        answerText.style.color = "orange";
          break;
        case 2:
        answerText.innerHTML ="Pretty good, you got 2 correct";
        answerText.style.color = "greenyellow";
          break;
        case 3:
        answerText.innerHTML ="Well done, you got 3 correct";
        answerText.style.color = "limegreen";
          break;
        case 4:
        answerText.innerHTML ="Perfect, you got all 4 correct!";
        answerText.style.color = "green";

     }

    

  }