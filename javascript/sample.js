// function removeElement() {
//     const parentElement = document.getElementsByTagName("div")[0];
//     const target = document.getElementsByTagName("h1")[0];
//     parentElement.removeChild(target);
//   };
  
//   window.onload = removeElement;


  
//   function addLink() {
//     const element = document.createElement("a");
//     element.setAttribute("href", "https://diveintocode.jp/");
//     element.innerText = "DIVE INTO CODE";
//     const parentElement = document.getElementsByTagName("div")[0];
//     parentElement.appendChild(element);
//   };
  

//   function showLink(){
//     const link = document.getElementsByTagName("a")[0];
//     const url =link.getAttribute("href");
//     console.log(url);
//   }
//   function operateCss(){
//     const element=document.getElementsByTagName("h1")[0]
//     // const class1;
//     element.addEventListener('click', function(){
//       this.classList.toggle('background_pink');
//     });
//     console.log(class1);
//   }
//   window.onload = function(){
//     addLink();  
//     showLink();
//     operateCss();
//   } 

function ClickedBtn(){
  $("#btn").click(function(){
  //alert("Clicked")
  //$(this).hide("500", "linear");
  $("p").toggle("600", "linear");

  });
}

$(document).ready(ClickedBtn);