"use strict";

// 1) Chiedere all'utente la distanza in km da percorrere con un prompt e salvare in un variabile

// 2) Chiedere all'utente la sua età con un prompt e salvare in un variabile

// 3) Creare una variabile prezzo definito in base ai km (0.21 € al km)

// 4) Calcolo del prezzo del biglietto scontato del 20% per i minorenni e del 40% per gli over 65.

// Distanza
const distanzaKm = document.getElementById("distanza");

// Nome
const nome = document.getElementById('nome')

// Età
const eta = document.getElementById("eta");

// Prezzo
const prezzoKm = 0.21;

// Sconti
const scontoMinorenni = 20;
const scontoOver65 = 40;

// 5) Stampo il prezzo finale del biglietto con due cifre decimali
// 6) Implemento il programma usando tre input e un due bottoni

// Bottoni genera e annulla
const btnGenera = document.getElementById("genera");
const btnAnnulla = document.getElementById("annulla");

// Biglietto
const biglietto = document.getElementById('biglietto');
const bigliettoNome = document.getElementById('bigliettoNome')
const offerta = document.getElementById('offerta')
const carrozza = document.getElementById('carrozza')
const codice = document.getElementById('codice')
const costo = document.getElementById('costo')

// Condizioni
btnGenera.addEventListener("click", function () {
  const etaValue = eta.value;
  const distanzaValue = distanzaKm.value;
  biglietto.classList.toggle('d-none')
  bigliettoNome.innerHTML = nome.value;
  offerta.innerHTML = 'Biglietto Standard';
  carrozza.innerHTML = Math.floor(Math.random() * 20 + 1)
  codice.innerHTML = Math.floor(Math.random() * 10000)

  if (!isNaN(distanzaValue)) {
    // Prezzo iniziale
    let prezzo = prezzoKm * distanzaValue;
    // Sconto iniziale
    let sconto = 0;
    // Calcolo sconto minorenni
    if (etaValue === "Minorenne") {
      prezzo = prezzo - (prezzo * scontoMinorenni) / 100;
      offerta.innerHTML = 'Offerta Junior'
      // Calcolo sconto over 65
    } else if (etaValue === "Over65") {
      prezzo = prezzo - (prezzo * scontoOver65) / 100;
      offerta.innerHTML = 'Offerta Senior';
    }
    // Calcolo prezzo scontato
    prezzo -= sconto;
    costo.innerHTML =(prezzo.toFixed(2) + ' €');
    console.log("Prezzo biglietto:", prezzo.toFixed(2), "€");
    // Dati inseriti non validi
  } else {
    console.log("Errore, valori non validi");
  }
});

btnAnnulla.addEventListener('click', function(){
  biglietto.classList.toggle('d-none')
})
