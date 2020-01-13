/**
 * Copyright © Vaimo, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */

define([
   'jquery',
], function ($) {
'use strict';

    return function (validator) {
        validator.addRule(
            'reference-email',
            function (value, params, additionalParams) {
                // var customersEmails = ['asd0@gmail.com', 'asd1@gmail.com', 'asd2@gmail.com'];
                // return $.inArray(value, customersEmails) !== -1;
                $.ajax({
                   url: '/example.php',
                   type: 'post',
                   data: value,
                   success: function (response) {
                       return true;
                   },
                   error: function(response) {
                       return false;
                   }
                });

                // $.post('/example.php', serializedData, function(response) {
                //     console.log("Response: "+response);
                // });
            },
            $.mage.__("Please specify a valid reference email")
        );
        return validator;
    }
});
