/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"Kushagra_1-11-19_2/Kushagra_1-11-19_2/test/integration/AllJourneys"
	], function () {
		QUnit.start();
	});
});