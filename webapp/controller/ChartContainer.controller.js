sap.ui.define([
	"jquery.sap.global",
	"sap/ui/core/mvc/Controller",
	"sap/base/strings/formatMessage"
], function(jQuery, Controller, formatMessage) {
	"use strict";

	return Controller.extend("com.gopal.demo.fioriapp1.controller.ChartContainer", {
		formatMessage: formatMessage,
		onNavButtonPressed: function() {
			var oRouter = this.getOwnerComponent().getRouter();
			oRouter.navTo("home");
		}
	});
});
