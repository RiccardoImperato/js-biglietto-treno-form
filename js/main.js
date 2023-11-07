"use strict";

// 1) Chiedere all'utente la distanza in km da percorrere con un prompt e salvare in un variabile

// 2) Chiedere all'utente la sua età con un prompt e salvare in un variabile

// 3) Creare una variabile prezzo definito in base ai km (0.21 € al km)

// 4) Calcolo del prezzo del biglietto scontato del 20% per i minorenni e del 40% per gli over 65.

// Distanza
const distanzaKm = document.getElementById("distanza");

// Età
const eta = document.getElementById("eta");

// Prezzo
const prezzoKm = 0.21;

// Sconti
const scontoMinorenni = 20;
const scontoOver65 = 40;

// 5) Stampo il prezzo finale del biglietto con due cifre decimali
// 6) Implemento il programma usando due input e un bottone

// Bottone genera
const btnGenera = document.getElementById("genera");

// Condizioni
btnGenera.addEventListener("click", function () {
  const etaValue = eta.value;
  const distanzaValue = distanzaKm.value;

  if (!isNaN(distanzaValue) && !isNaN(etaValue)) {
    // Prezzo iniziale
    let prezzo = prezzoKm * distanzaValue;
    // Sconto iniziale
    let sconto = 0;
    // Calcolo sconto minorenni
    if (etaValue < 18) {
      prezzo = prezzo - (prezzo * scontoMinorenni) / 100;
      // Calcolo sconto over 65
    } else if (etaValue >= 65) {
      prezzo = prezzo - (prezzo * scontoOver65) / 100;
    }
    // Calcolo prezzo scontato
    prezzo -= sconto;
    console.log("Prezzo biglietto:", prezzo.toFixed(2), "€");
    // Dati inseriti non validi
  } else {
    console.log("Errore, valori non validi");
  }
});
