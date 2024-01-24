// déclaration des variables 
let plus = document.querySelector(".divPlus");
let mainInput = document.querySelector(".mainInput");
let mainBody = document.querySelector(".mainBody");
// let btnDeleteAll = [];
// let btnCheckedAll = [];
// let modal = document.querySelector(".modal");
// let btnModal = document.querySelector(".btnModal");
let select = document.querySelector("#selectClass");
let divListe = document.querySelector(".divListe");


// déclaration des fonctions
let addElement = () => {
    if (mainInput.value != "") {
        let mainInputValue = mainInput.value;
        let toDoElement = document.createElement("div");
        let divForElement = document.createElement("div");
        let btnChecked = document.createElement("div");
        let btnDelete = document.createElement("div");
        let btnModify = document.createElement("div");
        let iconCheck = document.createElement("i");
        let iconTrash = document.createElement("i");
        let iconModify = document.createElement("i");
        let modal = document.createElement("div");
        let modalContent = document.createElement("div");
        let p = document.createElement("p");
        p.innerText = "Modifie ton texte :"
        let inputModal = document.createElement("input");
        let btnModal = document.createElement("div");
        let iconModal = document.createElement("i");
        iconCheck.classList.add("fa-solid");
        iconCheck.classList.add("fa-check");
        iconTrash.classList.add("fa-solid");
        iconTrash.classList.add("fa-trash");
        iconModify.classList.add("fa-solid");
        iconModify.classList.add("fa-pen-nib");
        iconModal.classList.add("fa-solid");
        iconModal.classList.add("fa-pen-nib");
        btnChecked.appendChild(iconCheck);
        btnDelete.appendChild(iconTrash);
        btnModify.appendChild(iconModify);
        btnModal.appendChild(iconModal);
        modalContent.appendChild(p);
        modalContent.appendChild(inputModal);
        modalContent.appendChild(btnModal);
        modal.appendChild(modalContent);
        divForElement.classList.add("divElement");
        toDoElement.classList.add("divAdded");
        btnChecked.classList.add("btnChecked");
        btnDelete.classList.add("btnDelete");
        btnModify.classList.add("btnModify");
        btnModal.classList.add("btnModal");
        inputModal.classList.add("inputModal");
        p.classList.add("texteModal");
        modalContent.classList.add("modal-content");
        modal.classList.add("modal");
        toDoElement.innerText = mainInputValue;
        divForElement.appendChild(toDoElement);
        divForElement.appendChild(btnChecked);
        divForElement.appendChild(btnDelete);
        divForElement.appendChild(btnModify);
        divListe.appendChild(divForElement);
        mainBody.appendChild(modal);
        mainInput.value = "";
        let btnCheckedAll = document.querySelectorAll(".btnChecked");
        let btnDeleteAll = document.querySelectorAll(".btnDelete");
        let btnCheckedArray = Array.from(btnCheckedAll);
        let btnDeleteArray = Array.from(btnDeleteAll);
        let createdElements = document.querySelectorAll(".divElement");
        let createdElementsArray = Array.from(createdElements);
        console.log(createdElementsArray);
        console.log(createdElementsArray[1]);
        console.log(createdElementsArray[2]);
        console.log(btnCheckedArray);
        console.log(btnDeleteArray);

        let deleteElement = (e) => { 
            if (e.target.classList == "btnDelete") {
                e.target.parentElement.remove();
                console.log(e.target.parentElement);
            } else if (e.target.classList == "fa-solid fa-trash") {
                e.target.parentElement.parentElement.remove();
                console.log(e.target.parentElement);
            }
        }    
    

        btnDeleteArray.forEach(element => {
            element.addEventListener("click", deleteElement)
        });

        btnChecked.addEventListener("click",()=>{
            toDoElement.classList.toggle("classChecked");
        })

        btnModify.addEventListener("click", () => {
            modal.style = "display: block";
        })

        btnModal.addEventListener("click", () => {
            let inputModalValue = inputModal.value;
            toDoElement.innerText = inputModalValue;
            console.log(toDoElement.innerText);
            inputModal.value = "";
            modal.style = "display: none";
        })

    } else {
        alert("Le champ est vide !");
    }
}


// addEventListeners
plus.addEventListener("click", addElement)

let changeSelect = (event) => {
    let x = event.target
    console.log(x.value);
}

select.addEventListener("change", changeSelect)
