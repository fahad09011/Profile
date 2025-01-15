document.addEventListener("DOMContentLoaded",()=>{


    let aboutButton = document.getElementById("about-button")
    let skillsButton = document.getElementById("skills-button")
    let reviewButton = document.getElementById("review-button")
    // button content
    let aboutContent = document.getElementById("about-content")
    let skillsContent = document.getElementById("skills-content")
    let reviewContent = document.getElementById("review-content")
    
    
    // this functionOnClick take parameter (clicked one  button)
     function functionOnClick(activebutton){
        let allcontent = document.querySelectorAll(".button-content");
        allcontent.forEach((content)=>{
            content.classList.remove("active")
        });
    activebutton.classList.add("active");
    }
    
    functionOnClick(reviewContent); // this function shows the about me content always until click on button
    
    aboutButton.addEventListener("click", ()=>{
        functionOnClick(aboutContent);
    });
    
    skillsButton.addEventListener("click", ()=>{
        functionOnClick(skillsContent);
    });
    reviewButton.addEventListener("click", ()=>{
        functionOnClick(reviewContent);
    });
});
// buttons
