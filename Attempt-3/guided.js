let guidedNextButton = document.querySelector(".guided-next");
let guidedPopup = document.querySelector(".guided-popup");
let guidedHeader = document.querySelector(".guided-header");
let guidedContent = document.querySelector(".guided-content-1");
let guidedContent2 = document.querySelector(".guided-content-2");
let guidedPageNumber = document.querySelector(".guided-page-number");
let guidedNextIndex = 0;
let opaqueBox = document.querySelector(".opaque-box");

function show(popup) {
    popup.classList.remove("hide");
    popup.classList.add("show");
}

function hide(popup) {
    popup.classList.remove("show");
    popup.classList.add("hide");

}

let guidedModeContent = [{
        title: "This website is split into 2 sections",
        content: "Namely...",
        pageNumber: "1",
    }, {
        title: "The Mandelbrot Set",
        content: "A beautiful and complex pattern discovered by Benoît Mandelbrot in 1980.",
        pageNumber: "2",
    },
    {
        title: "The Mandelbrot Set",
        content: "A beautiful and complex pattern discovered by Benoît Mandelbrot in 1980. \<br>\n\n It is made from a repetition of an incredibly simple equation, (Animation here)",
        pageNumber: "2",
    }, {
        title: "and the Julia Sets",
        content: "Discovered by Gaston Julia, this set also created with the same equation, z = z^2 + c. (Animation here)",
        pageNumber: "3",
    },
    {
        title: " ",
        content: "Known as fractals,",
        pageNumber: "4",
    }, {
        title: " ",
        content: "Known as fractals, these intricate patterns are never-ending and occur when repeating a simple process.",
        pageNumber: "4",
    }, {
        title: " ",
        content: "Zoom in or out by moving 2 fingers up or down.",
        pageNumber: "5",
    }, {
        title: " ",
        content: "Zoom in or out by moving 2 fingers up or down. \<br>\n\n You may discover at certain points, these sets look identical.",
        pageNumber: "5",
    }, {
        title: " ",
        content: "Zoom in or out by moving 2 fingers up or down. \<br>\n\n You may discover at certain points, these sets look identical. \<br>\n\n Just like this.",
        pageNumber: "5",
    }, {
        title: " ",
        content: "You can try this for yourself in settings by clicking 'Lei Tan', named after the person who discovered this relationship.",
        pageNumber: "6",
    }, {
        title: " ",
        content: "In settings, you can also make different configurations, such as changing the sets’ colour, and removing the crosshair.",
        pageNumber: "7",
    },
    {
        title: " ",
        content: "Use the crosshair to help navigate through the Mandelbrot Set. Press and move your trackpad to move it.",
        pageNumber: "8",
    }, {
        title: "Your feedback is always appreciated",
        content: "Feedback forms can be found in settings.",
        pageNumber: "9",
    },
]

// Press next or the cross at the top to return to the site, otherwise 

function nextGuidedStep() {
    if (guidedNextIndex < guidedModeContent.length) {
        //Header
        if (guidedModeContent[guidedNextIndex].title == " ") {
            hide(guidedHeader);
            // guidedHeader.classList.remove("add");
            // guidedHeader.classList.add("hide");
        } else if (guidedModeContent[guidedNextIndex].title != " ") {
            show(guidedHeader);
            // guidedHeader.classList.remove("hide")
            // guidedHeader.classList.add("show");
            guidedHeader.innerHTML = guidedModeContent[guidedNextIndex].title;
        }

        guidedContent.innerHTML = guidedModeContent[guidedNextIndex].content;
        guidedPageNumber.innerHTML = guidedModeContent[guidedNextIndex].pageNumber;


        // Changing the opacity of the opaqueBox:
        if ((guidedModeContent[guidedNextIndex].pageNumber == "2") || (guidedPageNumber.innerHTML == "3")) {
            opaqueBox.classList.remove("hide");
            opaqueBox.classList.add("partial-show");

            if (guidedPageNumber.innerHTML == "2") {
                opaqueBox.classList.remove("right")
                opaqueBox.classList.add("left");
            }
            if (guidedPageNumber.innerHTML == "3") {
                opaqueBox.classList.remove("left")
                opaqueBox.classList.add("right");
            }
        } else {
            opaqueBox.classList.remove("partial-show");
            opaqueBox.classList.add("hide");
        }

        if (guidedPageNumber.innerHTML == "9") {
            document.getElementById("next-button").href = "https://jmaio.github.io/mandelbrot-maps/#/m@0.2361652,0.5633767,4,0.2/j@0.4364131,-0.6468786,4,2.12";
            document.getElementById("next-button").innerHTML = "Go to site!";
        }

        hide(guidedContent2);
        guidedNextIndex++;
    }
}

function lastGuidedStep() {

    if (guidedNextIndex >= 0) {
        if (guidedNextIndex > 0) {
            guidedNextIndex--;
        }
        if (guidedModeContent[guidedNextIndex].title == " ") {
            hide(guidedHeader);

            // guidedHeader.classList.remove("add");
            // guidedHeader.classList.add("hide");
        } else if (guidedModeContent[guidedNextIndex].title != " ") {
            show(guidedHeader);
            // guidedHeader.classList.remove("hide");
            // guidedHeader.classList.add("show");
            guidedHeader.innerHTML = guidedModeContent[guidedNextIndex].title;
        }

        if ((guidedModeContent[guidedNextIndex].pageNumber == "2") || (guidedPageNumber.innerHTML == "3")) {
            opaqueBox.classList.remove("hide");
            opaqueBox.classList.add("partial-show");

            if (guidedPageNumber.innerHTML == "2") {
                opaqueBox.classList.remove("right")
                opaqueBox.classList.add("left");
            }
            if (guidedPageNumber.innerHTML == "3") {
                opaqueBox.classList.remove("left")
                opaqueBox.classList.add("right");
            }
        } else {
            opaqueBox.classList.remove("partial-show");
            opaqueBox.classList.add("hide");
        }


        if (guidedPageNumber.innerHTML != "9") {
            document.getElementById("next-button").innerHTML = "Next";
        }


        guidedContent.innerHTML = guidedModeContent[guidedNextIndex].content;
        guidedPageNumber.innerHTML = guidedModeContent[guidedNextIndex].pageNumber;
    }
}

guidedNextButton.addEventListener('click', nextGuidedStep);


window.addEventListener("keydown", function(event) {
    console.log(event);
    if ((event.code === "Space") || (event.code === "ArrowRight")) {
        nextGuidedStep();
    } else if (event.code === "ArrowLeft") {
        lastGuidedStep();
    }
})

// window.addEventListener("keydown", function(event) {
//     if (event.code === "ArrowLeft") {
//         lastGuidedStep();
//     }
// })