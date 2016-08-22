import postRatingDiv from 'app/views/post-rating-div'

const postTitleDiv = document.createElement('div');
postTitleDiv.innerText = '{{post.title}}';

const view = document.createElement('div');
view.setAttribute('ng-repeat', 'post in posts | orderBy: "-rating"');
view.appendChild(postTitleDiv);
view.appendChild(postRatingDiv);

export default view;