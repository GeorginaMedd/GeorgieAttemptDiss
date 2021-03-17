let guidedNextButton = document.querySelector(".guided-next");
let guidedPopup = document.querySelector(".guided-popup");
let guidedHeader = document.querySelector(".guided-header");
let guidedContent = document.querySelector(".guided-conten");
let guidedNextIndex = 0;




let guidedModeContent = [{
        title: "This website is split into 2 sections,",
        content: "Namely...",
    }, {
        title: "The Mandelbrot Set",
        content: "Discovered by Benoît Mandelbrot in 1980, it is a beautiful and complex pattern made from a repetition of an incredibly simple equation, (Animation here)",
    }, {
        title: "and the Julia Sets,",
        content: "discovered by Gaston Julia, this set also created with the same equation, z = z^2 + c. (Animation here)",
    },
    {
        title: "",
        content: "These intricate patterns are known as fractals, which _____ when _____.",
    }, {
        title: "",
        content: "You can move 2 fingers up or down to zoom in or out of either sets, in doing so, you might discover a wonderful property about them - At certain points, with the right rotation and zoom, the Mandelbrot and Julia sets look identical. Just like this.",
    }, {
        title: "",
        content: "You can try this for yourself in the settings button, and clicking M. Points, named after the person who discovered this relationship. ",
    }, {
        title: "",
        content: "In settings, you can also make different configurations, such as changing the sets’s colour, and moving the crosshair.",
    },
    {
        title: " ",
        content: "Use the crosshair to help navigate your way through the Mandelbrot Set, hold down on your trackpad to move it.",
    },
]

function nextGuidedStep() {
    if (guidedNextIndex < guidedModeContent.length) {
        guidedHeader.innerHTML = guidedModeContent[guidedNextIndex].title;
        guidedContent.innerHTML = guidedModeContent[guidedNextIndex].content;
        guidedNextIndex++;
    }
}

guidedNextButton.addEventListener('click', nextGuidedStep);