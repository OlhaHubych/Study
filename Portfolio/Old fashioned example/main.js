window.addEventListener('load', init, false);

function init () {
    
    const btn_next = document.querySelector("#next"),
        btn_prev = document.querySelector('#prev'),
        projects_blocks = document.querySelectorAll('.pr_block');

    console.dir(projects_blocks);
    btn_next.addEventListener('click', nextProject, false);
    btn_prev.addEventListener('click', prevProject, false);

    function setClasses(all_projects) { //TODO 
        
        
            for(let i = 0; i < all_projects.length; i++) {
                if(all_projects[i].classList.contains("right")) {
    
                    all_projects[i].classList.remove("right");
                    all_projects[i].style.display = "none";
    
                    all_projects[i+1].classList.remove("active");
                    all_projects[i+1].classList.add("right");
    
                    all_projects[i+2].classList.remove("left");
                    all_projects[i+2].classList.add("active");
        
                    all_projects[i+3].classList.add("left");
                    
                    break;
                }
            }
    }
    //-------------------
    
    function nextProject() { //TODO
        let projects = document.querySelectorAll(".pr_block");
        console.dir(projects);
        setClasses(projects);
    }
    function prevProject() { //TODO

    }
}
    


