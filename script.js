// Get references to key DOM elements
// This allows us to access and manipulate these HTML elements from JavaScript.
const numFacesInput = document.getElementById('num-faces');
const modeStandardRadio = document.getElementById('mode-standard');
const modeCustomRadio = document.getElementById('mode-custom');
const customFacesContainer = document.getElementById('custom-faces-container');
const rollDiceButton = document.getElementById('roll-dice-button');
const diceResultSpan = document.getElementById('dice-result');
const eliminationModeCheckbox = document.getElementById('elimination-mode');
const eliminatedFacesInfo = document.getElementById('eliminated-faces-info');
const eliminatedFacesList = document.getElementById('eliminated-faces-list');
const resetDiceButton = document.getElementById('reset-dice-button');

// Initial state variables for the die
// These will hold the current state of our die.
let availableFaces = []; // Stores faces that can currently be rolled.
let eliminatedFaces = []; // Stores faces that have been eliminated in elimination mode.

// --- Function to Get Current Die Faces ---
// This function will determine which faces are available for rolling,
// based on the mode (standard or custom) and the number of faces.
function getDiceFaces() {
    const numFaces = parseInt(numFacesInput.value);
    const faces = [];

    if (modeStandardRadio.checked) {
        // Standard Mode: Faces are numbers from 1 to N
        for (let i = 1; i <= numFaces; i++) {
            faces.push(i.toString()); // Convert to string for consistency with custom
        }
    } else { // modeCustomRadio.checked
        // Custom Mode: Collect values from custom input fields
        const customInputs = customFacesContainer.querySelectorAll('input[type="text"]');
        customInputs.forEach(input => {
            // Use default value (face number) if input is empty
            faces.push(input.value.trim() !== '' ? input.value.trim() : (customInputs.indexOf(input) + 1).toString());
        });
    }
    return faces;
}

// --- Function to Generate Custom Face Input Fields Dynamically ---
// This function will create and display the input fields for custom faces
// when the 'Custom' mode is selected or when the number of faces changes.
function generateCustomFaceInputs() {
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
// Hides or shows the custom face input fields based on the selected mode.
function toggleCustomFacesContainer() {
    if (modeCustomRadio.checked) {
        customFacesContainer.style.display = 'block'; // Show the container
        generateCustomFaceInputs(); // And generate the inputs
    } else {
        customFacesContainer.style.display = 'none'; // Hide the container
    }
}

// --- Function to Roll the Die ---
function rollDice() {
    // Logic for rolling the die will go here later
    // For now, let's just log a message to the console to confirm it works.
    console.log("Die is being rolled!");
}

// --- Function to Reset the Die (for Elimination Mode) ---
function resetDice() {
    // Logic for resetting the die will go here later
    console.log("Die has been reset!");
}

// --- Event Listeners ---

// Listen for changes in the number of faces input
numFacesInput.addEventListener('input', () => {
    generateCustomFaceInputs(); // Update custom face inputs
    resetDice(); // Reset die state if number of faces changes
});

// Listen for changes in the dice mode (Standard/Custom) radio buttons
modeStandardRadio.addEventListener('change', () => {
    toggleCustomFacesContainer(); // Show/hide custom inputs
    resetDice(); // Reset die state if mode changes
});
modeCustomRadio.addEventListener('change', () => {
    toggleCustomFacesContainer(); // Show/hide custom inputs
    resetDice(); // Reset die state if mode changes
});

// Listen for clicks on the 'Roll Dice' button
rollDiceButton.addEventListener('click', rollDice);

// Listen for clicks on the 'Reset Dice' button
resetDiceButton.addEventListener('click', resetDice); // Initially hidden, but good to have listener

// Listener for the Elimination Mode checkbox
eliminationModeCheckbox.addEventListener('change', () => {
    resetDice(); // Reset die state if elimination mode is toggled
});

// Listener for changes in custom face inputs (dynamic inputs)
// We need to use event delegation because these inputs are added dynamically.
customFacesContainer.addEventListener('input', (event) => {
    if (event.target.tagName === 'INPUT' && eliminationModeCheckbox.checked) {
        // If an input within the custom faces container changes,
        // and elimination mode is active, reset the die.
        resetDice();
    }
});

// Initial setup when the page loads
toggleCustomFacesContainer(); // Set initial visibility of custom face inputs
resetDice(); // Initialize the die's state (available faces, etc.)