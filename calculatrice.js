

let result = document.querySelector('.input');
let r = 0;
let s = "";

document.querySelector(".container").addEventListener("click", function(event){ 
  if(event.target.classList.contains('btn')){
     let contenu = event.target.innerText;
     console.log("calcul");
     if(contenu == "="){
       console.log("calcul");
      
       r = eval(s);
       result.innerText = r;
       s = r.toString();
     }
     else{
       
       if(contenu == "C"){
         s = "";
         result.innerText = s;
       }
       
       else{
         s = s + contenu; 
       result.innerText = s;
       }
     }
  }  
  });






