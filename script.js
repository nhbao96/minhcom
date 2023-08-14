const form = document.getElementById('form');
const overlay = document.getElementById('overlay');
const content = document.getElementById('content');
const displayName = document.getElementById('display-name');

form.addEventListener('submit', function(event) {
  event.preventDefault();
  
  const username = document.getElementById('username').value;
  const birthdate = document.getElementById('birthdate').value;

  overlay.style.display = 'none';
  content.style.display = 'block';
  displayName.textContent = username + ' - ' + birthdate;
});
