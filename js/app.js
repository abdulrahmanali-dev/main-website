document.addEventListener("DOMContentLoaded", function () {
  const e = document.getElementById("modal"),
    t = document.getElementById("overlay"),
    a = document.getElementById("audit_btn"),
    o = document.getElementById("modal1"),
    r = document.getElementById("overlay1"),
    i = document.getElementById("audit_btn1"),
    n = document.querySelectorAll(".loading__fade"),
    s = document.querySelectorAll(".modal-close-button"),
    l = document.querySelectorAll("section"),
    c = (e) => {
      n.forEach((t) => {
        t.style.zIndex = e;
      });
    },
    d = () => {
      l.forEach((e) => {
        e.classList.add("section-index");
      });
    };
  function p() {
    e.classList.remove("active"),
      t.classList.remove("active"),
      o.classList.remove("active"),
      r.classList.remove("active"),
      setTimeout(() => {
        t.classList.add("hidden"), e.classList.add("hidden"), r.classList.add("hidden"), o.classList.add("hidden");
      }, 300),
      c(""),
      l.forEach((e) => {
        e.classList.remove("section-index");
      });
  }
  a.addEventListener("click", function () {
    e.classList.add("active"), t.classList.add("active"), t.classList.remove("hidden"), e.classList.remove("hidden"), c("3"), d();
  }),
    i.addEventListener("click", function () {
      o.classList.add("active"), r.classList.add("active"), r.classList.remove("hidden"), o.classList.remove("hidden"), c("3"), d();
    }),
    t.addEventListener("click", function () {
      p();
    }),
    r.addEventListener("click", function () {
      p();
    }),
    s.forEach((e) => {
      e.addEventListener("click", function () {
        p();
      });
    });
}),
  /*! ------------------------------------------------
 * Project Name: Blayden - Personal Portfolio & Resume HTML Template
 * Project Description: Show yourself brightly with Blayden - clean and creative portfolio and resume template!
 * Tags: mix_design, resume, portfolio, personal page, cv, template, one page, responsive, html5, css3, creative, clean
 * Version: 1.0.0
 * Build Date: June 2024
 * Last Update: June 2024
 * This product is available exclusively on Themeforest
 * Author: mix_design
 * File name: app.js
 * ------------------------------------------------

 * ------------------------------------------------
 * Table of Contents
 * ------------------------------------------------
 *
 *  01. Loader & Loading Animation
 *  02. Bootstrap Scroll Spy Plugin Settings
 *  03. Lenis Scroll Plugin
 *  04. Scroll to Top Button
 *  05. Stacking Cards
 *  06. Scroll Animations
 *  07. Fade-in Type Effect
 *  08. Blocks Marquee
 *  09. Parallax
 *  10. Swiper Slider
 *  11. Typed.js Plugin
 *  12. Magnific Popup
 *  13. Layout Masonry
 *  14. Smooth Scrolling
 *  15. Buttons Hover Effect
 *  16. SVG Fallback
 *  17. Chrome Smooth Scroll
 *  18. Images Moving Ban
 *  19. Detecting Mobile/Desktop
 *  20. PhotoSwipe Gallery Images Replace
 *  21. Contact Form
 *  22. Color Switch
 *
 * ------------------------------------------------
 * Table of Contents End
 * ------------------------------------------------ */
  gsap.registerPlugin(ScrollTrigger);
const content = document.querySelector("body"),
  imgLoad = imagesLoaded(content),
  loadingWrap = document.querySelector(".loading-wrap"),
  loadingItems = loadingWrap.querySelectorAll(".loading__item"),
  fadeInItems = document.querySelectorAll(".loading__fade");
 


  // Lazy Loading Script
  document.addEventListener("DOMContentLoaded", function () {
    const lazyImages = document.querySelectorAll(".lazy");

    if ("IntersectionObserver" in window) {
      const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const img = entry.target;
            img.src = img.dataset.src;
            img.onload = () => img.classList.add("loaded");
            observer.unobserve(img);
          }
        });
      });

      lazyImages.forEach(img => observer.observe(img));
    } else {
      // Fallback for browsers without Intersection Observer support
      lazyImages.forEach(img => {
        img.src = img.dataset.src;
        img.onload = () => img.classList.add("loaded");
      });
    }
    // Lazy loading for videos
    const videos = document.querySelectorAll('[data-lazy-video]');
    const videoLoaded = document.querySelector('.info__video-status'); // For loading status

    const videosObserver = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            const video = entry.target;
            const sources = Array.from(video.children);

            sources.forEach(source => {
                if (entry.isIntersecting) {
                    source.src = source.getAttribute('data-lazy-src');
                    video.load();
                    videosObserver.unobserve(video);

                    videoLoaded.firstElementChild.innerHTML = 'true'; // For loading status
                    videoLoaded.classList.add('info__video-status--active'); // For loading status
                }
            });
        });
    }, {
        rootMargin: '200px',
    });

    videos.forEach(video => {
        videosObserver.observe(video);
    });
});


const scrollSpy = new bootstrap.ScrollSpy(document.body, { target: "#menu", smoothScroll: !0, rootMargin: "0px 0px -40%" }),
  lenis = new Lenis();
lenis.on("scroll", ScrollTrigger.update),
  gsap.ticker.add((e) => {
    lenis.raf(1e3 * e);
  }),
  gsap.ticker.lagSmoothing(0);
const toTop = document.querySelector("#to-top"),
  wp = document.querySelector("#wp");
toTop.addEventListener("click", function (e) {
  e.preventDefault();
}),
  toTop.addEventListener("click", () => gsap.to(window, { scrollTo: 0, ease: "power4.inOut", duration: 2 })),
  gsap.set(toTop, { opacity: 0 }),
  gsap.set(wp, { opacity: 0 }),
  gsap.to(wp, { opacity: 1, autoAlpha: 1, scrollTrigger: { trigger: "body", start: "top -20%", end: "top -20%", toggleActions: "play none reverse none" } }),
  gsap.to(toTop, { opacity: 1, autoAlpha: 1, scrollTrigger: { trigger: "body", start: "top -20%", end: "top -20%", toggleActions: "play none reverse none" } });
const cards = document.querySelectorAll(".stack-item"),
  stickySpace = document.querySelector(".stack-offset"),
  animation = gsap.timeline();
let cardHeight;
if (document.querySelector(".stack-item")) {
  function initCards() {
    animation.clear(),
      (cardHeight = cards[0].offsetHeight),
      cards.forEach((e, t) => {
        t > 0 && (gsap.set(e, { y: t * cardHeight }), animation.to(e, { y: 0, duration: 0.5 * t, ease: "none" }, 0));
      });
  }
  initCards(), ScrollTrigger.create({ trigger: ".stack-wrapper", start: "top top", pin: !0, end: () => `+=${cards.length * cardHeight + stickySpace.offsetHeight}`, scrub: !0, animation: animation, invalidateOnRefresh: !0 }), ScrollTrigger.addEventListener("refreshInit", initCards);
}
const animateInUp = document.querySelectorAll(".animate-in-up");
animateInUp.forEach((e) => {
  gsap.fromTo(e, { opacity: 0, y: 50, ease: "sine" }, { y: 0, opacity: 1, scrollTrigger: { trigger: e, toggleActions: "play none none reverse" } });
}),
  document.querySelector(".animate-card-2") &&
    (gsap.set(".animate-card-2", { y: 100, opacity: 0 }),
    ScrollTrigger.batch(".animate-card-2", { interval: 0.1, batchMax: 2, duration: 6, onEnter: (e) => gsap.to(e, { opacity: 1, y: 0, ease: "sine", stagger: { each: 0.15, grid: [1, 2] }, overwrite: !0 }), onLeave: (e) => gsap.set(e, { opacity: 1, y: 0, overwrite: !0 }), onEnterBack: (e) => gsap.to(e, { opacity: 1, y: 0, stagger: 0.15, overwrite: !0 }), onLeaveBack: (e) => gsap.set(e, { opacity: 0, y: 100, overwrite: !0 }) }),
    ScrollTrigger.addEventListener("refreshInit", () => gsap.set(".animate-card-2", { y: 0, opacity: 1 }))),
  document.querySelector(".animate-card-3") &&
    (gsap.set(".animate-card-3", { y: 50, opacity: 0 }),
    ScrollTrigger.batch(".animate-card-3", { interval: 0.1, batchMax: 3, duration: 3, onEnter: (e) => gsap.to(e, { opacity: 1, y: 0, ease: "sine", stagger: { each: 0.15, grid: [1, 3] }, overwrite: !0 }), onLeave: (e) => gsap.set(e, { opacity: 1, y: 0, overwrite: !0 }), onEnterBack: (e) => gsap.to(e, { opacity: 1, y: 0, stagger: 0.15, overwrite: !0 }), onLeaveBack: (e) => gsap.set(e, { opacity: 0, y: 50, overwrite: !0 }) }),
    ScrollTrigger.addEventListener("refreshInit", () => gsap.set(".animate-card-3", { y: 0, opacity: 1 }))),
  document.querySelector(".animate-card-4") &&
    (gsap.set(".animate-card-4", { y: 50, opacity: 0 }),
    ScrollTrigger.batch(".animate-card-4", { interval: 0.1, batchMax: 4, delay: 1e3, onEnter: (e) => gsap.to(e, { opacity: 1, y: 0, ease: "sine", stagger: { each: 0.15, grid: [1, 4] }, overwrite: !0 }), onLeave: (e) => gsap.set(e, { opacity: 1, y: 0, overwrite: !0 }), onEnterBack: (e) => gsap.to(e, { opacity: 1, y: 0, stagger: 0.15, overwrite: !0 }), onLeaveBack: (e) => gsap.set(e, { opacity: 0, y: 50, overwrite: !0 }) }),
    ScrollTrigger.addEventListener("refreshInit", () => gsap.set(".animate-card-4", { y: 0, opacity: 1 }))),
  document.querySelector(".animate-card-5") &&
    (gsap.set(".animate-card-5", { y: 50, opacity: 0 }),
    ScrollTrigger.batch(".animate-card-5", { interval: 0.1, batchMax: 5, delay: 1e3, onEnter: (e) => gsap.to(e, { opacity: 1, y: 0, ease: "sine", stagger: { each: 0.15, grid: [1, 5] }, overwrite: !0 }), onLeave: (e) => gsap.set(e, { opacity: 1, y: 0, overwrite: !0 }), onEnterBack: (e) => gsap.to(e, { opacity: 1, y: 0, stagger: 0.15, overwrite: !0 }), onLeaveBack: (e) => gsap.set(e, { opacity: 0, y: 50, overwrite: !0 }) }),
    ScrollTrigger.addEventListener("refreshInit", () => gsap.set(".animate-card-5", { y: 0, opacity: 1 })));
const splitTypes = document.querySelectorAll(".reveal-type");
splitTypes.forEach((e, t) => {
  const a = new SplitType(e, { types: "words, chars" });
  gsap.from(a.chars, { scrollTrigger: { trigger: e, start: "top 80%", end: "top 20%", scrub: !0, markers: !1 }, opacity: 0.2, stagger: 0.1 });
});
const initMarquee = () => {
    const e = [...document.querySelectorAll(".items--gsap")];
    if (e) {
      const t = { el: null, width: 0 };
      e.forEach((e) => {
        (t.el = e.querySelector(".items__container")), (t.width = t.el.offsetWidth), (t.el.innerHTML += t.el.innerHTML);
        let a = gsap.timeline().add(marquee(t.el, 20, "+=50%"), 0),
          o = gsap.to(a, { duration: 1.5, timeScale: 1, paused: !0 }),
          r = gsap.utils.clamp(1, 6);
        ScrollTrigger.create({
          start: 0,
          end: "max",
          onUpdate: (e) => {
            a.timeScale(r(Math.abs(e.getVelocity() / 200))), o.invalidate().restart();
          },
        });
      });
    }
  },
  marquee = (e, t, a) => {
    let o = gsap.utils.wrap(0, 50);
    return gsap.to(e, { duration: t, ease: "none", x: a, modifiers: { x: (e) => (a = o(parseFloat(e)) + "%") }, repeat: -1 });
  };
initMarquee(), gsap.to("[data-speed]", { y: (e, t) => (1 - parseFloat(t.getAttribute("data-speed"))) * ScrollTrigger.maxScroll(window), ease: "none", scrollTrigger: { start: 0, end: "max", invalidateOnRefresh: !0, scrub: 0 } });
const testimonialsSlider = document.querySelector("testimonials-slider");
if (!testimonialsSlider) {
  new Swiper(".swiper-testimonials", { slidesPerView: 1, spaceBetween: 20, autoplay: !0, speed: 1e3, loop: !0, loopFillGroupWithBlank: !0, pagination: { el: ".swiper-pagination", type: "fraction" }, navigation: { nextEl: ".swiper-button-next", prevEl: ".swiper-button-prev" } });
}
$(window).on("load", function () {
  "use strict";
  if ($(".animated-type").length) new Typed("#typed", { stringsElement: "#typed-strings", loop: !0, typeSpeed: 60, backSpeed: 30, backDelay: 2500 });
}),
  $(function () {
    "use strict";
    $(".popup-trigger").magnificPopup({ type: "inline", fixedContentPos: !0, fixedBgPos: !0, overflowY: "scroll", preloader: !1, midClick: !0, removalDelay: 600, mainClass: "mfp-fade" }),
      $(".my-gallery")
        .imagesLoaded()
        .progress(function () {
          $(".my-gallery").masonry("layout");
        }),
      $('a[href*="#"]')
        .not('[href="#"]')
        .not('[href="#0"]')
        .click(function (e) {
          if (location.pathname.replace(/^\//, "") == this.pathname.replace(/^\//, "") && location.hostname == this.hostname) {
            var t = $(this.hash);
            (t = t.length ? t : $("[name=" + this.hash.slice(1) + "]")).length &&
              (e.preventDefault(),
              $("html, body").animate({ scrollTop: t.offset().top }, 1e3, function () {
                var e = $(t);
                if ((e.focus(), e.is(":focus"))) return !1;
                e.attr("tabindex", "-1"), e.focus();
              }));
          }
        }),
      $(".hover-default, .hover-circle, .circle, .inner-video-trigger, .socials-cards__link")
        .on("mouseenter", function (e) {
          var t = $(this).offset(),
            a = e.pageX - t.left,
            o = e.pageY - t.top;
          $(this).find("em").css({ top: o, left: a });
        })
        .on("mouseout", function (e) {
          var t = $(this).offset(),
            a = e.pageX - t.left,
            o = e.pageY - t.top;
          $(this).find("em").css({ top: o, left: a });
        }),
      Modernizr.svg ||
        $("img[src*='svg']").attr("src", function () {
          return $(this).attr("src").replace(".svg", ".png");
        });
    try {
      $.browserSelector(), $("html").hasClass("chrome") && $.smoothScroll();
    } catch (e) {}
    $("img, a").on("dragstart", function (e) {
      e.preventDefault();
    });
    /Android|webOS|iPhone|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ? $("html").addClass("touch") : $("html").addClass("no-touch");
    /MSIE 9/i.test(navigator.userAgent) || /rv:11.0/i.test(navigator.userAgent) || /MSIE 10/i.test(navigator.userAgent) || /Edge\/\d+/.test(navigator.userAgent);
    $(".gallery__link").each(function () {
      $(this)
        .append('<div class="picture"></div>')
        .children(".picture")
        .css({ "background-image": "url(" + $(this).attr("data-image") + ")" });
    }),

    
      $(".modal form").submit(function (e) {
        e.preventDefault();
        var t = $(this),
          a = t.closest(".modal");
        return t.data("submitted")
          ? (a.find(".form").addClass("is-hidden"),
            a.find(".form__reply").addClass("is-visible").html('\n      <i class="ph-thin ph-smiley-wink reply__icon"></i>\n      <p class="reply__title">Oops!</p>\n      <span class="reply__text">You can only submit this form once! Nice try though! 😄</span>\n    '),
            setTimeout(function () {
              a.find(".form__reply").removeClass("is-visible").html('\n        <i class="ph-thin ph-smiley reply__icon"></i>\n        <p class="reply__title">Done!</p>\n        <span class="reply__text">See that was simple. Now expect to receive your Free Audit in the next 48h</span>\n      '), a.find(".form").removeClass("is-hidden");
            }, 5e3),
            !1)
          : ($.ajax({ type: "POST", url: "../mail.php", data: t.serialize() })
              .done(function () {
                t.data("submitted", !0),
                  a.find(".form").addClass("is-hidden"),
                  a.find(".form__reply").addClass("is-visible"),
                  setTimeout(function () {
                    a.find(".form__reply").removeClass("is-visible"), a.find(".form").removeClass("is-hidden"), t.trigger("reset");
                  }, 5e3);
              })
              .fail(function () {
                alert("An error occurred. Please try again.");
              }),
            !1);
      });
  });
  // faq
function toggleFAQ(e) {
  const t = e.parentElement,
    a = t.querySelector(".faq-answer"),
    o = e.querySelector(".faqicon");
  t.classList.toggle("open"),
    t.classList.contains("open")
      ? ((a.style.display = "block"),
        requestAnimationFrame(() => {
          (a.style.maxHeight = a.scrollHeight + "px"), (a.style.opacity = "1");
        }),
        (o.innerHTML = '<svg viewBox="0 0 24.00 24.00" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M6 12L18 12" stroke="#ffffff" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>'))
      : ((a.style.maxHeight = "0"),
        (a.style.opacity = "0"),
        setTimeout(() => {
          a.style.display = "none";
        }, 150),
        (o.innerHTML = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M6 12H18M12 6V18" stroke="#ffffff" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>'));
}
observer.observe(pricingSection), console.log("asdada");
let shadowHost = document.querySelector("iframe");
console.log(shadowHost);
let buttonElement2 = shadowHost.shadowRoot.querySelector("shop-login-default"),
  buttonElement3 = buttonElement2.shadowRoot.querySelector("login-with-shop-button"),
  buttonElement4 = buttonElement3.shadowRoot.querySelector("button");
(shadowHost.style.cssText = "display: block; width: 100%;"), (buttonElement2.style.cssText = "display: block; width: 100%;"), (buttonElement3.style.cssText = "display: block; width: 100%;"), (buttonElement4.style.cssText = "display: block; width: 100%;border-radius: 0; padding: 15px;background: #3D5AFF;"), console.log(buttonElement4, "asdasad");
