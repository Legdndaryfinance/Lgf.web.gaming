// main.js

document.addEventListener('DOMContentLoaded', function() {
  // Hamburger Menu Toggle
  const hamburger = document.querySelector('.hamburger-menu');
  const nav = document.querySelector('nav');
  
  hamburger.addEventListener('click', () => {
    nav.classList.toggle('active');
    hamburger.classList.toggle('active');
  });

  // Close menu when clicking outside
  document.addEventListener('click', (e) => {
    if (!nav.contains(e.target) && !hamburger.contains(e.target)) {
      nav.classList.remove('active');
      hamburger.classList.remove('active');
    }
  });

  // Tokenomics Chart Code
  const ctx = document.getElementById('tokenomicsChart')?.getContext('2d');
  if (ctx) {
    new Chart(ctx, {
      type: 'pie',
      data: {
        labels: [
          'Community (30%)',
          'Liquidity (25%)',
          'Team & Development (20%)',
          'Airdrop (15%)',
          'Marketing & Partner (10%)'
        ],
        datasets: [{
          data: [30, 25, 20, 15, 10],
          backgroundColor: [
            '#00ffd5',
            '#004e92',
            '#7b00ff',
            '#ff00aa',
            '#ffee00'
          ],
          borderColor: '#ffffff',
          borderWidth: 2
        }]
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            position: 'bottom',
            labels: {
              color: '#fff',
              font: {
                size: 14
              }
            }
          }
        }
      }
    });
  }
});
