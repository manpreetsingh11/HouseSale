jQuery(function() {
	
	//allow :active styles to work in your CSS on a page in Mobile Safari (https://css-tricks.com/snippets/css/remove-gray-highlight-when-tapping-links-in-mobile-safari/)
	document.addEventListener("touchstart", function(){}, true);
	
	// Custom Form (https://github.com/Dimox/jQueryFormStyler)
	jQuery(".l-form-elem-custom").styler({
		fileBrowse: "Upload",
		onFormStyled: function() {
			if (jQuery("input.l-form-checkbox").is(":checked")) {
				jQuery(".l-form-extra").css("display","block");
			}
		}
	});
	
	jQuery("input.l-form-checkbox").on("change", function() {
        if (jQuery(this).is(":checked")) {
            jQuery(".l-form-extra").slideDown();  
        } else {
			jQuery(".l-form-extra").slideUp();  
        }
    });
	
	
	// Menu Dropdown
	jQuery(".c-header__nav li.has-dropdown").hover(Handler);

	function Handler(event) {
		jQuery(this).toggleClass("show-dropdown");
	}
	
	// Add Property to Favorite
	jQuery(".c-content__property-favorite").on("click", function() {
        var $this = jQuery(this);
		$this.parent().toggleClass("is-favorite");
    });

    
	// Login Dropdown
    jQuery(".c-header__login-toggle").click(function() {
        toggleLogin();
    });

	function toggleLogin() {
		if (jQuery(".c-header__login-toggle").hasClass("open")) {
            if (jQuery("body").hasClass("logged-in")) {
				jQuery(".l-dropdown--user-menu").fadeOut();
			} else {
				jQuery(".l-dropdown--login").fadeOut();
			}
            jQuery(".c-header__login-toggle").removeClass("open");
        } else {
			if (jQuery("body").hasClass("logged-in")) {
				jQuery(".l-dropdown--user-menu").fadeIn();
			} else {
				jQuery(".l-dropdown--login").fadeIn();
			}
            jQuery(".c-header__login-toggle").addClass("open");
        }
    }
	
	
	// Save Search Dropdown
    jQuery(".c-header__save-toggle").click(function() {
        toggleSaveSearch();
    });

    function toggleSaveSearch() {
		if (jQuery(".c-header__save-toggle").hasClass("open")) {
            jQuery(".l-dropdown--save-search").fadeOut();
            jQuery(".c-header__save-toggle").removeClass("open");
        } else {
			jQuery(".l-dropdown--save-search").fadeIn();
            jQuery(".c-header__save-toggle").addClass("open");
        }
    }
	
	
	// Filter Bar Dropdowns 
	jQuery(".c-header__filter-toggle").on("click", function() {
		var currentDropdown=jQuery(this).closest(".l-dropdown--filter");
		if(!currentDropdown.is(":visible")){
			currentDropdown.slideDown();
			var $this = jQuery(this);
			$this.parent().toggleClass("open");
		} else {
			currentDropdown.slideUp();
			var $this = jQuery(this);
			$this.parent().toggleClass("open");
		}
	});
	
	// Filters Dropdown
    jQuery(".c-header__filters-toggle").click(function() {
        toggleFilters();
    });

    function toggleFilters() {
		if (jQuery(".c-header__filters-toggle").hasClass("open")) {
            jQuery(".l-dropdown--filters").fadeOut();
            jQuery(".c-header__filters-toggle").removeClass("open");
        } else {
			jQuery(".l-dropdown--filters").fadeIn();
            jQuery(".c-header__filters-toggle").addClass("open");
        }
    }
	
	
	// Saved Search List - Filters Dropdown
	jQuery(".l-list--saved li").on("click", function() {
		var currentButtons=jQuery(this).closest("li").find(".l-list__buttons");
		if(!currentButtons.is(":visible")){
			currentButtons.slideDown();
			var $this = jQuery(this);
			$this.toggleClass("open");
		} else {
			currentButtons.slideUp();
			var $this = jQuery(this);
			$this.toggleClass("open");
		}
	});	
	
	
	// Account Searches - Filters Edit
	jQuery(".c-content__searches-summary").on("click", function() {
		var currentOptions=jQuery(this).closest(".c-content__searches-row").find(".c-content__searches-options");
		if(!currentOptions.is(":visible")){
			currentOptions.slideDown();
			var $this = jQuery(this).find(".l-btn-round--edit");
			var $currentRow = jQuery(this).closest(".c-content__searches-row");
			$this.toggleClass("active");
			$currentRow.toggleClass("open");
		} else {
			currentOptions.slideUp();
			var $this = jQuery(this).find(".l-btn-round--edit");
			var $currentRow = jQuery(this).closest(".c-content__searches-row");
			$this.toggleClass("active");
			$currentRow.toggleClass("open");
		}
	});
	
	
	// Map Dropdown
    jQuery(".c-header__map-toggle").click(function() {
        toggleMap();
    });

    function toggleMap() {
		if (jQuery(".c-header__map-toggle").hasClass("open")) {
            jQuery(".l-dropdown--map").fadeOut();
            jQuery(".c-header__map-toggle").removeClass("open");
        } else {
			jQuery(".l-dropdown--map").fadeIn();
            jQuery(".c-header__map-toggle").addClass("open");
        }
    }
	
	
	// Sorting Dropdown
    jQuery(".c-content__sorting-toggle").click(function() {
        toggleSorting();
    });

    function toggleSorting() {
		if (jQuery(".c-content__sorting-toggle").hasClass("open")) {
            jQuery(".l-dropdown--sorting-results").fadeOut();
            jQuery(".c-content__sorting-toggle").removeClass("open");
        } else {
			jQuery(".l-dropdown--sorting-results").fadeIn();
            jQuery(".c-content__sorting-toggle").addClass("open");
        }
    }
	
	
	// Mobile Wrap
	jQuery(".c-header__nav-toggle").click(function() {
		toggleWrap();
	});

	function toggleWrap() {
		if (jQuery("body").hasClass("show-nav")) {			
			if (jQuery(window).width() < 768) {
				jQuery(".c-mobile-wrap").stop().animate({
					left: "100%",
					bottom: "100%",
					opacity: "0"
				}, 300,"");
			} else {
				jQuery(".c-mobile-wrap").stop().animate({
					right:"-300px",
					opacity: "0"
				}, 300,"");
			}
			jQuery("body").removeClass("show-nav");
		} else {
			if (jQuery(window).width() < 768) {
				jQuery(".c-mobile-wrap").stop().animate({
					left: "0",
					bottom: "0",
					opacity: "1"
				}, 500,"");
			} else {
				jQuery(".c-mobile-wrap").stop().animate({
					right: "0",
					opacity: "1"
				}, 500, "");
			}			
			jQuery("body").addClass("show-nav");
		}
	}

	
	// Mobile Navigation
	jQuery(".c-mobile-wrap__nav li.has-dropdown").on("click", function() {
		var accountItem = jQuery(this);
		if (accountItem.hasClass("form-toggle") && (!jQuery("body").hasClass("logged-in"))) {
			// Mobile Form
			jQuery(".c-mobile-form-wrap").stop().animate({
				left: "0",
				bottom: "0",
				opacity: "1"
			}, 300,"");
		} else {
			var currentNav=jQuery(this).closest("li").find(".l-dropdown--mobile");
			if(!currentNav.is(":visible")){
				currentNav.slideDown();
				var $this = jQuery(this);
				$this.toggleClass("show-dropdown").children("ul").toggleClass("is-visible");
			} else {
				currentNav.slideUp();
				var $this = jQuery(this);
				$this.toggleClass("show-dropdown").children("ul").toggleClass("is-visible");
			}
		}
	});
	
	jQuery(".c-mobile-form__close, .l-btn-form--close").on("click", function() {
		jQuery(".c-mobile-form-wrap").stop().animate({
			left: "100%",
			bottom: "100%",
			opacity: "0"
		}, 300,"");
	});

	
	// Click Preview
	jQuery(".l-btn--modal-trigger").on("click", function(){
		jQuery(".c-content__modal").fadeIn();
		var modal = jQuery(".c-content__modal");
		if (modal.hasClass("c-content__modal--blured")) {
			jQuery("body").addClass("h-blur");
		}
	});
	
	jQuery(".c-modal__close, .l-btn--close").on("click", function(){
		jQuery(".c-content__modal").fadeOut();
		var modal = jQuery(".c-content__modal");
		if (modal.hasClass("c-content__modal--blured")) {
			jQuery("body").removeClass("h-blur");
		}
	});
	
	
	// Sticky Advertinsing
	jQuery(window).scroll(function(){
		if (typeof $advertisingTop !== "undefined" && jQuery(window).scrollTop() >= $advertisingTop) {
		   jQuery(".c-content__advertising").addClass("c-content__sticky");
		}
		else {
		   jQuery(".c-content__advertising").removeClass("c-content__sticky");
		}
	});
	
	
	// Alert Close
	jQuery(".c-content__alert-close").on("click", function(){
		jQuery(this).parent(".l-alert").stop().animate({
			height:  "0",
			padding: "0",
			margin:  "0",
			opacity: "0",
		}, 500,"");
	});
	
	
	function setElemPosition(){
		if (!jQuery("body").hasClass("no-footer")) {
			$footerHeight = jQuery(".c-footer").height();
			jQuery(".c-content").css("padding-bottom", $footerHeight);
		}
		if (jQuery(".c-content__advertising").length) {
			$advertisingTop = jQuery(".c-content__advertising").offset().top;
		}
	}
    setElemPosition();
	
	// Hero Image Height
	function setHeroHeight(){
		if (jQuery(window).width() > 767) {
			if (jQuery("body").hasClass("is-splash")) {
				$footerHeight = jQuery(".c-footer").height();
				$heroHeight = jQuery(window).height() - $footerHeight; 
				jQuery(".c-content__hero").css("height", $heroHeight);
			}
		}
	}
    setHeroHeight();
	
	// Vertical Property Image Margin
	function setVerticalPropertyMargin(){
		if (jQuery(".c-content__property-image").hasClass("c-content__property-image--vertical")) {
			$propertyImageHeight = jQuery(".c-content__property-image--vertical img").height();
			$propertyImageMargin = $propertyImageHeight / 2; 
			jQuery(".c-content__property-image--vertical img").css("margin-top", - $propertyImageMargin);
		}
	}
    setVerticalPropertyMargin();

	jQuery(window).bind("resize", function () {
		setElemPosition();
		setHeroHeight();
		setVerticalPropertyMargin();
	});
/*---------------------------------------- 
			Gallery Init
---------------------------------------- */		
	jQuery(".slider-for").slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: true,
		fade: true,
		adaptiveHeight: true,
		infinite: false,
		useTransform: true,
		speed: 500,
		cssEase: "cubic-bezier(0.77, 0, 0.18, 1)"
	});

	jQuery(".slider-nav")
		.on("init", function(event, slick) {
			jQuery(".slider-nav .slick-slide.slick-current").addClass("is-active");
		})
		.slick({
			slidesToShow: 6,
			slidesToScroll: 1,
			dots: false,
			focusOnSelect: false,
			infinite: false,
			responsive: [{
				breakpoint: 1024,
				settings: {
					slidesToShow: 5,
					slidesToScroll: 1,
				}
			}, {
				breakpoint: 881,
				settings: {
					slidesToShow: 4,
					slidesToScroll: 1,
				}
			}]
		});

	jQuery(".slider-nav").on("click", ".slick-slide", function(event) {
		event.preventDefault();
		var goToSingleSlide = jQuery(this).data("slick-index");

		jQuery(".slider-for").slick("slickGoTo", goToSingleSlide);
	});
	
	var $sliderPager = jQuery(".slider-pager");
    var $slickElement = jQuery(".slider-for");
	var $slidesCount = jQuery(".slider").slick("getSlick").slideCount;
	$sliderPager.html('<span class="slick-current">' + "1" + '</span><span class="slick-line">/</span>' + $slidesCount);
    $slickElement.on("init reInit afterChange", function (event, slick, currentSlide, nextSlide) {
        //currentSlide is undefined on init -- set it to 0 in this case (currentSlide is 0 based)
		
        var i = (currentSlide ? currentSlide : 0) + 1;
        return $sliderPager.html('<span class="slick-current">' + i + '</span><span class="slick-line">/</span>' + $slidesCount);
    });

/*---------------------------------------- 
			Search Bottom
---------------------------------------- */	
	// Create the select
	jQuery("<div class='select-style'></div>").insertAfter(".c-content__search-list").wrapInner("<select />");

	// Create the default option "Search for Homes by City"
	jQuery("<option />", {
		"selected": "selected",
		"value"   : "",
		"text"    : "Search for Homes by City"
	}).appendTo(".c-content__search-bottom select");

	// Add options to select
	jQuery(".c-content__search-list a").each(function() {
		var el = jQuery(this);
		jQuery("<option />", {
		   "value"   : el.attr("href"),
		   "text"    : el.text()
		}).appendTo(".c-content__search-bottom select");
	});

	// Make select working
	jQuery(".c-content__search-bottom select").on("change", function() {
		window.location = jQuery(this).find("option:selected").val();
	});
});

/*---------------------------------------- 
			Chart Init
---------------------------------------- */
var config = {
	type: "doughnut",
	data: {
		
		labels: [
			"Principal and Interest",
			"Property Taxes",
			"Homeowners’ Insurance",
		],
		datasets: [{
			data: [1580,230,67,],
			backgroundColor: [
				"#57C1E8",
				"#F16F70",
				"#F8B717"
			],
			borderColor: [
				"#F5F5F5",
				"#F5F5F5",
				"#F5F5F5"
			],
			borderWidth:4
		}]
	},
	options: {
		responsive: true,
		legend: {
		  display: false
		},
		animation: {
			animateScale: true,
			animateRotate: true
		},
		cutoutPercentage: 85
	}
};

window.onload = function() {
	if (jQuery("#c-content__chart-area").length){
		var ctx = document.getElementById("c-content__chart-area").getContext("2d");
		window.myDoughnut = new Chart(ctx, config);
	}
};
/*---------------------------------------- 
			Sticky Sidebar
---------------------------------------- */
jQuery(document).ready(function(){
	show_float_block('.l-box--request');	
});

function show_float_block(selector){

	var float_block = jQuery(selector),
		show_float_block = false,
		addedItems = [],
		removedItems = [],
		itemsOffset = 0,
		itemsHeight = itemsOffset,
		last_sidebar_item_bottom,
		cls = 'float_block',
		offset = 0,
		completeFn = function() {
			jQuery(this).removeClass(cls).css('top', '').fadeIn(5);
		},
		sidebar;
	
	
	if (!float_block.size()) return;
	if (jQuery(window).width() < 768 || jQuery(window).height() < 500 || screen.width < 768) return;
	
	sidebar = jQuery('#sidebar');
	if (!sidebar.size()) return;
	
	last_sidebar_item_bottom = sidebar.offset().top + sidebar.outerHeight();

	
	jQuery(window).bind('scroll resize', function () { 
		
		var height = jQuery(window).height(),
			itemOffsetHeight,
			self = this,
			firstShow = true,
			
			yOffset = jQuery(document).scrollTop(),
			footerTop = jQuery('.h-hide-float-block').offset().top + 100,
			items = [];
			
		if(yOffset > last_sidebar_item_bottom) {
				
				jQuery.each(float_block.not('.'+cls), function(index, item) {
					jitem = jQuery(item);
					itemOffsetHeight = jitem.outerHeight(true);
					
					if ((itemOffsetHeight && itemOffsetHeight + itemsHeight < height)
						&& ((itemsHeight + itemOffsetHeight + yOffset) <= footerTop)
						&& firstShow) {
						
						jitem.css('top', itemsHeight);
						items.push(item);
						itemsHeight += itemOffsetHeight;
					} else {
						index == 0 && itemOffsetHeight && (firstShow = false);
						if (jitem.hasClass(cls)) {
							jitem.hide().removeClass(cls).css('top', '').fadeIn();
						}
					}
				});

				if (items.length) {
					items = jQuery(items);
					items.addClass(cls);
					items.hide().fadeIn();
				}

				if ((itemsHeight >= height) || ((itemsHeight + yOffset) > footerTop)) {
					jQuery.each(float_block.filter('.'+cls).get().reverse(), function(index, item) {
						jitem = jQuery(item);
						itemOffsetHeight = jitem.outerHeight(true);
						if ((itemsHeight > height) || ((itemsHeight + yOffset) >= footerTop)) {
							jitem.hide().removeClass(cls).css('top', '').fadeIn();
							itemsHeight -= itemOffsetHeight;
						}
					});	
				}
			show_float_block = true;
		} else {
			if(show_float_block == true){
			 	float_block.filter('.'+cls).stop().fadeOut({duration: 1, complete: completeFn});
				removedItems = [];
				itemsHeight = itemsOffset;
			}
			show_float_block = false
		}
	})
}
/*--------------------------------------------------- 
			Statistics Animation
--------------------------------------------------- */
jQuery(".revealedBox").each(function(i){

	var childrenSpan = jQuery(this).children("div").length;

	jQuery(this).addClass("childrenSpan-" + childrenSpan); 

	if(jQuery(window).scrollTop() + jQuery(window).height() > jQuery(this).offset().top + jQuery(this).outerHeight() ) { 
		jQuery(this).addClass("revealedBox-in");  
		jQuery(document).ready(function() {
			jQuery(".animated-bar").addClass("animated-bar-filled");
		});		
	}

});

jQuery(window).scroll(function() {
	jQuery(".revealedBox").each(function(i){
		if(jQuery(window).scrollTop() + jQuery(window).height() > jQuery(this).offset().top ){
			jQuery(document).ready(function() {
				jQuery(".animated-bar").addClass("animated-bar-filled");
			});
			jQuery(this).addClass("revealedBox-in");
		}
	});
});

jQuery(document).ready(function() {
	jQuery(".counter").counterUp({
		delay: 10,
		time: 1000
	});
});

/*---------------------------------------- 
			Counter
---------------------------------------- */
(function( $ ){
  "use strict";

  $.fn.counterUp = function( options ) {

    // Defaults
    var settings = $.extend({
        "time": 400,
        "delay": 10
    }, options);

    return this.each(function(){

        // Store the object
        var $this = $(this);
        var $settings = settings;

        var counterUpper = function() {
            var nums = [];
            var divisions = $settings.time / $settings.delay;
            var num = $this.text();
            var isComma = /[0-9]+,[0-9]+/.test(num);
            num = num.replace(/,/g, "");
            var isInt = /^[0-9]+$/.test(num);
            var isFloat = /^[0-9]+\.[0-9]+$/.test(num);
            var decimalPlaces = isFloat ? (num.split(".")[1] || []).length : 0;

            // Generate list of incremental numbers to display
            for (var i = divisions; i >= 1; i--) {
				
                // Preserve as int if input was int
                var newNum = parseInt(num / divisions * i);

                // Preserve float if input was float
                if (isFloat) {
                    newNum = parseFloat(num / divisions * i).toFixed(decimalPlaces);
                }

                // Preserve commas if input had commas
                if (isComma) {
                    while (/(\d+)(\d{3})/.test(newNum.toString())) {
                        newNum = newNum.toString().replace(/(\d+)(\d{3})/, "$1"+","+"$2");
                    }
                }

                nums.unshift(newNum);
            }

            $this.data("counterup-nums", nums);
            $this.text("0");

            // Updates the number until we're done
            var f = function() {
                $this.text($this.data("counterup-nums").shift());
                if ($this.data("counterup-nums").length) {
                    setTimeout($this.data("counterup-func"), $settings.delay);
                } else {
                    delete $this.data("counterup-nums");
                    $this.data("counterup-nums", null);
                    $this.data("counterup-func", null);
                }
            };
            $this.data("counterup-func", f);

            // Start the count up
            setTimeout($this.data("counterup-func"), $settings.delay);
        };

        // Perform counts when the element gets into view
        $this.waypoint(counterUpper, { offset: "100%", triggerOnce: true });
    });

  };

})( jQuery );