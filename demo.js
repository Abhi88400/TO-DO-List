let fakeToDoListApi = [
    {
        Name: "Abhishek",
        id: 1,
        Notes: "Today we have to complete javascript",
        isCompleted: false
    },
    {
        Name: "avneesh",
        id: 2,
        Notes: "Today we have to complete html",
        isCompleted: false
    },
    {
        Name: "shashank",
        id: 3,
        Notes: "Today we have to complete css",
        isCompleted: false
    },
    {
        Name: "siddharth",
        id: 4,
        Notes: "Today we have to complete cpp",
        isCompleted: false
    },
    {
        Name: "anurag",
        id: 5,
        Notes: "Today we have to complete full-stack",
        isCompleted: false
    },
    {
        Name: "ayush",
        id: 6,
        Notes: "Today we have to complete data-Structure",
        isCompleted: false
    }
]




let outerDiv = document.querySelector(".To-Do-List-Content")

fakeToDoListApi.forEach((data) => {
    let updatedDiv = ToDoListArrange(data)
    outerDiv.appendChild(updatedDiv);
})

function ToDoListArrange(notes) {
    let div = document.createElement('div');
    div.setAttribute("class", "To-Do-List-item")

    let heading = document.createElement('h3')

    let input = document.createElement("input");
    input.type = "text";
    input.value = notes.Notes;
    input.setAttribute("class", "To-Do-List-Input");
    input.addEventListener("focusout", (event) => {
        onMyFocus(event);
    });
    heading.innerHTML = notes.Notes;
    heading.append(input);


    let controlsDiv = document.createElement("div");
    controlsDiv.setAttribute("class", "To-Do-List-item-controls");

    let button1 = document.createElement('button')
    let button2 = document.createElement('button')
    let button3 = document.createElement('button')

    button1.innerText = "Mark As Completed";
    button2.innerText = "ModifyTask";
    button3.innerText = "DeleteTask";
    if (notes.isCompleted) {
        heading.style.backgroundColor = "green";
        button1.style.display = "none"
    } else {
        button1.addEventListener("click", (event) => MarkAsComplete(event));
    }
    button3.addEventListener("click", (event) => MarkAsDelete(event))
    button2.addEventListener("click", (event) => {

        ModifyTask(event);
    })
    controlsDiv.appendChild(button1)
    controlsDiv.appendChild(button2)
    controlsDiv.appendChild(button3)

    div.appendChild(heading);
    div.appendChild(controlsDiv);
    div.setAttribute("id", notes.id)
    return div;
}

function MarkAsComplete(event) {
    const ParentNode = event.srcElement.parentNode.parentNode;
    const id = ParentNode.getAttribute("id");

    fakeToDoListApi.forEach(data => {
        if (data.id === id) {
            data.isCompleted = true;
        }
    })
    console.log(ParentNode.firstElementChild);
    MarkCompleteTask(ParentNode);
}

function MarkCompleteTask(ParentNode) {
    const updateChild = ParentNode.firstElementChild;
    console.log(updateChild);
    updateChild.style.backgroundColor = "green";

    const lastElement = ParentNode.lastElementChild;
    const button = lastElement.firstElementChild;
    button.style.display = "none";
}

function MarkAsDelete(e) {
    const parentNode = e.srcElement.parentNode.parentNode;
    console.log(parentNode);
    const id = parentNode.getAttribute("id");
    fakeToDoListApi = fakeToDoListApi.filter(data => data.id != id)
    parentNode.style.display = "none";
}

function ModifyTask(e) {
    const ParentNode = e.srcElement.parentNode.parentNode;
    const heading = ParentNode.firstElementChild;
    const headingValue = heading.firstElementChild.textContent;
    heading.firstChild.textContent = "";
    const inputField = heading.firstElementChild;
    inputField.setAttribute("value", headingValue)
    inputField.style.display = "inline-block";
    inputField.focus();
}

function onMyFocus(e) {
    console.log(e.target.value);
    const ParentNode = e.srcElement.parentNode.parentNode;
    const id = ParentNode.getAttribute("id");
    const heading = ParentNode.firstElementChild;
    const inputField = heading.firstElementChild;
    inputField.style.display = "none"
    heading.firstChild.textContent = e.target.value;
    fakeToDoListApi = fakeToDoListApi.forEach(data => {
        if(data.id=== id){
            data.Notes = e.target.value;
        }
    })
}
ToDoListArrange(fakeToDoListApi)















