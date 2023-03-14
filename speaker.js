export default function speaker() {
  const speakers = document.querySelector('.speakers');

  speakers.innerHTML += `
    <h2>Featured Speakers</h2>
                <hr class="short-rule hide2">

                <div class="speaker-card">
                    <div class="speaker-img">

                    <img src="./Assets/keynote_1.jpeg" alt="keynote_1" title="Yochai Benkler">
                    
                    </div>
                    <div class="speaker-info">
                        <h3>Yochai Benkler</h3>
                        <h4><em> Berkman Professor of Enterpreneurial Legal Studies at Harvard Law School </em></h4>
                        <hr>
                        <h5>Benkler studies commons-based peer production and published his seminal book: The Wealth of Networks in 2006.</h5>
                    </div>
                </div>

                <div class="speaker-card">
                    <div class="speaker-img">
                    
                    <img src="./Assets/keynote_2.jpeg" alt="keynote_2" title="SohYeong Noh">
                    
                    </div>
                    <div class="speaker-info">
                        <h3>SohYeong Noh</h3>
                        <h4><em> Director of Art center, Nabi, and a board member of CC Korea</em></h4>
                        <hr>
                        <h5>Asthe main venue for new media art production in Korea, Nabi promotes cross-disciplinary collaboration and understanding among science technology, humanities, and the arts.</h5>
                    </div>
                </div>

                <button id="more" type="button">MORE <i class="fa-solid fa-angle-down"></i></button>
    `;
}