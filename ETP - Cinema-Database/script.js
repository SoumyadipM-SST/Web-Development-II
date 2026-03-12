// Variables:
let headerWrapper = document.querySelector(".header-wrapper");
let siteTitle = document.getElementById("site-title");
let btn = document.querySelector(".search-btn");
let movieInput = document.getElementById("movie-input");
let yearBox = document.getElementById("year-input");
let langSelect = document.getElementById("language-input");
let resultsDiv = document.querySelector(".output");
let regionSelect = document.getElementById("region-input");
let popup = document.getElementById("trailer-modal");
let vidBox = document.getElementById("trailer-container");
let closeBtn = document.querySelector(".close-modal");
const myKey = '1f1700f8af14a645c979f73c9e8612fc';
const url = 'https://api.themoviedb.org/3';
const imgUrl = 'https://image.tmdb.org/t/p/w500';
const bgUrl = 'https://image.tmdb.org/t/p/original';


// Refresh or Back to the Home-Page:
siteTitle.addEventListener("click", () => {
    movieInput.value = "";
    yearBox.value = "";
    langSelect.value = "";

    headerWrapper.classList.remove("shrink");
    headerWrapper.classList.remove("search-active");

    resultsDiv.innerHTML = "";

    window.scrollTo({ top: 0, behavior: 'smooth' });
});


// Searching:
movieInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") btn.click();
});

btn.addEventListener('click', async () => {
    let movieName = movieInput.value.trim();
    let yearVal = yearBox?.value || '';
    let regionVal = regionSelect?.value || '';
    let langVal = langSelect?.value || '';

    headerWrapper.classList.add("search-active");

    if (movieName == "") return;

    headerWrapper.classList.add("shrink");

    resultsDiv.innerHTML = `<div class="center-message">Loading...</div>`;

    try {
        let searchUrl = `${url}/search/movie?api_key=${myKey}&query=${encodeURIComponent(movieName)}`;
        
        if (yearVal) searchUrl += `&primary_release_year=${yearVal}`;
        if (regionVal) searchUrl += `&region=${regionVal}`;

        let req = await fetch(searchUrl);
        let data = await req.json();
        let movies = data.results;
        if (langVal && movies.length > 0) {
            movies = movies.filter(m => m.original_language === langVal);
        }
        if (movies && movies.length > 0) {
            getMovieInfo(movies[0].id);
        } else {
            resultsDiv.innerHTML = `<p class="center-message">Can't find that movie. Try again!</p>`;
        }
    } catch (e) {
        console.log("Error during search:", e);
        resultsDiv.innerHTML = `<p class="center-message">Something went wrong...</p>`;
    }
});


// Fetching Movie details:
async function getMovieInfo(id) {
    try {
        let fullUrl = `${url}/movie/${id}?api_key=${myKey}&append_to_response=credits,videos,recommendations`;
        let res = await fetch(fullUrl);
        let movieData = await res.json();
        
        drawPage(movieData);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    } catch (e) {
        console.log("Error getting details:", e);
    }
}

function drawPage(m) {
    let trailer = m.videos?.results.find(v => v.type === 'Trailer' && v.site === 'YouTube');
    let money = (num) => num > 0 ? `$${(num / 1000000).toFixed(1)}M` : "N/A";
    let date = m.release_date ? m.release_date.split('-')[0] : "N/A";
    let bdrop = m.backdrop_path ? `${bgUrl}${m.backdrop_path}` : '';
    let poster = m.poster_path ? `${imgUrl}${m.poster_path}` : 'https://via.placeholder.com/500';

    resultsDiv.innerHTML = `
        <div class="hero-section" style="padding-top: 50px; background-image: linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.9)), url('${bdrop}')">
            <div class="glass-card">
                <img src="${poster}" class="poster-img">
                <div class="info">
                    <div class="badge-row">
                        <span class="status-badge">${m.status}</span>
                        <span class="rating-badge">⭐ ${m.vote_average.toFixed(1)}</span>
                    </div>
                    <h1>${m.title}</h1>
                    <p class="tagline">${m.tagline ? `"${m.tagline}"` : ""}</p>
                    <p class="meta">${date} • ${m.runtime || '??'} mins • Pop: ${Math.round(m.popularity)}</p>
                    
                    <div class="genre-chips">
                        ${m.genres.map(g => `<span>${g.name}</span>`).join('')}
                    </div>

                    <p class="description">${m.overview || "No plot info."}</p>
                    
                    <p class="cast"><strong>Stars:</strong> ${m.credits.cast.slice(0, 5).map(c => c.name).join(', ')}</p>

                    <div class="stats-grid">
                        <div><small>Budget</small><p>${money(m.budget)}</p></div>
                        <div><small>Revenue</small><p>${money(m.revenue)}</p></div>
                        <div><small>Lang</small><p>${m.spoken_languages[0]?.english_name || 'N/A'}</p></div>
                    </div>

                    <div class="button-group">
                        ${trailer ? `<button class="play-btn" onclick="playTrailer('${trailer.key}')">▶ Watch Trailer</button>` : ''}
                    </div>
                </div>
            </div>
        </div>

        <div class="related-section">
            <h2>Recommendations</h2>
            <div class="related-grid">
                ${m.recommendations.results.slice(0, 8).map(r => `
                    <div class="related-card" onclick="getMovieInfo(${r.id})">
                        <img src="${imgUrl}${r.poster_path}" onerror="this.src='https://via.placeholder.com/150'">
                        <div class="related-info">
                            <h4>${r.title}</h4>
                            <span>⭐ ${r.vote_average.toFixed(1)}</span>
                        </div>
                    </div>
                `).join('')}
            </div>
        </div>
    `;
}


// Play Trailer in modal:
window.playTrailer = (key) => {
    vidBox.innerHTML = `
        <iframe width="100%" height="100%" 
            src="https://www.youtube.com/embed/${key}?autoplay=1" 
            frameborder="0" allow="autoplay; encrypted-media" allowfullscreen>
        </iframe>`;
    popup.style.display = "flex";
    document.body.style.overflow = "hidden";
}

let closePopup = () => {
    popup.style.display = "none";
    vidBox.innerHTML = "";
    document.body.style.overflow = "auto";
}

closeBtn.onclick = closePopup;
window.onclick = (e) => { if (e.target == popup) closePopup(); };
