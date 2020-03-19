// our application constructor
function application () {
}

application.prototype.displayCurrentUser = function(selector) {

 //$(selector).html('Hello !');

let url1="https://b24-fik4sy.bitrix24.ru/rest/1/89mi95d2zftrbhvr/user.current";
$.ajax({
    url: url1,
    method: "GET",
    //contentType: "",
    //data:{order:{'STAGE_TITLE':'ASC'},select:['ID','TITLE'],filter:{'<ID':20, '>=ID':5}},
	//data:{select:['EMAIL']},

    success: function (data) {
        let result=data.result;
        console.log(result);
        //console.log(data);
	    //$(selector).html('Hello ' + result.data().NAME + ' ' + result.data().LAST_NAME + '!');
	    $(selector).html('Hello '+result.EMAIL+
	    	' '+result['ID']);
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
