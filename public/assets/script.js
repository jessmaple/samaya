$(document).ready(function() {
  
  //-------------------- Index Page --------------------------// 
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
  $(".linkButton").on("click",function(event){
    var tagName = $(this).attr('id')
    console.log("test")
    window.open('/results/' + tagName,"_self");  
  })

   //-------------------- Add Page --------------------------// 
  $(".tagButton").on("click",function(event){
      var st = $(this).attr('startTime')
      var et = $(this).attr('endTime')
      var src = $('#urlPath').attr('src').split("?")
      src = src[0] + `?autoplay=1&mute=1&start=${st}&end=${et}`
      console.log(src)
      $('#urlPath').attr('src',src)
      $('#urlPath').attr('src', $('#urlPath').attr('src'));
  })

  $("#tag-form").on("submit",function (event) {
    event.preventDefault(); 
    let tagObj = {
      tagName : $('#tagname').val().trim(),
      startTime: $('#starttime').val().trim(),
      endTime: $('#endtime').val().trim(),
      urlId: $('#urlPath').attr('urlId')
    }
    let a =  tagObj.tagName; 
    let b =  parseInt(tagObj.startTime); 
    let c =  parseInt(tagObj.endTime); 

    if((a !== undefined && a !== "" && a.length !== 0 && a !== null) &&
      (b !== undefined && b !== "" && b.length !== 0 && b !== null) &&
      (c !== undefined && c !== "" && c.length !== 0 && c !== null) &&
      (b < c)
    ){
    $.ajax("/api/tags",{
      type: "POST",
      data: tagObj

      }).done(function(data){
            location.reload()
      })
    }else{
      alert("Invalid Parameters")
    }
  })
  //-------------------- Results Page --------------------------// 
 $(".urlLink").on("click",function (event) {
    var tagName = $(this).attr('id')
    console.log("test")
    window.open('/results/' + tagName,"_self");
  })

});
