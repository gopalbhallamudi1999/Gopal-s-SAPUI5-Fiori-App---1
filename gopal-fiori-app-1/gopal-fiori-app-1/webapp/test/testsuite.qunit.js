sap.ui.define(function() {
	"use strict";

	return {
		name: "QUnit test suite for Gopal's SAPUI5 Fiori app - 1",
		defaults: {
			page: "ui5://test-resources/com/gopal/demo/fioriapp1/demokit/Test.qunit.html?testsuite={suite}&test={name}",
			qunit: {
				version: 2
			},
			sinon: {
				version: 1
			},
			ui5: {
				language: "EN",
				theme: "sap_horizon"
			},
			coverage: {
				only: "com/gopal/demo/fioriapp1/demokit/",
				never: [
					"com/gopal/demo/fioriapp1/demokit/test/"
				]
			},
			loader: {
				paths: {
					"com/gopal/demo/fioriapp1/demokit": "../",
                    "com/gopal/demo/fioriapp1": "../"
				}
			}
		},
		tests: {
			"unit/unitTests": {
				title: "Unit tests for Gopal's SAPUI5 Fiori app - 1"
			},
			"opa/opaTests": {
				title: "Integration tests for Gopal's SAPUI5 Fiori app - 1"
			}
		}
	};
});