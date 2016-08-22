import 'app/controllers/main';
import mainView from 'app/views/main';

const root = document.body;
root.setAttribute('ng-app', 'MainModule');
root.setAttribute('ng-controller', 'MainCtrl');
root.appendChild(mainView);