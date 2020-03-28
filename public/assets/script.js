$(document).ready(function() {
  //-------------------- Index Page --------------------------// 
  $("#tag-form").on("submit",function (event) {
  	event.preventDefault(); 
  	let tagObj = {
  		tagName : $('#tagname').val().trim(),
  		startTime: $('#starttime').val().trim(),
  		endTime: $('#endtime').val().trim(),
      urlId: $('#urlPath').attr('urlId')
  	}
  	let a =  tagObj.tagName; 
  	let b =  tagObj.startTime; 
  	let c =  tagObj.endTime; 

  	if((a !== undefined && a !== "" && a.length !== 0 && a !== null) &&
  		(b !== undefined && b !== "" && b.length !== 0 && b !== null) &&
  		(c !== undefined && c !== "" && c.length !== 0 && c !== null) &&
  		(b < c)
  	){
  	$.ajax("/api/tags",{
  		type: "POST",
  		data: tagObj

  		})
  	}else{
  		alert("Invalid Parameters" + a + b + c)
  	}
  })

  $("#video-form").on("submit",function (event) {
     event.preventDefault();
    var url = $('#urlLink').val().trim();

    if (url != undefined || url != '') {
        var regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=|\?v=)([^#\&\?]*).*/;
        var match = url.match(regExp);
        if (match && match[2].length == 11) {
          $.ajax("/api/add",{
            type: "POST",
            data: {url}
          }).done(function(data){
            window.open("/add/" + data.id,"_self")
          }
        )
        }
        else {
            alert("Invalid Parameters")
        }
    }
  })

   //-------------------- Index Page --------------------------// 
  $(".tagButton").on("click",function(event){
    let tagName = this.id;
    $.ajax("/results", {
      type: "PUT",
      data: {id: tagName}
    })
  })

  $(".linkButton").on("click",function(event){
    window.open('/results',"_self");  
  })


});
