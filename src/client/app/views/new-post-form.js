const title = document.createElement('input');
title.setAttribute('type', 'text');
title.setAttribute('placeholder', 'Title');
title.setAttribute('ng-model', 'title');

const link = document.createElement('input');
link.setAttribute('type', 'text');
link.setAttribute('placeholder', 'Link');
link.setAttribute('ng-model', 'link');

const submit = document.createElement('button');
submit.setAttribute('type', 'submit');
submit.innerText = 'New post';

const view = document.createElement('form');
view.setAttribute('ng-submit', 'addPost()');
view.appendChild(title);
view.appendChild(link);
view.appendChild(submit);

export default view;