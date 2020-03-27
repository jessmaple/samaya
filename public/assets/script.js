$(document).ready(function() {
  //-------------------- Index Page --------------------------// 
  $("#tag-form").on("submit",function (event) {
  	event.preventDefault(); 
  	let tagObj = {
  		tagName : $('#tagname').val().trim(),
  		startTime: $('#starttime').val().trim(),
  		endTime: $('#endtime').val().trim()
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
  		}).then(function(event){
  			location.reload();
  		})
  	}else{
  		alert("Invalid Parameters")
  	}
  })

  $("#video-form").on("submit",function (event) {
    event.preventDefault(); 
    let tagObj = {
      url : $('#urlLink').val().trim(),
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
      }).then(function(event){
        location.reload();
      })
    }else{
      alert("Invalid Parameters")
    }
  })

   //-------------------- Index Page --------------------------// 
  $(".tagButton").on("click",function(event){
    let tagName = this.id;
    $.ajax("/results", {
      type: "PUT",
      data: {id: tagName}
    }).then(function(event){
        location.reload();
    })
  })

  $(".linkButton").on("click",function(event){
    window.open('/results',"_self");  
  })


});
