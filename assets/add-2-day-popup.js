<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js" type="text/javascript"></script>
$(document ).ready()
{
  var SubmitCartButton = document.getElementsByClassName('product-form__submit');
  SubmitCartButton[0].addEventListener("click", OpenUpsellPopUp);
  
  function OpenUpsellPopUp() 
  {
    var ProductQuickAddButton = document.getElementsByClassName('quick-add__submit');
    
    ProductQuickAddButton[0].click();
  }
  
  function AddLunch()
  {
    var LunchChoice = document.getElementById("3-day-lunch").value;
    if (LunchChoice == "Regular") {
      var LunchButton = document.getElementsByClassName('btn-add-on');
      LunchButton[0].click();
    }
    else if (LunchChoice == "Vegetarian") {
      var LunchButton = document.getElementsByClassName('btn-add-on');
      LunchButton[0].click();
    }
  
  }
  
}


//get new cart button when made