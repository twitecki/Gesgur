//Jquery Toggling
function tog(id) {
	if(canToggle) {
		if(!$(id).hasClass('active')) {
        	$(id).addClass('active');
		} else {
        	$(id).removeClass('active');
		}
	}
}
function redtog(id) {
	if(canToggle) {
		if(!$(id).hasClass('active-red')) {
        	$(id).addClass('active-red');
		} else {
        	$(id).removeClass('active-red');
		}
	}
}

var canToggle = true;

$(document).keydown(function(e) {
    var key = e.which;
    if (key == 57) {
    	
        tog("#img43");
        canToggle = false;
    }
    if (key == 56) {
    	
        tog("#img31");
        canToggle = false;
    }
    if (key == 55) {
    	
        tog("#img32");
        canToggle = false;
    }
    if (key == 54) {
        tog("#img33");
        canToggle = false;
    }
    if (key == 53) {
    	
        tog("#img23");
        canToggle = false;
    }
    if (key == 52) {
    	
        tog("#img13");
        canToggle = false;
    }
    if (key == 187) {
    	
        tog("#img11");
        canToggle = false;
    }
    if (key == 189) {
    	
        redtog("#img12");
        canToggle = false;
    }
    if (key == 37) {
    	
        tog("#img21");
        canToggle = false;
    }
    if (key == 39) {
    	
        tog("#img22");
        canToggle = false;
    }
});

$(document).keyup(function(e) {
    var key = e.which;
    if (key == 57) {
    	canToggle = true;
        tog("#img43");
    }
    if (key == 56) {
    	canToggle = true;
        tog("#img31");
    }
    if (key == 55) {
    	canToggle = true;
        tog("#img32");
    }
    if (key == 54) {
    	canToggle = true;
    }
    if (key == 53) {
    	canToggle = true;
        tog("#img23");
    }
    if (key == 52) {
    	canToggle = true;
        tog("#img13");
    }
    if (key == 187) {
    	canToggle = true;
        //tog("#img11");
    }
    if (key == 189) {
    	canToggle = true;
        //redtog("#img12");
    }
    if (key == 37) {
    	canToggle = true;
        tog("#img21");
    }
    if (key == 39) {
    	canToggle = true;
        tog("#img22");
    }
});
//Toggle ->  .table-img-toggle