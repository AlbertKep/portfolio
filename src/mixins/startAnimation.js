
export default {
  data() {
    return {
      observer: null,
      options: {
        root: null,
        threShold: 0.7,
        rootMargin: "0px"
      }
    };
  },
  methods: {
    startAnimation(callback, clss, rfs) {
      this.observer = new IntersectionObserver(([entry]) => {
        if (entry && entry.isIntersecting) {
          callback(entry, clss)
        }
      }, this.options);
      this.observer.observe(rfs);
    },

  },
    unmounted() {
    this.observer.disconnect();
  }
}