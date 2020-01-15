/**
 * Copyright © Vaimo, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */

define([
    'uiComponent',
    'Magento_Checkout/js/model/payment/additional-validators',
    'Vaimo_ClemondoMarkGoods/js/model/reference-email'
],
    function (Component, additionalValidators, referenceEmail) {
        'use strict';
        additionalValidators.registerValidator(referenceEmail);
        return Component.extend({});
    }
);
