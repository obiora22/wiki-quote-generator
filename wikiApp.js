$(document).ready(function(){
  // var url = "http://en.wikipedia.org/w/api.php?action=parse&format=json&prop=text&section=0&page=Jimi_Hendrix&callback=?"
  // $.getJSON(url,function(data, textStatus, jxhr){
  //   console.log(textStatus)
  //   console.log(data);
  // })
  function inputChangeCall(e){

  entered_value = e.target.value
  console.log(entered_value);
  
  new_api = 'https://en.wikipedia.org/w/api.php?format=json&action=query&generator=search&gsrnamespace=0&gsrlimit=10&prop=pageimages|extracts&pilimit=max&exintro&explaintext&exsentences=1&exlimit=max&gsrsearch=' + entered_value;

  var input = document.getElementById("search")
  console.log(input.value);

  logResult = function(data){ // global function reference for `jsonpCallback` to work
    console.log(data.query.pages);
    var pages = data.query.pages
    $.each(pages,function(index, value){
      $(".wiki-extract").append("<li>" + value.extract + "</li>")
    })
  }

  function callWikipediaApi(){
    console.log("API call ...");
    $.ajax({
      url: new_api,
      dataType: 'jsonp',
      jsonpCallback: 'logResult'
    });
  }


  callWikipediaApi();

  };
  $("#search").change(inputChangeCall);
});
