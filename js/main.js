var allModal = document.getElementsByClassName("modal");
var errorModal = document.getElementById("errorModal");
var btn = document.getElementById("subBtn");
var closeModal = document.getElementsByClassName('close');
var input = document.getElementById("year");
var leapModal = document.getElementById("leapModal");
var nonLeapModal = document.getElementById("nonLeapModal");
btn.onclick = function(){
  if(input.value < 1000){
    errorModal.style.display = "block";
  } else if(input.value % 4 == 0){
    if(input.value % 100 == 0){
      if (input.value % 400 == 0) {
        leap();
      } else{
        notLeap()
      }
    } else {
      leap();
    }
  } else {
    notLeap();
  }
};
for(var i =0; i < closeModal.length; i++){
  closeModal[i].onclick = function(){
    for(var i = 0; i < allModal.length; i++){
      allModal[i].style.display = "none";
    }
  };
}

function leap(){
  leapModal.style.display = "block";
};
function notLeap(){
  nonLeapModal.style.display = "block";
}
