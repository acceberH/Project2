window.addEventListener("scroll", function() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const windowHeight = window.innerHeight;

    const containerTop = document.querySelector('.artwork-container').offsetTop;
    const containerHeight = document.querySelector('.artwork-container').offsetHeight;

    // Determine when user is within the artwork container while scrolling
    if (scrollTop + windowHeight > containerTop && scrollTop < containerTop + containerHeight) {
        const scrollOverlap = scrollTop + windowHeight - containerTop;

        // Calculate percentage overlap (from 0 to 1)
        const percentVisible = scrollOverlap / windowHeight;

        document.querySelector('.new-creation').style.transform = `translateY(${100 - (percentVisible * 100)}%)`;
    }
});
