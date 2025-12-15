function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")
  //tag img
  const img = document.querySelector("#profile img")
  //substituir a img
  if (html.classList.contains("light")) {
    //se tiver light mode adiciona imagem light
    img.setAttribute("src", "./assets/avatar-light.png")
  } else {
    //se tiver sem light mode adiciona imagem normal
    img.setAttribute("src", "./assets/avatar.png")
  }
}
