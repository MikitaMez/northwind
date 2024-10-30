sap.ui.define(
    [
        "sap/ui/core/mvc/Controller"
    ],
    function(BaseController) {
      "use strict";
  
      return BaseController.extend("walkthrough.controller.App", {
        onInit: function() {
        },
        handleListItemPress: function(oEvent) {
            const oRouter = sap.ui.core.UIComponent.getRouterFor(this);
            const selectedProductId = oEvent.getSource().getBindingContext().getProperty("ProductID");
            oRouter.navTo("RouteProductDetail", {
                productId: selectedProductId
            });
        }
      });
    }
  );
  