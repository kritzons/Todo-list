var ul = document.getElementById("list")
var inputbox = document.getElementById("inputbox")

function add(){
    var listitem = document.createElement("li")
    listitem.setAttribute("class","listobjects")
    listitem.innerHTML = inputbox.value+ "<button onclick='deleteitem(event)' class = 'delete'>Delete</button>"
    ul.append(listitem)

}

function deleteitem()
{
    event.target.parentElement.remove()
}