const container = document.querySelector("#container");

const content = document.createElement("div");
content.classList.add("content");
content.textContent = "This is the glorious text-content!";

container.appendChild(content);

const paragraph = document.createElement("p");
paragraph.style.color = "red";
paragraph.textContent = "Hey I'm red!";
container.appendChild(paragraph);

const title = document.createElement("h3");
title.style.color = "blue";
title.textContent = "I'm a blue h3!";
container.appendChild(title);

const newContainer = document.createElement("div");
newContainer.classList.toggle("new-container");

const title2 = document.createElement("h1");
title2.textContent = "I'm in a div";

const paragraph2 = document.createElement("p");
paragraph2.textContent = "ME TOO!"

newContainer.appendChild(title2);
newContainer.appendChild(paragraph2);

container.appendChild(newContainer);


const btn = document.querySelector("#btn");
btn.addEventListener("click", function (e) {
    e.target.style.background = "blue";
});
