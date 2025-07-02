document.addEventListener('DOMContentLoaded', function() {
    // Support Messages Interaction
    const messageButtons = document.querySelectorAll('.message-btn');
    const responseContainer = document.querySelector('.response-container');
    const responseText = document.querySelector('.response-text');
    const tryAnotherBtn = document.querySelector('.try-another-btn');

    messageButtons.forEach(button => {
        button.addEventListener('click', function() {
            const response = this.getAttribute('data-response');
            responseText.textContent = response;
            document.querySelector('.message-buttons').style.display = 'none';
            responseContainer.classList.remove('hidden');
            responseContainer.scrollIntoView({ behavior: 'smooth', block: 'center' });
        });
    });

    tryAnotherBtn.addEventListener('click', function() {
        document.querySelector('.message-buttons').style.display = 'grid';
        responseContainer.classList.add('hidden');
        document.querySelector('.message-buttons').scrollIntoView({ behavior: 'smooth' });
    });

    // Breathing Exercise
    const startButton = document.getElementById('start-breathing');
    const stopButton = document.getElementById('stop-breathing');
    const breathingCircle = document.querySelector('.breathing-circle');
    const circleAnimation = document.querySelector('.circle-animation');
    const breathText = document.querySelector('.breath-text');

    let breathingInterval;
    let isBreathing = false;
    let secondsLeft = 30;

    stopButton.classList.add('hidden');

    startButton.addEventListener('click', function() {
        if (!isBreathing) {
            startBreathing();
            startButton.classList.add('hidden');
            stopButton.classList.remove('hidden');
        }
    });

    stopButton.addEventListener('click', function() {
        if (isBreathing) {
            stopBreathing();
            stopButton.classList.add('hidden');
            startButton.classList.remove('hidden');
        }
    });

    function startBreathing() {
        isBreathing = true;
        secondsLeft = 30;
        breathingCircle.classList.add('breathing-in');
        breathText.textContent = 'Breathe In';

        breathingInterval = setInterval(function() {
            if (breathingCircle.classList.contains('breathing-in')) {
                breathingCircle.classList.remove('breathing-in');
                breathingCircle.classList.add('breathing-out');
                breathText.textContent = 'Breathe Out';
            } else {
                breathingCircle.classList.remove('breathing-out');
                breathingCircle.classList.add('breathing-in');
                breathText.textContent = 'Breathe In';
            }

            secondsLeft -= 2;
            if (secondsLeft <= 0) {
                stopBreathing();
                stopButton.classList.add('hidden');
                startButton.classList.remove('hidden');
                breathText.textContent = 'Exercise Complete';
                setTimeout(() => {
                    breathText.textContent = 'Ready to Begin';
                }, 2000);
            }
        }, 4000);
    }

    function stopBreathing() {
        clearInterval(breathingInterval);
        breathingCircle.classList.remove('breathing-in', 'breathing-out');
        circleAnimation.style.transform = 'scale(0)';
        breathText.textContent = 'Paused';
        setTimeout(() => {
            breathText.textContent = 'Ready to Begin';
        }, 1000);
        isBreathing = false;
    }

    // Newsletter Form
    const newsletterForm = document.querySelector('.newsletter-form');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const emailInput = this.querySelector('input[type="email"]');
            if (emailInput.value) {
                alert("Thank you for subscribing! Gentle reminders will be sent to your inbox.");
                emailInput.value = '';
            } else {
                alert("Please enter your email address.");
            }
        });
    }
});