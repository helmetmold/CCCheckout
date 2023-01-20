var SubmitCartButton = document.getElementsByClassName('product-form__submit');

for (let index = 0; index < SubmitCartButton.length; index++) 
  {
    SubmitCartButton[index].addEventListener("click", OpenUpsellPopUp);
  }

function OpenUpsellPopUp() 
{
  var ProductQuickAddButton = document.getElementsByClassName('quick-add__submit');
  AddExtras();
  ProductQuickAddButton[0].click();
}

function AddExtras() 
{
  var extras = document.getElementsByClassName('Extras');
  for (let index = 0; index < extras.length; index++) 
  {
    console.log(extras[index]);
    if (extras[index].value == "Regular") 
    {
      console.log("log");
      var product = document.getElementById("Lunch (3-day)");
      product.click();
    } 
    else if (extras[index].value == "Vegetarian") 
    {
      var product = document.getElementById("Lunch (3-day)");
      product.click();
    }
    else if (extras[index].value == "Standard iPad rental") 
    {
      console.log("Standard iPad rental");
    }
    else if (extras[index].value == "iPad rental with insurance") 
    {
      console.log("iPad rental with insurance");
    }
    else if (extras[index].value == "Early Drop-Off") 
    {
      console.log("Early Drop-Off");
    }
    else if (extras[index].value == "Late Pick-up") 
    {
      console.log("Late Pick-up");
    }
    else if (extras[index].value == "Early Drop-Off and Late Pick-up") 
    {
      console.log("Early Drop-Off and Late Pick-up");
    }
  }
  
}
//get new cart button when made