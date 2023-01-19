var result = document.querySelector('.input');
var r = 0;
var s = "";

document.querySelector(".container").addEventListener("click", function(evt){ 
  if(evt.target.classList.contains('btn')){
     var contenu = evt.target.innerText;
     console.log("calcul");
     if(contenu == "="){
       console.log("calcul");
       /*afficher le resultat*/
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