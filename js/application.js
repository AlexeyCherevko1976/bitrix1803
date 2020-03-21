// our application constructor
function application () {
}

application.prototype.displayErrorMessage = function(message) {
	$('#deal-list').html(message);
	$('#deal-sum').html(message);
}

application.prototype.userUpdate=function(){
	var curapp=this;
console.log('user.current!');
let url1="https://b24-fik4sy.bitrix24.ru/rest/1/";
url1+="89mi95d2zftrbhvr/";
url1+="user.update";
//https://b24-fik4sy.bitrix24.ru/rest/1/89mi95d2zftrbhvr/user.update?ID=1&NAME=Alexey
$.ajax({
    url: url1,
    method: "GET",
    data:{"ID":1,"NAME":"Alexey", "LAST_NAME":"Viktorovich"},
//data:{order:{'STAGE_TITLE':'ASC'},select:['ID','TITLE'],filter:{'<ID':20, '>=ID':5}},
	
    success: function (result) {
    	
    	curapp.displayCurrentUser("#user-name");
        console.log("user.current - ");

     }
});

}

application.prototype.displayCurrentUser = function(selector) {

let url1="https://b24-fik4sy.bitrix24.ru/rest/1/";
url1+="89mi95d2zftrbhvr/";
url1+="user.current";
$.ajax({
    url: url1,
    method: "GET",
    success: function (data) {
        console.log(data);
        let result=data.result;
	    //$(selector).html('Hello '+result.EMAIL+' '+result['ID']);
		$(selector).html(result.NAME + ' ' + result.LAST_NAME);

     }
});
/*	BX24.callMethod('user.current', {}, function(result){
		$(selector).html(result.data().NAME + ' ' + result.data().LAST_NAME);
	});
	*/
}

application.prototype.displayUserClosedDeals = function (idUser) {

	var dealSum = 0, dealHTML = '';
	
	var curapp = this;

let url1="https://b24-fik4sy.bitrix24.ru/rest/1/89mi95d2zftrbhvr";
url1+="/crm.deal.list";
$.ajax({
    url: url1,
    method: "GET",
    success: function (data) {
        console.log(data);
        //let result=data.result;     }
     }
});

/*	BX24.callMethod(
		"crm.deal.list", 
		{ 
			order: { "DATE_CREATE": "ASC" },
			filter: { "ASSIGNED_BY_ID": idUser, "CLOSED": 'Y' },
			select: [ "ID", "TITLE", "OPPORTUNITY"]
		}, 
		function(result) 
		{
			if (result.error()) {
                curapp.displayErrorMessage('К сожалению, произошла ошибка получения сделок. Попробуйте повторить отчет позже');
				console.error(result.error());
			}
			else
			{
				var data = result.data();
				
				for (indexDeal in data) {
					dealSum += parseFloat(data[indexDeal].OPPORTUNITY);
					dealHTML += '<tr><th scope="row">' + data[indexDeal].ID + '</th><td>' + data[indexDeal].TITLE +'</td><td>'
						+ data[indexDeal].OPPORTUNITY + '</td></tr>';
				}
							
				if (result.more())
					result.next();
				else {
					$('#deal-list').html(dealHTML);
					$('#deal-sum').html('<span class="volume">' + dealSum + '</span><br/>общая сумма');						
				}
					
			}
		}
	);
	*/
}

// create our application
app = new application();
