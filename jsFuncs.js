
function openCity(evt, cityName) {
    var i, tabcontent, tablinks;

    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
}

function init(){
	// Создание карты.
	var myMap= new ymaps.Map("map", {
		center: [56.136572, 40.396780],
		zoom: 17
	});
		
	var myPlacemark = new ymaps.Placemark([56.136572, 40.396780], {
		balloonContentHeader: 'ООО "ВРЮЦ"',
		balloonContentBody: 'ООО "ВРЮЦ" г. Владимир, ул. Мира, дом 22',
		hintContent: 'ООО "ВРЮЦ"'
	});

	myMap.geoObjects.add(myPlacemark);
		
}

/* Когда пользователь нажимает на кнопку,
переключение между скрытием и отображением раскрывающегося содержимого */
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  
  // Закройте выпадающее меню, если пользователь щелкает за его пределами
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn') && !event.target.matches('.dropbtnImg')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
}