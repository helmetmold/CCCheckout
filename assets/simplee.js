
                // Simplee Storefront Widget - Script - Version 0.1
// For questions visit http://support.simplee.best

var simpleeSelectors = {};
var simpleeClasses = {};

var simpleeWidget = (function () {
    function simpleeWidget() {
        simpleeSelectors = {
          sellingPlanGroupContainer: ".simplee-widget__planGroup--container",
          sellingPlanOptionContainer: "#simplee-defaultwidget__options_grid",
          sellingPlanOptionContainerDelivery_chks: "#simplee-defaultwidget__options_delivery_chks",
          sellingPlanOptionContainerBill_chks: "#simplee-defaultwidget__options_bill_chks",
          sellingPlanOptions: ".simplee-widget__sellingPlan-options",
          widget: ".simplee-defaultwidget",
          sellingPlanIdInput: ".simplee-selling-plan-id-input",
          productForm: 'form[action="/cart/add"]',
          variantIdInput: '[name="id"]',
          variantSelector: ["#shappify-variant-id", ".single-option-selector", "select[name=id]", "input[name=id]"],
          pageTemplate: ".simplee-page-template",
          productJson: ".simplee-product-json",
          moneyFormat: ".simplee-money-format",
          sellingPlanOptionName: ".simplee-widget_sellingPlan_option_name",
          perDeliveryPrice: ".price-item",
          perPriceBadge: ".data-subscription-badge",
        };

    simpleeClasses = {
        hidden: "simplee-widget__hidden",
           visible: "simplee-widget__visible",
        };

        this.products = {};
        this.variants = {};
        this.sellingPlanGroups = {};
        this.pageTemplate = "";
        this.productId = {};
    }

simpleeWidget.prototype = Object.assign({}, simpleeWidget.prototype, {
    init: function () {
        this._handleRequired();
			this._addFormAttr();
			},

_handleRequired: function(){
       let forms = document.getElementsByTagName('form');
        let base = this;
        for(i=0; i<forms.length; i++){
          let action =  forms[i].action;
          if(action.includes("/cart/add")){
//              remove novalidate attribute
              forms[i].removeAttribute("novalidate");

               forms[i].addEventListener("submit", function(e) {

                event.preventDefault();
                event.stopPropagation();
                event.stopImmediatePropagation(); // Prevents form from submitting

                if(base._validate()){}

                  });
                }
            }
        },

    _validate: function(){
        let okayOrNot = true;
                let isErr = false;
                let requireds = document.getElementsByClassName('required');
                for(j=0; j<requireds.length; j++){
                  let fieldType = requireds[j].type;
                  let fieldClass = requireds[j].id;
                  let fieldVal = '';

                  if(fieldType == 'text' || fieldType == 'textarea' || fieldType == 'checkbox'){
                    if(fieldType == 'checkbox'){
                     const cb = requireds[j].checked;
                      fieldVal = (cb) ? 'Yes' : '';
                    }else{
                      fieldVal = requireds[j].value;
                    }
                    if(fieldVal == ''){
                      isErr = true;
                      document.getElementsByClassName(fieldClass)[0].innerHTML = 'This field is required.';
                    } else{
                      document.getElementsByClassName(fieldClass)[0].innerHTML = '';
                    }
                  }
                }

                if(!isErr){
                  return true;
                }
                return false;
    },
		_addFormAttr: function(){
	      	  let sectionID = document.getElementsByTagName('section')[0].getAttribute('id');
	          let filterId = sectionID.replace(/\D/g, '');
	        
	          
	        	
	          let simpleeProperties = document.getElementsByClassName('simplee-properties');
	          if(simpleeProperties.length > 0){
	            let attrValue = 'product-form-template--'+filterId+'__main';		
	            for(i=0; i<simpleeProperties.length; i++){
	            	let container = simpleeProperties[i];
	              	let tags = ['input', 'textarea', 'select'];
	              
	                for(k=0; k<tags.length; k++){
						let inputes = container.getElementsByTagName(tags[k]);
	                    for(j=0; j<inputes.length; j++){
	                        inputes[j].setAttribute('form', attrValue);
	                    }
	                }
	            }
	          }	
	      }
    })
    return simpleeWidget;
    })();

        document.addEventListener("DOMContentLoaded", function () {
            window.Simplee = window.Simplee || {};
            window.Simplee.simpleeWidget = new simpleeWidget();
            window.Simplee.simpleeWidget.init();
        });
            