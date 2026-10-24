// ============================================================
// TASK 2 — Show and hide FAQ answers (accessible accordion)
// ============================================================

const faqQuestions = document.querySelectorAll(".js-faq-question");

faqQuestions.forEach((button) => {
  button.addEventListener("click", () => {
    // Find the answer block linked to this specific button
    const answerId = button.getAttribute("aria-controls");
    const answer = document.getElementById(answerId);
    
    if (!answer) return;

    // Check if the button is currently expanded
    const isExpanded = button.getAttribute("aria-expanded") === "true";

    // Toggle the aria-expanded attribute (true becomes false, false becomes true)
    button.setAttribute("aria-expanded", String(!isExpanded));
    
    // Toggle the hidden property (if it was expanded, hide it. If it was hidden, show it)
    answer.hidden = isExpanded; 
  });
});