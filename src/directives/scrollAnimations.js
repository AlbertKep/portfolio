const { entries } = require("core-js/fn/array");

// const scrollObserver = new IntersectionObserver((entries, scrollObserver) => {
//     console.log(entries);
//     console.log(scrollObserver);
// });

export default {
    bind(el) {
        el.classList.add('before-enter');
        // scrollObserver.observe(el);
    }
}