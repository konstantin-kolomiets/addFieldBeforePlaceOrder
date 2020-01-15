/**
 * Copyright © Vaimo, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */

define([
'jquery',
'mage/translate',
'Magento_Ui/js/model/messageList'
], function ($, $t, messageList) {
    'use strict';

    return {
        validate: function () {
            let isValid = !$('input[name="reference_customer"]').closest('.field').hasClass('_error');

            if (!isValid) {
                messageList.addErrorMessage({ message: $t('Please specify a valid reference email') });
            }

            return isValid;
        }
    }
});
