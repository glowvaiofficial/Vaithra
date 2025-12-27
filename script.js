document.addEventListener('DOMContentLoaded', () => {
    // 1. Initialize Reveal Observer
    const observerOptions = {
        threshold: 0.2
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, observerOptions);

    // Track all sections and cards for animation
    document.querySelectorAll('.reveal, .card').forEach(el => {
        el.classList.add('reveal');
        observer.observe(el);
    });

    // 2. Smooth Navigation for the Agenda
    [span_8](start_span)// Useful for the 5-hour session planning[span_8](end_span)
    const agendaItems = document.querySelectorAll('.agenda-item');
    agendaItems.forEach(item => {
        item.addEventListener('mouseenter', () => {
            item.style.borderLeft = "4px solid #FF5F1F";
        });
        item.addEventListener('mouseleave', () => {
            item.style.borderLeft = "4px solid transparent";
        });
    });

    // 3. Simple Button Feedback
    const startBtn = document.querySelector('.orange-glow-btn');
    if (startBtn) {
        startBtn.addEventListener('click', () => {
            console.log("Brainstorming Session Started!");
            [span_9](start_span)// Add your logic to move to the first interactive task[span_9](end_span)
        });
    }
});

