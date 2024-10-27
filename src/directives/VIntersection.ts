import { DirectiveBinding } from 'vue';

export default {
  mounted(el: HTMLElement, binding: DirectiveBinding) {
    const options = {
      root: null, // Use the viewport as the root
      rootMargin: '0px',
      threshold: 1.0,
    };

    const callback = (entries: IntersectionObserverEntry[]) => {
      if (entries[0].isIntersecting) {
        binding.value();
      }
    };
    const intersectionObserver = new IntersectionObserver(callback, options);

    intersectionObserver.observe(el); // Start observing the element

  },
  name: 'intersection',
};
