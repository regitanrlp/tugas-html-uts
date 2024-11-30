const items = document.querySelector('.carousel-items');
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');

let index = 0;

next.addEventListener('click', () => {
  index = (index + 1) % items.children.length;
  items.style.transform = `translateX(-${index * 100}%)`;
});

prev.addEventListener('click', () => {
  index = (index - 1 + items.children.length) % items.children.length;
  items.style.transform = `translateX(-${index * 100}%)`;
});

// Modal Foto
const modal = document.getElementById("photoModal");
const modalImg = document.getElementById("modalImage");
const captionText = document.getElementById("caption");
const closeModal = document.querySelector(".close");

// Ketika gambar diklik, tampilkan modal
document.querySelectorAll(".gallery-item img").forEach((img) => {
  img.addEventListener("click", (e) => {
    modal.style.display = "block";
    modalImg.src = e.target.src;
    captionText.innerHTML = e.target.alt;
  });
});

// Ketika tombol 'X' diklik, tutup modal
closeModal.addEventListener("click", () => {
  modal.style.display = "none";
});
