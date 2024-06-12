document.addEventListener('DOMContentLoaded', function() {
    const header = document.querySelector('header');

    header.addEventListener('mouseover', function() {
        header.style.backgroundColor = '#555';
    });

    header.addEventListener('mouseout', function() {
        header.style.backgroundColor = '#343a40';
    });

    document.querySelector('.btn-light').addEventListener('click', lightMode);
    document.querySelector('.btn-dark').addEventListener('click', darkMode);
});

function darkMode() {
    document.body.classList.add('dark-mode');
}

function lightMode() {
    document.body.classList.remove('dark-mode');
}
document.addEventListener('DOMContentLoaded', function() {
    const header = document.querySelector('header');

    header.addEventListener('mouseover', function() {
        header.style.backgroundColor = '#555';
    });

    header.addEventListener('mouseout', function() {
        header.style.backgroundColor = '#343a40';
    });

    document.querySelector('.btn-light').addEventListener('click', lightMode);
    document.querySelector('.btn-dark').addEventListener('click', darkMode);
});

function darkMode() {
    document.body.classList.add('dark-mode');
}

function lightMode() {
    document.body.classList.remove('dark-mode');
}
document.addEventListener('DOMContentLoaded', function() {
    const header = document.querySelector('header');

    header.addEventListener('mouseover', function() {
        header.style.backgroundColor = '#555';
    });

    header.addEventListener('mouseout', function() {
        header.style.backgroundColor = '#343a40';
    });

    document.querySelector('.btn-light').addEventListener('click', lightMode);
    document.querySelector('.btn-dark').addEventListener('click', darkMode);
});

function darkMode() {
    document.body.classList.add('dark-mode');
}

function lightMode() {
    document.body.classList.remove('dark-mode');
}



document.addEventListener('DOMContentLoaded', function() {
    const header = document.querySelector('header');

    header.addEventListener('mouseover', function() {
        header.style.backgroundColor = '#555';
    });

    header.addEventListener('mouseout', function() {
        header.style.backgroundColor = '#343a40';
    });

    document.querySelector('.btn-light').addEventListener('click', lightMode);
    document.querySelector('.btn-dark').addEventListener('click', darkMode);

    // Intersection Observer for section animations
    const sections = document.querySelectorAll('section');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1
    });

    sections.forEach(section => {
        observer.observe(section);
    });
});

function darkMode() {
    document.body.classList.add('dark-mode');
}

function lightMode() {
    document.body.classList.remove('dark-mode');
}
