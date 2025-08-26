const imgLinks = document.querySelectorAll('.img-link');
const container = document.querySelector('.container');
const expandedImgEl = document.getElementById('expandedImg');

imgLinks.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();

    const img = link.querySelector("img");
    const largeSrc = img.getAttribute('src').replace("thumb_", "");
    expandedImgEl.setAttribute('src', largeSrc);
    expandedImgEl.alt = img.alt;

    container.style.display = "block";
  });
});
