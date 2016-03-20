function controller() {
	
	var model = new Model(),
		view = new PiRailView(),
		updateValueDisplay = function () {
			view.showCurrentValue(model.getValue());
		},
		Address = true,
		Acceleration = false,
		Deceleration = false,
		Function = false;
	
	this.init = function() {
		updateValueDisplay();
		
		view.setOneClickCallback(function () {
			model.setValue("1");
            view.showCurrentValue(model.getValue());
        });
		
		view.setTwoClickCallback(function () {
			model.setValue("2");
            view.showCurrentValue(model.getValue());
        });
		
		view.setThreeClickCallback(function () {
			model.setValue("3");
            view.showCurrentValue(model.getValue());
        });
		
		view.setFourClickCallback(function () {
			model.setValue("4");
            view.showCurrentValue(model.getValue());
        });
		
		view.setFiveClickCallback(function () {
			model.setValue("5");
            view.showCurrentValue(model.getValue());
        });
		
		view.setSixClickCallback(function () {
			model.setValue("6");
            view.showCurrentValue(model.getValue());
        });
		
		view.setSevenClickCallback(function () {
			model.setValue("7");
            view.showCurrentValue(model.getValue());
        });
		
		view.setEightClickCallback(function () {
			model.setValue("8");
            view.showCurrentValue(model.getValue());
        });
		
		view.setNineClickCallback(function () {
			model.setValue("9");
            view.showCurrentValue(model.getValue());
        });
		
		view.setZeroClickCallback(function () {
			model.setValue("0");
            view.showCurrentValue(model.getValue());
        });
		
		view.setClearClickCallback(function () {
			model.clear();
			view.showCurrentValue(model.getValue());
		});
		
		view.setEnterCallBackFunction(function () {
			//
		}
	};
	
}

var controller = new controller();
window.addEventListener("load", controller.init(), false);