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
		
		//for tabs
		jQuery(document).ready(function() {
			
			//set function for clicking on tabs
			jQuery('.tab-links a').on('click', function(e)  {
				
				var currentTab = jQuery(this).attr('href');
				
				//show and hide tabs
				jQuery('.tabs ' + currentTab).show().siblings().hide();
				
				//change active tabs
				jQuery(this).parent('li').addClass('active').siblings().removeClass('active');
				
			});
			
		});
		
	};
	
}

var controller = new controller();
window.addEventListener("load", controller.init(), false);