"use strict";



window.onload = function() {
    let Estimatebtn = document.getElementById("Estimatebtn");
    Estimatebtn.onclick = EstimatebtnOnClick;
    // other events handlers connected here
   }

// Get month Prices Seperated 
   function getRoomRate(){
    const checkInDate = document.getElementById("checkInDate");
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September","October", "November", "December"];
    let inSeasonDate = new Date(checkInDate).date = months[inSeasonDate.getMonth(5 ,6, 7)];
    let outOfSeason = new Date(checkInDate).date = months[outOfSeason.getMonth(0, 1, 2 , 3, 4, 5 ,8 , 9 ,10 ,)];
    let roomRate = 0 ;
    let twinRoomRate = 0 ;
    if (checkInDate = inSeasonDate) {
            roomRate ;
    }

     if (checkInDate = outOfSeason) {
        roomRate ;
     }
    }
    function EstimatebtnOnClick() {
        //Call HTML elements needed for ouput 
      const numberOfDays = Number(document.getElementById("numberOfDays").value);

     // If statement for checked rooms 
      if (document.getElementById("queenRoom").checked){
        queenRoom = 150

      }
      if (document.getElementById("KingRoom").checked){
          KingRoom =  150
      }
      if (document.getElementById("twoBedRoom").checked){
        twoBedRoom =  210
      }

      //If statement for discounts 
      if (document.getElementById("inputNone").radio){

      }

      // If statement for maxoccupancy 

      
      
      
      //total output for each h6 tag 
      
      // The orginal room cost would be determined by the inseasondate 
     document.getElementById("orginalRoomCost").innerHTML = 'Original Room Cost:' + (roomRate);

    console.log("EstimatebtnOnClick")

   
    
    
}
