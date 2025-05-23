let imageSrc = ['./img/chevron_backward.svg', './img/NavMenu.svg'];
let img = [];

function preloadImages(srcs, imgs, callback) {
    if (srcs.length == 0) {
        onLoad();
    } else {
        var img;
        var remaining = srcs.length;
        for (var i = 0; i < srcs.length; i++) {
            img = new Image();
            img.onload = function () {
                --remaining;
                if (remaining <= 0) {
                    callback();
                }
            };
            img.src = srcs[i];
            imgs.push(img);
        }
    }
}

function submitPassword() {
    if ($('#password-input').val() === passKey) {
        localStorage.setItem('passKey', passKey);

        $('body').css('overflow', '');

        const $password = $('#password');
        $password.css({ 'margin-top': '-20px', opacity: '0' });

        setTimeout(function () {
            $password.css('display', 'none');
        }, 500);
    }
}

function onLoad() {
    $('#home').css({ 'margin-top': '0', opacity: '1' });
}

function load() {
    $('#headline').html(siteDescription);

    let menu = [];

    $.each(projects, function (index, project) {
        $('#logos').append(`<div class="home-logo-container">
            <div class="home-logo ${project.active ? 'underline' : ''}">
                <img src="${
                    project.logo
                }" class="project-link-${index}" role="button" style="height: ${project.logoHeight};">
            </div>
        </div>`);

        if (project.active) {
            menu.push(`<li class="project-link-${index}">
                ${project.menuName}
            </li>`);

            $('.carousel').append(
                `<div class="carousel-slide" slide-index="${index}">
                <img src="${project.carouselImage}" class="project-link-${index} desktop-only" alt="${project.name}: ${project.description}" role="button">
                <div class="mobile-only">
                    <img src="${project.heroImage}" class="project-link-${index}" role="button">
                    <div class="project-details">
                        <p class="project-name ease">${project.name}</p>
                        <p class="project-description ease">${project.description}</p>
                    </div>
                </div>
            </div>`
            );

            $('.timer').append(`
            <div class="timer-bubble" slide-index="${index}">
                <div class="timer-container"></div>
                <div class="timer-value"></div>
            </div>
        `);

            const caseStudyHTML =
                project.caseStudy != ''
                    ? `<a href="${project.caseStudy}" target="_blank">Case study</a>`
                    : '';

            let projectHTML = `<div id="project-${index}" class="project ease">
                <div class="header">
                    <div class="content ease">
                        <div class="back" role="button"></div>
                        ${caseStudyHTML}
                    </div>
                </div>

                <div class="project-hero">
                    <div class="content">
                        <div class="project-details">
                            <p class="project-name ease">${project.name}</p>
                            <p class="project-description ease">${project.description}</p>
                        </div>
                        <img class="project-image" src="${project.heroImage}">
                    </div>
                </div>`;

            $.each(project.sections, function (i, section) {
                let $section = $(
                    $.parseHTML(`<div style="background-color: ${section.backgroundColor}; color: ${section.textColor};">
                    <div class="section content">${section.content}</div>
                </div>`)
                );

                if (section.label) {
                    let $labelLeftColumn = `<div class="label-left-column">
                        <div class="label">${section.label}</div>
                    </div>`;

                    if ($section.find('img').length > 0) {
                        $section.find('.content')
                            .prepend(`<div class="label-content">
                        ${$labelLeftColumn}
                            <div class="label-right-column"></div>
                        </div>`);

                        let $labelRightColumn = $section.find(
                            '.label-right-column'
                        );

                        $($section.find('* + img').get(0))
                            .prevAll()
                            .each(function (j, sibling) {
                                $labelRightColumn.prepend(sibling);
                            });
                    } else {
                        $section
                            .find('.content')
                            .addClass('label-content')
                            .prepend($labelLeftColumn);
                    }
                }

                if (section.hideMobileLabel) {
                    $section
                        .find('.label-left-column')
                        .addClass('desktop-only');
                }

                projectHTML += $section.get(0).outerHTML;
            });

            $('body').append(projectHTML + '</div>');
        }
    });

    $('body').append(`<div id="project-${projects.length}" class="project ease">
        <div class="header">
            <div class="content ease">
                <div class="back" role="button"></div>
            </div>
        </div>

        <div class="project-hero about">
            <div class="content">
                ${about}
            </div>
        </div>
    </div>`);

    //menu.push(`<li class="project-link-${projects.length}">Snapshot</li>`);
    menu.push(`<li><a href="mailto:info@curb.ws">Connect</a></li>`);

    $('body')
        .find('img')
        .each(function (k, image) {
            imageSrc.push(image.src);
        });

    preloadImages(imageSrc, img, onLoad);

    initializeMenu('.menu-container', menu);
    initializeMenuClick();

    $('#logos img, .carousel img, .menu-items li').on(
        'click',
        function (event) {
            function displayProject(project) {
                project.css('display', 'block');
                setTimeout(function () {
                    project.addClass('active');
                }, 10);
            }

            const projectIndex = event.target.classList[0].slice(-1);
            const $project = $(`#project-${projectIndex}`);

            if (!(localStorage.getItem('passKey') == passKey)) {
                $('body').css('overflow', 'hidden');

                const $password = $('#password');

                $password.css('display', 'flex');
                setTimeout(function () {
                    $password.css({ 'margin-top': '', opacity: '' });
                }, 10);

                setTimeout(function () {
                    displayProject($project);
                }, 500);
            } else {
                displayProject($project);
            }
        }
    );

    $('.project .back').on('click', function (event) {
        const $project = $(event.target.closest('.project'));
        $project.addClass('easeout');
        setTimeout(function () {
            $project.removeClass('active easeout').css('display', '');
        }, 610);
    });

    $(document).on('scroll', function () {
        if ($(document).scrollTop() > 0) {
            $('.header').addClass('scroll');
        } else {
            $('.header').removeClass('scroll');
        }
    });

    let timerDuration = null;
    let timer = null;

    // https://stackoverflow.com/questions/16134997/how-to-pause-and-resume-a-javascript-timer
    function startTimer(seconds, container, oncomplete) {
        let startTime,
            timer,
            obj,
            ms = seconds * 1000;
        //display = document.getElementById(container);
        timerDuration = ms;
        obj = {};
        obj.resume = function () {
            startTime = new Date().getTime();
            timer = setInterval(obj.step, 100); // default 250, adjust this number to affect granularity
            // lower numbers are more accurate, but more CPU-expensive
        };
        obj.pause = function () {
            ms = obj.step();
            clearInterval(timer);
        };
        obj.step = function () {
            let now = Math.max(0, ms - (new Date().getTime() - startTime)); //,
            //m = Math.floor(now / 60000),
            //s = Math.floor(now / 1000) % 60;
            //s = (s < 10 ? '0' : '') + s;
            //display.innerHTML = m + ':' + s;
            $('.timer-bubble.active .timer-value').css(
                'width',
                ((timerDuration - now) / timerDuration) * 66 + 'px'
            );

            if (now == 0) {
                clearInterval(timer);
                obj.resume = function () {};
                if (oncomplete) oncomplete();
            }
            return now;
        };
        obj.resume();
        return obj;
    }

    /* Carousel */
    $('.carousel-slide').get(0).classList.add('active');

    function goToSlide(index) {
        const currentIndex = parseInt(
            $('.timer-bubble.active').attr('slide-index')
        );
        const currentSlide = $('.carousel-slide').get(currentIndex);
        const targetSlide = $('.carousel-slide').get(index);

        if (index > currentIndex) {
            $(targetSlide).css('display', 'block');
            setTimeout(function () {
                $(targetSlide).css('opacity', '1');
            }, 50);
            setTimeout(function () {
                $(currentSlide).css('display', 'none');
                if (currentIndex != 0) {
                    $(currentSlide).css('opacity', '0');
                }
            }, 700);
        } else if (index < currentIndex) {
            $(targetSlide).css('display', 'block');

            $(currentSlide).css('opacity', '0');
            setTimeout(function () {
                $(currentSlide).css('display', 'none');
            }, 650);
        }
    }

    /* Timer */
    $('.timer-bubble').get(0).classList.add('active');

    function callback() {
        const index = parseInt($('.timer-bubble.active').attr('slide-index'));
        const nextIndex = index < $('.timer-bubble').length - 1 ? index + 1 : 0;

        goToSlide(nextIndex);

        $('.timer-bubble.active').removeClass('active');
        $('.timer-bubble').get(nextIndex).classList.add('active');

        if (timer != null) {
            timer = null;
            timer = startTimer(carouselInterval, null, callback);
        }
    }

    timer = startTimer(carouselInterval, null, callback);

    $('.timer-bubble').on('click', function () {
        const $this = $(this);

        if (!$this.hasClass('active')) {
            const index = parseInt($this.attr('slide-index'));

            goToSlide(index);

            timer.pause();
            timer = null;

            $('.timer-bubble').removeClass('active');
            $this.addClass('active');

            const duration = carouselInterval;
            timer = startTimer(duration, null, callback);
        }
    });
}

$(document).ready(function () {
    load();
});
