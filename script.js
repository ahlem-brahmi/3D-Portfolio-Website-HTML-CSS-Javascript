//turn pages when click next or prev btn
const pageTurnBtn = document.querySelectorAll('.nextprev-btn');
pageTurnBtn.forEach((el, index)=>{
    el.onclick = ()=>{
        const pageTurnId = el.getAttribute('data-page');
        const pageTurn = document.getElementById(pageTurnId);
        if(pageTurn.classList.contains('turn')){
            pageTurn.classList.remove('turn');
            setTimeout(()=>{
                pageTurn.style.zIndex = 20 - index;
            }, 500)
        }
        else{
            pageTurn.classList.add('turn');
            setTimeout(()=>{
                pageTurn.style.zIndex = 20 + index;
            }, 500)
        }
    }
})

//contact me btn when click
const pages = document.querySelectorAll('.book-page.page-right');
const contactMeBtn = document.querySelector('.btn.contact-me');
contactMeBtn.onclick = () =>{
    pages.forEach((page, index)=>{
        setTimeout(()=>{
             page.classList.add('turn');
            setTimeout(()=>{
                page.style.zIndex = 20 + index;
            }, 500)
        }, (index + 1)* 200 + 100)
    })
}

//create reverse index function
let totalPages = pages.length;
let pageNumber = 0;
function reverseIndex(){
    pageNumber--;
    if (pageNumber < 0){
        pageNumber = totalPages - 1;
    }
}

//back profile btn when click
const backProfileBtn = document.querySelector('.back-profile');
backProfileBtn.onclick = ()=>{
    pages.forEach((_, index)=> {
        setTimeout(()=>{
            reverseIndex();
            pages[pageNumber].classList.remove('turn');
            setTimeout(()=>{
                reverseIndex();
                pages[pageNumber].style.zIndex = 10 + index;
            }, 500)
        }, (index + 1) * 200 + 100)
    })
}

//opening animation
const coverRight = document.querySelector('.cover.cover-right');
const pageLeft = document.querySelector('.book-page.book-left');

//opening animation , cover right animation
setTimeout(()=>{
    coverRight.classList.add('turn');
}, 2100)

setTimeout(()=>{
    coverRight.style.zIndex = -1;
}, 2800)

//opening animation , page left animation
setTimeout(()=>{
    pageLeft.style.zIndex = 20;
}, 3200)

//opening animation , all page right animation
pages.forEach((_, index)=> {
    setTimeout(()=>{
        reverseIndex();
        pages[pageNumber].classList.remove('turn');
        setTimeout(()=>{
            reverseIndex();
            pages[pageNumber].style.zIndex = 10 + index;
        }, 500)
    }, (index + 1) * 200 + 2100)
})

 // Lors du clic sur le lien
 document.getElementById('locationLink').onclick = function(event) {
    event.preventDefault(); // Empêcher le comportement par défaut du lien
    
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
            // Obtenir les coordonnées de la position
            var latitude = position.coords.latitude;
            var longitude = position.coords.longitude;

            // Construire l'URL de Google Maps avec les coordonnées
            var url = `https://maps.app.goo.gl/REuXmceKGqzz4mrd8`;
           

            // Ouvrir la nouvelle fenêtre avec la carte
            window.open(url, '_blank');
        }, function(error) {
            alert("Erreur de géolocalisation : " + error.message);
        });
    } else {
        alert("La géolocalisation n'est pas supportée par ce navigateur.");
    }
};