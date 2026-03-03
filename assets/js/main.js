/* ============================================================
   BASE CONFIG
============================================================ */

let BASE = ""; // Ostaje prazno jer si na root domenu

const VIEW   = document.getElementById("view");
const LOADER = document.getElementById("loader");

/* ============================================================
   INTRO SETTINGS
============================================================ */

let introEnabled   = true;
let introMinWidth  = 1024;

let homeSwiper = null;
let introPlayed = false;
let textDuration = 3000;

/* ============================================================
   NAV ACTIVE LINK
============================================================ */

function setActiveNav(url) {
    document.querySelectorAll(".main-nav-link").forEach(link => {
        link.classList.remove("active");
        const href = link.getAttribute("href");

        if (url.startsWith(`${BASE}/page/case-studies`)) {
            if (href === `${BASE}/page/case-studies`) {
                link.classList.add("active");
            }
            return;
        }

        if (href === url) {
            link.classList.add("active");
        }
    });
}

/* ============================================================
   TEMPLATE LOADING
============================================================ */

async function loadTemplate(path) {
    // Dodata provera za putanju da ne bi dupla kosa crta pravila problem
    const cleanPath = path.startsWith('/') ? path : `/${path}`;
    const html = await fetch(cleanPath).then(r => r.text());
    VIEW.innerHTML = html;

    const backBtn = VIEW.querySelector("[data-back]");
    if (backBtn) {
        backBtn.addEventListener("click", () => {
            navigate(`${BASE}/page/case-studies`);
        });
    }
}

/* ============================================================
   ROUTER
============================================================ */

async function route(url) {
    const path = url.replace(/\/+$/, "") || "/";

    if (path === "/" || path === `${BASE}/page/home`) {
        return loadTemplate(`${BASE}/templates/home.html`);
    }

    if (path === `${BASE}/page/collab`) {
        return loadTemplate(`${BASE}/templates/collab.html`);
    }

    if (path === `${BASE}/page/case-studies`) {
        return loadTemplate(`${BASE}/templates/case-studies.html`);
    }

    if (path.startsWith(`${BASE}/page/case-studies/`)) {
        const slug = path.split("/").pop();
        return loadTemplate(`${BASE}/templates/case-studies/${slug}.html`);
    }

    return loadTemplate(`${BASE}/templates/home.html`);
}

/* ============================================================
   APPLY VIEW STATE
============================================================ */

let scrollObserver;

async function applyViewState(url) {
    setActiveNav(url);
    handleImagePlaceholders();

    const isMobile = window.innerWidth < 768;

    if (isMobile && url.startsWith(`${BASE}/page/case-studies/`)) {
        document.querySelectorAll(".headerFooterWrapper").forEach(el => el.classList.remove("show"));
        document.querySelectorAll("header,footer").forEach(el => el.style.pointerEvents = "none");
    } else {
        document.querySelectorAll(".headerFooterWrapper").forEach(el => el.classList.add("show"));
        document.querySelectorAll("header,footer").forEach(el => el.style.pointerEvents = "auto");
    }

    setTimeout(() => {
        initScrollFade();
    }, 250);

    const newView = VIEW.querySelector(".view");
    if (newView) {
        newView.classList.remove("out", "active");
        void newView.offsetWidth;
        newView.classList.add("active");
        
        if (newView.dataset.template === "home") {
            initHomeIntro();
        }
    }
}

/* ============================================================
   HOME INTRO LOOP
============================================================ */

function initHomeIntro() {
    if (!introEnabled || window.innerWidth < introMinWidth) return;

    const intro = VIEW.querySelector(".home-intro");
    const content = VIEW.querySelector(".home-content");
    if (!intro || !content) return;

    if (!homeSwiper) {
        homeSwiper = new Swiper(intro.querySelector(".caseSwiper"), {
            speed: 800,
            effect: "fade",
            fadeEffect: { crossFade: true },
            autoplay: { delay: 4000, disableOnInteraction: false },
            pagination: { el: intro.querySelector(".swiper-pagination"), type: "progressbar" }
        });
    }

    startTextPhase();

    function startTextPhase() {
        intro.classList.remove("active");
        content.classList.add("visible");
        content.classList.remove("hidden");
        setTimeout(startSliderPhase, textDuration);
    }

    function startSliderPhase() {
        content.classList.add("hidden");
        content.classList.remove("visible");
        intro.classList.add("active");
        homeSwiper.slideTo(0, 0);
        homeSwiper.autoplay.start();
        homeSwiper.on("slideChange", handleLastSlide);
    }

    function handleLastSlide() {
        if (homeSwiper.activeIndex === homeSwiper.slides.length - 1) {
            setTimeout(() => {
                homeSwiper.autoplay.stop();
                homeSwiper.off("slideChange", handleLastSlide);
                startTextPhase();
            }, homeSwiper.params.autoplay.delay);
        }
    }
}

/* ============================================================
   NAVIGATION
============================================================ */

async function navigate(url, push = true) {
    if (push && location.pathname !== url) {
        history.pushState({ url }, "", url);
    }

    const oldView = VIEW.querySelector(".view");
    if (oldView) {
        oldView.classList.add("out");
        await new Promise(res => setTimeout(res, 450));
    }

    await route(url);
    window.scrollTo({ top: 0, behavior: "instant" });
    await applyViewState(url);
}

/* ============================================================
   INITIAL LOAD (POPRAVLJENO ZA GITHUB PAGES)
============================================================ */

window.onload = () => {
    // 1. Proveri da li postoji parametar 'p' iz 404.html
    const urlParams = new URLSearchParams(window.location.search);
    let redirectPath = urlParams.get('p');

    if (redirectPath) {
        // Dekodiraj putanju (npr. zameni %20 razmakom) i vrati & umesto ~and~
        redirectPath = decodeURIComponent(redirectPath).replace(/~and~/g, '&');
        // Očisti URL u browseru da izgleda lepo (npr. /page/case-studies/mercer)
        window.history.replaceState({ url: redirectPath }, "", redirectPath);
    }

    // 2. Odredi finalni URL: redirectPath ili trenutna lokacija
    const url = redirectPath || window.location.pathname;

    LOADER.classList.add("active");

    setTimeout(() => {
        LOADER.classList.add("out");
        setTimeout(async () => {
            LOADER.style.display = "none";
            
            // 3. Pokreni ruter sa ispravnim URL-om
            await route(url);
            await applyViewState(url);
        }, 450);
    }, 2500);
};

/* ============================================================
   GLOBAL LINK HANDLER & OTHERS
============================================================ */

window.onpopstate = async (e) => {
    const url = e.state?.url || window.location.pathname;
    await route(url);
    await applyViewState(url);
};

document.addEventListener("click", (e) => {
    const link = e.target.closest("a");
    if (!link) return;

    const href = link.getAttribute("href");
    if (!href.startsWith("/page") && !href.startsWith(`${BASE}/page`)) return;

    e.preventDefault();
    navigate(href);
});

function initScrollFade() {
    const activeView = VIEW.querySelector("[data-scroll-fade]");
    if (!activeView) return;
    const items = activeView.querySelectorAll(".project-item");
    if (scrollObserver) scrollObserver.disconnect();
    scrollObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
                scrollObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.35 });
    items.forEach(item => scrollObserver.observe(item));
}

function handleImagePlaceholders() {
    const images = VIEW.querySelectorAll(".img-wrap img");
    images.forEach(img => {
        const wrapper = img.closest(".img-wrap");
        if (!wrapper) return;
        if (img.complete) {
            img.classList.add("loaded");
            wrapper.classList.add("loaded");
        } else {
            img.addEventListener("load", () => {
                img.classList.add("loaded");
                wrapper.classList.add("loaded");
            });
        }
    });
}