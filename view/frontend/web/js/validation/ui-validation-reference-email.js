/**
 * Copyright © Vaimo, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */

define([
   'jquery'
], function ($) {
    'use strict';

    return function (validator) {
        validator.addRule(
            'reference-email',
            function (value) {
                var result = '';
                $('body').trigger('processStart');
                $.ajax({
                    url: 'http://devbox.vaimo.test/clemondo/ClemondoMarkGoods/referencecustomer/checkemail',
                    type: 'post',
                    data: {
                       email: value
                    },
                    async: false,
                    success: function(response) {
                        result = response;
                        $('body').trigger('processStop');
                    }
                });
                return result;
            },
            $.mage.__("Please specify a valid reference email")
        );
        return validator;
    }
});
