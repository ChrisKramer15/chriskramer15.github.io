function initMap(){

    // Map option
    var options = {
        center: {lat: 39.0997 , lng:-94.5786 },
        zoom: 10
    }
    //New Map
    map = new google.maps.Map(document.getElementById("map"),options)
}

//toggle navigation menu for mobile
let toggleBtn = document.getElementsByClassName("toggle-button")[0];
let wrapperEl = document.getElementsByClassName("wrapper")[0];

toggleBtn.addEventListener('click', () => {
    wrapperEl.classList.toggle("active");
});

  
  

