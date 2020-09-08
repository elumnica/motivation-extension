const contents = document.getElementById('contents');
contents.parentNode.removeChild(contents);


$.ajax({
    method: 'GET',
    url: 'http://demo.com',
    success: function(result) {
     // result is whatever the URL sends back from the request
    },
    error: function(err) {
     // if any errors occur during the process you can check out the
     // the error by logging the 'err' argument
    }
  };