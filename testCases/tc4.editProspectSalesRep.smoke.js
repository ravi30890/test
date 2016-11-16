/*global document, window, alert, console, require, browser,jasmine,
 requirePage, requireData, requireConfig, requireLibrary,
 describe, it, beforeEach, forEach, by, expect, element*/
//********** Require Pages*************//
var homePage = requirePage('homePage');
describe('TC4_EditCustomer-Prospect-SalesRep', function () {
    beforeEach(function () {
        global.current_TestCase = 'TC4_EditCustomer-Prospect-SalesRep';
    });
   it('TC4 - Edit Customer - Prospect - Sales Rep', function () {
        homePage.openHome()
            .getCustomersPage()
            .performSearchForCustomers(global.TIMESTAMP,"Prospect")
            .verifyNameFieldEditable(true);
   }
    });
});