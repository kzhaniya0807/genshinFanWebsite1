$(document).ready(function() {
    const $faqQuestions = $(".js-faq-question");

    $faqQuestions.on("click", function(e) {
        e.preventDefault();

        const $button = $(this);
        const answerId = $button.attr("aria-controls");
        const $answer = $("#" + answerId);

        if (!$answer.length) return;

        const isExpanded = $button.attr("aria-expanded") === "true";

        $button.attr("aria-expanded", String(!isExpanded));

        if (isExpanded) {
            $answer.stop(true, true).slideUp(300, function() {
                $(this).attr("hidden", true);
            });
        }
        else {
            $answer.removeAttr("hidden").hide().stop(true, true).slideDown(300);
        }
    });
});