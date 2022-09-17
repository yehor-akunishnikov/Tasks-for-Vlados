document.addEventListener('DOMContentLoaded', () => {
  const sizes = [1, 1.5, 2];
  const btn = document.querySelector('#toggle-size');
  const link = document.querySelector('#link');
  let i = 0;

  btn.addEventListener('click', () => {
    link.style = `font-size: ${sizes[i]}em`;

    if (i === 2) {
      i = 0;
      return;
    }

    i++;
  });
});
