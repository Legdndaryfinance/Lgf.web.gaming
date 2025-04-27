document.addEventListener('DOMContentLoaded', function() {
  // Get the hamburger menu and sidebar elements using ID selector
  const menuToggle = document.getElementById('menu-toggle');   // Use ID selector for menu toggle
  const sidebar = document.getElementById('sidebar');         // Use ID selector for sidebar

  // Add click event to hamburger menu to toggle the sidebar visibility
  menuToggle.addEventListener('click', function() {
    sidebar.classList.toggle('active');
  });
});
