sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
function (Controller) {
    "use strict";

    return Controller.extend("walkthrough.controller.Product", {
        onInit: function () {

        },
        handleListItemPress: function(oEvent) {
            const oRouter = sap.ui.core.UIComponent.getRouterFor(this);
            const selectedProductId = oEvent.getSource().getBindingContext().getProperty("ProductID");
            oRouter.navTo("RouteProductDetail", {
                productId: selectedProductId
            });
        }
    });
});
