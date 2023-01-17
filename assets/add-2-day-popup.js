var SubmitCartButton = document.getElementsByClassName('product-form__submit');

var LunchChoice = document.getElementById("3-day-lunch").value;

for (let index = 0; index < SubmitCartButton.length; index++) 
  {
    SubmitCartButton[index].addEventListener("click", OpenUpsellPopUp);
  }

function OpenUpsellPopUp() 
{
  console.log("open upsell");
  var ProductQuickAddButton = document.getElementsByClassName('quick-add__submit');
  if (LunchChoice == "Regular") {
    var LunchButton = document.getElementsByClassName('btn-add-on');
    LunchButton[0].click();
  }
  else if (LunchChoice == "Vegetarian") {
    var LunchButton = document.getElementsByClassName('btn-add-on');
    LunchButton[0].click();
  }

  ProductQuickAddButton[0].click();
}


//get new cart button when made