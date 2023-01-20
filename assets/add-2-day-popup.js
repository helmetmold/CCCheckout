var SubmitCartButton = document.getElementsByClassName('product-form__submit');

for (let index = 0; index < SubmitCartButton.length; index++) 
  {
    SubmitCartButton[index].addEventListener("click", OpenUpsellPopUp);
  }

function OpenUpsellPopUp() 
{
  console.log("BRUH");
  var ProductQuickAddButton = document.getElementsByClassName('quick-add__submit');
  ProductQuickAddButton[0].click();
}

function AddExtras() 
{
  var extras = document.getElementsByClassname("Extras");
  for (let index = 0; index < extras.length; index++) 
  {
    if (extras[index].value === "Regular") {
      console.log("Regular Lunch")
    } else if (select.value === "Vegetarian") {
      console.log("Vegetarian Lunch");
    }
  }
  
}
//get new cart button when made