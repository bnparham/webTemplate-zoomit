// ----|auto calculate width of main mega menu|----

// ---select all mega menus---
mainMegaMenu = document.querySelectorAll("#main-megaMenu")
mainMegaMenu.forEach(el => {
    // ---select all a tags in ul---
    a_tags = el.querySelectorAll("li > a")
    length_list = []
    a_tags.forEach(a => {
        // find length of each a tag
        each_a_tag_length = a.text.trim().length
        length_list.push(each_a_tag_length)
    })
    // find max of a text length
    max = length_list.reduce((a,b) => Math.max(a,b))
    if(max < 15){
        el.style.width = "140px"
    }
    else if(max < 20){
        el.style.width = "180px"
    }
    else if(max < 30){
        el.style.width = "240px"
    }
    else{
        el.style.width = "280px"
    }
})

// ----|main mega menu|----
all_mianMegaMenus = document.querySelectorAll(".main-subMegaMenu")
all_mianMegaMenus.forEach(el =>
    el.addEventListener("click" , function(){
        if(this.childElementCount == 2){
            // close other mega menus when clicking
            all_mianMegaMenus.forEach(el => {
                if(el.childElementCount == 2){
                    if(el.lastElementChild.classList.contains("d-lg-flex")){
                        // console.log("origin");
                        el.lastElementChild.classList.remove("d-lg-flex")
                        el.lastElementChild.classList.add("d-lg-none","all")
                    }
                    else if(el.lastElementChild.classList.contains("all")){
                        el.lastElementChild.classList.remove("all")
                    }
                }
            })
            // handel this mega menu
            handel_class = this.lastElementChild.classList
            if(handel_class.contains("all","d-lg-flex")){
                // console.log(1);
                handel_class.remove("d-lg-flex","all")
                handel_class.add("d-lg-none")
            }
            else if(handel_class.contains("d-lg-flex")){
                // console.log(2);
                handel_class.remove("d-lg-flex")  
                handel_class.add("d-lg-none")
            }
            else if(handel_class.contains("d-lg-none")){
                // console.log(3);
                handel_class.remove("d-lg-none")  
                handel_class.add("d-lg-flex")
            }
        }
   }),
)
