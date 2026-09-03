document.getElementById('ping').addEventListener('click', () => {
  document.getElementById('output').textContent = `Clicked at ${new Date().toLocaleTimeString()}`;
});
