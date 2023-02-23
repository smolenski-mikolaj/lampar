const onIntersect = (
  elementToWatch: HTMLElement,
  direction: string,
  onEnterCallback: (element: HTMLElement, direction: string) => void,
  onExitCallback = (element: HTMLElement, direction: string) => {},
  once = true,
  options = { threshold: 0.1 }
) => {
  const observer = new IntersectionObserver(([entry]) => {
    if (entry && entry.isIntersecting) {
      onEnterCallback(entry.target as HTMLElement, direction);

      if (once) {
        observer.unobserve(entry.target);
      }
    } else {
      onExitCallback(entry.target as HTMLElement, direction);
    }
  }, options);

  observer.observe(elementToWatch);

  return observer;
};

const createRelativeWrapper = (element: HTMLElement) => {
  const parent = element.parentElement;

  if (parent) {
    const elementClone = element.cloneNode(true);
    const newWrapper = document.createElement("div");
    newWrapper.classList.add("relative");
    newWrapper.style.width = `${element.getBoundingClientRect().width}px`;
    newWrapper.style.height = `${element.getBoundingClientRect().height}px`;
    newWrapper.appendChild(elementClone);
    parent.insertBefore(newWrapper, element);
    element.remove();

    return newWrapper;
  }
};

const updateWrapperSize = (element: HTMLElement, wrapper?: HTMLDivElement) => {
  if (wrapper) {
    wrapper.style.width = "auto";
    wrapper.style.height = "auto";
    element.style.position = "relative";

    setTimeout(() => {
      wrapper.style.width = `${element.getBoundingClientRect().width}px`;
      wrapper.style.height = `${element.getBoundingClientRect().height}px`;
      element.style.position = "absolute";
    }, 100);
  }
};

const setMoveAnimation = (element: HTMLElement, direction: string) => {
  element.style.transition = "opacity 1s ease-out 0.2s";

  if (direction?.includes("bottom")) {
    element.style.position = "absolute";
    element.style.width = "100%";

    element.style.transition =
      "opacity 1s ease-out 0.2s, left 1s ease-out, top 1s ease-out";
  }
};

const onEnter = (element: HTMLElement, direction: string) => {
  element.style.opacity = "1";

  if (direction?.includes("bottom")) {
    element.style.top = "0";
    element.style.left = "0";
  }
};

const onExit = (element: HTMLElement, direction: string) => {
  element.style.opacity = "0";

  if (direction?.includes("bottom")) {
    element.style.top = "80px";
  }

  if (direction?.includes("left")) {
    element.style.left = "-100px";
  }

  if (direction?.includes("right")) {
    element.style.left = "100px";
  }
};

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.directive("animateOnScroll", {
    mounted(element, binding) {
      if (binding.value) {
        const newWrapper = createRelativeWrapper(element);
        const newElement = newWrapper?.children[0] as HTMLElement;

        window.addEventListener("resize", () =>
          updateWrapperSize(newElement, newWrapper)
        );

        setMoveAnimation(newElement, binding.value);
        onIntersect(newElement, binding.value, onEnter, onExit, true);
      } else {
        setMoveAnimation(element, binding.value);
        onIntersect(element, binding.value, onEnter, onExit, true);
      }
    },
  });
});
