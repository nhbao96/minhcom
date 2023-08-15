const form = document.getElementById('form');
const overlay = document.getElementById('overlay');
const content = document.getElementById('content');
const displayName = document.getElementById('display-name');
const sloganTag = document.getElementById('slogan');


const numberInput = document.getElementById('birthdate');
const errorText = document.getElementById('errorText');

numberInput.addEventListener('input', function() {
  const inputValue = parseFloat(numberInput.value);

  if (inputValue <= 0 || inputValue > 20) {  
    errorText.textContent = 'Số năm không hợp lệ';
    numberInput.setCustomValidity('Invalid input');
  } else {
    errorText.textContent = '';
    numberInput.setCustomValidity('');
  }
});

form.addEventListener('submit', function(event) {
  event.preventDefault();

  const screenWidth = window.innerWidth;
  const baseFontSize = 16; // Define your base font size here

  // Calculate the dynamic font size based on the screen width
  const fontSize = baseFontSize + screenWidth / 100;

  const username = document.getElementById('username').value;

  const birthdate = document.getElementById('birthdate').value; 
  overlay.style.display = 'none';
  content.style.display = 'block';
  displayName.textContent =  birthdate +" năm nhà thuốc  "+username;

  displayName.style.fontSize = fontSize;
  const h1Width = content.offsetWidth;
  const h1Height = content.offsetHeight;
  console.log("height = "+window.innerHeight);
  console.log(" displayName.offsetHeight = "+  displayName.offsetHeight  );
 
 // displayName.style.left =`${left}px`;
 // displayName.style.top = `${top}px`;


  top += (5 +h1Height);
  var slogan = "Thuốc gần nhà bà con trông cậy";
  switch(parseInt(birthdate))
  {  
    case 19:
      slogan = "Kinh nghiệm là kiêm chỉ nam của dược sĩ";
    break;
    case 18:
      slogan = "Vừa xinh thuốc lại mới tinh";
    break;
    case 17:
      slogan = "Khi bạn cần chúng tôi luôn ở gần";
    break;
    case 16:
      slogan = "Tăng trưởng mãnh liệt vì sự khác biệt";
    break;
    default:
      break;
  }
  sloganTag.textContent = `"${slogan}"`;
  sloganTag.style.fontSize = fontSize;
  left = (window.innerWidth - sloganTag.offsetWidth) / 2;

 var left = (window.innerWidth - h1Width) / 2;
 var top = (window.innerHeight - h1Height) / 2 - h1Height;
  content.style.boxShadow = "0px 0px 10px rgba(0, 0, 0, 0.2)";

  if(screenWidth < 768)
  {
    content.style.maxWidth = "90%";
    content.style.fontSize = "20px";      
  }
  content.style.fontWeight = "700px";   

});
