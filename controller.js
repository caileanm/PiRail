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
			else if (model.getDeceleration()) {
				//send command to the back
				model.setdeceleration(model.getValue());
				view.showCurrentDeceleration(model.getdeceleration());
			}
			
			model.clear();
			view.showCurrentValue(model.getValue());
		});
		
		view.setAddressClickCallback(function () {
			model.setAddress();
			view.showAddress();
		});
		
		view.setAccelerationClickCallback(function () {
			model.setAcceleration();
			view.showAcceleration();
		});
		
		view.setDecelerationClickCallback(function () {
			model.setDeceleration();
			view.showDeceleration();
		});
		
		view.setFunctionClickCallback(function () {
			model.setFunction();
			view.showFunction();
		});
		
		view.setThrottleReleaseCallback(function () {
			model.setSpeed(document.getElementById("throttle").value);
			view.showCurrentSpeed(model.getSpeed());
		});
		
		view.setStop1ClickCallback(function () {
			//send command
			document.getElementById("throttle").value = 0;
			model.setSpeed(0);
			view.showCurrentSpeed(model.getSpeed());
		});
		
		view.setStop2ClickCallback(function () {
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
		
		view.setaddLocosClickCallback(function () {
			view.new_loco();
		});
		
		view.setremoveLocosClickCallback(function () {
			view.new_accesssory();
		});
		
		view.setaddAccessoryClickCallback(function () {
			//send command
			//form
		});
		
		view.setremoveAccessoryClickCallback(function () {
			//send command
			//form
		});
		
		view.setForwardClickCallback(function () {
			//send command
			model.setForward();
			view.showDirection(model.getDirection());
		});
		
		view.setBackwardClickCallback(function () {
			//send command
			model.setBackward();
			view.showDirection(model.getDirection());
		});
		
		view.setaddLocosClickCallback(function () {
			view.new_loco();
		});
		
		view.setaddAccessoryClickCallback(function () {
			view.new_accessory();
		});
		
		view.setCancelLocoClickCallback(function () {
			view.cancel_loco();
		});
		
		view.setCancelAccessoryClickCallback(function () {
			view.cancel_accessory();
		});
		
		view.setconfirmLocoClickCallback(function () {
			if (true) {
				//validate form
				//send message
				//update view
				view.cancel_loco();
			}
		})
		
		view.setconfirmAccessoryClickCallback(function () {
			if (true) {
				//validate form
				//send message
				//update view
				view.cancel_accessory();
			}
		})
		
		//get data from server to load everything initially
	};
	
}

var controller = new controller();
window.addEventListener("load", controller.init(), false);