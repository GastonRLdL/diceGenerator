/* ========================================================================== */
/*                                                                            */
/* diceGenerator                                                              */
/*                                                                            */
/* File:    js/app.js                                                         */
/* Author:  Gaston Roman <[gastonrldl@gmail.com]>                             */
/* Created: [6/29/2025]                                                       */
/* Updated: [6/29/2025]                                                       */
/*                                                                            */
/* License: MIT                                                               */
/* ========================================================================== */

/* Main entry point for the diceGenerator application.                      */
/* Imports all necessary modules and sets up global event listeners.        */

// Import elements from elements.js
import {
    numFacesInput,
    modeStandardRadio,
    modeCustomRadio,
    customFacesContainer,
    rollDiceButton,
    eliminationModeCheckbox,
    resetDiceButton
} from './elements.js';

// Import core logic functions from core.js
import {
    rollDice,
    resetDice
} from './core.js';

// Import UI manipulation functions from ui.js
import {
    toggleCustomFacesContainer,
    generateCustomFaceInputs
} from './ui.js';


// =======================================================
// === EVENT LISTENERS (Centralized here) ===
// =======================================================

// Listen for changes in the number of faces input
numFacesInput.addEventListener('input', () => {
    generateCustomFaceInputs();
    resetDice();
});

// Listen for changes in the dice mode (Standard/Custom) radio buttons
modeStandardRadio.addEventListener('change', () => {
    toggleCustomFacesContainer();
    resetDice();
});
modeCustomRadio.addEventListener('change', () => {
    toggleCustomFacesContainer();
    resetDice();
});

// Listen for clicks on the 'Roll Dice' button
rollDiceButton.addEventListener('click', rollDice);

// Listen for clicks on the 'Reset Dice' button
resetDiceButton.addEventListener('click', resetDice);

// Listener for the Elimination Mode checkbox
eliminationModeCheckbox.addEventListener('change', () => {
    resetDice();
});

// Listener for changes in custom face inputs (dynamic inputs)
// We use event delegation here because these inputs are added/removed dynamically.
customFacesContainer.addEventListener('input', (event) => {
    if (event.target.tagName === 'INPUT' && eliminationModeCheckbox.checked) {
        resetDice();
    }
});


// =======================================================
// === Initial Setup When Page Loads ===
// =======================================================

// This ensures the UI and dice state are correct when the page first loads.
toggleCustomFacesContainer();
resetDice();