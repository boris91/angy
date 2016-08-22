const newPostTitleText = document.createElement('input');
newPostTitleText.setAttribute('type', 'text');
newPostTitleText.setAttribute('ng-model', 'newPostTitle');

const submitNewPostButton = document.createElement('button');
submitNewPostButton.setAttribute('type', 'submit');
submitNewPostButton.innerText = 'New post';

const view = document.createElement('form');
view.setAttribute('ng-submit', 'addPost()');
view.appendChild(newPostTitleText);
view.appendChild(submitNewPostButton);

export default view;