var ready = (callback) => {
    if (document.readyState != "loading") callback();
    else document.addEventListener("DOMContentLoaded", callback);
  }
  
  ready(() => { 
    console.log("Seite erfolgreich geladen");

  });

function showDesign(){
    var designBlock = document.getElementById("design-content");
    document.getElementById("programming-content").classList.add("hidden")    
    designBlock.classList.remove("hidden");
    designBlock.scrollIntoView({block: "start", behavior: "smooth"})
}

function showProgramming(){
    var programmingBlock = document.getElementById("programming-content");
    document.getElementById("design-content").classList.add("hidden");
    programmingBlock.classList.remove("hidden");
    programmingBlock.scrollIntoView({block: "start", behavior: "smooth"})
}

