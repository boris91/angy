const voteAgainst = document.createElement('button');
voteAgainst.innerText = '-';
voteAgainst.setAttribute('ng-click', 'voteAgainst(post)');

const ratingValue = document.createTextNode('{{(post.rating > 0 ? "+" : "") + post.rating}}');

const voteFor = document.createElement('button');
voteFor.innerText = '+';
voteFor.setAttribute('ng-click', 'voteFor(post)');

const emptySpace = document.createTextNode(' ');

const view = document.createElement('div');
view.appendChild(voteAgainst);
view.appendChild(emptySpace);
view.appendChild(ratingValue);
view.appendChild(emptySpace.cloneNode());
view.appendChild(voteFor);

export default view;