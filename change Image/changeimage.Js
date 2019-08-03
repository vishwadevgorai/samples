function changeImage() {
  var image = document.getElementById('Image');
  if (image.src.match("on.jpg")) {
    image.src = "/change Image/off.jpg";
  } else {
    image.src = "/change Image/on.jpg";
  }
}