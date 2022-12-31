const onIntersect = (
  elementToWatch: HTMLElement,
  onEnterCallback: (element: Element) => void,
  onExitCallback = (element: Element) => {},
  once = true,
  options = { threshold: 0.1 }
) => {
  const observer = new IntersectionObserver(([entry]) => {
    if (entry && entry.isIntersecting) {
      onEnterCallback(entry.target);

      if (once) {
        observer.unobserve(entry.target);
      }
    } else {
      onExitCallback(entry.target);
    }
  }, options);

  observer.observe(elementToWatch);

  return observer;
};

const onEnter = (element: Element) => {
  element.classList.remove("opacity-0");
};

const onExit = (element: Element) => {
  element.classList.add("opacity-0");
};

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.directive("animateOnScroll", {
    mounted(element) {
      ["transition-opacity", "duration-1000", "delay-400", "opacity-0"].forEach(
        (className) => {
          element.classList.add(className);
        }
      );

      onIntersect(element, onEnter, onExit, false);
    },
  });
});
