console.log('wdm-notification');

var WdmNotification = {};

WdmNotification.create = function(message, type) {
  message = message || '';
  type = type || 'success';

  var body = document.querySelector('body');
  if (body.style.position !== 'relative') {
    body.style.position = 'relative';
  }

  var container = document.createElement('div');
      container.className = 'wdm-notification wdm-notification__container wdm-notification--' + type;

  var message = document.createElement('span');
      message.className = 'wdm-notification wdm-notification__message';

  var text = document.createTextNode(message);

  message.appendChild(text);
  container.appendChild(message);
  body.appendChild(container);

  setTimeout(function(){
    //container.remove();
  }, 10000);
}