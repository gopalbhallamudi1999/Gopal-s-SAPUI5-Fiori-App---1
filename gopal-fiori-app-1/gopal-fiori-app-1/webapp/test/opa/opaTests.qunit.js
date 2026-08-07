sap.ui.define([
	"sap/ui/test/Opa5",
	"com/gopal/demo/fioriapp1/demokit/test/opa/arrangements/Startup",
	"com/gopal/demo/fioriapp1/demokit/test/opa/StartpageJourney",
	"com/gopal/demo/fioriapp1/demokit/test/opa/ReviewsJourney",
	"com/gopal/demo/fioriapp1/demokit/test/opa/BackNavigationJourney"
], function (Opa5, Startup) {
	"use strict";
	Opa5.extendConfig({
		arrangements: new Startup(),
		viewNamespace: "com.gopal.demo.fioriapp1.view.",
		autoWait: true
	});
});
