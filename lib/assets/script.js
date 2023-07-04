document.addEventListener("DOMContentLoaded", () => {
    // Get all of the images that are marked up to lazy load
    const images = document.querySelectorAll(".container");
    Array.from(images).forEach(image => image.classList.add("fade"));
    const config = {
        // If the image gets within 50px in the Y axis, start the download.
        rootMargin: "20px 0px",
        threshold: 0.01
    };
    var observer;
    console.log(images);
    if (!("IntersectionObserver" in window)) {
        Array.from(images).forEach(image => preloadImage(image));
    } else {
        observer = new IntersectionObserver(onIntersection, config);
        images.forEach(image => {
            observer.observe(image);
        });
    }

    function onIntersection(entries) {
        entries.forEach(entry => {

            if (entry.intersectionRatio > 0) {
                observer.unobserve(entry.target);
                preloadImage(entry.target);
            }
        });
    }


    function preloadImage(img) {
        console.log("hi");
        img.classList.remove("fade");
    }

});
