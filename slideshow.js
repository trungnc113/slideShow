let indexSlide = 0;
showslide();
function showslide() {
  let i;
  let myslide = document.getElementsByClassName("myslide");
  for (i = 0; i < myslide.length; i++) myslide[i].style.display = "none";
  indexSlide++;
  if (indexSlide > myslide.length) indexSlide = 1;
  myslide[indexSlide - 1].style.display = "block";
  setTimeout(showslide, 2000);
}
