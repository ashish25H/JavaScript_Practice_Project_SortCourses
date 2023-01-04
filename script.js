const courses = [
    {
        name:"JavaScript Course",
        price:"9.6",
    },
    {
        name:"C++ Course",
        price:"1.3",
    },
    {
        name:"Python Course",
        price:"1.2",
    },
    {
        name:"Java Course",
        price:"6.9",
    },
    {
        name:"full Stack Web Developer Course",
        price:"45",
    }
]

const addCourses = ()=>{
    const ul = document.querySelector(".list-group");
    ul.innerHTML = "";

    courses.forEach((courses)=>{
        const li = document.createElement("li");
        li.classList.add("list-group-item");
        const name = document.createTextNode(courses.name);
        li.appendChild(name);

        const span = document.createElement("span");
        span.classList.add("float-right");
        const price = document.createTextNode("$ " + courses.price);
        span.appendChild(price);

        li.appendChild(span);

        ul.appendChild(li);

    });
}

window.addEventListener("load",addCourses);

const sortBtn = document.querySelector(".sort-btn");

sortBtn.addEventListener("click", ()=>{
    courses.sort((a,b)=> a.price - b.price);
    addCourses();
});

const sortBtnRev = document.querySelector(".sort-btn-rev");
sortBtnRev.addEventListener("click",()=>{
    courses.sort((a,b)=> b.price - a.price);
    addCourses();
});

