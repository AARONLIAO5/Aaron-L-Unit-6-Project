// Declare your genre arrays here
let taste=document.querySelector(".input1");
let suggestion=document.querySelector(".input2");
let p= document.querySelector(".p");

// Make sure to declare your HTML elements as variables! 
let salty = ["https://funwithoutfodmaps.com/wp-content/uploads/2022/07/Low-FODMAP-Beef-Tacos-Square.jpg","https://assets3.thrillist.com/v1/image/3083797/750x500/flatten;crop;webp=auto;jpeg_quality=50.jpg" ,"https://images.squarespace-cdn.com/content/v1/58c35a0e579fb3281396b7f0/4ed27824-f3f0-4c6f-8e63-4cf3b5512f98/del+popolo.png"];
let sweet = ["https://cdn.britannica.com/38/230838-050-D0173E79/doughnuts-donuts.jpg", "https://www.thespruceeats.com/thmb/QjCQ4RTjmnhrovGkuJWzZCXYFX8=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-90053856-588b7aff5f9b5874ee534b04.jpg", "https://images.wideopencountry.com/wp-content/uploads/2020/10/birthday-cake2.png"];
let spicy = ["https://www.kitchensanctuary.com/wp-content/uploads/2016/02/Slow-cooked-spicy-chicken-square.jpg","https://www.thespruceeats.com/thmb/2XkF_tSpyhjbJdrsR4GB79hMsAY=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/hot-chicken-wings-3053250-hero-01-348a7fea11b54bbebd8ce19c9100880a.jpg", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6JQ3BPYOpyWbgjgYXAGrZ-HzcDPJ3jj8Yuw&usqp=CAU"];
// Submit Button 
let submitButton = document.querySelector(".button"); 
 submitButton.onclick = function() {
     let input1 = taste.value;
     if ( input1 === "salty"){
      for(   let item of salty ){
         p.insertAdjacentHTML("beforeBegin","<img src=" + item +">");
     }
 }
 };
   
        
    
    





