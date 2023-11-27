var form = `<div>
  <div class="form-group">
    <label for="name">Name</label>
    <input type="text" class="form-control" id="name"  placeholder="Enter Your Name">
  </div>
  <div class="form-group mt-3">
    <label for="email">Email</label>
    <input type="email" class="form-control" id="email" placeholder="Enter Your email">
  </div>
  <div class="form-group mt-3">
    <label for="mobile">MobileNumber</label>
    <input type="number" class="form-control" id="mobile" placeholder="Enter Your mobile number">
  </div>
  <div class="form-group mt-3">
  <label for="altMobile">altMobile</label>
  <input type="number" class="form-control" id="altMobile" placeholder="Enter Your altMobile number">
</div>
  <button type="submit" class="btn btn-primary mt-3" onclick="save()">Save</button>
</div>`;

function table() {
    let table = `<table class="table">
  <thead>
    <tr>
      <th clsaa="col-1">NO</th>
      <th clsaa="col-3">Name</th>
      <th clsaa="col-4">Email</th>
      <th clsaa="col-4">mobile number</th>
      <th clsaa="col-4">altMobile</th>
      <th clsaa="col-2">Edit</th>
      <th clsaa="col-2">Delete</th>
    </tr>
  </thead>
  <tbody>`;
    for (let i = 0; i < details.length; i++){
        table = table + `<tr>
      <td>${i + 1}</td>
      <td>${details[i].name}</td>
      <td>${details[i].email}</td>
      <td>${details[i].mobile}</td>
      <td>${details[i].altMobile}</td>
      <td><button type="button" class="btn btn-warning" onclick="edit(${i})">Edit</button></td>
      <td><button type="button" class="btn btn-danger" onclick="deleteData(${i})">Delete</button></td>
    </tr> `;
    };
    table = table+`</tbody>
    </table>`;
    document.getElementById("table").innerHTML = table;
};
document.getElementById("form").innerHTML = form;
details = [];
getData();
table();
function getData(){
    let Data = localStorage.getItem("details");
    if (Data) {
        details = JSON.parse(Data);
    } else {
        setData();
    };
};
function setData() {
    localStorage.setItem("details", JSON.stringify(details));
};
function save() {
    let name = document.getElementById("name");
    let email = document.getElementById("email");
    let mobile = document.getElementById("mobile");
    let image = document.getElementById("altMobile");

    if (name.value == 0) {
        alert("name is Empty");
        return
    }
    let data = {
        name: name.value,
        email: email.value,
        mobile: mobile.value,
        altMobile: altMobile.value
    };
    details.push(data);
    setData();

    // console.log(details)
    // console.log(email.value)
    table();
    name.value = "";
    email.value = "";
    mobile.value = "";
    altMobile.value = "";
};
function deleteData(index) {
    details.splice(index, 1);
    setData();
    table();

    // console.log('delete work')
    // console.log(details)
};

function edit(index) {
    let editForm = `<div>
  <div class="form-group">
    <label for="name">Update Name</label>
    <input type="text" value="${details[index].name}" class="form-control" id="newName"  placeholder="Update Your Name">
  </div>
  <div class="form-group mt-3">
    <label for="email">Email</label>
    <input type="email" value="${details[index].email}" class="form-control" id="newEmail" placeholder="Update Your email">
  </div>
  <div class="form-group mt-3">
  <label for="mobile">MobileNumber</label>
  <input type="number" value="${details[index].mobile}" class="form-control" id="newMobile" placeholder="Update Your mobile number">
</div>
<div class="form-group mt-3">
<label for="altMobile">altMobile</label>
<input type="number" value="${details[index].altMobile}" class="form-control" id="altMobile" placeholder="Update Your altMobile number">
</div>
  <button type="submit" class="btn btn-primary mt-3" onclick="update(${index})">Update</button>
</div>`;
    document.getElementById("form").innerHTML = editForm;
    // console.log('edit work');
};
function update(index) {
    let newName = document.getElementById('newName');
    let newEmail = document.getElementById('newEmail');
    let newMobile = document.getElementById('newMobile');
    let altMobile = document.getElementById('altMobile');

    details[index] = {
        name: newName.value,
        email: newEmail.value,
        mobile: newMobile.value,
        altMobile: altMobile.value
    };
    setData();
    table();
    document.getElementById("form").innerHTML = form;
// console.log('update work')
// console.log(details)
}