/* 1. Grab the input value */


document.querySelector(".js-go").addEventListener('click', function () {

    var input = document.querySelector("input").value;

    getData();

});

document.querySelector(".js-userinput").addEventListener('keyup', function (e) {

    var input = document.querySelector("input").value;
 

    //ENTER 
    if (e.which === 13) {
     
        getData();
    }

});

function getData() {

    /* 2. do the data stuff with the API */
    var url = "https://api.giphy.com/v1/gifs/search?q=";
    var input = document.querySelector("input").value;
    var key = "&api_key=dc6zaTOxFJmzC";
    var fullUrl = url+input+key

 
    var GiphyAJAXCall = new XMLHttpRequest();
    GiphyAJAXCall.open('GET', fullUrl);
    GiphyAJAXCall.send();

    GiphyAJAXCall.addEventListener('load', function (e) {

        var data = e.target.response;
      
        var response = JSON.parse(data);

        var imageUrls = response.data;

        imageUrls.forEach(function (image) {

            var src = image.images.fixed_height.url;
         

            var container = document.querySelector(".js-container");
            container.innerHTML += "<img src=\"" + src + "\" class=\"container-image\">";

        });

    });
}

/* 3. Show me the GIFs */

function pushToDOM(input) {

    var cont = document.querySelector(".var-container");
    cont.innerHTML = input;


}









