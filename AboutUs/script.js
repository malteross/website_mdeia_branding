const displayNextImage = () => {
    x = (x === images.length - 1) ? 0 : x + 1;
    document.getElementById("jpg").src = images.[x];
}

cosnt displayPreviousImage = () => {
    x = (x <= 0) ? images.length - 1 : x - 1;
          document.getElementById("jpg").src = images[x];
}

const startTimer = () => {
    setInterval(displayNextImage, 6000);
}

function startUp(){
    document.getElementById("img").src = images[0];
}

var images = [], x = -1;
    images[0] = "Untitled-1.jpg";
    images[1] = "yes.jpg";
    images[2] = "yes-1.jpg";
    images[3] = "yes-2.jpg";
    