/* ========================================================================== */
/*                                                                            */
/* diceGenerator                                                              */
/*                                                                            */
/* File:    js/ui.js                                                          */
/* Author:  Gaston Roman <[gastonrldl@gmail.com]>                             */
/* Created: [6/29/2025]                                                       */
/* Updated: [6/29/2025]                                                       */
/*                                                                            */
/* License: MIT                                                               */
/* ========================================================================== */

/* Provides utility functions for manipulating the user interface of the    */
/* diceGenerator, such as generating custom face inputs and toggling        */
/* container visibility.                                                    */

// Import DOM elements and state variables/functions needed by this module
import {
    numFacesInput,
    modeCustomRadio,
    customFacesContainer,
    eliminatedFacesList,
    eliminatedFacesInfo,
    diceResultSpan,
    rollDiceButton,
    resetDiceButton
} from './elements.js';

import { availableFaces, eliminatedFaces } from './state.js'; // Import state variables (though not directly modified here)

// --- Function to Generate Custom Face Input Fields Dynamically ---
export function generateCustomFaceInputs() {
    // Clear any previously generated inputs to avoid duplicates
    customFacesContainer.innerHTML = '';

    const numFaces = parseInt(numFacesInput.value);

    // Only generate inputs if 'Custom' mode is selected
    if (modeCustomRadio.checked) {
        for (let i = 0; i < numFaces; i++) {
            const faceDiv = document.createElement('div');
            faceDiv.className = 'custom-face-input'; // Apply CSS styling
            faceDiv.innerHTML = `
                <label for="face-${i + 1}">Face ${i + 1}:</label>
                <input type="text" id="face-${i + 1}" value="${i + 1}">
            `;
            customFacesContainer.appendChild(faceDiv);
        }
    }
}

// --- Function to Toggle Visibility of Custom Faces Container ---
export function toggleCustomFacesContainer() {
    if (modeCustomRadio.checked) {
        customFacesContainer.style.display = 'block'; // Show the container
        generateCustomFaceInputs(); // And generate the inputs
    } else {
        customFacesContainer.style.display = 'none'; // Hide the container
    }
}

// --- Function to update the result display ---
export function updateResultDisplay(result) {
    diceResultSpan.textContent = result;
}

// --- Function to update the eliminated faces display ---
export function updateEliminatedFacesDisplay() {
    eliminatedFacesList.textContent = eliminatedFaces.join(', ');
    eliminatedFacesInfo.style.display = eliminatedFaces.length > 0 ? 'block' : 'none';
}

// --- Function to control button states ---
export function setButtonStates(rollEnabled, resetVisible) {
    rollDiceButton.disabled = !rollEnabled;
    resetDiceButton.style.display = resetVisible ? 'block' : 'none';
}