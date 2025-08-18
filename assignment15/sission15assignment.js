var proContainer = []
if (JSON.parse(localStorage.getItem("products"))!=null) {
    proContainer=JSON.parse(localStorage.getItem("products"))
    dispro();
}

var proName = document.getElementById("proName")
var proPrice = document.getElementById("proPrice")
var proCategory = document.getElementById("proCategory")
var proDesc = document.getElementById("proDesc")
var btn = document.getElementById("btn")
var tmpIndex; 

btn.onclick = function(){
    if(btn.innerHTML == "Add"){ 
        var pro={
            name:proName.value,
            price:proPrice.value,
            category:proCategory.value,
            desc:proDesc.value,
        }
        proContainer.push(pro);
    } else {  
        proContainer[tmpIndex].name = proName.value;
        proContainer[tmpIndex].price = proPrice.value;
        proContainer[tmpIndex].category = proCategory.value;
        proContainer[tmpIndex].desc = proDesc.value;
        btn.innerHTML = "Add"; 
    }

    localStorage.setItem("products",JSON.stringify(proContainer));
    dispro();
    clearForm();
}

function dispro() {
    var allPro=``;
    for (let i= 0; i < proContainer.length; i++) {
        allPro+=`
        <tr>
            <td>${ i + 1 }</td>
            <td>${ proContainer[i].name }</td>
            <td>${ proContainer[i].price }</td>
            <td>${ proContainer[i].category }</td>
            <td>${ proContainer[i].desc }</td>
            <td>
              <button onclick="delpro(${i})" class="btn delete">Delete</button>
              <button onclick="updatepro(${i})" class="btn update">Update</button>
            </td>
        </tr>
        `;
    }
    document.getElementById("tbody").innerHTML = allPro;
}

function delpro(index) {
    proContainer.splice(index,1);
    localStorage.setItem("products",JSON.stringify(proContainer));
    dispro();
}

proSearch.onkeyup = function () {
    searchPro(proSearch.value)
}

function searchPro(proName) {
    var allPro=``;
    for (let i= 0; i < proContainer.length; i++) {
        if(proContainer[i].name.toLowerCase().includes(proName.toLowerCase())){
            allPro+=`
            <tr>
                <td>${ i + 1 }</td>
                <td>${ proContainer[i].name }</td>
                <td>${ proContainer[i].price }</td>
                <td>${ proContainer[i].category }</td>
                <td>${ proContainer[i].desc }</td>
                <td>
                  <button onclick="delpro(${i})" class="btn delete">Delete</button>
                  <button onclick="updatepro(${i})" class="btn update">Update</button>
                </td>
            </tr>
            `;
        }
    }
    document.getElementById("tbody").innerHTML = allPro;
}

function updatepro(index) {
    proName.value = proContainer[index].name;
    proPrice.value = proContainer[index].price;
    proCategory.value = proContainer[index].category;
    proDesc.value = proContainer[index].desc;

    btn.innerHTML = "Update"; 
    tmpIndex = index;
}

function clearForm(){
    proName.value = "";
    proPrice.value = "";
    proCategory.value = "";
    proDesc.value = "";
}
