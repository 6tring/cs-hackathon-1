function replaceBackgroundImage() {
  const photo = document.querySelectorAll(".member-image");
  photo.forEach((el) => {
    el.style.backgroundImage = "url('https://www.codesmith.io/hubfs/Screen%20Shot%202024-12-03%20at%201.23.43%20PM.png')"
  })
}

if(document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", replaceBackgroundImage)
} else {
    replaceBackgroundImage()
}
