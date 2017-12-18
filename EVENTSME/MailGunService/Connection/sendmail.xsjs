
var acmd = $.request.parameters.get("cmd");
var to_mail = $.request.parameters.get("to");
// var subject = $.request.parameters.get("sub");
// var text_body = $.request.parameters.get("body");
var subject = "SMECOMMUNITY - Request Approved ";
var text_body = "Your Request has been approved by Content Admin. Request you to carry Event pass and Please have look at https://goo.gl/SVvZZs for further details."

function sendmail() {
var destination_package = "EVENTSME.MailGunService.Connection"

var destination_name = "MailGun";

var message;

var he;

try {

  var dest = $.net.http.readDestination(destination_package, destination_name);

  var client = new $.net.http.Client();

  var req = new $.web.WebRequest($.net.http.POST, "/messages");

  req.headers.set('Content-Type', encodeURIComponent("application/x-www-form-urlencoded"));

  req.parameters.set("domain","sandboxe0dd439efb8a4d93bce563a7217dd76a.mailgun.org");

  req.parameters.set("from","me@sandboxe0dd439efb8a4d93bce563a7217dd76a.mailgun.org");

  req.parameters.set("to",to_mail);

  req.parameters.set("subject",subject);

  req.parameters.set("text",text_body);

  client.request(req, dest);

  var response = client.getResponse();

  $.response.contentType = "text/html";

  $.response.setBody(response.body.asString());

  $.response.status = $.net.http.OK;

} catch (e) {

  $.response.contentType = "text/plain";

  $.response.setBody(e.message);

}
}

switch (acmd) {
case "send":
  sendmail();
  break;
  default:
  $.response.status = $.net.http.OK;
  $.response.setBody("Invlid Parameter: " + acmd);
}
