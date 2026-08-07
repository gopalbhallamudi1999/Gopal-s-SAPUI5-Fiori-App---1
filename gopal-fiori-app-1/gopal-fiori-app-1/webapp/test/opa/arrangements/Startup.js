sap.ui.define([
    "sap/ui/test/Opa5"
], function (Opa5) {
    "use strict";

    return Opa5.extend("com.gopal.demo.fioriapp1.demokit.test.opa.arrangements.Startup", {

        iStartMyApp: function () {
            this.iStartMyUIComponent({
                componentConfig: {
                    name: "com.gopal.demo.fioriapp1.demokit"
                }
            });
        }

    });
});