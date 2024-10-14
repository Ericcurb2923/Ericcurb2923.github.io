function fadeOut(element) {
	$(element).addClass("fadeOut");
	setTimeout(function() { $(element).removeClass("fadeOut");$(element).addClass('fade') }, 600);
    setTimeout(function() { $(element).css('visibility', 'hidden') }, 1200);
}

function fadeIn(element) {
    $(element).css('visibility', 'visible')
	$(element).addClass("fadeIn");
	setTimeout(function() { $(element).removeClass("fadeIn fade"); }, 600);
}

function fade(fadeOut, fadeIn) {
	this.fadeOut(fadeOut);
	setTimeout(function() { this.fadeIn(fadeIn) }, 600);
}

function onInfoClick(j) {
	$('.section-' + j + ' .info').click(function() {
        
        showProject(j);
        
		/*if ($('.section-' + j + ' .info').hasClass('active')) {
			$( '.section-' + j + ' .info').removeClass('active');
			fade('.section-' + j + ' .section-text', '.section-' + j +' img');
		} else {
			$('.section-' + j + ' .info').addClass('active');
			fade('.section-' + j + ' img', '.section-' + j + ' .section-text');
		}*/
	});
}

function onImageClick(j) {
    $('.section-' + j + ' img').click(function() {
        /*$('.section-' + j + ' .info').trigger('click');*/
        showProject(j);
    });
}

function onHomeLinkClick(j) {
	$('.home-link-' + j).click(function() {
			showProject(j);
	});
}

function preloadImages(srcs, imgs, callback) {
	if (srcs.length == 0) {
		onLoad();
	} else {
		var img;
		var remaining = srcs.length;
		for (var i = 0; i < srcs.length; i++) {
			img = new Image();
			img.onload = function() {
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
	$(window).trigger('resize');
	$('#panel .panel-content').addClass('slideIn');
	$('#main').removeClass('fade');
	
	setTimeout( function() {
			fadeIn('img');
		}, 300
	);

	// 2024 redesign
	$('#home-hero').removeClass('home-hero-transition');

	setTimeout( function() {
		$('#home-container div').removeClass('home-transition');
		}, 300
	);

	setTimeout( function() {
		$('#home-container h1').removeClass('home-transition');
		}, 600
	);

	setTimeout( function() {
		$('#home-projects').removeClass('home-transition');
		}, 900
	);
}

function load() {
  //$('#panel .panel-content').addClass('slideIn');
    
	var section = null;
	var dribbble = '';
	
	$('#follow').attr('href', follow);
	$('#chat').attr('href', 'mailto:' + chat);
	
	for (var i = 0; i < sections.length; i++) {
		$('<div>').load('./html/section.html', function() {
			$('#main').append($($(this).html()).addClass('section-' + $('.section').length));
			
			if ($('.section').length == sections.length) {
				for (var j = 0; j < sections.length; j++) {
					
					section = sections[j]
					dribbble = section.dribbble != ''? '<a class="arrow contain" href="' + section.dribbble + '" target="_blank">More on Dribbble</a>' : '';
					
					$('.section-' + j).css('background', section.color);
					$('.section-' + j + ' .title').html(section.title);
					$('.section-' + j + ' img').attr({ src: section.image, alt: section.imageAlternativeText });
					$('.section-' + j + ' .subtitle').html(section.subtitle);
					/*$('.section-' + j + ' .section-text').html(section.description + dribbble);*/
					/*$('.section-' + j).click(onInfoClick(j));*/
                    
                    if (section.theme == 'light') { $('.section-' + j).addClass('light') };
                    onImageClick(j);

										// 2024 Redesign
										$('#home-projects').append('<li><a class="home-link-' + j + '">' + section.title + '</a></li>');
										onHomeLinkClick(j);
				}
				
				var imageSrc = [];
				var img = [];
				
				for (var i = 0; i < sections.length; i++) {
					imageSrc.push(sections[i].image);
				}
				preloadImages(imageSrc, img, onLoad);
			}
		});
	}										
}

function showCv() {
	$('body').addClass('overlay-active');
	$('#cv-overlay').css('display', 'block');
	
	if ($(window).width() >= 880) {
        $('#cv-overlay').css('background', '#f0f0f0');
		setTimeout(function() { $('#cv-overlay').css('opacity', '1'); }, 100);

		setTimeout(function() {
			$('#cv-content').addClass("shown");
			setTimeout(function() { $('#cv-content').removeClass("hidden"); }, 300)
		}, 300);
	} else {
		$('#cv-overlay').css('background', 'white');
		setTimeout(function() {
			$('#cv-overlay').css('opacity', '1');
            $('#cv-content').css('margin-top', '0');
		}, 100);
		$('#cv-content').addClass("shown");
		$('#cv-content').removeClass("hidden");
		setTimeout(function() {
			$('#cv-overlay').css('background', 'white');
		}, 700);
	}
}

function hideCv() {
	$('body').removeClass('overlay-active');
	$('#cv-content').addClass("removed");
	$('#cv-content').removeClass("shown");
	
	setTimeout(function() {
		$('#cv-content').removeClass("removed");
		$('#cv-content').addClass("hidden");
	}, 600)
	
	if ($(window).width() >= 880) {
		setTimeout(function() { $('#cv-overlay').css('opacity', '0'); }, 200);
		setTimeout(function() { $('#cv-overlay').css('display', 'none'); }, 800);
	} else {
		$('#cv-overlay').css({ 'background': 'white', 'opacity': '0' });
        $('#cv-content').css('margin-top', '-20px');
		setTimeout(function() { $('#cv-overlay').css({ 'background': 'white', 'display': 'none' });document.getElementById('cv-content').style.removeProperty('margin-top'); }, 600);
	}
}

function showProject(index) {
    var theme = sections[index].contentTheme;
    
    if (theme == 'dark' && !$('#project-overlay').hasClass('dark')) {
        $('#project-overlay').addClass('dark');
    } else if (theme != 'dark') {
        if ($('#project-overlay').hasClass('dark')) {
            $('#project-overlay').removeClass('dark');
        }
    }
    
    var blocks = sections[index].blocks;
    var template = '';

		blocks.forEach(function(block) {
			template += '<div style="background-color: ' + block.background + '; color: ' + block.textColor + '; padding: ' + block.padding + ';">';

			block.content.forEach(function(item) {
        if (item.includes('./img')) {
            template += '<img src="' + item + '">';
        } else {
            template += item;
        }
			});

			template += '</div>';
    });
    
    $('#project-content').html(template);
    
    $('body').addClass('overlay-active');
	$('#project-overlay').css('display', 'block');
	
	//if ($(window).width() >= 880) {
		setTimeout(function() { $('#project-overlay').css({'margin-top': '0', 'opacity': '1'}); }, 100);
	/*} else {
		$('#project-overlay').css('background', 'white');
		setTimeout(function() {
			$('#project-overlay').css('opacity', '1');
		}, 100);
		setTimeout(function() {
			$('#project-overlay').css('background', 'white');
		}, 700);
	}*/
}

function hideProject() {
	$('body').removeClass('overlay-active');
	
	//if ($(window).width() >= 880) {
		setTimeout(function() { $('#project-overlay').css({'margin-top': '-20px', 'opacity': '0'}); }, 100);
		setTimeout(function() { $('#project-overlay').css('display', 'none'); document.getElementById('project-overlay').style.removeProperty('margin-top');}, 700);
	/*} else {
		$('#project-overlay').css({ 'background': 'white', 'opacity': '0' });
		setTimeout(function() { $('#project-overlay').css({ 'background': 'white', 'display': 'none' }); }, 600);
	}*/
}

$(document).ready(function() {
	load();
	
	var padding;
	var imageHeight;
	var sectionText;
	var sectionTextHeight;
	
	/*$(window).resize(function() {
		padding = $(window).width() > 1024 ? Math.max($(window).height() * 0.2, 136) : Math.max($(window).height() * 0.1, 96);
		
		for (var i = 0; i < sections.length; i++) {
			imageHeight = $('.section-' + i + ' img').outerHeight();
			sectionText = $('.section-' + i + ' .section-text');
			sectionTextHeight = sectionText.outerHeight() + padding;
			
			$('.section-' + i + ' .section-content').css('min-height', Math.max(imageHeight, sectionTextHeight) + 'px');
		}
	});*/
	
	if (cv) {
		$('<div>').load('./html/cv.html', function() {
			$('#cv-overlay').append($(this).html());
			
				setTimeout(function() {
					$('.cv-close').click(function() {
						hideCv();
					});
                    if(download != '') {
                        $('#cv-download').click(function() {
    					    var win = window.open(download, '_blank');
                            win.focus();
					    });
                    } else {
                        $('#cv-download').css('display', 'none');
                    }
				}, 10);

				$('#cv').click(function() {
					showCv();
				});
		});
	} else {
		$('#cv').css('display', 'none');
	}
    
    $('#project-overlay .close').click(function() {
		hideProject();
	});
});
