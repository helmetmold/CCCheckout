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


>>>>>>> 46cf08426229b9878d5809417e84b1aaee2e1f19
