function moveBar(direction) {
    const progressBar = document.getElementById("progress-bar");
    
    switch (direction) {
      case 'top':
        progressBar.style.transform = 'rotate(0deg)';
        break;
      case 'right':
        progressBar.style.transform = 'rotate(90deg)';
        break;
      case 'bottom':
        progressBar.style.transform = 'rotate(180deg)';
        break;
      case 'left':
        progressBar.style.transform = 'rotate(270deg)';
        break;
      default:
        progressBar.style.transform = 'rotate(0deg)';
    }
  }
  