window.addEventListener('load', function(){
  var f = function(){
    $.ajax({
      type: 'GET',
      url: '/news/data'
    });
  };
  f();
});