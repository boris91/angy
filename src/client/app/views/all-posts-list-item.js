import rating from 'app/views/post-rating';

const link = document.createElement('a');
link.setAttribute('ng-show', 'post.link');
link.setAttribute('href', '{{post.link}}');
link.innerText = '{{post.title}}';

const title = document.createElement('div');
title.setAttribute('ng-hide', 'post.link');
title.innerText = '{{post.title}}';

const view = document.createElement('div');
view.appendChild(link);
view.appendChild(title);
view.appendChild(rating);

export default view;