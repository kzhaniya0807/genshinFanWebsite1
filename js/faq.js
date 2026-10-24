

const faqQuestions = document.querySelectorAll(".js-faq-question");

faqQuestions.forEach((button) => {
  button.addEventListener("click", () => {

    const answerId = button.getAttribute("aria-controls");
    const answer = document.getElementById(answerId);
    
    if (!answer) return;
    
    const isExpanded = button.getAttribute("aria-expanded") === "true";
    
    button.setAttribute("aria-expanded", String(!isExpanded));
     answer.hidden = isExpanded; 
  });
});