document.querySelectorAll('.flashcard').forEach(card => {
  card.addEventListener('click', () => {
    const inner = card.querySelector('.flashcard-inner');
    inner.style.transform = inner.style.transform === 'rotateY(180deg)' ? '' : 'rotateY(180deg)';
  });
});