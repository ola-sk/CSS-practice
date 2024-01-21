const toggleAnswerHeader = document.querySelectorAll('section.faq-section > header')
const toggleAnswerElements = document.querySelectorAll(
        'section.faq-section > header > img.toggle_answer, section.faq-section > header >  h2');
toggleAnswerElements.forEach(
    button => button.addEventListener(
        'click', e => toggleAnswer(e.target.parentElement)));

toggleAnswerHeader.forEach(
    header => {
        header.addEventListener(
        'keydown', e => {
            if(e.key === "Enter" || e.key === ' ') {
                e.preventDefault();
                toggleAnswer(e.target);
            }
        });
        header.addEventListener(
            'click', e => toggleAnswer(e.target))
    });
function toggleAnswer (toggleAnswerHeader) {
    const answerParagraph = toggleAnswerHeader.nextElementSibling;
    answerParagraph.classList.toggle("visible");

    // change the displayed icon when the answer is visible
    toggleAnswerHeader.lastElementChild.src = answerParagraph.classList.contains("visible")
    ? "./assets/images/icon-minus.svg" : "./assets/images/icon-plus.svg";
}