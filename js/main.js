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

function onLoad() {
    $('#home-hero').removeClass('home-hero-transition');

    setTimeout(function () {
        $('#home-container div').removeClass('home-transition');
    }, 300);

    setTimeout(function () {
        $('#home-container h1').removeClass('home-transition');
    }, 600);

    setTimeout(function () {
        $('#home-projects').removeClass('home-transition');
    }, 900);
}

function load() {
    $.each(projects, function (index, project) {
        $('#home-projects').append(
            `<li>
                <a class="project-link-${index}">
                    ${project.name}
                </a>
            </li>`
        );

        const caseStudyHTML =
            project.caseStudy != ''
                ? `<a href="${project.caseStudy}" target="_blank">Case study</a>`
                : '';

        let projectHTML = `<div id="project-${index}" class="project ease">
            <div class="header">
                <div class="content ease">
                    <div class="back"></div>
                    ${caseStudyHTML}
                </div>
            </div>

            <div class="project-hero">
                <div class="content">
                    <div class="project-details">
                        <p class="project-name ease">${project.name}</p>
                        <p class="project-description ease">${project.description}</p>
                    </div>
                    <img class="project-image" src="${project.image}">
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
                $section.find('.label-left-column').addClass('desktop-only');
            }

            projectHTML += $section.get(0).outerHTML;
        });

        $('body').append(projectHTML + '</div>');
    });

    $('body')
        .find('img')
        .each(function (k, image) {
            imageSrc.push(image.src);
        });

    preloadImages(imageSrc, img, onLoad);

    $('#home-projects').on('click', function (event) {
        const projectIndex = event.target.classList[0].slice(-1);
        const $project = $(`#project-${projectIndex}`);

        $project.css('display', 'block');
        setTimeout(function () {
            $project.addClass('active');
        }, 10);
    });

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
}

$(document).ready(function () {
    load();
});
