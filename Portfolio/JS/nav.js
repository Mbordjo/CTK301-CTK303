const toggleButton = document.getElementById('toggle-btn')
const sidebar = document.getElementById('sidebar')


function toggleSidebar(){
    sidebar.classList.toggle('close');

    toggleButton.classList.toggle('rotate');

    // Change the menu icon
    const icon = toggleButton.querySelector('svg');

    if (sidebar.classList.contains('close')) {
        // Sidebar closed: show hamburger
        icon.innerHTML = '<path d="M3 18V16H21V18H3ZM3 13V11H21V13H3ZM3 8V6H21V8H3Z"/>';
    } else {
        // Sidebar open: show X
        icon.innerHTML = '<path d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z"/>';
    }

    closeAllSubMenus();
}



function toggleSubMenu(button) {

    // Find the dropdown containing the clicked button
    const dropdown = button.closest(".dropdown");

    // Find its submenu
    const submenu = dropdown.querySelector(".sub-menu");

    // Toggle the submenu visibility
    const isOpen = submenu.classList.toggle("show");

    // Rotate the dropdown arrow
    button.classList.toggle("rotate", isOpen);
}


function closeAllSubMenus(){
  Array.from(sidebar.getElementsByClassName('show')).forEach(ul => {
    ul.classList.remove('show')
    ul.previousElementSibling.classList.remove('rotate')
  })
}