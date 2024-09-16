const notesContainer = document.querySelector(".notes-container");
const createBtn = document.querySelector(".notes-btn");
const notes = document.querySelectorAll(".input-box");

const showNotes = () =>{
    notesContainer.innerHTML = localStorage.getItem("Notes");
}

showNotes();

createBtn.addEventListener("click", ()=>{
    let inputBox = document.createElement("p");
    let img = document.createElement("img");

    inputBox.className = "input-box";
    inputBox.setAttribute("contenteditable", "true");
    img.src = "../images/delete.png";

    notesContainer.appendChild(inputBox).appendChild(img);
    updateStorage();
});

notesContainer.addEventListener("click", (e)=>{
    if(e.target.tagName === "IMG"){
        e.target.parentElement.remove();
        updateStorage();
    }else if(e.target.tagName === "P"){
        notes = querySelectorAll(".input-box");
        notes.forEach(nt => {
            nt.onKeyUp = () =>{
                updateStorage();
            }
        })
    }
})

const updateStorage = () => {
    localStorage.setItem("Notes", notesContainer.innerHTML);
}

document.addEventListener("keydown", (e)=>{
    if(e.key === "Enter"){
        document.execCommand("insertLineBreak");
        e.preventDefault();
    }
})
