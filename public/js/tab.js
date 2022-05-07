function changeAtiveTab(event,tabID){
    let element = event.target;
    while(element.nodeName !== "A"){
      element = element.parentNode;
    }
    ulElement = element.parentNode.parentNode;
    aElements = ulElement.querySelectorAll("li > a");
    tabContents = document.getElementById("tabs-id").querySelectorAll(".tab-content > div");
    for(let i = 0 ; i < aElements.length; i++){
      aElements[i].classList.remove("text-primary-hover");
      aElements[i].classList.remove("bg-body-white");
      aElements[i].classList.add("text-body-white");
      aElements[i].classList.add("bg-primary-hover");
      tabContents[i].classList.add("hidden");
      tabContents[i].classList.remove("block");
    }
    element.classList.remove("text-body-white");
    element.classList.remove("bg-primary-hover");
    element.classList.add("text-primary-hover");
    element.classList.add("bg-body-white");
    document.getElementById(tabID).classList.remove("hidden");
    document.getElementById(tabID).classList.add("block");
  }