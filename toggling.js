//Jquery Toggling
function tog(id, ctoggle) {
	if(ctoggle) {
		if(!$(id).hasClass('active')) {
        	$(id).addClass('active');
		} else {
        	$(id).removeClass('active');
		}
	}
}
function redtog(id, ctoggle) {
	if(ctoggle) {
		if(!$(id).hasClass('active-red')) {
        	$(id).addClass('active-red');
		} else {
        	$(id).removeClass('active-red');
		}
	}
}
function deactivateRed(id) {
	$(id).removeClass('active-red');
}
function deactivateGreen(id) {
	$(id).removeClass('active');
}
canToggle11 = true;
canToggle12 = true;
canToggle13 = true;
canToggle21 = true;
canToggle22 = true;
canToggle23 = true;
canToggle31 = true;
canToggle32 = true;
canToggle33 = true;
canToggle41 = true;
canToggle42 = true;
canToggle43 = true;

$(document).keydown(function(e) {
    var key = e.which;
    if (key == 57) {
    	
        tog("#img43", canToggle43);
        canToggle43 = false;
    }
    if (key == 56) {
    	
        tog("#img31", canToggle31);
        canToggle31 = false;
    }
    if (key == 55) {
    	
        tog("#img32", canToggle32);
        canToggle32 = false;
    }
    if (key == 54) {
        tog("#img33", canToggle33);
        canToggle33 = false;
    }
    if (key == 53) {
    	
        tog("#img23", canToggle23);
        canToggle23 = false;
    }
    if (key == 52) {
    	
        tog("#img13", canToggle13);
        canToggle13 = false;
    }
    if (key == 187) {
    	
        tog("#img11", canToggle11);
        canToggle11 = false;
    }
    if (key == 189) {
    	
        redtog("#img12", canToggle12);
        canToggle12 = false;
    }
    if (key == 37) {
    	
        tog("#img21", canToggle21);
        canToggle21 = false;
        deactivateGreen('#img11');
        canToggle11 = true;
        deactivateRed('#img12');
        canToggle12 = true;
    }
    if (key == 39) {
    	
        tog("#img22", canToggle22);
        canToggle22 = false;
        deactivateGreen('#img11');
        canToggle11 = true;
        deactivateRed('#img12');
        canToggle12 = true;
    }
    if (key == 51) {
        tog("#img41", canToggle41);
        canToggle41 = false;
    }
    if (key == 50) {
        tog("#img42", canToggle42);
        canToggle42 = false;
    }
});

$(document).keyup(function(e) {
    var key = e.which;
    if (key == 57) {
    	canToggle43 = true;
        tog("#img43", canToggle43);
    }
    if (key == 56) {
    	canToggle31 = true;
        tog("#img31", canToggle31);
    }
    if (key == 55) {
    	canToggle32 = true;
        tog("#img32", canToggle32);
    }
    if (key == 54) {
    	canToggle33 = true;
    }
    if (key == 53) {
    	canToggle23 = true;
        tog("#img23", canToggle23);
    }
    if (key == 52) {
    	canToggle13 = true;
        tog("#img13", canToggle13);
    }
    if (key == 187) {
    	canToggle11 = true;
        //tog("#img11");
    }
    if (key == 189) {
    	canToggle12 = true;
        //redtog("#img12");
    }
    if (key == 37) {
    	canToggle21 = true;
        tog("#img21", canToggle21);
    }
    if (key == 39) {
    	canToggle22 = true;
        tog("#img22", canToggle22);
    }
    if (key == 51) {
    	canToggle41 = true;
        tog("#img41", canToggle41);
        
    }
    if (key == 50) {
    	canToggle42 = true;
        tog("#img42", canToggle42);
        
    }
});
//Toggle ->  .table-img-toggle