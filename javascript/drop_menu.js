function ClickedBtn(){
    $("#drop_menu_btn").click(function(){
    $("#drop_menu").toggle("600", "swing");
  
    });
  }
  
  $(document).ready(ClickedBtn);