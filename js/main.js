document.addEventListener("DOMContentLoaded", () => {

    // ===== Scroll Progress Bar =====
    window.addEventListener("scroll", () => {
        const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (winScroll / height) * 100;

        const progressBar = document.getElementById("scrollProgress");
        if (progressBar) {
            progressBar.style.width = scrolled + "%";
        }
    });

    // ===== Language Switch =====
    const buttons = document.querySelectorAll(".lang-btn");

    function applyLanguage(lang) {

        document.documentElement.lang = lang;

        document.querySelectorAll("[data-i18n]").forEach(element => {

            const key = element.dataset.i18n;

            if (translations[lang][key]) {
                element.innerHTML = translations[lang][key];
            }

        });

        buttons.forEach(btn => {
            btn.classList.remove("active");

            if (btn.dataset.lang === lang) {
                btn.classList.add("active");
            }
        });

        localStorage.setItem("language", lang);
    }

    buttons.forEach(button => {

        button.addEventListener("click", () => {

            const lang = button.dataset.lang;
            applyLanguage(lang);

        });

    });

    const savedLang = localStorage.getItem("language") || "en";
    applyLanguage(savedLang);

});