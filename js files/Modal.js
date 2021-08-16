// Get the modal
var modal = document.getElementById("myModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption

/*var img = document.getElementById("myImg");*/
var img = document.getElementsByClassName('square');
var modalImg = document.getElementById("img01"); //captures given image where we want modal
var captionText = document.getElementById("caption");

// Go through all of the images with our custom class
for (var i = 0; i < img.length; i++) {
  var imgList = img[i];
  // and attach our click listener for this image.
  imgList.onclick = function(evt) {
    console.log(evt);
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
  }
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}
