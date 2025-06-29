/* ========================================================================== */
/*                                                                            */
/* diceGenerator                                                              */
/*                                                                            */
/* File:    js/core.js                                                        */
/* Author:  Gaston Roman <[gastonrldl@gmail.com]>                             */
/* Created: [6/29/2025]                                                       */
/* Updated: [6/29/2025]                                                       */
/*                                                                            */
/* License: MIT                                                               */
/* ========================================================================== */

/* Implements the core logic for the dice rolling and reset functionalities.*/
/* Manages the state transitions for available and eliminated faces.        */

// Import necessary functions and variables from other modules
import {
    getDiceFaces,
    availableFaces,
    eliminatedFaces,
    setAvailableFaces,
    addEliminatedFace,
    clearEliminatedFaces
} from './state.js';

import {
    updateResultDisplay,
    updateEliminatedFacesDisplay,
    setButtonStates
} from './ui.js';

import {
    eliminationModeCheckbox
} from './elements.js';

// --- Function to Roll the Die ---
export function rollDice() {
    if (eliminationModeCheckbox.checked) {
        if (availableFaces.length === 0 && eliminatedFaces.length === 0) {
            setAvailableFaces(getDiceFaces());
        }
    } else {
        setAvailableFaces(getDiceFaces());
        clearEliminatedFaces();
        updateEliminatedFacesDisplay();
    }

    // 2. Check if there are any faces left to roll (relevant for elimination mode)
    if (availableFaces.length === 0) {
        updateResultDisplay("No faces left!");
        setButtonStates(false, true);
        return;
    }

    // 3. Choose a random face from `availableFaces`
    const randomIndex = Math.floor(Math.random() * availableFaces.length);
    const result = availableFaces[randomIndex];

    // 4. Display the result in the UI
    updateResultDisplay(result);

    // 5. Handle Elimination Mode logic
    if (eliminationModeCheckbox.checked) {
        const eliminatedFace = availableFaces.splice(randomIndex, 1)[0];
        addEliminatedFace(eliminatedFace);
        updateEliminatedFacesDisplay();
        if (availableFaces.length === 0) {
            setButtonStates(false, true);
        } else {
            setButtonStates(true, true);
        }
    } else {
        setButtonStates(true, false);
    }
}

// --- Function to Reset the Die ---
export function resetDice() {
    setAvailableFaces(getDiceFaces());
    clearEliminatedFaces();
    updateEliminatedFacesDisplay();
    updateResultDisplay('--');
    setButtonStates(true, false);
}
