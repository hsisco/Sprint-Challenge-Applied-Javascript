// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
// The tab component should look like this:
//    <div class="tab">topic here</div>

const tabs = document.querySelector('.tabs');
const topics = document.querySelector('.topics');
const title = document.querySelector('.title');
let topicsArr = [];

function createTab(i){
  const tab = document.createElement('div');
    tab.classList.add('tab');
    tab.textContent = i;
  console.log(i)
  return tab;
};


axios
.get(`https://lambda-times-backend.herokuapp.com/topics`)
.then (response => {
  topicsArr = response.data.topics;
  topicsArr.unshift('all');
  console.log(topicsArr);
  console.log(tabs);
  topicsArr.forEach(i => {
    topics.appendChild(createTab(i));
  })})
.catch (error => {
  console.log('Nope...thats not right.', error)})