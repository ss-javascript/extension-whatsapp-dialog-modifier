(function(){
  WdmNotification.create("We're enabling edit mode for you...");

  var balloonsWithMessages = document.querySelectorAll('div.copyable-text');
  balloonsWithMessages.forEach(balloonInnerContent => {
    balloonInnerContent.setAttribute('contenteditable', 'true');
  });

  document.addEventListener('keypress', function(e){
    e.stopPropagation();
  }, true);
})();
