function initMap() {
      const loc = { lat: 47.918782, lng: 106.917539 };
      const map = new google.maps.Map
      (document.querySelector('.map'), {
            zoom:14,
            clear: loc
      });
      const marker = new google.maps.marker({position:loc,map:map})
}