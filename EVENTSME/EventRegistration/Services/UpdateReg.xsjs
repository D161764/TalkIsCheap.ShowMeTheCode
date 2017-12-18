var acmd = $.request.parameters.get("cmd");
var user = $.request.parameters.get("username");



function update (){
    try{
        user = user.toUpperCase();
    	var conn = $.db.getConnection();
    	var query = 'call \"EVENTSME"."EVENTSME.EventRegistration.Procedures::UpdateRegistration\"(?,?)';
    	var myStatement = conn.prepareCall(query);
    	myStatement.setString(1, user);
    	var rs = myStatement.execute();
		conn.commit();
		var output = {"status": "success"};
		    output = JSON.stringify(output);
		    $.response.contentType = "text/html";
		    $.response.status = $.net.http.OK;
            $.response.setBody(output);
    }
    catch (e) {
        $.response.contentType = "text/plain";

        $.response.setBody(e.message);
    }

}

switch (acmd) {
case "update":
  update();
  break;
  default:
  $.response.status = $.net.http.OK;
  $.response.setBody("Pass Parameter: " + acmd);
}