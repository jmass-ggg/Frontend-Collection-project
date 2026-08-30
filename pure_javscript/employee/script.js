const nameInput = document.querySelector(".Name");
const emailInput = document.querySelector(".Email");
const departmentInput = document.querySelector(".Department");
const salaryInput = document.querySelector(".Salary");
const joiningDateInput = document.querySelector(".JD");
const photoInput = document.querySelector(".photo");
const ageInput=document.querySelector(".Age");
const Form = document.getElementById("url-form");

const result=document.getElementById("result");

let datas = JSON.parse(localStorage.getItem("data")) || [];

Form.addEventListener("submit", addFunction);

function addFunction(e){
    e.preventDefault();

    const name=nameInput.value.trim();
    const email=emailInput.value.trim();
    const department=departmentInput.value.trim();
    const salary = Number(salaryInput.value);
    const jd=joiningDateInput.value;
    const photo=photoInput.value.trim();
    const age=Number(ageInput.value);
    if(name == "" && email=="" && department == "" && salary == ""&& jd == "" &&photo == "" && age==""){
        alert("Please full all the form");
        return;
    }
    if(age < 18){
        alert("age must be above 18");
        return;
    }
    if(salary <0){
        alert("Salary must be greater than 0");
        return;
    }
    const bookMark={
        "id":Date.now(),
        "username":name,
        "email":email,
        "age":age,
        "department":department,
        "salary":salary,
        "joiningDate":jd,
        "photo":photo

    }
    datas.push(bookMark);
    saveLocalStorage();
    Form.reset();
    

}

function saveLocalStorage(){
    localStorage.setItem("data",JSON.stringify(datas))
}
function updateOutput(){
    result.innerHtml="";
    const reverseUrl=[...datas].reverse();
    reverseUrl.forEach(form=>{
        const formEl=createOutput(form);
        result.appendChild(formEl);
    })

}

function createOutput(form){
    const div=document.createElement("div");
    div.classList.add("form");
    div.innerHTML=`
    <div class="output">Name : <span>${form.username}</span></div>
    <div class="output">Email : <span >${form.email}</span></div>
    <div class="output">Age : <span >${form.age}</span></div>
    <div class="output">Deparment : <span >${form.department}</span></div>
    <div class="output">joiningDate : <span >${form.joiningDate}</span></div>
    <div class="output">photo : <span >${form.photo}</span></div>
    
    `
    return div;
}
updateOutput();