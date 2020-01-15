/**
 * Copyright © Vaimo, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */

define([
   'jquery',
   'mage/translate'
], function ($) {
    'use strict';

    return function (validator) {
        validator.addRule(
            'reference-email',
            function (value) {
                // function resultCallback(data) {
                //     return data;
                // }
                var result = '';

                $.ajax({
                    url: 'http://devbox.vaimo.test/clemondo/ClemondoMarkGoods/referencecustomer/checkemail',
                    type: 'post',
                    data: {
                       email: value
                    },
                    async: false,
                    success: function(response) {
                        result = response;
                        // return resultCallback.call(this, response);
                    }
                });
                return result;
            },
            $.mage.__("Please specify a valid reference email")
        );
        return validator;
    }
});
