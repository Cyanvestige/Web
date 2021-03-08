//Coding Challenge #1 from lecture 109
'use strict';
document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));

function change(textContent) {
  let tmpArr = textContent.split(' ');

  for (let t of tmpArr) {
    const [first, second] = t.trim().toLowerCase().split('_');
    let res = `${first}${second.replace(second[0], second[0].toUpperCase())}`;
    console.log(res);
  }
}
document.querySelector('button').addEventListener('click', () => {
  let textContent = document.querySelector('textarea').value;
  change(textContent);
});
