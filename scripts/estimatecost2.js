"use strict";


window.onload = init;

   function init() {
    const Estimatebtn = document.getElementById("Estimatebtn");
    Estimatebtn.onclick = EstimatebtnOnClick;
    // other events handlers connected here
   }
   
   function EstimatebtnOnClick(){

   
   // Get Room Rate Function
 
    let checkInDateInput = document.getElementById("checkInDateInput");
    let checkInDate = new Date(checkInDateInput.value);
    let checkInDateMonth = checkInDate.getMonth();

    let queenRoomType = document.getElementById("queenRoomType")
    let kingRoomType = document.getElementById("kingRoomType")
    let twoBedRoomType = document.getElementById("twoBedRoomType")
    

    //Create roomtype variables

    let roomType;
    if(queenRoomType.checked){ roomType = "queenRoom"};
    if(kingRoomType.checked){ roomType = "kingRoom"};
    if(twoBedRoomType.checked){ roomType = "twoBedRoom"};


   // If Else Statement for in season and out of season months

    let roomRateType;
    if(checkInDateMonth >= 5 && checkInDateMonth <= 7){
        roomRateType = "In-Season Prices";
    }
      else{
        roomRateType = "Out Of Season Prices";
      }
      

  // Set roomrates for the seasons 

    let roomRate;
    if(roomType == "queenRoom" || roomType == "kingRoom"){
      if(roomRateType == "In-Season Prices") {roomRate = 250};
      if(roomRateType == "Out Of Season Prices") {roomRate = 150};
    }
   //  if (roomType == "kingRoom"){
   //    if(roomRateType == "In-Season Prices"){roomRate = 250};
   //    if(roomRateType == "Out Of Season Prices"){roomRate = 150};
   //  }
    if (roomType == "twoBedRoomType"){
      if (roomRateType == "In-Season Prices") {roomRate = 350};
      if (roomRateType == "Out Of Season Prices"){roomRate = 210};
    }
   

 
    //Number of Days 
    const numberOfDays = Number(document.getElementById("numberOfDays").value);


     // Check Discounts 
     let discountCodePrice;
     let discountstring; 
    if (document.getElementById("inputNone").checked){
        discountCodePrice = Number(0);
        discountstring = "0%"
    }
    if (document.getElementById("inputAAAdis").checked){
        discountCodePrice = Number(10/100);
        discountstring = "10%"
    }
    if (document.getElementById("inputMILdis").checked){
         discountCodePrice = Number(20/100) ;
         discountstring = "20%"
     }
     

    // Tax 
    let taxRate = Number(12/100) ;
    let tax = "12%" 

     // Calculate Estimate Cost 
     let originalRoomCost = roomRate * numberOfDays ;
     let totalEstimate = originalRoomCost - (originalRoomCost * discountCodePrice) ;
     

     document.getElementById("orginalRoomCost").innerHTML = `Original Room Cost : ${originalRoomCost};`
     document.getElementById("discount").innerHTML = `Discount :  ${discountstring} ;`
     document.getElementById("discountedRoomCost").innerHTML = `Discounted Room Cost: ${totalEstimate} `;
     document.getElementById("tax").innerHTML = 'Tax :' + tax ;
     document.getElementById("totalCostofTheStay").innerHTML = `Total Cost Of Stay: ${(totalEstimate) + (taxRate * totalEstimate)}`;
   
   }