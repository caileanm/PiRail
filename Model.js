function Model() {
	
	var value = 0,
		address = 0,
		speed = 0,
		acceleration = 0,
		deceleration = 0,
		forward = false,
		Address = false,
		Acceleration = false,
		Deceleration = false,
		Function = false;
	
	this.setForward = function () {
		forward = true;
	};
	
	this.setBackward = function () {
		forward = false;
	};
	
	this.getDirection = function () {
		return forward;
	};
	
	this.getValue = function () {
        return value;
    };
	
	this.getSpeed = function () {
		return speed;
	};
	
	this.setSpeed = function (value) {
		speed = value;
	};
	
	this.getacceleration = function () {
		return acceleration;
	};
	
	this.setacceleration = function (value) {
		acceleration = value;
	};
	
	this.getdeceleration = function () {
		return deceleration;
	};
	
	this.setdeceleration = function (value) {
		deceleration = value;
	};
	
	this.getaddress = function () {
		return address;
	};
	
	this.setaddress = function (value) {
		address = value;
	};
	
	this.setAddress = function () {
		Address = true;
		Acceleration = false;
		Deceleration = false;
		Function = false;
	};
	
	this.setAcceleration = function () {
		Address = false;
		Acceleration = true;
		Deceleration = false;
		Function = false;
	};
	
	this.setDeceleration = function () {
		Address = false;
		Acceleration = false;
		Deceleration = true;
		Function = false;
	};
	
	this.setFunction = function () {
		Address = false;
		Acceleration = false;
		Deceleration = false;
		Function = true;
	};
	
	this.getAcceleration = function () {
		return Acceleration;
	};
	
	this.getDeceleration = function () {
		return Deceleration;
	};
	
	this.getAddress = function () {
		return Address;
	};
	
	this.getFunction = function () {
		return Function;
	};
	
	this.setValue = function (digit) {
        if (value == "0") {
            value = digit;
        } else if (value.length < 3){
            value = "" + value + digit;
        }
    };
	
	this.clear = function () {
		value = "0";
	};
	
}