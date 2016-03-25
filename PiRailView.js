function PiRailView() {
	
	var textvalue = document.getElementById("val"),
		speedvalue = document.getElementById("speedDisplay"),
		addressvalue = document.getElementById("AddressDisplay"),
		accelerationvalue = document.getElementById("AccelerationDisplay"),
		decelerationvalue = document.getElementById("DecelerationDisplay"),
        oneButton = document.getElementById("one"),
        twoButton = document.getElementById("two"),
        threeButton = document.getElementById("three"),
        fourButton = document.getElementById("four"),
        fiveButton = document.getElementById("five"),
        sixButton = document.getElementById("six"),
        sevenButton = document.getElementById("seven"),
        eightButton = document.getElementById("eight"),
        nineButton = document.getElementById("nine"),
		clearButton = document.getElementById("clear"),
        zeroButton = document.getElementById("zero"),
		enterButton = document.getElementById("enter"),
		addressButton = document.getElementById("address"),
		accelerationButton = document.getElementById("acceleration"),
		decelerationButton = document.getElementById("deceleration"),
		functionButton = document.getElementById("function"),
		throttleSlider = document.getElementById("throttle"),
		stopButton1 = document.getElementById("stop1"),
		stopButton2 = document.getElementById("stop2"),
		saveLocosButton = document.getElementById("savelocos"),
		saveAccessoriesButton = document.getElementById("saveaccessories"),
		addLocosButton = document.getElementById("addlocos"),
		removeLocosButton = document.getElementById("removelocos"),
		addAccessoryButton = document.getElementById("addaccessory"),
		removeAccessoryButton = document.getElementById("removeaccessory"),
		forwardsButton = document.getElementById("forwards"),
		backwardsButton = document.getElementById("backwards"),
		cancelLoco = document.getElementById("cancelLoco"),
		cancelAccessory = document.getElementById("cancelAccessory")
		confirmLoco = document.getElementById("confirmLoco"),
		confirmAccessory = document.getElementById("confirmAccessory"),
		yes1 = document.getElementById("yes1"),
		yes2 = document.getElementById("yes2"),
		no1 = document.getElementById("no1"),
		no2 = document.getElementById("no2");
	
	//update display values
	this.showCurrentValue = function (value) {
        textvalue.value = value;
    };
	
	this.showCurrentSpeed = function (value) {
		speedvalue.value = value;
	};
	
	this.showCurrentAddress = function (value) {
		addressvalue.value = value;
	};
	
	this.showCurrentAcceleration = function (value) {
		accelerationvalue.value = value;
	};
	
	this.showCurrentDeceleration = function (value) {
		decelerationvalue.value = value;
	};
	
	this.showDirection = function (direction) {
		if (direction) {
			document.getElementById('forwards').style.backgroundColor = "yellow";
			document.getElementById('forwards').style.color = "black";
			document.getElementById('backwards').style.backgroundColor = "black";
			document.getElementById('backwards').style.color = "white";
		}
		else {
			document.getElementById('forwards').style.backgroundColor = "black";
			document.getElementById('forwards').style.color = "white";
			document.getElementById('backwards').style.backgroundColor = "yellow";
			document.getElementById('backwards').style.color = "black";
		}
	};
	
	this.showAddress = function () {
		document.getElementById("address").style.backgroundColor = "yellow";
		document.getElementById("address").style.color = "black";
		document.getElementById("acceleration").style.backgroundColor = "black";
		document.getElementById("acceleration").style.color = "white";
		document.getElementById("deceleration").style.backgroundColor = "black";
		document.getElementById("deceleration").style.color = "white";
		document.getElementById("function").style.backgroundColor = "black";
		document.getElementById("function").style.color = "white";
	};
	
	this.showAcceleration = function () {
		document.getElementById("address").style.backgroundColor = "black";
		document.getElementById("address").style.color = "white";
		document.getElementById("acceleration").style.backgroundColor = "yellow";
		document.getElementById("acceleration").style.color = "black";
		document.getElementById("deceleration").style.backgroundColor = "black";
		document.getElementById("deceleration").style.color = "white";
		document.getElementById("function").style.backgroundColor = "black";
		document.getElementById("function").style.color = "white";
	};
	
	this.showDeceleration = function () {
		document.getElementById("address").style.backgroundColor = "black";
		document.getElementById("address").style.color = "white";
		document.getElementById("acceleration").style.backgroundColor = "black";
		document.getElementById("acceleration").style.color = "white";
		document.getElementById("deceleration").style.backgroundColor = "yellow";
		document.getElementById("deceleration").style.color = "black";
		document.getElementById("function").style.backgroundColor = "black";
		document.getElementById("function").style.color = "white";
	};
	
	this.showFunction = function () {
		document.getElementById("address").style.backgroundColor = "black";
		document.getElementById("address").style.color = "white";
		document.getElementById("acceleration").style.backgroundColor = "black";
		document.getElementById("acceleration").style.color = "white";
		document.getElementById("deceleration").style.backgroundColor = "black";
		document.getElementById("deceleration").style.color = "white";
		document.getElementById("function").style.backgroundColor = "yellow";
		document.getElementById("function").style.color = "black";
	};
	
	//show popups
	this.new_loco = function () {
		document.getElementById('newLoco').style.display = "block";
	}
	
	this.new_accessory = function () {
		document.getElementById('newAccessory').style.display = "block";
	}
	
	this.remove_loco = function () {
		document.getElementById("confirmRemove1").style.display = "block";
	}
	
	this.remove_accessory = function () {
		document.getElementById("confirmRemove2").style.display = "block";
	}
	
	//hide popups
	this.cancel_loco = function () {
		document.getElementById('newLoco').style.display = "none";
	}
	
	this.cancel_accessory = function () {
		document.getElementById('newAccessory').style.display = "none";
	}
	
	this.remove_loco_cancel = function () {
		document.getElementById("confirmRemove1").style.display = "none";
	}
	
	this.remove_accessory_cancel = function () {
		document.getElementById("confirmRemove2").style.display = "none";
	}
	
	//set Callback Functions
	this.setOneClickCallback = function (callback) {
        oneButton.addEventListener("click", callback);
    };
    
    this.setTwoClickCallback = function (callback) {
        twoButton.addEventListener("click", callback);
    };
    
    this.setThreeClickCallback = function (callback) {
        threeButton.addEventListener("click", callback);
    };
    
    this.setFourClickCallback = function (callback) {
        fourButton.addEventListener("click", callback);
    };
    
    this.setFiveClickCallback = function (callback) {
        fiveButton.addEventListener("click", callback);
    };
    
    this.setSixClickCallback = function (callback) {
        sixButton.addEventListener("click", callback);
    };
    
    this.setSevenClickCallback = function (callback) {
        sevenButton.addEventListener("click", callback);
    };
    
    this.setEightClickCallback = function (callback) {
        eightButton.addEventListener("click", callback);
    };
    
    this.setNineClickCallback = function (callback) {
        nineButton.addEventListener("click", callback);
    };
	
	this.setZeroClickCallback = function (callback) {
        zeroButton.addEventListener("click", callback);
    };
	
	this.setClearClickCallback = function (callback) {
        clearButton.addEventListener("click", callback);
    };
	
	this.setEnterClickCallback = function (callback) {
        enterButton.addEventListener("click", callback);
    };
	
	this.setAddressClickCallback = function (callback) {
        addressButton.addEventListener("click", callback);
    };
	
	this.setAccelerationClickCallback = function (callback) {
        accelerationButton.addEventListener("click", callback);
    };
	
	this.setDecelerationClickCallback = function (callback) {
        decelerationButton.addEventListener("click", callback);
    };
	
	this.setFunctionClickCallback = function (callback) {
        functionButton.addEventListener("click", callback);
    };
	
	this.setThrottleReleaseCallback = function (callback) {
		throttleSlider.addEventListener("change", callback);
	};
	
	this.setStop1ClickCallback = function (callback) {
		stopButton1.addEventListener("click", callback);
	};
	
	this.setStop2ClickCallback = function (callback) {
		stopButton2.addEventListener("click", callback);
	};
	
	this.setSaveLocosClickCallback = function (callback) {
		saveLocosButton.addEventListener("click", callback);
	};
	
	this.setSaveAccessoriesClickCallback = function (callback) {
		saveAccessoriesButton.addEventListener("click", callback);
	};
	
	this.setaddLocosClickCallback = function (callback) {
		addLocosButton.addEventListener("click", callback);
	};
	
	this.setremoveLocosClickCallback = function (callback) {
		removeLocosButton.addEventListener("click", callback);
	};
	
	this.setaddAccessoryClickCallback = function (callback) {
		addAccessoryButton.addEventListener("click", callback);
	};
	
	this.setremoveAccessoryClickCallback = function (callback) {
		removeAccessoryButton.addEventListener("click", callback);
	};
	
	this.setForwardClickCallback = function (callback) {
		forwardsButton.addEventListener("click", callback);
	};
	
	this.setBackwardClickCallback = function (callback) {
		backwardsButton.addEventListener("click", callback);
	};
	
	this.setCancelLocoClickCallback = function (callback) {
		cancelLoco.addEventListener("click", callback);
	}
	
	this.setCancelAccessoryClickCallback = function (callback) {
		cancelAccessory.addEventListener("click", callback);
	}
	
	this.setconfirmLocoClickCallback = function (callback) {
		confirmLoco.addEventListener("click", callback);
	}
	
	this.setconfirmAccessoryClickCallback = function (callback) {
		confirmAccessory.addEventListener("click", callback);
	}
	
	this.setconfirmRemoveLocoClickCallback = function (callback) {
		yes1.addEventListener("click", callback);
	}
	
	this.setcancelRemoveLocoClickCallback = function (callback) {
		no1.addEventListener("click", callback);
	}
	
	this.setconfirmRemoveAccessoryClickCallback = function (callback) {
		yes2.addEventListener("click", callback);
	}
	
	this.setcancelRemoveAccessoryClickCallback = function (callback) {
		no2.addEventListener("click", callback);
	}
}