
var difficulty = document.getElementById("difficulty")

var selects = Array.from(document.getElementsByTagName('select'))

selects.forEach(function(select){
    select.addEventListener("click", function(){
        var style = parseInt(document.getElementById("style").value)
var woodType = parseInt(document.getElementById("woodType").value)
var wandLength = parseInt(document.getElementById("wandLength").value)
var handleLength = parseInt(document.getElementById("handleLength").value)
var tipType = parseInt(document.getElementById("tipType").value)
        var points = 0;
        points = style+woodType+wandLength+handleLength+tipType;
        difficulty.innerHTML=points;
        console.log(style)
    })
})


