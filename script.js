var dname=document.getElementById("dname");
var surname=document.getElementById("surname");
var age=document.getElementById("age");
var nationally=document.getElementById("nationality");
var position=document.getElementById("position");
var experience=document.getElementById("experience");
var button=document.getElementById("mybutton");
var tablebody=document.getElementById("tablebody");
var array=[dname,surname,age,nationally,position,experience]
console.log(array[5].value)
console.log(experience.value)

button.addEventListener("click",function addData(e){
    e.preventDefault()
    var row=document.createElement("tr");
    for(let i=0;i<array.length;i++){
        var data=document.createElement("td");
        data.append(array[i].value);
        console.log(data)
        row.appendChild(data);
    }
    var deletebutton=document.createElement('button');
    deletebutton.textContent="Delete";
    deletebutton.id="delete";
    deletebutton.className="btnDelete"
    row.appendChild(deletebutton);
    tablebody.appendChild(row);
    function deleteRow(){
        tablebody.removeChild(row)
    }
    deletebutton.onclick = deleteRow
})


