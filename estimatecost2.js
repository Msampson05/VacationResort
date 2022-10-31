"use strict";


window.onload = function() {
    let Estimatebtn = document.getElementById("Estimatebtn");
    Estimatebtn.onclick = EstimatebtnOnClick;
    // other events handlers connected here
   }
   

   
// Get Room Rate Function
   function getRoomRate(){
    const checkInDate = document.getElementById("checkInDate");
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September","October", "November", "December"];
    let inSeasonDate = new Date(checkInDate).date = months[inSeasonDate.getMonth(5 ,6, 7)];
    let outOfSeason = new Date(checkInDate).date = months[outOfSeason.getMonth(0, 1, 2 , 3, 4, 5 ,8 , 9 ,10 ,)];
    //let roomRate = 0 ;
    }

function EstimatebtnOnClick() {

 
    //Elements to calculate room
    const numberOfDays = document.getElementById("numberOfDays").style.display;
    const queenRoom = document.getElementById("queenRoom").checked;
    const kingRoom = document.getElementById("kingRoom").checked;
    const twoBedRoom = document.getElementById("twoBedRoom").checked;
    
    let orginalRoomCost = 0;
    let tax = Number(12/100);

  // Setting if statement for season rates
    if(queenRoom.Date) { 
       inSeasonDate = orginalRoomCost += (250 * numberOfDays) + tax ;
    }
    else if (queenRoom.Date){
        outOfSeason =  orginalRoomCost + 150 ;
    }
    if(kingRoom.Date) {
       inSeasonDate =  orginalRoomCost += (250 * numberOfDays) + tax ;
    }
     else if (kingRoom.Date){
        outOfSeason = orginalRoomCost += (150 * numberOfDays)+ tax ;
     }
    if(twoBedRoom.Date) {
       inSeasonDate =  orginalRoomCost += (350 * numberOfDays) + tax ;
    }
     else if (twoBedRoom.Date){
        outOfSeason = orginalRoomCost += (210 * numberOfDays) + tax ;
     }
     return orginalRoomCost;
     

     // Check Discounts 
    let Discount = 0 
    if (getElementById("inputNone").checked){

         Discount = orginalRoomCost - (0/100) ;
    }
    if (getElementById("inputMILdis").checked){

        Discount = orginalRoomCost - (10/100) ;
    }
    if (getElementById("inputAAAdis").checked){

        Discount = orginalRoomCost - (20/100) ;
     }
     return Discount ; 


     // Calculate Estimate Cost 
     let totalEstimate = orginalRoomCost() - Discount();

     document.getElementById("orginalRoomCost").innerHTML = 'Original Room Cost:' + orginalRoomCost().toFixed(2);
     document.getElementById("discount").innerHTML = 'Discount:' + Discount() ;
     document.getElementById("discountedRoomCost").innerHTML = 'Discounted Room Cost:' + orginalRoomCost().toFixed(2);
     document.getElementById("tax").innerHTML = 'Tax' + tax ;
     document.getElementById("totalCostofTheStay").innerHTML = 'Total Cost Of Stay' + totalEstimate;
    
    
    }