function controller() {
	
	var model = new Model(),
		view = new PiRailView(),
		updateValueDisplay = function () {
			view.showCurrentValue(model.getValue());
		};
	
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
		
		view.setEnterClickCallback(function () {
			//carry out command
			if (model.getFunction()) {
				//send command to the back
			}
			else if (model.getAddress()) {
				//send command to the back
				model.setaddress(model.getValue());
				view.showCurrentAddress(model.getaddress());
			}
			else if (model.getAcceleration()) {
				//send command to the back
				model.setacceleration(model.getValue());
				view.showCurrentAcceleration(model.getacceleration());
			}
			else {
				//send command to the back
				model.setdeceleration(model.getValue());
				view.showCurrentDeceleration(model.getdeceleration());
			}
			
			model.clear();
			view.showCurrentValue(model.getValue());
		});
		
		view.setAddressClickCallback(function () {
			model.setAddress();
			//do something with the button
		});
		
		view.setAccelerationClickCallback(function () {
			model.setAcceleration();
			//do something with the button
		});
		
		view.setDecelerationClickCallback(function () {
			model.setDeceleration();
			//do something with the button
		});
		
		view.setFunctionClickCallback(function () {
			model.setFunction();
			//do something with the button
		});
		
		view.setThrottleReleaseCallback(function () {
			model.setSpeed(document.getElementById("throttle").value);
			view.showCurrentSpeed(model.getSpeed());
		});
		
		view.setStopClickCallback(function () {
			//send command
			document.getElementById("throttle").value = 0;
			model.setSpeed(0);
			view.showCurrentSpeed(model.getSpeed());
		});
		
		view.setSaveLocosClickCallback(function () {
			//send command
		});
		
		view.setSaveAccessoriesClickCallback(function () {
			//send command
		});
		
		view.addLocosClickCallback(function () {
			//send command
		});
		
		view.removeLocosClickCallback(function () {
			//send command
		});
		
		view.addAccessoryClickCallback(function () {
			//send command
		});
		
		view.removeAccessoryClickCallback(function () {
			//send command
		});
	};
	
}

var controller = new controller();
window.addEventListener("load", controller.init(), false);