$.get("http://api.vschool.io/mana/todo/", function (response) {
    for (var i = 0; i < response.length; i++) {
        $("#todos").append(`<div class="col-md-3 panel panel-info checkbox">
 <div class="form-group ">
	  
    <div class="col-md-5">
		<div class="checkbox">
            <label for="inputName" class="col-md-1 control-label">Complete</label>
            <input type="checkbox" value="1"/>
             <label class="check">${response[i].title}<br />
${response[i].description}<br />${response[i].price}</label>
        </div>
     </div>
</div>
                            
                            </div>
                           </div>`);

    }
    console.log(response);
});


$("#submit").click(function () {
    var newTodo = {};
    newTodo.title = $("#title").val();
    newTodo.description = $("#description").val();
    newTodo.price = $("#price").val();
    console.log(newTodo);

    $.post("http://api.vschool.io/mana/todo/", newTodo, function (newTodo) {

        $("#todos").append(`<div class="check col-md-3 panel panel-info">
                            <<label class="check checkbox ">${newTodo.title}</<label>
                            <<label class="checkbox check">${newTodo.description}</<label>
                           <label class="checkbox check">${newTodo.price}</<label>
                            <div class="checkbox check">
                            <input type="checkbox" value="1"> Complete
                            </div>
                           </div>`);
    })
    $("#title").val("");
    $("#description").val("");
    $("#price").val("");
    
    
});

//
//        if ($("input.confirm").is(':checked')){
//        $('.check').addClass("strike");
//    } else {
//        $('.check').removeClass("strike");
//    }

//
//function deleteEvent() {
//    var deleteObject = {
//        type: 'delete',
//        url: "url" +
//    }
//}