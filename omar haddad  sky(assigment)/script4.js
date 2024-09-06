// This variable will hold the current page index
let currentPage = 0; // Start from 0, corresponding to html4.html

// Set the active page by navigating to the correct HTML file
function setActivePage(pageNumber) {
    const buttons = document.querySelectorAll('.page-btn');
    
    // Update the current page
    currentPage = pageNumber;
    
    // Remove active class from all buttons
    buttons.forEach(button => button.classList.remove('active'));

    // Add active class to the current page button
    buttons[pageNumber + 1].classList.add('active'); // Offset by 1 for the arrow button

    // Navigate to the correct page
    switch (pageNumber) {
        case 0:
            window.location.href = 'html4.html';
            break;
        case 1:
            window.location.href = 'html4.2.html';
            break;
        case 2:
            window.location.href = 'html4.3.html';
            break;
    }
}

// Navigate to the previous page
function prevPage() {
    if (currentPage > 0) {
        setActivePage(currentPage - 1);
    }
}

// Navigate to the next page
function nextPage() {
    const totalPages = 3; // We have 3 pages (html4.html, html4.2.html, html4.3.html)
    if (currentPage < totalPages - 1) {
        setActivePage(currentPage + 1);
    }
}

// Set the initial active page when the page loads
document.addEventListener('DOMContentLoaded', function () {
    setActivePage(currentPage); // Load the first page
});