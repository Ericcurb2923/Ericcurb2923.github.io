/* ============================================================
   BASE CONFIG
============================================================ */

let BASE = "";

const VIEW   = document.getElementById("view");
const LOADER = document.getElementById("loader");

/* ============================================================
   INTRO SETTINGS (YOUR REQUEST)
============================================================ */

let introEnabled   = true;     // turn intro loop ON/OFF
let introMinWidth  = 1024;     // slider only above this width

let homeSwiper = null;
let introPlayed = false;

let textDuration = 3000; // time text stays visible before slider starts

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
    const html = await fetch(path).then(r => r.text());
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

    const path = url.replace(/\/+$/, "");

    if (path === `${BASE}` || path === `${BASE}/page/home`) {
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
        document.querySelectorAll(".headerFooterWrapper")
            .forEach(el => el.classList.remove("show"));

        document.querySelectorAll("header,footer")
            .forEach(el => el.style.pointerEvents = "none");
    } else {
        document.querySelectorAll(".headerFooterWrapper")
            .forEach(el => el.classList.add("show"));

        document.querySelectorAll("header,footer")
            .forEach(el => el.style.pointerEvents = "auto");
    }

    setTimeout(() => {
        initScrollFade();
    }, 250);

    const newView = VIEW.querySelector(".view");
    if (newView) {
        newView.classList.remove("out", "active");
        void newView.offsetWidth;
        newView.classList.add("active");
    }

    const templateName = newView?.dataset.template;

    if (templateName === "home") {
        initHomeIntro();
    }
}

/* ============================================================
   HOME INTRO LOOP (TEXT → SLIDER → TEXT → SLIDER…)
============================================================ */

function initHomeIntro() {

    if (!introEnabled) return;
    if (window.innerWidth < introMinWidth) return;

    const intro = VIEW.querySelector(".home-intro");
    const content = VIEW.querySelector(".home-content");

    if (!intro || !content) return;

    // Create Swiper only once
    if (!homeSwiper) {
        homeSwiper = new Swiper(intro.querySelector(".caseSwiper"), {
            speed: 800,
            loop: false,
            allowTouchMove: false,

            effect: "fade",
            fadeEffect: {
                crossFade: true
            },

            autoplay: {
                delay: 4000,
                disableOnInteraction: false
            },

            pagination: {
                el: intro.querySelector(".swiper-pagination"),
                type: "progressbar"
            }
        });
    }

    startTextPhase();

    function startTextPhase() {
        intro.classList.remove("active");
        content.classList.add("visible");
        content.classList.remove("hidden");

        setTimeout(() => {
            startSliderPhase();
        }, textDuration);
    }

    let constStartProgressValue = (100 / homeSwiper.slides.length) + '%';
    function startSliderPhase() {
        content.classList.add("hidden");
        content.classList.remove("visible");

        intro.classList.add("active");

        // Reset slider to slide 0
        homeSwiper.slideTo(0, 0);
        homeSwiper.autoplay.start();

        
        // Reset progressbar instantly (no flicker)
        const progressFill = intro.querySelector(".swiper-pagination-progressbar-fill");
        if (progressFill) {
            progressFill.style.transition = "none";
            progressFill.style.transform = `scaleX(${constStartProgressValue})`;
            progressFill.offsetHeight; 
            progressFill.style.transition = "";
        }

        homeSwiper.on("slideChange", handleLastSlide);
    }

    function handleLastSlide() {

        const isLast = homeSwiper.activeIndex === homeSwiper.slides.length - 1;
        if (!isLast) return;

        setTimeout(() => {
            
            homeSwiper.autoplay.stop();
            homeSwiper.off("slideChange", handleLastSlide);

            // Reset progress at end again
            
            const progressFill = intro.querySelector(".swiper-pagination-progressbar-fill");
            if (progressFill) {
                progressFill.style.transition = "none";
                progressFill.style.transform = "scaleX()";
                progressFill.offsetHeight;
                progressFill.style.transition = "";
            }

            startTextPhase(); // LOOP

        }, homeSwiper.params.autoplay.delay);
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
        oldView.classList.remove("active");
        await new Promise(res => setTimeout(res, 450));
    }

    await route(url);

    window.scrollTo({ top: 0, behavior: "instant" });

    await applyViewState(url);
}

/* ============================================================
   BACK/FORWARD
============================================================ */

window.onpopstate = async (e) => {
    if (!e.state || !e.state.url) return;
    await route(e.state.url);
    await applyViewState(e.state.url);
};

/* ============================================================
   INITIAL LOAD
============================================================ */

window.onload = () => {

    const url = window.location.pathname;

    LOADER.classList.add("active");

    setTimeout(() => {

        LOADER.classList.add("out");

        setTimeout(async () => {

            LOADER.style.display = "none";

            history.replaceState({ url }, "", url);

            await route(url);
            await applyViewState(url);

        }, 450);

    }, 2500);
};

/* ============================================================
   GLOBAL LINK HANDLER
============================================================ */

document.addEventListener("click", (e) => {

    const link = e.target.closest("a");
    if (!link) return;

    const href = link.getAttribute("href");

    if (!href.startsWith("/page") && !href.startsWith(`${BASE}/page`)) {
        return;
    }

    e.preventDefault();
    navigate(href);
});

/* ============================================================
   SCROLL FADE
============================================================ */

function initScrollFade() {

    const activeView = VIEW.querySelector("[data-scroll-fade]");
    if (!activeView) return;

    const items = activeView.querySelectorAll(".project-item");
    if (!items.length) return;

    if (scrollObserver) {
        scrollObserver.disconnect();
    }

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

/* ============================================================
   IMAGE PLACEHOLDERS
============================================================ */

function handleImagePlaceholders() {

    const images = VIEW.querySelectorAll(".img-wrap img");

    images.forEach(img => {

        const wrapper = img.closest(".img-wrap");
        if (!wrapper) return;

        if (img.complete) {
            img.classList.add("loaded");
            wrapper.classList.add("loaded");
            return;
        }

        img.addEventListener("load", () => {
            img.classList.add("loaded");
            wrapper.classList.add("loaded");
        });
    });
}