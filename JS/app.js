const firstSection = document.getElementById("firstSection");
const schoolMenu = document.getElementById("schools-menu");
const schoolBtn = document.getElementById("school-btn");
const examsBtnMenu = document.getElementById("exams-menu-btn");
const schoolBtnMenu = document.getElementById("school-menu-btn");
let firstDeploy = false;
let schoolMenuDeploy = false;

schoolBtn.addEventListener("click", () => {deployFirst()});
schoolBtnMenu.addEventListener("click", () => {deploySchoolMenu()});
//examsBtnMenu.addEventListener("click", () => {deploySchoolMenu()});

function deployFirst(){
    if(!firstDeploy){
        firstSection.style.display = "flex";
        firstSection.style.height = "10vh";
    }else{
        firstSection.style.height = "0vh";
        firstSection.style.display = "none";
        schoolMenu.style.display = "none";
        if(schoolMenuDeploy){
            schoolMenuDeploy = false;
        }
    }
    firstDeploy = !firstDeploy;
}

function deploySchoolMenu(){
    if(!schoolMenuDeploy){
        firstSection.style.height = "100vh"
        document.querySelector("*").style.overflow = "hidden";
        schoolMenu.style.display = "grid";
        
    }else{
        firstSection.style.height = "10vh"
        document.querySelector("*").style.overflow = "scroll-y";
        schoolMenu.style.display = "none";
    }
    schoolMenuDeploy = !schoolMenuDeploy;
}