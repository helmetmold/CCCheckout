<<<<<<< HEAD
var SubmitCartButton = document.getElementsByClassName('product-form__submit');

for (let index = 0; index < SubmitCartButton.length; index++) 
  {
    SubmitCartButton[index].addEventListener("click", OpenUpsellPopUp);
  }

function OpenUpsellPopUp() 
{
  console.log("open upsell");
  var ProductQuickAddButton = document.getElementsByClassName('quick-add__submit');
  ProductQuickAddButton[0].click();
}


//get new cart button when made

=======
var SubmitCartButton = document.getElementsByClassName('product-form__submit');

for (let index = 0; index < SubmitCartButton.length; index++) 
  {
    SubmitCartButton[index].addEventListener("click", OpenUpsellPopUp);
  }

function OpenUpsellPopUp() 
{
  console.log("open upsell");
  var ProductQuickAddButton = document.getElementsByClassName('quick-add__submit');
  ProductQuickAddButton[0].click();
}


//get new cart button when made

>>>>>>> a83d7143c91e85b03e0aec55ad48641a3d6dfbd3
