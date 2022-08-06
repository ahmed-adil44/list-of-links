/* paste the JavaScript code from the 'Generated Code' section of the CYF Blocks editor here */
var links;

function getNumberOrString(value) {
  // Convert a string value to a number if possible
  let number_value = Number(value);
  if (Number.isNaN(number_value)) {
    return value
  } else {
    return number_value
  }
}


links = 0;


document.getElementById('button').addEventListener('click', (event) => {
  let element_input = document.getElementById('input');
  links = getNumberOrString(document.getElementById('input').value);
  while (true) {
    if(--window.LoopTrap <= 0) throw "Infinite loop.";
    if (links == 1) {
      let element_show = document.getElementById('show');
      let new_li = document.createElement('li');
      let new_a = document.createElement('a');
      new_a.setAttribute("href", 'https://en-gb.facebook.com/');
      new_a.innerText = 'Facebook';

      new_li.appendChild(new_a);

      element_show.appendChild(new_li);
    } else if (links == 2) {
      let element_show2 = document.getElementById('show');
      let new_li2 = document.createElement('li');
      let new_a2 = document.createElement('a');
      new_a2.setAttribute("href", 'https://twitter.com/?lang=en-gb');
      new_a2.innerText = 'twitter';

      new_li2.appendChild(new_a2);

      element_show2.appendChild(new_li2);
    } else if (links == 3) {
      let element_show3 = document.getElementById('show');
      let new_li3 = document.createElement('li');
      let new_a3 = document.createElement('a');
      new_a3.setAttribute("href", 'https://www.instagram.com/');
      new_a3.innerText = 'Instagram';

      new_li3.appendChild(new_a3);

      element_show3.appendChild(new_li3);
    } else {
      let element_show4 = document.getElementById('show');
      element_show4.innerText = 'invalid number please enter 1,2 or 3';
    }
    let element_input2 = document.getElementById('input');
    links = getNumberOrString(document.getElementById('text').value);
  }

});
