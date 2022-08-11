// ---grid item section change container on screen size---

var windowSize = window.matchMedia("(max-width: 767.98px)")
gridItem_change_container(windowSize)
windowSize.addEventListener("change",gridItem_change_container)

function gridItem_change_container(windowSize){
    grid_item_section = document.getElementById("grid-item-row")
    if(windowSize.matches){
        grid_item_section.firstElementChild.classList.remove("container")
        grid_item_section.firstElementChild.classList.add("container-fluid")
    }
    else{
        grid_item_section.firstElementChild.classList.remove("container-fluid")
        grid_item_section.firstElementChild.classList.add("container")
    }
}

// ---feature news & body & guid sections  change container on screen size---

var windowSize = window.matchMedia("(max-width: 992px)")
featureNews_change_container(windowSize)
windowSize.addEventListener("change",featureNews_change_container)

function featureNews_change_container(windowSize){
    grid_item_section = document.getElementById("feature-news")
    body_section = document.getElementById("body")
    guid_section = document.getElementById("guid")
    review_section = document.getElementById("review")

    if(windowSize.matches){
        grid_item_section.firstElementChild.classList.remove("container")
        grid_item_section.firstElementChild.classList.add("container-fluid")

        body_section.firstElementChild.classList.remove("container")
        body_section.firstElementChild.classList.add("container-fluid")

        guid_section.firstElementChild.classList.remove("container")
        guid_section.firstElementChild.classList.add("container-fluid")

        review_section.firstElementChild.classList.remove("container")
        review_section.firstElementChild.classList.add("container-fluid")
    }
    else{
        grid_item_section.firstElementChild.classList.remove("container-fluid")
        grid_item_section.firstElementChild.classList.add("container")

        body_section.firstElementChild.classList.remove("container-fluid")
        body_section.firstElementChild.classList.add("container")

        guid_section.firstElementChild.classList.remove("container-fluid")
        guid_section.firstElementChild.classList.add("container")

        review_section.firstElementChild.classList.remove("container-fluid")
        review_section.firstElementChild.classList.add("container")
    }
}