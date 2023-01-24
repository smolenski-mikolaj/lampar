const onIntersect = (
  elementToWatch: HTMLElement,
  onEnterCallback: (element: Element, defaultValue: Number) => void,
  defaultValue: Number,
  once = true,
  options = { threshold: 0.1 }
) => {
  const observer = new IntersectionObserver(([entry]) => {
    if (entry && entry.isIntersecting) {
      onEnterCallback(entry.target, defaultValue);

      if (once) {
        observer.unobserve(entry.target);
      }
    }
  }, options);

  observer.observe(elementToWatch);

  return observer;
};

const onEnter = (element: Element, defaultValue: Number) => {
  let key = 0;
  const speed = defaultValue > 100 ? 1 : 75;

  const countdown = setInterval(() => {
    key++;
    element.innerHTML = key.toString();

    if (key === defaultValue) {
      clearInterval(countdown);
    }
  }, speed);
};

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.directive("countdownOnScroll", {
    mounted(element) {
      const defaultValue = parseInt(element.innerText);
      element.innerHTML = 0;
      onIntersect(element, onEnter, defaultValue);
    },
  });
});
