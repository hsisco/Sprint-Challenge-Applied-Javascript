// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.

const cards = document.querySelector('.cards-container');
let articles = {};

axios
.get('https://lambda-times-backend.herokuapp.com/articles')
.then( response => {
  articles = response.data.articles;
  console.log('ARTICLES', articles);
  console.log('CARDS', cards);

  Object.keys(articles).forEach(key => {
    articles[key].forEach(item => {
      console.log('ITEM', item);
      cards.appendChild(articleCard(item))
    });
  });
})
.catch(error => {
  console.log('Nope, try again.', error);
})

function articleCard(item) {
  const
    card = document.createElement('div'),
    headline = document.createElement('div'),
    author = document.createElement('div'),
    imgContainer = document.createElement('div'),
    img = document.createElement('img'),
    authorName = document.createElement('span');

  // STRUCTURE
  card.appendChild(headline);
  card.appendChild(author);
  author.appendChild(imgContainer);
  author.appendChild(authorName);
  imgContainer.appendChild(img);

  // CLASS NAMES
  card.classList.add('card');
  headline.classList.add('headline');
  imgContainer.classList.add('img-container');
  author.classList.add('author');

  // TEXT CONTENT
  headline.textContent = `${item.headline}`;
  img.src = item.authorPhoto;
  authorName.textContent = `${item.authorName}`;

    return card
};