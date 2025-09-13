// Part 2: JavaScript Functions - Scope, Parameters, Return Values
// Part 3: Combining CSS Animations with JavaScript

// Global scope variable to track modal state
let isModalOpen = false;

// Function to toggle card flip with parameter for card element
function toggleCardFlip(cardElement) {
    // Local scope variable
    const isFlipped = cardElement.classList.contains('flipped');
    
    // Toggle the flipped class
    cardElement.classList.toggle('flipped');
    
    // Return new state
    return !isFlipped;
}

// Function to show modal with animation
function showModal(modalElement) {
    if (!isModalOpen) {
        modalElement.style.display = 'flex';
        isModalOpen = true;
        return true; // Return success
    }
    return false; // Modal already open
}

// Function to close modal with animation
function closeModal(modalElement) {
    if (isModalOpen) {
        // Add closing class for animation
        modalElement.classList.add('closing');
        
        // Remove display after animation completes
        setTimeout(() => {
            modalElement.style.display = 'none';
            modalElement.classList.remove('closing');
            isModalOpen = false;
        }, 500); // Match animation duration
        
        return true; // Return success
    }
    return false; // Modal already closed
}

// Function to initialize event listeners (reusable)
function initializeInteractions(cardSelector, modalSelector, flipBtnSelector, showModalBtnSelector, closeModalBtnSelector) {
    const card = document.querySelector(cardSelector);
    const modal = document.querySelector(modalSelector);
    const flipButton = document.querySelector(flipBtnSelector);
    const showModalButton = document.querySelector(showModalBtnSelector);
    const closeModalButton = document.querySelector(closeModalBtnSelector);
    
    // Event listener for flip button
    flipButton.addEventListener('click', () => {
        const flipped = toggleCardFlip(card);
        console.log(`Card flipped: ${flipped}`);
    });
    
    // Event listener for showing modal
    showModalButton.addEventListener('click', () => {
        const modalShown = showModal(modal);
        console.log(`Modal shown: ${modalShown}`);
    });
    
    // Event listener for closing modal
    closeModalButton.addEventListener('click', () => {
        const modalClosed = closeModal(modal);
        console.log(`Modal closed: ${modalClosed}`);
    });
}

// Initialize the interactions when the DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    initializeInteractions(
        '.card',
        '#modal',
        '.flip-button',
        '.show-modal',
        '.close-modal'
    );
});