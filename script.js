const movies = [
  {
    title: "Inception",
    description: "A thief who steals corporate secrets through dream-sharing technology.",
    image: "image1.png",
    trailer: "https://www.youtube.com/embed/YoHD9XEInc0",
    genre: "Sci-Fi"
  },
  {
    title: "Interstellar",
    description: "A team of explorers travel through a wormhole in space.",
    image: "image2.png",
    trailer: "https://www.youtube.com/embed/zSWdZVtXT7E",
    genre: "Sci-Fi"
  },
  {
    title: "The Dark Knight",
    description: "Batman faces the Joker, a criminal mastermind.",
    image: "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
    trailer: "https://www.youtube.com/embed/EXeTwQWrcwY",
    genre: "Action"
  },
  {
    title: "Avatar",
    description: "A marine on an alien planet becomes part of the Na'vi culture.",
    image: "https://image.tmdb.org/t/p/w500/kyeqWdyUXW608qlYkRqosgbbJyK.jpg",
    trailer: "https://www.youtube.com/embed/5PSNL1qE6VY",
    genre: "Sci-Fi"
  },
  {
    title: "Titanic",
    description: "A love story blossoms aboard the ill-fated Titanic.",
    image: "https://image.tmdb.org/t/p/w500/9xjZS2rlVxm8SFx8kPC3aIGCOYQ.jpg",
    trailer: "https://www.youtube.com/embed/kVrqfYjkTdQ",
    genre: "Romance"
  },
  {
    title: "Avengers: Endgame",
    description: "The Avengers assemble to undo the damage caused by Thanos.",
    image: "https://image.tmdb.org/t/p/w500/or06FN3Dka5tukK1e9sl16pB3iy.jpg",
    trailer: "https://www.youtube.com/embed/TcMBFSGVi1c",
    genre: "Action"
  },
  {
    title: "Avengers: Infinity War",
    description: "The Avengers fight to stop Thanos from collecting the Infinity Stones.",
    image: "https://image.tmdb.org/t/p/w500/7WsyChQLEftFiDOVTGkv3hFpyyt.jpg",
    trailer: "https://www.youtube.com/embed/6ZfuNTqbHE8",
    genre: "Action"
  },
  {
    title: "Iron Man",
    description: "Billionaire Tony Stark builds a suit of armor to fight evil.",
    image: "https://image.tmdb.org/t/p/w500/78lPtwv72eTNqFW9COBYI0dWDJa.jpg",
    trailer: "https://www.youtube.com/embed/8ugaeA-nMTc",
    genre: "Action"
  },
  {
    title: "Spider-Man: No Way Home",
    description: "Peter Parker seeks Doctor Strange’s help to restore his secret identity.",
    image: "https://image.tmdb.org/t/p/w500/1g0dhYtq4irTY1GPXvft6k4YLjm.jpg",
    trailer: "https://www.youtube.com/embed/JfVOs4VSpmA",
    genre: "Action"
  },
  {
    title: "Doctor Strange",
    description: "A surgeon becomes a sorcerer after a life-changing accident.",
    image: "https://image.tmdb.org/t/p/w500/uGBVj3bEbCoZbDjjl9wTxcygko1.jpg",
    trailer: "https://www.youtube.com/embed/HSzx-zryEgM",
    genre: "Fantasy"
  },
  {
    title: "Guardians of the Galaxy",
    description: "A group of intergalactic criminals band together to save the galaxy.",
    image: "https://image.tmdb.org/t/p/w500/r7vmZjiyZw9rpJMQJdXpjgiCOk9.jpg",
    trailer: "https://www.youtube.com/embed/d96cjJhvlMA",
    genre: "Sci-Fi"
  },
  {
    title: "Black Panther",
    description: "T’Challa returns home to rule Wakanda as the Black Panther.",
    image: "https://image.tmdb.org/t/p/w500/uxzzxijgPIY7slzFvMotPv8wjKA.jpg",
    trailer: "https://www.youtube.com/embed/xjDjIWPwcPU",
    genre: "Action"
  },
  {
    title: "Captain Marvel",
    description: "Carol Danvers becomes one of the universe’s most powerful heroes.",
    image: "https://image.tmdb.org/t/p/w500/AtsgWhDnHTq68L0lLsUrCnM7TjG.jpg",
    trailer: "https://www.youtube.com/embed/Z1BCujX3pw8",
    genre: "Sci-Fi"
  },
  {
    title: "Shang-Chi",
    description: "Shang-Chi confronts his past and the Ten Rings organization.",
    image: "https://image.tmdb.org/t/p/w500/1BIoJGKbXjdFDAqUEiA2VHqkK1Z.jpg",
    trailer: "https://www.youtube.com/embed/giWIr7U1deA",
    genre: "Action"
  },
  {
    title: "The Batman",
    description: "Batman uncovers corruption while pursuing the Riddler.",
    image: "https://image.tmdb.org/t/p/w500/74xTEgt7R36Fpooo50r9T25onhq.jpg",
    trailer: "https://www.youtube.com/embed/mqqft2x_Aa4",
    genre: "Action"
  },
  {
    title: "Joker",
    description: "A failed comedian becomes the infamous Joker.",
    image: "https://image.tmdb.org/t/p/w500/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg",
    trailer: "https://www.youtube.com/embed/zAGVQLHvwOY",
    genre: "Drama"
  },
  {
    title: "Frozen",
    description: "Princess Anna teams up to find her sister Elsa.",
    image: "https://image.tmdb.org/t/p/w500/kgwjIb2JDHRhNk13lmSxiClFjVk.jpg",
    trailer: "https://www.youtube.com/embed/TbQm5doF_Uc",
    genre: "Animation"
  },
  {
    title: "The Lion King",
    description: "Simba reclaims his place as king of the Pride Lands.",
    image: "https://image.tmdb.org/t/p/w500/2bXbqYdUdNVa8VIWXVfclP2ICtT.jpg",
    trailer: "https://www.youtube.com/embed/7TavVZMewpY",
    genre: "Animation"
  },
  {
    title: "Finding Nemo",
    description: "A clownfish searches for his missing son.",
    image: "https://image.tmdb.org/t/p/w500/eHuGQ10FUzK1mdOY69wF5pGgEf5.jpg",
    trailer: "https://www.youtube.com/embed/SPHfeNgogVs",
    genre: "Animation"
  },
  {
    title: "Toy Story",
    description: "Toys come to life when humans aren’t around.",
    image: "https://image.tmdb.org/t/p/w500/uXDfjJbdP4ijW5hWSBrPrlKpxab.jpg",
    trailer: "https://www.youtube.com/embed/v-PjgYDrg70",
    genre: "Animation"
  },
  {
    title: "The Notebook",
    description: "A young couple falls in love during the early years of World War II, facing challenges that test their bond over time.",
    image: "image3.png",
    trailer: "https://www.youtube.com/embed/FC6biTjEyZw",
    genre: "Romance"
  }

];

const movieContainer = document.getElementById("movie-container");
const modal = document.getElementById("trailer-modal");
const closeBtn = document.getElementById("close-btn");
const trailerVideo = document.getElementById("trailer-video");

// 🎬 Recommendation Section
const recommendationContainer = document.createElement("div");
recommendationContainer.id = "recommendations";
recommendationContainer.innerHTML = "<h2>More Like This</h2><div class='recommend-grid'></div>";
modal.querySelector(".modal-content").appendChild(recommendationContainer);

const recommendGrid = recommendationContainer.querySelector(".recommend-grid");

// Render Movies
function renderMovies(list) {
  movieContainer.innerHTML = "";
  list.forEach(movie => {
    const card = document.createElement("div");
    card.classList.add("movie-card");
    card.innerHTML = `
      <img src="${movie.image}" alt="${movie.title}">
      <h3>${movie.title}</h3>
      <p>${movie.description}</p>
      <button class="trailer-btn">Watch Trailer</button>
    `;
    card.querySelector(".trailer-btn").addEventListener("click", () => {
      playTrailer(movie);
    });
    movieContainer.appendChild(card);
  });
}
renderMovies(movies);

// Play trailer + show recommendations
function playTrailer(movie) {
  trailerVideo.src = movie.trailer + "?autoplay=1";
  modal.style.display = "block";

  // Show recommendations (same genre, exclude the selected movie)
  recommendGrid.innerHTML = "";
  const similarMovies = movies.filter(m => m.genre === movie.genre && m.title !== movie.title);
  similarMovies.forEach(rec => {
    const recCard = document.createElement("div");
    recCard.classList.add("rec-card");
    recCard.innerHTML = `<img src="${rec.image}" alt="${rec.title}"><p>${rec.title}</p>`;
    recCard.addEventListener("click", () => playTrailer(rec));
    recommendGrid.appendChild(recCard);
  });
}

// Close Modal
closeBtn.onclick = () => {
  modal.style.display = "none";
  trailerVideo.src = "";
};

window.onclick = (e) => {
  if (e.target == modal) {
    modal.style.display = "none";
    trailerVideo.src = "";
  }
};

// 🔎 Search Movies
const searchBar = document.getElementById("search-bar");
searchBar.addEventListener("input", (e) => {
  const query = e.target.value.toLowerCase();
  const filtered = movies.filter(movie => movie.title.toLowerCase().includes(query));
  renderMovies(filtered);
});

// Feedback Modal
const feedbackBtn = document.getElementById("feedback-btn");
const feedbackModal = document.getElementById("feedback-modal");
const closeFeedback = document.getElementById("close-feedback");
const feedbackForm = document.getElementById("feedback-form");

// Open feedback modal
feedbackBtn.addEventListener("click", () => {
  feedbackModal.style.display = "block";
});

// Close feedback modal
closeFeedback.addEventListener("click", () => {
  feedbackModal.style.display = "none";
});

// Close when clicking outside modal
window.addEventListener("click", (e) => {
  if (e.target === feedbackModal) {
    feedbackModal.style.display = "none";
  }
});

// Handle feedback form submit
feedbackForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  alert(`✅ Thanks ${name}! Your feedback has been received.`);

  // (Optional) send feedback to server here


  feedbackModal.style.display = "none";
  feedbackForm.reset();
});


