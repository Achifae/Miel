!function(f){woodmartThemeModule.headerBuilder=function(){var a,s,r=f(".whb-header"),t=f(".header-banner"),e=f(".whb-sticky-row"),l="",o=woodmartThemeModule.$window,h=!1,n=300,d="",i=r.hasClass("whb-hide-on-scroll");if(e.each(function(){var e=f(this);if(10<e[0].offsetHeight)return l=e,!1}),r.hasClass("whb-sticky-real")||r.hasClass("whb-scroll-slide")){var e=f("#wpadminbar"),w=r.find(".whb-main-header")[0].offsetHeight,e=0<e.length?e[0].offsetHeight:0;if(r.hasClass("whb-sticky-real")){if(0===l.length||l[0].offsetHeight<10||"undefined"!=typeof elementorFrontend&&elementorFrontend.isEditMode())return;r.addClass("whb-sticky-prepared"),n=Math.ceil(l.offset().top)-e}r.hasClass("whb-scroll-slide")&&(n=w+e)}function c(){r.hasClass("whb-boxed")&&(f(".wd-offsets-calculated .wd-dropdown-menu").attr("style",""),f(".wd-offsets-calculated").removeClass("wd-offsets-calculated"),woodmartThemeModule.$window.trigger("wdHeaderBuilderStickyChanged"))}r.hasClass("whb-sticky-clone")&&((s=[]).cloneClass=r.find(".whb-general-header").attr("class"),i&&(s.wrapperClasses="whb-hide-on-scroll"),d=(d=(d=(d=woodmart_settings.whb_header_clone).replace(/<%([^%>]+)?%>/g,function(e){e=e.slice(2,-2);return r.find(e).length?f("<div>").append(r.find(e).first().clone()).html():void 0!==s[e]?s[e]:""})).replace(/<link[^>]*>/g,"")).replace("whb-col-1",""),r.after(d),(r=r.parent().find(".whb-clone")).find(".whb-row").removeClass("whb-flex-equal-sides").addClass("whb-flex-flex-middle")),o.on("scroll",function(){var e=n,s=woodmartThemeModule.$window.scrollTop(),l=woodmartThemeModule.$window.height(),o=woodmartThemeModule.$document.height(),d=(0<t.length&&woodmartThemeModule.$body.hasClass("header-banner-display")&&(e+=t[0].offsetHeight),(e=!f(".close-header-banner").length&&r.hasClass("whb-scroll-stick")?n:e)<s?h||(h=!0,r.addClass("whb-sticked"),c()):h&&(h=!1,r.removeClass("whb-sticked"),c()),100);r.hasClass("whb-scroll-stick")&&(d=500),i&&(0<a-s&&e<s?(r.addClass("whb-scroll-up"),r.removeClass("whb-scroll-down")):0<s-a&&s+l!==o&&e+d<s?(r.addClass("whb-scroll-down"),r.removeClass("whb-scroll-up")):s<=e?(r.removeClass("whb-scroll-down"),r.removeClass("whb-scroll-up")):o-5<=s+l&&(r.addClass("whb-scroll-up"),r.removeClass("whb-scroll-down"))),a=s}),woodmartThemeModule.$document.trigger("wdHeaderBuilderInited")},window.addEventListener("wdEventStarted",function(){woodmartThemeModule.headerBuilder()})}(jQuery);