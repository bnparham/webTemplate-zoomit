// ----|open or close menu|----
navIcon = document.getElementById("navIco")

navIcon.addEventListener("click",function(){
    megaMenu = document.querySelector("#menuList-ul")

    if(megaMenu.classList.contains("d-none")){
        megaMenu.classList.remove("d-none")
        megaMenu.classList.add("d-flex")
        navIcon.firstElementChild.classList.remove("fa-navicon")
        navIcon.firstElementChild.classList.add("fa-close")
    }
    else{
        megaMenu.classList.remove("d-flex")
        megaMenu.classList.add("d-none") 
        navIcon.firstElementChild.classList.remove("fa-close")
        navIcon.firstElementChild.classList.add("fa-navicon")
    }
})


// ----|sub mega menu|----
all_subMegaMenus = document.querySelectorAll(".subMegaMenu")
all_subMegaMenus.forEach(el =>
    el.addEventListener("click" , function(){
        if(this.childElementCount == 2){
            // close other mega menus when clicking
            all_subMegaMenus.forEach(el => {
                if(el.childElementCount == 2){
                    if(el.lastElementChild.classList.contains("d-flex")){
                        // console.log("origin");
                        el.lastElementChild.classList.remove("d-flex")
                        el.lastElementChild.classList.add("d-none","all")
                        el.style.backgroundColor = ""
                        el.firstElementChild.style.color = ""
                    }
                    else if(el.lastElementChild.classList.contains("all")){
                        el.lastElementChild.classList.remove("all")
                    }
                }
            })
            // handel this mega menu
            handel_class = this.lastElementChild.classList
            if(handel_class.contains("all","d-flex")){
                // console.log(1);
                handel_class.remove("d-flex","all")
                handel_class.add("d-none")
                this.style.backgroundColor = ""
                this.firstElementChild.style.color = "" 
            }
            else if(handel_class.contains("d-flex")){
                // console.log(2);
                handel_class.remove("d-flex")  
                handel_class.add("d-none")
                this.style.backgroundColor = ""
                this.firstElementChild.style.color = ""
            }
            else if(handel_class.contains("d-none")){
                // console.log(3);
                handel_class.remove("d-none")  
                handel_class.add("d-flex")
                this.style.backgroundColor = "#e51a2e"
                this.firstElementChild.style.color = "#fff"
            }
        }
   }),
)
