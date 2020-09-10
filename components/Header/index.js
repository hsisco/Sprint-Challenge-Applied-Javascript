// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .header-container component

const headerContainer = document.querySelector('.header-container');

function mainHeader() {
  const
    header = document.createElement('div'),
    date = document.createElement('span'),
    LambdaTimes = document.createElement('h1'),
    temp = document.createElement('span');

  // STRUCTURE
  header.appendChild(date);
  header.appendChild(LambdaTimes);
  header.appendChild(temp);

  // CLASS NAMES
  header.classList.add('header');
  date.classList.add('spanDate');
  LambdaTimes.classList.add('h1');
  temp.classList.add('spanTemp');

  // TEXT CONTENT
  date.textContent = 'SMARCH 28, 2019';
  LambdaTimes.textContent = 'Lambda Times';
  temp.textContent = '98°';
  
  return header
};

headerContainer.appendChild(mainHeader());