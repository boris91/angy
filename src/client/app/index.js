import 'app/controllers/main';

const dataview = document.createElement('div');
dataview.innerHTML = '{{textToShow}}';

const root = document.body;
root.setAttribute('ng-app', 'MainModule');
root.setAttribute('ng-controller', 'MainCtrl');
root.appendChild(dataview);