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
//<================ form JS ===============>
    // main page appointment button
    let appointmentButton = document.getElementById("booking-button")
    let closebutton = document.getElementById("close")
    // appointment button in form
    let confirmAppointmentButton = document.getElementById("booking-button-in-form")
    // form section
    let formsection = document.getElementById("form-section")
    // form 
    let form = document.getElementById("form")
//  to get form data
let clientName =document.getElementById("name")
let address =document.getElementById("address")
let email =document.getElementById("email")
let phone =document.getElementById("phone")
let date =document.getElementById("date")
let time =document.getElementById("time")



//  to display form
    appointmentButton.addEventListener("click",()=>{
formsection.style.display="flex"
    });
    // to close form by clicking on crose button
    closebutton.addEventListener("click",()=>{
        formsection.style.display="none"
    });

    // handle form submission
    form.addEventListener("submit",(e)=>{
        e.preventDefault();

    alert(`Appointment Booked Successfully !
        With Details:
         Name:  ${clientName.value}
         Email: ${email.value}
         Phone: ${phone.value}
         Date:  ${date.value}
         Time:  ${time.value}`)

         formsection.style.display="none";
         form.reset();
    });



