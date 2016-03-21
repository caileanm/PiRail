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
		stopButton = document.getElementById("stop"),
		saveLocosButton = document.getElementById("savelocos"),
		saveAccessoriesButton = document.getElementById("saveaccessories"),
		addLocosButton = document.getElementById("addlocos"),
		removeLocosButton = document.getElementById("removelocos"),
		addAccessoryButton = document.getElementById("addaccessory"),
		removeAccessoryButton = document.getElementById("removeaccessory");
	
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
	
	this.setStopClickCallback = function (callback) {
		stopButton.addEventListener("click", callback);
	};
	
	this.setSaveLocosClickCallback = function (callback) {
		saveLocosButton.addEventListener("click", callback);
	};
	
	this.setSaveAccessoriesClickCallback = function (callback) {
		saveAccessoriesButton.addEventListener("click", callback);
	};
	
	this.addLocosClickCallback = function (callback) {
		addLocosButton.addEventListener("click", callback);
	};
	
	this.removeLocosClickCallback = function (callback) {
		removeLocosButton.addEventListener("click", callback);
	};
	
	this.addAccessoryClickCallback = function (callback) {
		addAccessoryButton.addEventListener("click", callback);
	};
	
	this.removeAccessoryClickCallback = function (callback) {
		removeAccessoryButton.addEventListener("click", callback);
	};
}