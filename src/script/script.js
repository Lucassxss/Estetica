document.addEventListener('DOMContentLoaded', function () {
    const buttons = document.querySelectorAll('.toggle-btn');
    const formPage = document.getElementById('form-page');
    const sitePage = document.getElementById('site-page');
    const form = document.getElementById('skin-care-form');
    const feedback = document.getElementById('feedback');
    const goToSiteBtn = document.getElementById('go-to-site-btn');
    const backToFormBtn = document.getElementById('back-to-form-btn');

    buttons.forEach(function (button) {
        button.addEventListener('click', function () {
            const targetId = button.getAttribute('data-target');
            const targetElement = document.getElementById(targetId);

            if (targetElement.style.display === 'none') {
                targetElement.style.display = 'block';
            } else {
                targetElement.style.display = 'none';
            }
        });
    });

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        let score = 0;
        const formData = new FormData(form);

        for (const [name, value] of formData.entries()) {
            switch (name) {
                case 'cleaning-frequency':
                    if (value === 'daily') score += 2;
                    break;
                case 'moisturizer':
                    if (value === 'yes') score += 2;
                    break;
                case 'sunscreen':
                    if (value === 'yes') score += 2;
                    break;
                case 'makeup-removal':
                    if (value === 'yes') score += 2;
                    break;
                case 'diet':
                    if (value === 'healthy-diet') score += 2;
                    break;
                case 'skin-care-products':
                    if (value === 'yes') score += 2;
                    break;
                case 'physical-exercise':
                    if (value === 'yes') score += 2;
                    break;
                case 'stress':
                    if (value === 'no') score += 2;
                    break;
                default:
                    break;
            }
        }

        let message;
        if (score >= 16) {
            message = 'Parabéns! Você parece estar cuidando bem da sua pele.';
        } else if (score >= 10) {
            message = 'Você está no caminho certo, mas ainda há espaço para melhorar.';
        } else {
            message = 'Considere melhorar seus cuidados com a pele para obter melhores resultados.';
        }

        feedback.textContent = message;
    });

    goToSiteBtn.addEventListener('click', function () {
        formPage.style.display = 'none';
        sitePage.style.display = 'block';
    });

    backToFormBtn.addEventListener('click', function () {
        sitePage.style.display = 'none';
        formPage.style.display = 'block';
    });
});
