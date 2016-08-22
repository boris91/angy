const postVoteAgainstButton = document.createElement('button');
postVoteAgainstButton.innerText = '-';
postVoteAgainstButton.setAttribute('ng-click', 'voteAgainst(post)');

const postRatingValueNode = document.createTextNode('{{(post.rating > 0 ? "+" : "") + post.rating}}');

const postVoteForButton = document.createElement('button');
postVoteForButton.innerText = '+';
postVoteForButton.setAttribute('ng-click', 'voteFor(post)');

const view = document.createElement('div');
view.appendChild(postVoteAgainstButton);
view.appendChild(postRatingValueNode);
view.appendChild(postVoteForButton);

export default view;