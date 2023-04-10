import { KUTYALISTA } from "./data.js";
import { KUTYAKULCS } from "./data.js";

$(document).ready(function () {
    console.log("document ready")
    const DOGCARDPLACE = $(".dogcards")
    const MODALPLACE = $(".modal-content")
    //DOGCARD.html(KUTYALISTA.kephely)
    //console.log(KUTYAKULCS.nev + ": " + (KUTYALISTA[1].nev))

    DOGCARDPLACE.html(dogCardLoader(KUTYALISTA))

    const MODALBUTTON = $(".modal-button")
    let myDogIndex = MODALBUTTON.click(function(){
        let index = Number(MODALBUTTON.index(this));
        console.log(index)
        loadModalContent(MODALPLACE, index)
    })

    

    //loadModalContent(MODALPLACE, myDogIndex)

    const nextButton = $(".btn-succes")
    nextButton.html("semmi")
  

    const TABLEPLACE = $(".table")
    TABLEPLACE.html(dogTableLoader(KUTYALISTA))

    const NemInputElem = $("#szuka")
    console.log(NemInputElem.val())
    const ADDOG = $("#add-dog")
    ADDOG.click(function(){
        console.log(NemInputElem.val())
        const kutya = {};
        kutya.nev = $("#nev").val()
        kutya.kor = $("#kor").val()
        kutya.fajta = $("#fajta").val()
        kutya.lab = $("#lab").val()

        if (NemInputElem.is(":checked")) {
            kutya.nem = "szuka";
            console.log("szuka")
          } else {
            kutya.nem = "kan";
            console.log("kan")
          }

        
        kutya.marmagassag = $("#marmagassag").val()
        KUTYALISTA.push(kutya)
        
        
        let dogContent = dogTableLoader(KUTYALISTA)

        TABLEPLACE.html(dogContent)
    })

    const editButton = $(".btn-edit")
    editButton.click(function(){
        let index = editButton.index(this);
        editTableRow(index);
    })

})

function editTableRow(index) {
    
    console.log(`megnyomtad ${index}. szerkeszt gombot`);
    let tableRow = $("tr").eq(index + 1);
    tableRow.html(`<th scope="row">${index + 1}</th>
        <td><input type="text" id="editNev" name="editNev" value="${KUTYALISTA[index].nev}" style="width: 65px;"></td>
        <td><input type="text" id="editKor" name="editKor" value="${KUTYALISTA[index].kor}" style="width: 65px;"></td>
        <td><input type="text" id="editFajta" name="editFajta" value="${KUTYALISTA[index].fajta}" style="width: 65px;"></td>
        <td><input type="text" id="editLab" name="editLab" value="${KUTYALISTA[index].lab}" style="width: 65px;"></td>
        <td><input type="text" id="editIvar" name="editIvar" value="${KUTYALISTA[index].nem}" style="width: 65px;"></td>
        <td><input type="text" id="editMarmagassag" name="editMarmagassag" value="${KUTYALISTA[index].marmagassag}" style="width: 65px;"></td>
        <td><button type="button" class="btn btn-success btn-save" style="width: 100px;">Mentés</button><button type="button"
            class="btn btn-danger delete">Törlés</button></td>`);

    const saveButton = $(".btn-save");
    saveButton.click(function () {
        KUTYALISTA[index].nev = $("#editNev").val();
        KUTYALISTA[index].kor = $("#editKor").val();
        KUTYALISTA[index].fajta = $("#editFajta").val();
        KUTYALISTA[index].lab = $("#editLab").val();
        KUTYALISTA[index].nem = $("#editIvar").val();
        KUTYALISTA[index].marmagassag = $("#editMarmagassag").val();
        console.log(KUTYALISTA[index]);
        $(".table").html(dogTableLoader(KUTYALISTA));

    });
}

function dogCardLoader(lista) {
    console.log("dogcardLoader ready")
    //console.log(dogcardplace.eq(0))
    //console.log(dogcardplace.length)
    let dogCardString = `<div class="row g-3">`;
    for (let i = 0; i < lista.length; i++) {
        dogCardString +=
            `<div class="col-xs-12 col-sm-6 col-md-4 col-lg-3">
                <div class="card" style="max-width: 250px;">
                <img src="${lista[i].kephely}"  class="card-img-top" alt="Kutya${i}">
                <div class="card-body">
                    <h5 class="card-title" id="ModalCenterTitle">${lista[i].nev}</h5>
                        <ul>
                            <li style="list-style-type: none;">${KUTYAKULCS.kor}: ${lista[i].kor}</li>
                            <li style="list-style-type: none;">${KUTYAKULCS.fajta}: ${lista[i].fajta}</li>
                            <li style="list-style-type: none;">${KUTYAKULCS.nem}: ${lista[i].nem}</li>
                            <li style="list-style-type: none;">${KUTYAKULCS.marmagassag}: ${lista[i].marmagassag}</li>
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
            <img class="modal-img img-fluid" src="${KUTYALISTA[dogIndex].kephely}" alt="Kutya${dogIndex}">
            <li style="list-style-type: none;">${KUTYAKULCS.kor}: ${KUTYALISTA[dogIndex].kor}</li>
            <li style="list-style-type: none;">${KUTYAKULCS.fajta}: ${KUTYALISTA[dogIndex].fajta}</li>
            <li style="list-style-type: none;">${KUTYAKULCS.nem}: ${KUTYALISTA[dogIndex].nem}</li>
            <li style="list-style-type: none;">${KUTYAKULCS.marmagassag}: ${KUTYALISTA[dogIndex].marmagassag}</li>
        </div>
        <div class="modal-footer d-flex justify-content-between align-items-center">
  <button type="button" class="btn btn-success previous" id="previous-dog-btn${dogIndex}">Előző</button>
  <button type="button" class="btn btn-success next" id="next-dog-btn${dogIndex}">Következő</button>
</div>


`;
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


function dogTableLoader(lista){
    console.log("dogTableLoader ready")
    let dogTableString = `      <thead>
                                <tr>
                                <th scope="col">Sorszám</th>
                                <th scope="col">Név</th>
                                <th scope="col">Kor</th>
                                <th scope="col">Fajta</th>
                                <th scope="col">Láb</th>
                                <th scope="col">Ivar</th>
                                <th scope="col">Marmagasság</th>
                                <th scope="col">Törlés / Szerkesztés</th>
                                </tr>
                            </thead>
                            <tbody>`;
    for (let i = 0; i < lista.length; i++) {
        dogTableString +=
            `<tr>
            <th scope="row">${i+1}</th>
            <td>${lista[i].nev}</td>
            <td>${lista[i].kor}</td>
            <td>${lista[i].fajta}</td>
            <td>${lista[i].lab}</td>
            <td>${lista[i].nem}</td>
            <td>${lista[i].marmagassag}</td>
            <td><button type="button" class="btn btn-warning btn-edit" style="width: 100px;">Szerkesztés</button><button type="button" class="btn btn-danger delete">Törlés</button></td>
          </tr>`
    }
    dogTableString += "</tbody></table>"

    return dogTableString

    
}

function dogTableAdder(kutya){
    KUTYALISTA.push(kutya);
    console.log(KUTYALISTA)
    dogTableLoader(KUTYALISTA)
}