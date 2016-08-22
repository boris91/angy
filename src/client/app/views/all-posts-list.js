import item from 'app/views/all-posts-list-item';

const view = document.createElement('div');
view.setAttribute('ng-repeat', 'post in posts | orderBy: "-rating"');
view.appendChild(item);

export default view;