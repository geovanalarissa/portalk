const cards = document.querySelectorAll('.course-card');

cards.forEach(card => {

    card.style.transition = '0.3s';

    card.addEventListener('mouseenter', () => {

        card.style.transform = 'translateY(-10px)';
        card.style.boxShadow = '0 15px 30px rgba(0,0,0,0.15)';
    });

    card.addEventListener('mouseleave', () => {

        card.style.transform = 'translateY(0)';
        card.style.boxShadow = 'none';
    });
});

const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });

}, {
    threshold: 0.2
});

cards.forEach(card => {

    card.style.opacity = '0';
    card.style.transform = 'translateY(40px)';
    card.style.transition = '0.6s';

    observer.observe(card);
});

const startButtons =
    document.querySelectorAll('.start-btn');

startButtons.forEach(button => {

    button.addEventListener('click', () => {

        completeExercise();

        button.innerText = 'Concluído ✅';

        button.style.background = '#28c76f';
    });
});

const buttons = document.querySelectorAll('button');

buttons.forEach(button => {

    button.style.position = 'relative';
    button.style.overflow = 'hidden';

    button.addEventListener('click', function(e) {

        const ripple =
            document.createElement('span');

        const size = Math.max(
            this.clientWidth,
            this.clientHeight
        );

        ripple.style.width = ripple.style.height =
            `${size}px`;

        ripple.style.position = 'absolute';

        ripple.style.borderRadius = '50%';

        ripple.style.background =
            'rgba(255,255,255,0.5)';

        ripple.style.transform = 'scale(0)';

        ripple.style.animation =
            'ripple 0.6s linear';

        ripple.style.left =
            `${e.offsetX - size / 2}px`;

        ripple.style.top =
            `${e.offsetY - size / 2}px`;

        this.appendChild(ripple);

        setTimeout(() => {

            ripple.remove();

        }, 600);
    });
});

const darkButton =
    document.querySelector('#darkmode');

if (darkButton) {

    darkButton.addEventListener('click', () => {

        document.body.classList.toggle('dark');
    });
}

const clickSound = new Audio(
    'click.mp3'
);

buttons.forEach(button => {

    button.addEventListener('click', () => {

        clickSound.play();
    });
});

