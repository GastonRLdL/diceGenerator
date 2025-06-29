/* ========================================================================== */
/*                                                                            */
/* diceGenerator                                                              */
/*                                                                            */
/* File:    js/elements.js                                                    */
/* Author:  Gaston Roman <[gastonrldl@gmail.com]>                             */
/* Created: [6/29/2025]                                                       */
/* Updated: [6/29/2025]                                                       */
/*                                                                            */
/* License: MIT                                                               */
/* ========================================================================== */

/* Contains references to all necessary DOM elements for the diceGenerator UI.*/
/* These elements are exported for use across other modules.                  */

// Get references to key DOM elements and export them
// This allows us to access and manipulate these HTML elements from other JavaScript files.
export const numFacesInput = document.getElementById('num-faces');
export const modeStandardRadio = document.getElementById('mode-standard');
export const modeCustomRadio = document.getElementById('mode-custom');
export const customFacesContainer = document.getElementById('custom-faces-container');
export const rollDiceButton = document.getElementById('roll-dice-button');
export const diceResultSpan = document.getElementById('dice-result');
export const eliminationModeCheckbox = document.getElementById('elimination-mode');
export const eliminatedFacesInfo = document.getElementById('eliminated-faces-info');
export const eliminatedFacesList = document.getElementById('eliminated-faces-list');
export const resetDiceButton = document.getElementById('reset-dice-button');