/* ========================================================================== */
/*                                                                            */
/* diceGenerator                                                              */
/*                                                                            */
/* File:    js/state.js                                                       */
/* Author:  Gaston Roman <[gastonrldl@gmail.com]>                             */
/* Created: [6/29/2025]                                                       */
/* Updated: [6/29/2025]                                                       */
/*                                                                            */
/* License: MIT                                                               */
/* ========================================================================== */

/* Manages the global state variables for the diceGenerator application,    */
/* including available and eliminated faces, and the function to derive     */
/* current dice faces from UI inputs.                                       */

// Import DOM elements needed by this module
import { numFacesInput, modeStandardRadio, customFacesContainer } from './elements.js';

// Initial state variables for the die
export let availableFaces = []; // Stores faces that can currently be rolled.
export let eliminatedFaces = []; // Stores faces that have been eliminated in elimination mode.

// --- Function to Get Current Die Faces ---
export function getDiceFaces() {
    const numFaces = parseInt(numFacesInput.value);
    const faces = [];

    if (modeStandardRadio.checked) {
        // Standard Mode: Faces are numbers from 1 to N
        for (let i = 1; i <= numFaces; i++) {
            faces.push(i.toString()); // Convert to string for consistency with custom
        }
    } else { // modeCustomRadio.checked (implicitly handled by app.js logic)
        // Custom Mode: Collect values from custom input fields
        const customInputs = customFacesContainer.querySelectorAll('input[type="text"]');
        customInputs.forEach((input, index) => {
            // Use default value (face number) if input is empty
            faces.push(input.value.trim() !== '' ? input.value.trim() : (index + 1).toString());
        });
    }
    return faces;
}

// Functions to update state variables externally (if needed, or directly assign)
export function setAvailableFaces(faces) {
    availableFaces = faces;
}

export function addEliminatedFace(face) {
    eliminatedFaces.push(face);
}

export function clearEliminatedFaces() {
    eliminatedFaces = [];
}