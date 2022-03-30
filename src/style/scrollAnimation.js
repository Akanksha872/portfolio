export default function scrollAnimation() {
    function callbackFunc(entries, observer) {
        entries.forEach(entry => {
            var txt = entry.target.id + " visibility: " + entry.isIntersecting;
            if (entry.isIntersecting && entry.target.id == "Skills") {
                let elementsList = document.getElementsByClassName('hexagon-group');
                for (let i = 0; i < elementsList.length; i++) {
                    elementsList[i].classList.add("grow");
                }

            } else if (!entry.isIntersecting && entry.target.id == "Skills") {
                let elementsList = document.getElementsByClassName('hexagon-group');
                for (let i = 0; i < elementsList.length; i++) {
                    elementsList[i].classList.remove("grow");
                }
            }
            else if (entry.isIntersecting && entry.target.id == "Projects") {
                let elementsList = document.getElementsByClassName('projectBox');
                for (let i = 0; i < elementsList[0].childNodes.length; i++) {
                    if (i % 2 == 0) {
                        elementsList[0].childNodes[i].classList.add("slideForward");
                    } else {
                        elementsList[0].childNodes[i].classList.add("slideBackward");
                    }
                }

            } else if (!entry.isIntersecting && entry.target.id == "Projects") {

                let elementsList = document.getElementsByClassName('projectBox');
                for (let i = 0; i < elementsList[0].childNodes.length; i++) {
                    if (i % 2 == 0) {
                        elementsList[0].childNodes[i].classList.remove("slideForward");
                    } else {
                        elementsList[0].childNodes[i].classList.remove("slideBackward");
                    }
                }

            } else if (entry.isIntersecting && entry.target.id == "About") {
                let element = document.getElementById('aboutBox');
                element.classList.add("slideBackward");

            } else if (!entry.isIntersecting && entry.target.id == "About") {
                let element = document.getElementById('aboutBox');
                element.classList.remove("slideBackward");

            } else if (entry.isIntersecting && entry.target.id == "WorkExperience") {
                let elementsList = document.getElementsByClassName('workExperienceBox');
                for (let i = 0; i < elementsList[0].childNodes.length; i++) {
                    elementsList[0].childNodes[i].classList.add("showEffect");
                }
                elementsList[0].childNodes[1].classList.add("animationDelay2");
                elementsList[0].childNodes[2].classList.add("animationDelay3");

            } else if (!entry.isIntersecting && entry.target.id == "WorkExperience") {

                let elementsList = document.getElementsByClassName('workExperienceBox');
                for (let i = 0; i < i < elementsList[0].childNodes.length; i++) {
                    elementsList[0].childNodes[i].classList.remove("showEffect");
                }

                elementsList[0].childNodes[1].classList.remove("animationDelay2");
                elementsList[0].childNodes[2].classList.remove("animationDelay3");
            }

        });
    }

    let options = {
        root: null,
        rootMargin: '0px',
        threshold: 0.3
    };

    let observer = new IntersectionObserver(callbackFunc, options);
    let observerForProject = new IntersectionObserver(callbackFunc, options);
    let observerForAbout = new IntersectionObserver(callbackFunc, options);
    let observerForExperience = new IntersectionObserver(callbackFunc, options);
    observer.observe(document.getElementById('Skills'));
    observerForProject.observe(document.getElementById('Projects'));
    observerForAbout.observe(document.getElementById('About'));
    observerForExperience.observe(document.getElementById('WorkExperience'));
}