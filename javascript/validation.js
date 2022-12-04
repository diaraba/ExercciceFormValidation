// window.onload= function(){
//     const forms=document.forms;
//     forms[0].name.value = "Please enter your name";
//     console.log(forms[0].name);
// }

function confirmSubmit() {
    const forms = document.forms;
  
    const name =forms[0].name.value; 
    console.log(name);
    forms[0].onsubmit = function(){
        if (! (confirm(`${name}, are you sure you want to send? `))){
            alert("Cancelled");
            return false;
          }
    };
  };
  
  window.onload = confirmSubmit;

function emailvalidation(){
  const forms =document.getElementById("form");
  const formsEml =document.getElementById("email_confirm");
  const formsSubmt =document.getElementById("sbmt");
  
  const elements = document.getElementsByClassName("column");
  const formsInput =document.getElementsByTagName("tr")[3];

  formsEml.addEventListener('keyup',function(e){
    if(forms.email.value!=forms.email_confirm.value){
          // The SUBMIT process is canceled before the conditional branch.
      e.preventDefault();
      const element=document.createElement("p")
      const message=document.createTextNode("Les Emails ne correspondent pas")
      element.appendChild(message);
      formsInput.before(element);
     //formsInput.insertBefore(message, formsEml);
      element.classList.add("column");
      formsEml.classList.add("alert");//permet d'ajouter le style defini dans la classe "alert" à l'élément DOM "element"
    setTimeout(function(){
     formsEml.classList.remove("alert");
      //   formsInput.removeChild(element);
      // formsEml.removeChild(element);
      }, 3000);
      setTimeout(function(){

        while(elements.length > 0){
        elements[0].parentNode.removeChild(elements[0]);
        }
        }, 2500);
  } 
  else{
     formsEml.classList.remove("alert");
      // If a match is found, submit again.
     if(formsSubmt.onclick()){
      forms.submit();
      }
      
  }
  
  });
    
};
window.onload=function(){
//confirmSubmit() ;
emailvalidation();
}
