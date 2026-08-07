sap.ui.define([
    "sap/ui/core/UIComponent",
    "com/gopal/demo/fioriapp1/model/models",
    "sap/ui/core/mvc/View"
], (UIComponent, models, View) => {
    "use strict";

    return UIComponent.extend("com.gopal.demo.fioriapp1.Component", {
        metadata: {
            manifest: "json",
            interfaces: [
                "sap.ui.core.IAsyncContentCreation"
            ]
        },

        init() {
            // call the base component's init function
            UIComponent.prototype.init.apply(this, arguments);

            // set the device model
            this.setModel(models.createDeviceModel(), "device");

            // enable routing
            this.getRouter().initialize();
        },

        createContent: function() {
			// create root view
			return View.create({
				viewName: "com.gopal.demo.fioriapp1.view.App",
				type: "XML"
			});
		}
    });
});