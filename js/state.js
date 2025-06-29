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
export let availableFaces = [];
export let eliminatedFaces = [];

// --- Function to Get Current Die Faces ---
export function getDiceFaces() {
    const numFaces = parseInt(numFacesInput.value);
    const faces = [];

    if (modeStandardRadio.checked) {
        for (let i = 1; i <= numFaces; i++) {
            faces.push(i.toString());
        }
    } else {
        const customInputs = customFacesContainer.querySelectorAll('input[type="text"]');
        customInputs.forEach((input, index) => {
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