function customerJWT() {
  var appClientId = "**BC_CLIENT_ID**"; // TODO: Fill this in with your app's client ID
  var xmlhttp = new XMLHttpRequest();
  xmlhttp.onreadystatechange = function () {
    if (xmlhttp.readyState == 4) {
      if (xmlhttp.status == 200) {
        alert('Customer JWT:\n' + xmlhttp.responseText);
      }
      else if (xmlhttp.status == 404) {
        alert('Not logged in!');
      }
      else {
        alert('Something went wrong');
      }
    }
  };
  xmlhttp.open("GET", "/customer/current.jwt?app_client_id=" + appClientId, true);
  xmlhttp.send();
}
customerJWT();