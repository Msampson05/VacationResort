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
    let roomRate = 0 
    if (checkInDate = inSeasonDate) {
            roomRate += 250
    }

     if (checkInDate = outOfSeason) {
        roomRate += 150
     }
    }
    function EstimatebtnOnClick() {
 
     //Call HTML elements needed for ouput 

     // If statement for checked rooms 

      //If statement for discounts 

      // If statement for maxoccupancy 

      
      
      
      //total output for each h6 tag 


    console.log("EstimatebtnOnClick")

   
    
    
}
