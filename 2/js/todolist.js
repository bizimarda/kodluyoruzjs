
const alertDOM = document.getElementById('alert')

const alert = (message, alertcolor) => ` <div class="${alertcolor}" role="alert">${message}
<button type="button" class="close" data-dismiss="alert" aria-label="Close">
<span aria-hidden="true">&times</span>
</button>
</div>`

//create close button in list
var liDOM = document.getElementsByTagName("li")
var i
for (i = 0; i < liDOM.length ;i++) {
    var span = document.createElement("SPAN")
    var txt = document.createTextNode("\u00D7")
    span.className = "close"
    span.appendChild(txt)
    liDOM[i].appendChild(span)
}

//hide list item
var close = document.getElementsByClassName("close")
var i
for (i = 0 ;i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement
    div.style.display = "none"
  }
}
//checked symbol
var list = document.getElementById('taskList')
list.addEventListener('click', function (e) {
    tag =e.target.tagName
    console.log(tag)
    if (tag === 'LI') {
        console.log("arda")
        e.target.classList.toggle('checked')
    }
}, false)

//new list item
index = 0
function newElement() {
    let liDOM = document.createElement('li')
    var TASK = document.getElementById("task").value
    var text = document.createTextNode(TASK)
    liDOM.appendChild(text)
    if (TASK == '') {
         alertDOM.innerHTML = alert("Listeye boş ekleme yapamazsınız!", "alert alert-warning")
    } else {
         alertDOM.innerHTML = alert("Listeye Eklendi", "alert alert-success")
        document.getElementById("taskList").appendChild(liDOM)
        localStorage.setItem(`items${index}`, TASK)
        index = index+1

    } document.getElementById("task").value = ''

    var span = document.createElement("span")
    var txt = document.createTextNode("\u00D7")
    span.className = "close"
    span.appendChild(txt)
    liDOM.appendChild(span)

    for (i = 0; i < close.length; i++) {
        close[i].onclick = function () {
            var div = this.parentElement
            div.style.display = "none"
        }
    } 
}




