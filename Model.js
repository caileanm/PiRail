function Model() {
	
	var value = 0,
		address = 0,
		speed = 0,
		forward = false;
	
	this.getValue = function () {
        return value;
    };
	
	this.getSpeed = function () {
		return speed;
	};
	
	this.setValue = function (digit) {
        if (value == "0") {
            value = digit;
        } else if (value.length < 3){
            value = "" + value + digit;
        }
    };
	
	this.setSpeed = function (digit) {
		speed = digit;
	}
	
	this.clear = function () {
		value = "0";
	}
	
	
}