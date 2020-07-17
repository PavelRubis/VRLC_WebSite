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

function init() {
    // Создание карты.
    var myMap = new ymaps.Map("map", {
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

function myFunction(pagePart) {
    if (pagePart == 'header') {
        if (document.getElementById("myDropdown").classList.contains('show')) {
            document.getElementById("myDropdown").className.replace(" show", "");
        } else {
            document.getElementById("myDropdown").className += " show";
        }
    } else {
        if (document.getElementById("myDropdownFooter").classList.contains('show')) {
            document.getElementById("myDropdownFooter").className.replace(" show", "");
        } else {
            document.getElementById("myDropdownFooter").className += " show";
        }
    }
}

window.onclick = function (event) {
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

function ContractBlock(checkboxId) {
    if (document.getElementById(checkboxId).checked) {
        document.getElementById("submitButton").disabled = false;
    } else {
        document.getElementById("submitButton").disabled = true;
    }
}

$(document).ready(function () {
    $('.multiple-items-slider').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        dots: true,
        variableWidth: true,
        speed: 300,
    });
});

function SelectPartnersOrLicenses(buttonId) {
    thisBtn = document.getElementById(buttonId);
    thisBtn.style.backgroundColor = "#d9d9db";
    thisBtn.style.color = "#3e394d";

    if (thisBtn.id == "licenseButton") {
        document.getElementById("partnersDiv").style.display = "none";
        document.getElementById("sliderDiv").style.display = "block";
        document.getElementById('partnersButton').style.backgroundColor = "#3e394d";
        document.getElementById('partnersButton').style.color = "#d9d9db";

    } else {
        document.getElementById("sliderDiv").style.display = "none";
        document.getElementById("partnersDiv").style.display = "block";

        document.getElementById('licenseButton').style.backgroundColor = "#3e394d";
        document.getElementById('licenseButton').style.color = "#d9d9db";

    }
}

// Get the image and insert it inside the modal - use its "alt" text as a caption
function ModalImgShow(imgID,modalImgId) {
    var modalImgs;

    modalImgs = document.getElementsByClassName("modal-content");

    for (i = 0; i < modalImgs.length; i++) {
        modalImgs[i].style.display = "none";
    }

    var modal = document.getElementById('Modal');
    var modalImg = document.getElementById(modalImgId);
    modalImg.style.display = "block";
    modal.style.display = "block";
}

// Get the <span> element that closes the modal

// When the user clicks on <span> (x), close the modal
function CloseSpan() { 
    var span = document.getElementById("close")[0];
    var modal = document.getElementById('Modal');
    modal.style.display = "none";
}