function PiRailView() {
	
	var textvalue = document.getElementById("val"),
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
		addressButton = document.getElementByID("address"),
		accelerationButton = document.getElementByID("acceleration"),
		decelerationButton = document.getElementByID("deceleration"),
		functionButton = document.getElementByID("function");
		
	this.showCurrentValue = function (value) {
        textvalue.value = value;
    };
	
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
}