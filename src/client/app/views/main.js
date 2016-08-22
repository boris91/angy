import newPostForm from 'app/views/new-post-form';
import allPostsList from 'app/views/all-posts-list';

const view = document.createElement('div');
view.appendChild(newPostForm);
view.appendChild(allPostsList);

export default view;