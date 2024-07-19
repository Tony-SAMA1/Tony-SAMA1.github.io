let navList = document.getElementById("navbar__list");
let sections = document.querySelectorAll("section");
let comments = document.getElementById("comments");
let submit = document.getElementById("submit");
/** TODO: Build the navigation bar using JavaScript **/
window.addEventListener("load", () => {
  for (i = 0; i < sections.length; i++) {
    console.log(`for ${i}`);
    let newList = document.createElement("li");
    newList.innerHTML = `<a onclick='GoToElem(sections[${i}])'>Section ${i + 1}</a>`
    navList.appendChild(newList);
  }
  let newList = document.createElement("li");
  navList.appendChild(newList);
});
/** TODO: Add smooth scrolling **/
function GoToElem(GoToElem) {
  GoToElem.scrollIntoView({ behavior: "smooth" });
}
/** TODO: Add an active state **/

document.addEventListener("DOMContentLoaded", () => {
  const options = {
    root: null,
    rootMargin: "0px",
    threshold: 0.5, // Adjust this value as needed
  };

  const callback = (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
      } else {
        entry.target.classList.remove("active");
      }
    });
  };

  const observer = new IntersectionObserver(callback, options);

  sections.forEach((section) => {
    observer.observe(section);
  });
});
/** TODO: Add a comment form **/

submit.addEventListener("click", (e) => {
  e.preventDefault();
  let newli = document.createElement("li");
  let newName = document.createElement("p");
  let newComment = document.createElement("pre");
  let name = document.getElementById("name");
  let comment = document.getElementById("comment");
  let email = document.getElementById("email");
  if ((name.value != "") & (comment.value != "") & (email.value != "")) {
    if (email.value.includes("@")) {
      newName.textContent = name.value;
      newComment.textContent = comment.value;
      newName.style.fontSize = "40px";
      newli.appendChild(newName);
      newli.appendChild(newComment);
      comments.appendChild(newli);
      name.value = "";
      email.value = "";
      comment.value = "";
    } else {
      alert("please check your email");
    }
  } else {
    alert("please fill the comment form");
  }
});
