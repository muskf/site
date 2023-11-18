document.addEventListener('DOMContentLoaded', function () {
  const titleElement = document.querySelector('.title');
  const introElement = document.getElementById('intro');

  titleElement.addEventListener('click', function () {
      if (!introElement.classList.contains('slide-out')) {
          introElement.classList.add('slide-out');
          introElement.classList.remove('slide-in');
          console.log('你干嘛哈哈哈哎哟');
      } else {
          introElement.classList.remove('slide-out');
          introElement.classList.add('slide-in');
      }
      
  });
});

function showPopup(){
    var overlay = document.getElementById("overlay");
    overlay.style.display = "block";
  }
  function hidePopup(){
    var overlay = document.getElementById("overlay");
    overlay.style.display = "none";
  }
