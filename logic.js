
var difficulty = document.getElementById("difficulty");
var question = document.getElementById("finalQuestion");
var selects = Array.from(document.getElementsByTagName('select'));

selects.forEach(function (select) {
    select.addEventListener("click", function () {
        var style = parseInt(document.getElementById("style").value)
        var woodType = parseInt(document.getElementById("woodType").value)
        var wandLength = parseInt(document.getElementById("wandLength").value)
        var handleLength = parseInt(document.getElementById("handleLength").value)
        var tipType = parseInt(document.getElementById("tipType").value)


        var points = 0;
        points = style + woodType + wandLength + handleLength + tipType;

        question.addEventListener("keyup", function () {
            var points = 0;
            points = style + woodType + wandLength + handleLength + tipType;
            points = points + question.value.length
            difficulty.innerHTML = points;
        })
var img = document.getElementById("style")
img = img.options[img.selectedIndex].dataset.img;
var back = document.getElementById("woodType")
back =back.options[back.selectedIndex].dataset.img
       var newImg = document.getElementById("wand") 
       var newBack = document.getElementById("wandBack") 
       newImg.src="images/"+img;
       newBack.style.backgroundImage="url('images/" + back + "')"
        difficulty.innerHTML = points;
       
    })
})




