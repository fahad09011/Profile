// buttons
let aboutButton = document.getElementById("about-button")
let skillsButton = document.getElementById("skills-button")
let reviewButton = document.getElementById("review-button")
// button content
let aboutContent = document.getElementById("about-content")
let skillsContent = document.getElementById("skills-content")
let reviewContent = document.getElementById("review-content")

aboutButton.addEventListener("click", ()=>{
    functionOnClick(aboutContent);
});

skillsButton.addEventListener("click", ()=>{
    functionOnClick(skillsContent);
});
reviewButton.addEventListener("click", ()=>{
    functionOnClick(reviewContent);
});

//  function functionOnClick(activebutton){
//     let allcontent = document.querySelectorAll(".button-content");
//     allcontent.forEach((content)=>{
//         content.classList.remove("active")
//     });
// activebutton.classList.add("active");
// }