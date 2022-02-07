export const IntersectionLazy = {
  mounted(element) {
    function loadImage() {
      if (element.nodeName === "IMG") {
        element.src = element.dataset.url;
      }
    }

    function observerCallback(entries, observer) {
      entries.forEach((entry) => {
        if (
          entry.isIntersecting ||
          entry.boundingClientRect.top <= window.innerHeight
        ) {
          console.log(entry.boundingClientRect.top);
          loadImage();
          observer.unobserve(element);
        }
      });
    }

    function useObserver() {
      const observer = new IntersectionObserver(observerCallback);
      observer.observe(element);
    }

    if (window.IntersectionObserver) {
      useObserver();
    } else {
      loadImage();
    }
  },
};
