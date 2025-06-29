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
    // 1. Initialize/Re-initialize availableFaces based on mode
    if (eliminationModeCheckbox.checked) {
        // If in elimination mode, and it's the first roll or after reset,
        // or if we just turned elimination mode on, load all faces.
        if (availableFaces.length === 0 && eliminatedFaces.length === 0) {
            setAvailableFaces(getDiceFaces());
        }
    } else {
        // If NOT in elimination mode, always re-initialize available faces
        setAvailableFaces(getDiceFaces());
        clearEliminatedFaces(); // No eliminated faces in standard mode
        updateEliminatedFacesDisplay(); // Hide eliminated faces display
    }

    // 2. Check if there are any faces left to roll (relevant for elimination mode)
    if (availableFaces.length === 0) {
        updateResultDisplay("No faces left!");
        setButtonStates(false, true); // Disable roll, show reset
        return; // Exit function, no roll possible
    }

    // 3. Choose a random face from `availableFaces`
    const randomIndex = Math.floor(Math.random() * availableFaces.length);
    const result = availableFaces[randomIndex];

    // 4. Display the result in the UI
    updateResultDisplay(result);

    // 5. Handle Elimination Mode logic
    if (eliminationModeCheckbox.checked) {
        // Move the rolled face from 'availableFaces' to 'eliminatedFaces'
        const eliminatedFace = availableFaces.splice(randomIndex, 1)[0];
        addEliminatedFace(eliminatedFace);

        // Update the list of eliminated faces in the UI
        updateEliminatedFacesDisplay();

        // If no faces are left after this roll, disable roll button and show reset
        if (availableFaces.length === 0) {
            setButtonStates(false, true);
        } else {
            setButtonStates(true, true); // Ensure roll is enabled, reset is visible
        }
    } else {
        setButtonStates(true, false); // Ensure roll is enabled, reset is hidden
    }
}

// --- Function to Reset the Die ---
export function resetDice() {
    setAvailableFaces(getDiceFaces()); // Reload all original faces
    clearEliminatedFaces(); // Clear the list of eliminated faces
    updateEliminatedFacesDisplay(); // Hide eliminated info section
    updateResultDisplay('--'); // Reset result display
    setButtonStates(true, false); // Enable roll button, hide reset button
}
