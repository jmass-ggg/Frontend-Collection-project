const titleInput = document.getElementById("title");
const urlInput = document.getElementById("title-url");
const urlForm = document.getElementById("url-form");
const urlsList = document.getElementById("urls");

let bookMarks=JSON.parse(localStorage.getItem("URLS")) || [];

urlForm.addEventListener("submit",addUrls);

function addUrls(e){
    e.preventDefault();

    const title=titleInput.value.trim();
    const url=urlInput.value.trim();

    if(title === "" || url === ""){
        alert("Please fill the form");
        return;
    }
    const bookMark={
        id:Date.now(),
        title:title,
        url:url

    }
    bookMarks.push(bookMark);
    saveUrls();
    updateUrls();
    urlForm.reset();
}

function saveUrls(){
    localStorage.setItem("URLS",JSON.stringify(bookMarks));
}

function updateUrls(){
    urlsList.innerHTML="";
    const reverseUrl=[...bookMarks].reverse();
    reverseUrl.forEach(bookMark=>{
        const urlEl=createUrls(bookMark);
        urlsList.appendChild(urlEl);
    })
}
function createUrls(bookMark){
    const li=document.createElement("li");
    li.classList.add("bookMark");
    li.innerHTML=`
    <a href="${bookMark.url}">${bookMark.title}</a>
    <button onclick="removeUrls(${bookMark.id})">x</button>
    `
    return li;
}
function removeUrls(id){
    bookMarks=bookMarks.filter(bookMark => bookMark.id !=id);
    saveUrls();
    updateUrls();
}
updateUrls();