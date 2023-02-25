(function (window, k) {
    if (!window.AppstleMembershipIncluded && (!urlIsProductPage() || 'V1' === 'V2')) {
      window.AppstleMembershipIncluded = true;
      appstleLoadScript = function (src, callback) {
        var script = document.createElement("script");
        script.charset = "utf-8";
        script.async = true;
        script.src = src;
        script.onload = script.onreadystatechange = function () {
          if (!script.readyState || /loaded|complete/.test(script.readyState)) {
            script.onload = script.onreadystatechange = null;
            script = k;
            callback && callback();
          }
        };
        document.getElementsByTagName("head")[0].appendChild(script)
      };
      appstleLoadScript("https://cdn.shopify.com/s/files/1/0688/5235/1275/t/15/assets/appstle-membership.js?v=1677025609");

      window.AM = Window.AM || {};
      AM.Config = {
        "selectors": {
            "payment_button_selectors": "form[action$='/cart/add'] .shopify-payment-button",
            "subscriptionLinkSelector": "",
            "atcButtonPlacement": "BEFORE",
            "subscriptionLinkPlacement": "BEFORE"
        },
        "useUrlWithCustomerId": false,
        "atcButtonSelector": "",
        "moneyFormat": "{% raw %}${{amount}}{% endraw %}",
        "oneTimePurchaseText": "One Time Purchase",
        "shop": "creator-camp.myshopify.com",
        "deliveryText": "delivery",
        "purchaseOptionsText": "Membership Options",
        "manageSubscriptionButtonText": "Manage Membership",
        "subscriptionOptionText": "Join Now",
        "sellingPlanSelectTitle": "DELIVERY FREQUENCY",
        "subscriptionPriceDisplayText": "",
        "tooltipTitle": "Membership detail",
        "api_key": "ggzvqKKUczmk",
        "showTooltipOnClick": "false",
        "tooltipDesctiption": "<strong>Have complete control of your memberships<\/strong><br\/><br\/>Skip, reschedule, edit, cancel deliveries anytime matching your needs.",
        "tooltipDescriptionOnPrepaidPlan": "<b>Prepaid Plan Details<\/b><\/br> Total price: {{{totalPrice}}} ( Price for every delivery: {{{pricePerDelivery}}})",
        "tooltipDescriptionOnMultipleDiscount": "<b>Discount Details<\/b><\/br> Initial discount is {{discountOne}} and then {{discountTwo}}",
        "tooltipDescriptionCustomization": "{{{defaultTooltipDescription}}} <\/br>  {{{prepaidDetails}}} <\/br> {{{discountDetails}}}",
        "orderStatusManageSubscriptionTitle": "Membership",
        "orderStatusManageSubscriptionDescription": "Continue to your account to view and manage your memberships. Please use the same email address that you used to buy the membership.",
        "orderStatusManageSubscriptionButtonText": "Manage your membership",
        "subscriptionOptionSelectedByDefault" : false,
        "totalPricePerDeliveryText" : "{{{prepaidPerDeliveryPrice}}}\/delivery",
        "memberOnlySellingPlansJson": {},
        "fieldsBySellingPlanId": "{\"gid:\/\/shopify\/SellingPlan\/111114092843\":\"[{\\\"label\\\":\\\"\\\",\\\"type\\\":\\\"text\\\",\\\"required\\\":false,\\\"visible\\\":false}]\"}",
        "rulesByCustomerTag": "{\"creator-camp-summer-pass\":[\"[{\\\"rule\\\":\\\"discount\\\",\\\"selector\\\":\\\"\\\",\\\"message\\\":\\\"\\\",\\\"path\\\":\\\"\\\",\\\"pathMatch\\\":\\\"contains\\\",\\\"discountCode\\\":\\\"1389630751019\\\",\\\"discountMessage\\\":\\\"100% off one-time purchase products in Camps \u2022 For Appstle - Creator Camp Summer Pass customers\\\",\\\"discountUrl\\\":\\\"https:\/\/my.creatorcamp.org\/discount\/SUMMERPASS?redirect=%2Fcollections%2Fcamps\\\",\\\"deliveryFrequency\\\":\\\"Monthly\\\",\\\"limitAccessType\\\":\\\"percentage-discount\\\",\\\"elementRestrictType\\\":\\\"url\\\",\\\"bucketCategory\\\":\\\"tags\\\",\\\"bucketCategoryValue\\\":\\\"\\\",\\\"discountPercentage\\\":\\\"100.00\\\",\\\"discountAmount\\\":\\\"\\\",\\\"discountCodeDetails\\\":{\\\"codeDiscountNode\\\":{\\\"__typename\\\":\\\"DiscountCodeNode\\\",\\\"id\\\":\\\"gid:\/\/shopify\/DiscountCodeNode\/1389630751019\\\",\\\"codeDiscount\\\":{\\\"__typename\\\":\\\"DiscountCodeBasic\\\",\\\"appliesOncePerCustomer\\\":false,\\\"asyncUsageCount\\\":0,\\\"codeCount\\\":1,\\\"codes\\\":{\\\"__typename\\\":\\\"DiscountRedeemCodeConnection\\\",\\\"edges\\\":[{\\\"__typename\\\":\\\"DiscountRedeemCodeEdge\\\",\\\"node\\\":{\\\"__typename\\\":\\\"DiscountRedeemCode\\\",\\\"code\\\":\\\"SUMMERPASS\\\"}}]},\\\"createdAt\\\":\\\"2023-02-22T00:32:39Z\\\",\\\"customerGets\\\":{\\\"__typename\\\":\\\"DiscountCustomerGets\\\",\\\"items\\\":{\\\"__typename\\\":\\\"DiscountCollections\\\",\\\"collections\\\":{\\\"__typename\\\":\\\"CollectionConnection\\\",\\\"edges\\\":[{\\\"__typename\\\":\\\"CollectionEdge\\\",\\\"node\\\":{\\\"__typename\\\":\\\"Collection\\\",\\\"handle\\\":\\\"camps\\\",\\\"title\\\":\\\"Camps\\\",\\\"id\\\":\\\"gid:\/\/shopify\/Collection\/436929626411\\\"}}]}},\\\"value\\\":{\\\"__typename\\\":\\\"DiscountPercentage\\\",\\\"percentage\\\":1},\\\"appliesOnOneTimePurchase\\\":true,\\\"appliesOnSubscription\\\":false},\\\"customerSelection\\\":{\\\"__typename\\\":\\\"DiscountCustomerSegments\\\"},\\\"endsAt\\\":null,\\\"shortSummary\\\":\\\"100% off one-time purchase products in Camps\\\",\\\"startsAt\\\":\\\"2023-02-22T00:31:29Z\\\",\\\"status\\\":\\\"ACTIVE\\\",\\\"summary\\\":\\\"100% off one-time purchase products in Camps \u2022 For Appstle - Creator Camp Summer Pass customers\\\",\\\"title\\\":\\\"SUMMERPASS\\\",\\\"usageLimit\\\":null,\\\"shareableUrls\\\":[{\\\"__typename\\\":\\\"DiscountShareableUrl\\\",\\\"targetItemImage\\\":null,\\\"targetType\\\":\\\"COLLECTION\\\",\\\"title\\\":\\\"Camps\\\",\\\"url\\\":\\\"https:\/\/my.creatorcamp.org\/discount\/SUMMERPASS?redirect=%2Fcollections%2Fcamps\\\"},{\\\"__typename\\\":\\\"DiscountShareableUrl\\\",\\\"targetItemImage\\\":null,\\\"targetType\\\":\\\"HOME\\\",\\\"title\\\":\\\"Homepage\\\",\\\"url\\\":\\\"https:\/\/my.creatorcamp.org\/discount\/SUMMERPASS\\\"}]}}},\\\"membershipName\\\":\\\"Creator Camp Summer Pass\\\",\\\"discountCodeText\\\":\\\"SUMMERPASS\\\"}]\"]}",
        "membershipByCustomerTag": "{\"creator-camp-summer-pass\":[{\"id\":5411,\"shop\":\"creator-camp.myshopify.com\",\"groupName\":\"Creator Camp Summer Pass\",\"subscriptionId\":971276587,\"productCount\":0,\"productVariantCount\":0,\"infoJson\":\"{\\\"id\\\":971276587,\\\"productCount\\\":0,\\\"productVariantCount\\\":null,\\\"subscriptionPlans\\\":[{\\\"frequencyCount\\\":1,\\\"frequencyInterval\\\":\\\"YEAR\\\",\\\"billingFrequencyCount\\\":1,\\\"billingFrequencyInterval\\\":\\\"YEAR\\\",\\\"frequencyName\\\":\\\"does not renew\\\",\\\"discountOffer\\\":null,\\\"discountOffer2\\\":null,\\\"afterCycle1\\\":0,\\\"afterCycle2\\\":0,\\\"discountType\\\":null,\\\"discountType2\\\":null,\\\"discountEnabled\\\":false,\\\"discountEnabled2\\\":false,\\\"discountEnabledMasked\\\":false,\\\"discountEnabled2Masked\\\":false,\\\"id\\\":\\\"gid:\/\/shopify\/SellingPlan\/111114092843\\\",\\\"frequencyType\\\":\\\"ON_PURCHASE_DAY\\\",\\\"specificDayValue\\\":null,\\\"specificDayEnabled\\\":false,\\\"maxCycles\\\":1,\\\"minCycles\\\":1,\\\"cutOff\\\":0,\\\"prepaidFlag\\\":\\\"false\\\",\\\"idNew\\\":\\\"gid:\/\/shopify\/SellingPlan\/111114092843\\\",\\\"planType\\\":\\\"PAY_AS_YOU_GO\\\",\\\"deliveryPolicyPreAnchorBehavior\\\":\\\"ASAP\\\"}],\\\"groupName\\\":\\\"Creator Camp Summer Pass\\\",\\\"productIds\\\":\\\"[]\\\",\\\"productId\\\":null,\\\"variantIds\\\":\\\"[{\\\\\\\"id\\\\\\\":44561518756139,\\\\\\\"title\\\\\\\":\\\\\\\"Summer Pass 2023 - Default Title\\\\\\\"}]\\\",\\\"accessoryProductIds\\\":null,\\\"customerTag\\\":\\\"creator-camp-summer-pass\\\",\\\"orderTag\\\":\\\"SummerPassHolder\\\",\\\"rulesJson\\\":\\\"[{\\\\\\\"rule\\\\\\\":\\\\\\\"discount\\\\\\\",\\\\\\\"selector\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"message\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"path\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"pathMatch\\\\\\\":\\\\\\\"contains\\\\\\\",\\\\\\\"discountCode\\\\\\\":\\\\\\\"1389630751019\\\\\\\",\\\\\\\"discountMessage\\\\\\\":\\\\\\\"100% off one-time purchase products in Camps \u2022 For Appstle - Creator Camp Summer Pass customers\\\\\\\",\\\\\\\"discountUrl\\\\\\\":\\\\\\\"https:\/\/my.creatorcamp.org\/discount\/SUMMERPASS?redirect=%2Fcollections%2Fcamps\\\\\\\",\\\\\\\"deliveryFrequency\\\\\\\":\\\\\\\"Monthly\\\\\\\",\\\\\\\"limitAccessType\\\\\\\":\\\\\\\"percentage-discount\\\\\\\",\\\\\\\"elementRestrictType\\\\\\\":\\\\\\\"url\\\\\\\",\\\\\\\"bucketCategory\\\\\\\":\\\\\\\"tags\\\\\\\",\\\\\\\"bucketCategoryValue\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"discountPercentage\\\\\\\":\\\\\\\"100.00\\\\\\\",\\\\\\\"discountAmount\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"discountCodeDetails\\\\\\\":{\\\\\\\"codeDiscountNode\\\\\\\":{\\\\\\\"__typename\\\\\\\":\\\\\\\"DiscountCodeNode\\\\\\\",\\\\\\\"id\\\\\\\":\\\\\\\"gid:\/\/shopify\/DiscountCodeNode\/1389630751019\\\\\\\",\\\\\\\"codeDiscount\\\\\\\":{\\\\\\\"__typename\\\\\\\":\\\\\\\"DiscountCodeBasic\\\\\\\",\\\\\\\"appliesOncePerCustomer\\\\\\\":false,\\\\\\\"asyncUsageCount\\\\\\\":0,\\\\\\\"codeCount\\\\\\\":1,\\\\\\\"codes\\\\\\\":{\\\\\\\"__typename\\\\\\\":\\\\\\\"DiscountRedeemCodeConnection\\\\\\\",\\\\\\\"edges\\\\\\\":[{\\\\\\\"__typename\\\\\\\":\\\\\\\"DiscountRedeemCodeEdge\\\\\\\",\\\\\\\"node\\\\\\\":{\\\\\\\"__typename\\\\\\\":\\\\\\\"DiscountRedeemCode\\\\\\\",\\\\\\\"code\\\\\\\":\\\\\\\"SUMMERPASS\\\\\\\"}}]},\\\\\\\"createdAt\\\\\\\":\\\\\\\"2023-02-22T00:32:39Z\\\\\\\",\\\\\\\"customerGets\\\\\\\":{\\\\\\\"__typename\\\\\\\":\\\\\\\"DiscountCustomerGets\\\\\\\",\\\\\\\"items\\\\\\\":{\\\\\\\"__typename\\\\\\\":\\\\\\\"DiscountCollections\\\\\\\",\\\\\\\"collections\\\\\\\":{\\\\\\\"__typename\\\\\\\":\\\\\\\"CollectionConnection\\\\\\\",\\\\\\\"edges\\\\\\\":[{\\\\\\\"__typename\\\\\\\":\\\\\\\"CollectionEdge\\\\\\\",\\\\\\\"node\\\\\\\":{\\\\\\\"__typename\\\\\\\":\\\\\\\"Collection\\\\\\\",\\\\\\\"handle\\\\\\\":\\\\\\\"camps\\\\\\\",\\\\\\\"title\\\\\\\":\\\\\\\"Camps\\\\\\\",\\\\\\\"id\\\\\\\":\\\\\\\"gid:\/\/shopify\/Collection\/436929626411\\\\\\\"}}]}},\\\\\\\"value\\\\\\\":{\\\\\\\"__typename\\\\\\\":\\\\\\\"DiscountPercentage\\\\\\\",\\\\\\\"percentage\\\\\\\":1},\\\\\\\"appliesOnOneTimePurchase\\\\\\\":true,\\\\\\\"appliesOnSubscription\\\\\\\":false},\\\\\\\"customerSelection\\\\\\\":{\\\\\\\"__typename\\\\\\\":\\\\\\\"DiscountCustomerSegments\\\\\\\"},\\\\\\\"endsAt\\\\\\\":null,\\\\\\\"shortSummary\\\\\\\":\\\\\\\"100% off one-time purchase products in Camps\\\\\\\",\\\\\\\"startsAt\\\\\\\":\\\\\\\"2023-02-22T00:31:29Z\\\\\\\",\\\\\\\"status\\\\\\\":\\\\\\\"ACTIVE\\\\\\\",\\\\\\\"summary\\\\\\\":\\\\\\\"100% off one-time purchase products in Camps \u2022 For Appstle - Creator Camp Summer Pass customers\\\\\\\",\\\\\\\"title\\\\\\\":\\\\\\\"SUMMERPASS\\\\\\\",\\\\\\\"usageLimit\\\\\\\":null,\\\\\\\"shareableUrls\\\\\\\":[{\\\\\\\"__typename\\\\\\\":\\\\\\\"DiscountShareableUrl\\\\\\\",\\\\\\\"targetItemImage\\\\\\\":null,\\\\\\\"targetType\\\\\\\":\\\\\\\"COLLECTION\\\\\\\",\\\\\\\"title\\\\\\\":\\\\\\\"Camps\\\\\\\",\\\\\\\"url\\\\\\\":\\\\\\\"https:\/\/my.creatorcamp.org\/discount\/SUMMERPASS?redirect=%2Fcollections%2Fcamps\\\\\\\"},{\\\\\\\"__typename\\\\\\\":\\\\\\\"DiscountShareableUrl\\\\\\\",\\\\\\\"targetItemImage\\\\\\\":null,\\\\\\\"targetType\\\\\\\":\\\\\\\"HOME\\\\\\\",\\\\\\\"title\\\\\\\":\\\\\\\"Homepage\\\\\\\",\\\\\\\"url\\\\\\\":\\\\\\\"https:\/\/my.creatorcamp.org\/discount\/SUMMERPASS\\\\\\\"}]}}},\\\\\\\"membershipName\\\\\\\":\\\\\\\"Creator Camp Summer Pass\\\\\\\",\\\\\\\"discountCodeText\\\\\\\":\\\\\\\"SUMMERPASS\\\\\\\"}]\\\",\\\"formFieldsJson\\\":\\\"[{\\\\\\\"label\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"type\\\\\\\":\\\\\\\"text\\\\\\\",\\\\\\\"required\\\\\\\":false,\\\\\\\"visible\\\\\\\":false}]\\\"}\",\"productIds\":\"\",\"variantIds\":\"44561518756139\",\"variantProductIds\":\"8137688940843\",\"customerTag\":\"creator-camp-summer-pass\",\"orderTag\":\"SummerPassHolder\",\"rulesJson\":\"[{\\\"rule\\\":\\\"discount\\\",\\\"selector\\\":\\\"\\\",\\\"message\\\":\\\"\\\",\\\"path\\\":\\\"\\\",\\\"pathMatch\\\":\\\"contains\\\",\\\"discountCode\\\":\\\"1389630751019\\\",\\\"discountMessage\\\":\\\"100% off one-time purchase products in Camps \u2022 For Appstle - Creator Camp Summer Pass customers\\\",\\\"discountUrl\\\":\\\"https:\/\/my.creatorcamp.org\/discount\/SUMMERPASS?redirect=%2Fcollections%2Fcamps\\\",\\\"deliveryFrequency\\\":\\\"Monthly\\\",\\\"limitAccessType\\\":\\\"percentage-discount\\\",\\\"elementRestrictType\\\":\\\"url\\\",\\\"bucketCategory\\\":\\\"tags\\\",\\\"bucketCategoryValue\\\":\\\"\\\",\\\"discountPercentage\\\":\\\"100.00\\\",\\\"discountAmount\\\":\\\"\\\",\\\"discountCodeDetails\\\":{\\\"codeDiscountNode\\\":{\\\"__typename\\\":\\\"DiscountCodeNode\\\",\\\"id\\\":\\\"gid:\/\/shopify\/DiscountCodeNode\/1389630751019\\\",\\\"codeDiscount\\\":{\\\"__typename\\\":\\\"DiscountCodeBasic\\\",\\\"appliesOncePerCustomer\\\":false,\\\"asyncUsageCount\\\":0,\\\"codeCount\\\":1,\\\"codes\\\":{\\\"__typename\\\":\\\"DiscountRedeemCodeConnection\\\",\\\"edges\\\":[{\\\"__typename\\\":\\\"DiscountRedeemCodeEdge\\\",\\\"node\\\":{\\\"__typename\\\":\\\"DiscountRedeemCode\\\",\\\"code\\\":\\\"SUMMERPASS\\\"}}]},\\\"createdAt\\\":\\\"2023-02-22T00:32:39Z\\\",\\\"customerGets\\\":{\\\"__typename\\\":\\\"DiscountCustomerGets\\\",\\\"items\\\":{\\\"__typename\\\":\\\"DiscountCollections\\\",\\\"collections\\\":{\\\"__typename\\\":\\\"CollectionConnection\\\",\\\"edges\\\":[{\\\"__typename\\\":\\\"CollectionEdge\\\",\\\"node\\\":{\\\"__typename\\\":\\\"Collection\\\",\\\"handle\\\":\\\"camps\\\",\\\"title\\\":\\\"Camps\\\",\\\"id\\\":\\\"gid:\/\/shopify\/Collection\/436929626411\\\"}}]}},\\\"value\\\":{\\\"__typename\\\":\\\"DiscountPercentage\\\",\\\"percentage\\\":1},\\\"appliesOnOneTimePurchase\\\":true,\\\"appliesOnSubscription\\\":false},\\\"customerSelection\\\":{\\\"__typename\\\":\\\"DiscountCustomerSegments\\\"},\\\"endsAt\\\":null,\\\"shortSummary\\\":\\\"100% off one-time purchase products in Camps\\\",\\\"startsAt\\\":\\\"2023-02-22T00:31:29Z\\\",\\\"status\\\":\\\"ACTIVE\\\",\\\"summary\\\":\\\"100% off one-time purchase products in Camps \u2022 For Appstle - Creator Camp Summer Pass customers\\\",\\\"title\\\":\\\"SUMMERPASS\\\",\\\"usageLimit\\\":null,\\\"shareableUrls\\\":[{\\\"__typename\\\":\\\"DiscountShareableUrl\\\",\\\"targetItemImage\\\":null,\\\"targetType\\\":\\\"COLLECTION\\\",\\\"title\\\":\\\"Camps\\\",\\\"url\\\":\\\"https:\/\/my.creatorcamp.org\/discount\/SUMMERPASS?redirect=%2Fcollections%2Fcamps\\\"},{\\\"__typename\\\":\\\"DiscountShareableUrl\\\",\\\"targetItemImage\\\":null,\\\"targetType\\\":\\\"HOME\\\",\\\"title\\\":\\\"Homepage\\\",\\\"url\\\":\\\"https:\/\/my.creatorcamp.org\/discount\/SUMMERPASS\\\"}]}}},\\\"membershipName\\\":\\\"Creator Camp Summer Pass\\\",\\\"discountCodeText\\\":\\\"SUMMERPASS\\\"}]\",\"formFieldsJson\":\"[{\\\"label\\\":\\\"\\\",\\\"type\\\":\\\"text\\\",\\\"required\\\":false,\\\"visible\\\":false}]\",\"savedSearchId\":null,\"savedSegmentSearchId\":\"gid:\/\/shopify\/Segment\/511467749675\"}]}",
        "nonMemberOnlySellingPlansJson": {},
        "widgetEnabled": true,
        "showTooltip" : true,
        "sortByDefaultSequence": false,
        "showSubOptionBeforeOneTime": false,
        "showStaticTooltip": false,
        "showAppstleLink": false,
        "sellingPlanTitleText" : "{{sellingPlanName}} ({{{sellingPlanPrice}}}\/delivery)",
        "oneTimePriceText" : "{{{price}}}",
        "selectedPayAsYouGoSellingPlanPriceText" : "{{{price}}}",
        "selectedPrepaidSellingPlanPriceText" : "{{{pricePerDelivery}}}",
        "selectedDiscountFormat" : "SAVE {{selectedDiscountPercentage}}",
        "manageSubscriptionBtnFormat" : "<a href='apps\/memberships' class='appstle_manageSubBtn' ><button class='btn' style='padding: 2px 20px'>Manage Membership<\/button><a><br><br>",
        "manageSubscriptionUrl" : "apps\/memberships",
        "appstlePlanId": 2,
        "showCheckoutSubscriptionBtn": true,
        "disableLoadingJquery": false,
        "enableMessagingForNonMembers": "false",
        "nonMemberMessaging": "Please login to avail the membership perks.",
        "showMembershipBanner": "true",
        "showDiscountWidget": "false",
        "discountBadgeImageLink": "",
        "widgetBadgeImageLink": "",
        "productPagePriceDescriptionBlockPriceSelector": "",
        "productPagePriceDescriptionBlockParentSelector": "",
        "priceBlockSelector": "",
        "parentSelector": "",
        "reBuyEnabled": "false",
        "css": {
            "appstle_membership_widget": {
                "margin-top": "" ,
                "margin-bottom": "",
            },

            "appstle_membership_wrapper": {
                "border-width": "",
                "border-color": "",
            },

            "appstle_circle": {
                "border-color": "",
            },

            "appstle_dot": {
                "background-color": "",
            },

            "appstle_select": {
                "padding-top": "",
                "padding-bottom": "",
                "padding-left": "",
                "padding-right": "",
                "border-width": "",
                "border-style": "",
                "border-color": "",
                "border-radius": "",
            },

            "tooltip_subscription_svg": {
                "fill": "",
            },

            "appstle_tooltip": {
                "color": "",
                "background-color": "",
            },

            "appstle_tooltip_border_top_color": {
                "border-top-color": "",
            },

            "appstle_membership_final_price": {
                "color": "",
            },
            "appstle_widget_text_color": {
                "color": "",
            },
            "appstle_selected_background": {
                "background": "transparent",
            },
            "customCSS": "",
            "customerPortalCss": "",
            "priceSelector": "",
            "landingPagePriceSelector": "",
            "quickViewClickSelector": "",
            "badgeTop": "",
            "pricePlacement": "BEFORE",
        }
      };

    }

    function urlIsProductPage() {
    // return null != decodeURIComponent(window.location.pathname).match(/\/products\/(([a-zA-Z0-9]|[\-\.\_\~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[\ud83c\ud83d\ud83e][\ud000-\udfff]){1,})\/?/)
    return decodeURIComponent(window.location.pathname).includes('/products/');
    }
  }
)(window);

