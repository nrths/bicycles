const link = document.querySelectorAll('.bicycle-types__link');
const bikesList = document.querySelectorAll('.bicycle-types__cards-list');

for (let i = 0; i < link.length; i++) {

    link[i].addEventListener("click", function(e){
      e.preventDefault();
      const activeTabAttr = e.target.getAttribute("data-tab");
  
      for (let j = 0; j < link.length; j++) {
        const contentAttr = bikesList[j].getAttribute("data-tab-content");
  
        if (activeTabAttr === contentAttr) {
            link[j].classList.add("bicycle-types__link_active");
            bikesList[j].classList.add("bicycle-types__cards-list_active"); 
        } else {
            link[j].classList.remove("bicycle-types__link_active");
            bikesList[j].classList.remove("bicycle-types__cards-list_active");
        }
      };
    });
  }