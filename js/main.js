// Imports
import hljs from 'highlight.js/lib/core';
import shell from 'highlight.js/lib/languages/shell';
import clojure from 'highlight.js/lib/languages/clojure';
import yaml from 'highlight.js/lib/languages/yaml';
import django from 'highlight.js/lib/languages/django';
import json from 'highlight.js/lib/languages/json';

document.addEventListener('DOMContentLoaded', () => {

    // Menu mobile
    function openMenu() {
        document.querySelector('.aside').classList.add('aside__show');
        document.querySelector('.nav-close').classList.add('nav-close__show');
    }
    function closeMenu() {
        document.querySelector('.aside').classList.remove('aside__show');
        document.querySelector('.nav-close').classList.remove('nav-close__show');
    }
    //// Open
    document.querySelector('#nav-menu').addEventListener('click', openMenu);
    //// Close
    document.querySelector('#nav-close').addEventListener('click', closeMenu);
    //// Links
    document.querySelectorAll('.aside__link').forEach(link => link.addEventListener('click', closeMenu));

    // Load languages highlight
    hljs.initHighlightingOnLoad();
    hljs.registerLanguage('shell', shell);
    hljs.registerLanguage('clojure', clojure);
    hljs.registerLanguage('yaml', yaml);
    hljs.registerLanguage('django', django);
    hljs.registerLanguage('json', json);

    // Scroll aside
    //// Variables
    const extraEspace = 50;
    const speed = 1;
    const delay = 2000;
    const aside = document.querySelector('.aside');
    const asideContent = document.querySelector('.aside__content');
    let interval = undefined;

    //// Event mouse
    aside.addEventListener('mousemove', e => {
        // Move
        asideContent.style.transition = 'initial';
        let heightWindow = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0);
        let difference =  (asideContent.offsetHeight + extraEspace) - heightWindow;
        if (difference > 0) {
            let porcetageMouse = Math.round(e.clientY * 100 / heightWindow);
            asideContent.style.transform = `translateY(-${ difference * porcetageMouse / 100 }px)`;
        }
        // Return position start
        clearInterval(interval);
        interval = setInterval(() => {
            asideContent.style.transition = `${speed}s`;
            asideContent.style.transform = `translateY(0)`;
        }, delay);
    });

    // Add dinamic class mark link in scroll
    let marks = document.querySelectorAll('.mark');
    let links = document.querySelectorAll('a.aside__link');

    const onIntersection = (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                // Remove all mark class
                links.forEach(element => element.classList.remove('mark'));
                // Add mark class
                let myId = entry.target.querySelector('.mark').getAttribute('id');
                document.querySelector(`a.aside__link[href="#${myId}"]`).classList.add('mark');
            }
        });
    };

    const observer = new IntersectionObserver(onIntersection);
    marks.forEach((element) => {
        observer.observe(element.parentNode);
    });
});
