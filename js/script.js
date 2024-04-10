const el = document.querySelector("#stickyNav")
const observer = new IntersectionObserver( 
  ([e]) => e.target.classList.toggle("is-pinned", e.intersectionRatio < 1),
  { threshold: [1] }
);

observer.observe(el);

const setAttributes = (el, attrs) => {
  for(var key in attrs) {
    el.setAttribute(key, attrs[key]);
  }
}

setTimeout(function() {
	[...document.querySelectorAll('.fade-in')].map(el => {
	  el.classList.add("show");
	});

  triggerScroll();
}, 1000);



function locationHashChanged() {
  if (location.hash === "#playing-with-planets") {
    console.log("Playing video");
    document.querySelector("#logo-animation").play();
  }
}

window.onhashchange = locationHashChanged;

[...document.querySelectorAll('.hover-autoplay')].map(el => {
  el.addEventListener("mouseenter", (e) => {
    el.play();
  });

  el.addEventListener("mouseleave", (e) => {
    el.pause();
  });
});

function triggerScroll() {
  if(location.hash){
    console.log(location.hash);

    document.querySelector(`a[href="${location.hash}"]`).click();
    document.querySelector(`a[href="${location.hash}"]`).classList.add("clicked");

    console.log(document.querySelector(`a[href="${location.hash}"]`));
  }
  else {
    console.log("no hash");
  }

}