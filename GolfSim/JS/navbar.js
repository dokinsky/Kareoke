function createNavLink(name, linkDes){
    let li = document.createElement("li");
    li.classList.add("nav-item");
    //li.style = "box-shadow: 1px 5px 10px black; margin: 3px"
    let link = document.createElement("a");
    link.classList.add("nav-link");
    link.href = linkDes;
    link.innerText = name;
    li.appendChild(link);
    return li;
}

function createNavBar(){
    let navcontainer = document.getElementById("navbarContainer");
    navcontainer.classList.add("container")
    navcontainer.classList.add("collaspe");

    let navbar = document.createElement("nav");
    navbar.classList.add("navbar");
    navbar.classList.add("navbar-expand-lg")
     
    navbar.classList.add("navbar-light");
    navbar.classList.add("bg-light");

    let brand = document.createElement("a");
    brand.style = "padding-left: 20px";
    brand.classList.add("navbar-brand");
    brand.href = "index.html";
    brand.innerText = "SimGolf League";

    let navbarButton = document.createElement("button");
    navbarButton.type = "button";
    navbarButton.classList.add("navbar-toggler");
    navbarButton.setAttribute("data-toggle", "collapse"); 
    navbarButton.setAttribute("data-target", "#navbarNav"); 
    navbarButton.setAttribute("aria-controls", "navbarNav"); 
    navbarButton.setAttribute("aria-expanded", "false"); 
    navbarButton.setAttribute("aria-label", "Toggle navigation"); 

    let navbarButtonSpan = document.createElement("span");
    navbarButtonSpan.classList.add("navbar-toggle-icon");
    navbarButton.appendChild(navbarButtonSpan);
    
    let navBarNav = document.createElement("div");
    navBarNav.id = "navbarNav";
    navBarNav.classList.add("collapse");
    navBarNav.classList.add("navbar-collapse");

    let navList = document.createElement("ul");
    navList.classList.add("navbar-nav");
    navList.classList.add("mr-auto");
    navList.appendChild(createNavLink("Standings", "Standing.html"));
    navList.appendChild(createNavLink("ScoreReport", "ScoreReport.html"));
    navList.appendChild(createNavLink("Schedule", "Schedule.html"));
    navList.appendChild(createNavLink("Course Score", "WeeklyScores.html?week=1"));
    navList.appendChild(createNavLink("Courses", "WeeklyCourses.html"));
    navList.appendChild(createNavLink("Players", "players.html"));

    navBarNav.appendChild(navList);
    navbar.appendChild(brand);
    navbar.appendChild(navbarButton);
    navbar.appendChild(navBarNav);

    navcontainer.appendChild(navbar);
}

async function postData(url, data){
    let response = await fetch(url, {
        //mode: 'no-cors',
        method: 'POST',
        headers: {
            'Accept': 'application/jon',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    }).catch(error => {
        console.log(error);
    })
    let responseData = await response.json();
    return responseData;
    
}

async function getData(url){
    let response = await fetch(url, { method: 'GET'})
    .catch(error => {
        console.log(error);
    })
    let responseData = await response.json();
    return responseData;
}

