import speaker from './speaker.js';

speaker();

const hamburger = document.querySelector('.fa-bars, .fa-bars::before');
const modal = document.querySelector('.modal-menu');
const close = document.querySelector('.fa-xmark');

hamburger.addEventListener('click', () => {
  hamburger.style.display = 'none';
  modal.style.display = 'flex';
  modal.scrollIntoView();
});

close.addEventListener('click', () => {
  modal.style.display = 'none';
  hamburger.style.display = 'block';
});

const speakerarr = [
  {
    id: 1,
    image: './assets/keynote_1.jpeg',
    name: 'Yochai Benkler',
    designation: 'Berkman Professor of Enterpreneurial Legal Studies at Harvard Law School',
    milestone: 'Benkler studies commons-based peer production and published his seminal book: The Wealth of Networks in 2006.',
  },

  {
    id: 2,
    image: './assets/keynote_2.jpeg',
    name: 'SohYeong Noh',
    designation: 'Director of Art center, Nabi, and a board member of CC Korea',
    milestone: 'Asthe main venue for new media art production in Korea, Nabi promotes cross-disciplinary collaboration and understanding among science technology, humanities, and the arts.',
  },

  {
    id: 3,
    image: './assets/keynote_3.jpeg',
    name: 'Lila Tretikov',
    designation: 'Executive Director of the wikimedia foundation',
    milestone: 'Lila Tretikov is the Executive Director of the wikimedia foundation, the non-profit organisation that operates Wikipedia. Wikipedia is freely available in 290 languages and used by nearly half a billion people around the world every month.',
  },

  {
    id: 4,
    image: './assets/keynote_4.jpeg',
    name: 'Kilnam Chon',
    designation: '',
    milestone: 'Kilnam Chon helped bring the internet to Asia and is an outspoken advocate for the open web and digital commons. in 2012, he was inducted into the inaugural class of the internet society\'s (iSOC) Internet Hall of fame.',
  },

  {
    id: 5,
    image: './assets/keynote_5.jpeg',
    name: 'Julia Leda',
    designation: 'President of young pirates of Europe',
    milestone: 'European ingetration, political democracy and participation of youths through online as her major concern. Leda\'s report outlining potential changes to EU copyright law was approved by the parliament in July. ',
  },

  {
    id: 6,
    image: './assets/keynote_6.jpeg',
    name: 'Ryan Merkley',
    designation: 'CEO of creative commons, Ex-COO of the Mozilla foundation',
    milestone: 'Ryan had been leading open-source projects at the mozilla foundation such as the open-source movement.',
  },
];

const speakers = document.querySelector('.speakers');

const leftRight = document.createElement('div');
leftRight.className = 'left-right';

const leftDiv = document.createElement('div');
leftDiv.className = 'left-div';

const rightDiv = document.createElement('div');
rightDiv.className = 'right-div';

function generator(num) {
  const speakerCard = document.createElement('div');
  speakerCard.className = 'speaker-card';

  const speakerImg = document.createElement('div');
  speakerImg.className = 'speaker-img';
  speakerCard.appendChild(speakerImg);

  const speakerPix = document.createElement('img');
  speakerPix.src = speakerarr[num].image;
  speakerPix.alt = speakerarr[num].name;
  speakerPix.title = speakerarr[num].name;
  speakerImg.appendChild(speakerPix);

  const speakerInfo = document.createElement('div');
  speakerInfo.className = 'speaker-info';
  speakerCard.appendChild(speakerInfo);

  const speakerName = document.createElement('h3');
  speakerName.textContent = speakerarr[num].name;

  const speakerDesig = document.createElement('h4');
  speakerDesig.textContent = speakerarr[num].designation;

  const rule = document.createElement('hr');

  const speakermileStone = document.createElement('h5');
  speakermileStone.textContent = speakerarr[num].milestone;

  speakerInfo.append(speakerName, speakerDesig, rule, speakermileStone);

  speakers.appendChild(leftRight);

  if (num <= 2) {
    leftDiv.appendChild(speakerCard);
  } else {
    rightDiv.appendChild(speakerCard);
  }
}

const moreButton = document.querySelector('#more');

moreButton.addEventListener('click', () => {
  speakers.innerHTML = '';

  const title = document.createElement('h2');
  title.textContent = 'Featured Speakers';
  speakers.appendChild(title);

  const shortRule = document.createElement('hr');
  shortRule.className = 'short-rule hide';
  speakers.appendChild(shortRule);

  for (let i = 0; i < speakerarr.length; i += 1) {
    generator(i);
  }
  leftRight.appendChild(leftDiv);
  leftRight.appendChild(rightDiv);
});