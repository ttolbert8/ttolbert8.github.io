// Experience Button Toggle

const toggles = document.querySelectorAll(".experienceHeader");

toggles.forEach((btn) => {
  btn.addEventListener("click", () => {
    const container = btn.closest(".experienceActive");
    container.classList.toggle("active");
  });
});

// Displays Most Recent Track Player

const USER = "ttolbert8";
const API_KEY = "6d099a4f7b08ef6a659402ebae95b044";

// Calls API 

async function loadRecentTracks() {
  const url = `https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=${USER}&api_key=${API_KEY}&format=json`;

  const response = await fetch(url);
  const data = await response.json();

  // Slices to select only the three most recent songs
  const tracks = data.recenttracks.track.slice(0, 3);

  const container = document.getElementById("songs");
  container.innerHTML = "";

// Loop to get data for each song
  tracks.forEach(track => {
    const name = track.name;
    const artist = track.artist["#text"];
    const image = track.image[2]["#text"];

// Appends data into HTML
    const html = `
      <div class="song">
        <img class="songArt spinning" src="${image}" alt="album cover">
        <div class="songInformation">
          <div class="songTitle"><strong>${name}</strong></div>
          <div class="songArtist">${artist}</div>
        </div>
      </div>
    `;
        
  container.insertAdjacentHTML("beforeend", html);

  });

}

loadRecentTracks();
