var SubmitCartButton = document.getElementsByClassName('product-form__submit');

for (let index = 0; index < SubmitCartButton.length; index++) 
  {
    SubmitCartButton.addEventListener("click", OpenUpsellPopUp);
  }



function OpenUpsellPopUp() 
{
  console.log("onmouseover");
  for (let index = 0; index < SubmitCartButton.length; index++) 
  {
    var ProductQuickAddButton = document.getElementsByClassName('quick-add__submit');
    for (let index = 0; index < ProductQuickAddButton.length; index++) {
      ProductQuickAddButton[index].click;
      
    }
    
  }
}


