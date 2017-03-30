var allItems = [];
var count = -1;
$("#submit").click(buildRow);

function buildRow(event, newItem) {
    count++;
    if (!newItem) {
        var newItem = {};
        newItem.item = $("#item").val();
        newItem.num = count;
        allItems.push(newItem);
        console.log(newItem.item);
        localStorage.setItem('list', JSON.stringify(allItems));
    }
    $(".shopList").append(`
            <ul class="all">
                <button id="delete" type="submit" class="delete">x</button>
                <li class="listItem" id=${i}>${newItem.item}</li> 
            </ul>`);
    $("#item").val("");

    $(".delete").click(function removeItem() {
        var elem = $('.listItem');
        console.log(elem.index());
        $(this).parent().remove();
        var index = $('.listItem').num;
        localStorage.setItem('list', JSON.stringify(allItems));
    });

    $("#clear").click(function clearAll() {
        $('.all').remove();
        localStorage.removeItem('list');
    });

}


var staticArr = JSON.parse(localStorage.getItem('list'));
console.log(staticArr);

if (staticArr) {
    allItems = staticArr;
}

for (var i = 0; i < allItems.length; i++) {
    $(".shopList").append(`
            <ul>
                <button type="submit" class="delete">x</button> 
                <li class="listItem" id=${i}>${allItems[i].item}</li>          
            </ul>`);


}


$(".delete").click(function removeItem() {
    var elem = $('.listItem');
    
    console.log($(this).index());
    $(this).parent().remove();

});

$("#clear").click(function clearAll() {

    $('.all').remove();
    localStorage.removeItem('list');
});

//
//var list = JSON.parse(localStorage.getItem('newItem'));

//   
//