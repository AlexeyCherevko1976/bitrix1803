// our application constructor
function application () {
	this.variant="ajax";
}

application.prototype.displayCurrentUser = function(selector) {

let url1="https://b24-fik4sy.bitrix24.ru/rest/1/89mi95d2zftrbhvr/user.current";
$.ajax({
    url: url1,
    method: "GET",
    success: function (data) {
        console.log(data);
        let result=data.result;
	    //$(selector).html('Hello ' + result.data().NAME + ' ' + result.data().LAST_NAME + '!');
	    $(selector).html('Hello '+result.EMAIL+' '+result['ID']);
     }
});

/*	BX24.callMethod(
        'user.current',
        {},
        function(result){
		    $(selector).html('Hello ' + result.data().NAME + ' ' + result.data().LAST_NAME + '!');
	    }
    );*/
}

// create our application
app = new application();
