import { KUTYALISTA } from "./data.js";
import { KUTYAKULCS } from "./data.js";

$(document).ready(function () {
    console.log("document ready")
    const DOGCARDPLACE = $(".dogcards")
    const MODALPLACE = $(".modal-content")
    //DOGCARD.html(KUTYALISTA.kephely)
    //console.log(KUTYAKULCS.nev + ": " + (KUTYALISTA[1].nev))

    DOGCARDPLACE.html(dogCardLoader())

    const MODALBUTTON = $(".modal-button")
    let myDogIndex = MODALBUTTON.click(function(){
        let index = Number(MODALBUTTON.index(this));
        console.log(index)
        loadModalContent(MODALPLACE, index)
    })

    

    //loadModalContent(MODALPLACE, myDogIndex)

    const nextButton = $(".btn-succes")
    nextButton.html("semmi")
  

})

function dogCardLoader() {
    console.log("dogcardLoader ready")
    //console.log(dogcardplace.eq(0))
    //console.log(dogcardplace.length)
    let dogCardString = `<div class="row g-3">`;
    for (let i = 0; i < KUTYALISTA.length; i++) {
        dogCardString +=
            `<div class="col-xs-12 col-sm-6 col-md-4 col-lg-3">
                <div class="card" style="max-width: 250px;">
                <img src="${KUTYALISTA[i].kephely}"  class="card-img-top" alt="Kutya${i}">
                <div class="card-body">
                    <h5 class="card-title" id="ModalCenterTitle">${KUTYALISTA[i].nev}</h5>
                        <ul>
                            <li>${KUTYAKULCS.kor}: ${KUTYALISTA[i].kor}</li>
                            <li>${KUTYAKULCS.fajta}: ${KUTYALISTA[i].fajta}</li>
                            <li>${KUTYAKULCS.nem}: ${KUTYALISTA[i].nem}</li>
                            <li>${KUTYAKULCS.marmagassag}: ${KUTYALISTA[i].marmagassag}</li>
                        </ul>
                        <p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, quisquam.</p>
                        <button type="button" class="btn btn-primary modal-button" id="kutya${i}" data-bs-toggle="modal" 
                        data-bs-target="#dogModalCenter">Megnézem</button>
                </div>
            </div>
        </div>`
    }
    dogCardString += "</div>"
    return dogCardString
}

function loadModalContent(htmlPlace, dogIndex) {
    console.log("DogIndex: " + dogIndex)
    let myString =

        `<div class="modal-header">
            <h5 class="modal-title" id="dogModalCenterTitle">${KUTYALISTA[dogIndex].nev}</h5>
            <button type="button" class="close" data-bs-dismiss="modal" aria-bs-label="Close">
            <span aria-hidden="true">&times;</span>
            </button>
        </div>
        <div class="modal-body">
            <img class="modal-img" src="${KUTYALISTA[dogIndex].kephely}" alt="Kutya${dogIndex}">
            <li>${KUTYAKULCS.kor}: ${KUTYALISTA[dogIndex].kor}</li>
            <li>${KUTYAKULCS.fajta}: ${KUTYALISTA[dogIndex].fajta}</li>
            <li>${KUTYAKULCS.nem}: ${KUTYALISTA[dogIndex].nem}</li>
            <li>${KUTYAKULCS.marmagassag}: ${KUTYALISTA[dogIndex].marmagassag}</li>
        </div>
        <div class="modal-footer">
            <button type="button" class="btn btn-success previous" id="previous-dog-btn${dogIndex}">Előző</button>
            <button type="button" class="btn btn-success next" id="next-dog-btn${dogIndex}">Következő</button>
            
            
        </div>`;
    htmlPlace.html(myString)

    nextButton(dogIndex);
    previousButton(dogIndex);
}


function nextButton(dogIndex) {
    const MODALPLACE = $(".modal-content")
    console.log("next started")
    const nextButton = $(".next");
        nextButton.click(function(){
            dogIndex=(dogIndex >= KUTYALISTA.length-1?0:dogIndex + 1);
            loadModalContent(MODALPLACE, dogIndex)})
}

function previousButton(dogIndex) {
    const MODALPLACE = $(".modal-content")
    console.log("previous started")
    const previousButton = $(".previous");
    previousButton.click(function(){
        dogIndex=(dogIndex <= 0?KUTYALISTA.length-1:dogIndex - 1)
        loadModalContent(MODALPLACE, dogIndex)})
}
