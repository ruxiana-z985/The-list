//elements declaration
const quargle = document.querySelector('.quargle');
const verse = document.querySelector('.verse');
const headerTabs = document.querySelector('.header-browser-tabs');
const img = document.querySelector('.computer-screen');
const monitor = document.querySelector('.overlay_moniter');


  function updateImageSrc() {
    if (window.innerWidth <= 700) {
      img.src = '../../assets/versehunt_assets/4122497_89346.jpg'; // Replace with your small screen image path
      monitor.style.left = "16.81%";
      monitor.style.top = "13.45%";
      monitor.style.height = "74.11%";
      monitor.style.width = "66.64%";



    } else {
      img.src = '../../assets/versehunt_assets/screen3.jpg'; // Replace with your default image path
      monitor.style.left = "19.08%";
      monitor.style.top = "23.96%";
      monitor.style.height = "61.80%";
      monitor.style.width = "62.05%";
    }
  }

  // Run on load
  updateImageSrc();

  // Run on resize
  window.addEventListener('resize', updateImageSrc);