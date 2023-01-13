<<<<<<< HEAD
var SubmitCartButton = document.getElementsByClassName('product-form__submit');

for (let index = 0; index < SubmitCartButton.length; index++) 
  {
    SubmitCartButton[index].addEventListener("click", OpenUpsellPopUp);
  }

function OpenUpsellPopUp() 
{
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
  var ProductQuickAddButton = document.getElementsByClassName('quick-add__submit');
  ProductQuickAddButton[0].click();
}


>>>>>>> 9c78483cf58f8b898ad8a5b7996f5ad636b2f18e
