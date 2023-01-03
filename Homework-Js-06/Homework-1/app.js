const paragraphs = document.querySelectorAll('p');
const headers = document.querySelectorAll('h1, h2, h3, h4, h5, h6');

paragraphs.forEach(function(paragraph) {
  paragraph.textContent = 'This is the new text for the paragraph';
});

headers.forEach(function(header) {
  header.textContent = 'This is the new text for the header';
});