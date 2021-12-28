const paragraphs = document.getElementsByTagName("p");
console.log(paragraphs);

if (paragraphs.length > 0) {
  const paragraph = paragraphs[0];
  paragraph.innerText = "Bienvenidos de nuevo";
}
