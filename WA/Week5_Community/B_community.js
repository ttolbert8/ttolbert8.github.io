//Nav

let menu = false;

const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-menu');

function showMenu() {
    var shown = navMenu.classList.toggle("show");
    navMenu.classList.toggle("hide");

    if(shown) {
        navToggle.setAttribute("aria-expanded", "true");
    }

    else {
        navToggle.setAttribute("aria-expanded", "false");
    }
}
navToggle.addEventListener("click", showMenu);

//HomePage
const filterButtons_schedule = document.querySelectorAll('.schedule-filter button');
const Schedules = document.querySelectorAll('.team-schedule');
const select = document.querySelectorAll('.select')

window.addEventListener('DOMContentLoaded', () => {
    Schedules.forEach(card => {
      card.style.display = 'none';
    });
    selectMessage.style.display = 'block';
  });

// Add click event to each button
filterButtons_schedule.forEach(button => {
  button.addEventListener('click', (event) => {
    const filterValue = event.target.textContent.toLowerCase();
    filterSchedule(filterValue);
  });
});

function filterSchedule(category) {
    Schedules.forEach(card => {
      if (category === 'all' || card.dataset.category === category) {
        card.style.display = 'block';
      } else {
        card.style.display = 'none';
      }
    });
  }
  Schedules.forEach(card => {
    if (category === 'all' || card.dataset.category === category) {
      card.style.display = 'block';
      anyVisible = true;
    } else {
      card.style.display = 'none';
    }
  });

  if (!anyVisible) {
    selectMessage.style.display = 'block';
  } else {
    selectMessage.style.display = 'none';
  }

//Gallery

// Get all filter buttons and photo cards
const filterButtons = document.querySelectorAll('.filter-buttons button');
const photoCards = document.querySelectorAll('.Picture');

// Add click event to each button
filterButtons.forEach(button => {
  button.addEventListener('click', (event) => {
    const filterValue = event.target.textContent.toLowerCase();
    filterPhotos(filterValue);
  });
});

function filterPhotos(category) {
    photoCards.forEach(card => {
      if (category === 'all' || card.dataset.category === category) {
        card.style.display = 'block';
      } else {
        card.style.display = 'none';
      }
    });
  }