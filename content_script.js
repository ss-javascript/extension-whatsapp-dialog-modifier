(function(){
  var balloonsWithMessages = document.querySelectorAll('div.copyable-text');
  balloonsWithMessages.forEach(balloonInnerContent => {
    balloonInnerContent.setAttribute('contenteditable', 'true');
  });

  document.addEventListener('keypress', function(e){
    e.stopPropagation();
  }, true);
})();
