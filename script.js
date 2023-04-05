import { KUTYALISTA } from "./data.js";
import { KUTYAKULCS } from "./data.js";


$(document).ready(function () {
    console.log("document ready")
    const DOGCARDPLACE = $(".dogcardplace")
    //DOGCARD.html(KUTYALISTA.kephely)
    //console.log(KUTYAKULCS.nev + ": " + (KUTYALISTA[1].nev))
    DOGCARDPLACE.html(dogCardLoader(DOGCARDPLACE))

    const MODALBUTTON = $(".modal-button")
    let myDogIndex = pushedDogIndex(MODALBUTTON,"kutya")

    const MODALPLACE = $(".modal-content")

    loadModalContent(MODALPLACE, myDogIndex)

    const nextButton = $(".btn-succes")
    nextButton.html("semmi")
    pushedDogIndex(nextButton,"next-dog-btn")

})

function dogCardLoader(dogcardplace) {
    console.log("dogcardLoader ready")
    //console.log(dogcardplace.eq(0))
    //console.log(dogcardplace.length)
    let dogCardString = `<div class="container">
                            <div class="row">`;
    for (let i = 0; i < KUTYALISTA.length; i++) {
        dogCardString +=
            `<div class="card dogcard col-6 col-md-4" style="width: 18rem;">
            <img src="${KUTYALISTA[i].kephely}" alt="Kutya${i}">
            <div class="card-body">
                <h5 class="card-title">${KUTYALISTA[i].nev}</h4>
                    <ul>
                        <li>${KUTYAKULCS.kor}: ${KUTYALISTA[i].kor}</li>
                        <li>${KUTYAKULCS.fajta}: ${KUTYALISTA[i].fajta}</li>
                        <li>${KUTYAKULCS.nem}: ${KUTYALISTA[i].nem}</li>
                        <li>${KUTYAKULCS.marmagassag}: ${KUTYALISTA[i].marmagassag}</li>
                    </ul>
                    <p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore,
                        quisquam.</p>
                    
                    <button type="button" class="btn btn-primary modal-button" id="kutya${i}" data-toggle="modal"
                        data-target="#exampleModalCenter">
                        Megnézem
                    </button>
            </div>
        </div>`
    }
    dogCardString += "</div>"
    return dogCardString
}


function pushedDogIndex(button,string) {
    button.click(function () {
        const buttonId = $(this).attr("id");
        let dogIndex = Number(buttonId.substring(string.length));
        console.log("dogindex:" +dogIndex)
        loadModalContent($(".modal-content"), dogIndex);
        return dogIndex;
    })();
}

function loadModalContent(htmlPlace, dogIndex) {
    console.log("DogIndex: " + dogIndex)
    let myString =
        
    `<div class="modal-header">
            <h5 class="modal-title" id="exampleModalLongTitle">${KUTYALISTA[dogIndex].nev}</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
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
            
            
        </div>`
    htmlPlace.html(myString)

    nextButton();
    previousButton();
}

function previousButton() {
    const previousButton = $(".previous");
    let actualIndex = pushedDogIndex(previousButton, "previous-dog-btn");
    console.log("actualIndex: " +actualIndex)
    loadModalContent($(".modal-content"), actualIndex-1)
}

function nextButton() {
    const nextButton = $(".next");
    let actualIndex = pushedDogIndex(nextButton, "next-dog-btn");
    console.log("actualIndex: " +actualIndex)
    loadModalContent($(".modal-content"), actualIndex+1)

}

function jobbraLeptet(i){
    i += 1;
    if (i>KEPEK.length-1){
        i = 0
    }
    kezdoKep = i
    kep.src = KEPEK[i]
    console.log("index: " + i)
}


/*let jobbraGomb = document.querySelector(".jobb")
    jobbraGomb.addEventListener("click", function(){
        jobbraLeptet(NAGYKEP, kezdoKep)
    })

    let balraGomb = document.querySelector(".bal")
    balraGomb.addEventListener("click", function(){
        balraLeptet(NAGYKEP, kezdoKep)
    })

}
function jobbraLeptet(kep, i){
    i += 1;
    if (i>KEPEK.length-1){
        i = 0
    }
    kezdoKep = i
    kep.src = KEPEK[i]
    console.log("index: " + i)
}

function balraLeptet(kep, i){
    i -= 1;
    if (i<0){
        i = KEPEK.length-1
    }
    kezdoKep = i
    kep.src = KEPEK[i]
    console.log("index: " + i)
}*/