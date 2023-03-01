const submitBtn = document.getElementById('submit-btn');
const submitBtnText = document.querySelector('.left-elem');
const paperPlane = document.querySelector('.plane');
const loader = document.querySelector('.loading');
const exclaimation = document.querySelector('.exclaimation');
const check = document.querySelector('.check');
let form = document.getElementById('email-form');
const clearFormBtn = document.querySelector('.clear-btn');
const resetFormBtn = document.querySelector('.reset-btn');

const delay = 5000;

function resetForm() {
  form.reset();
}

// Test buttons
// Uncomment to test states ('fail', 'success', 'default')
// modifyBtn('success');

// Form submit & recaptcha

form.addEventListener('submit', function (event) {
  event.preventDefault();
  grecaptcha.reset();
  grecaptcha.execute();
});

function postForm(token) {
  console.log(token);
  modifyBtn('submitting');

  var params = {
    user_name: form.elements['name'].value,
    user_email: form.elements['email'].value,
    subject: form.elements['subject'].value,
    message: form.elements['message'].value,
    'g-recaptcha-response': token,
  };

  emailjs
    .send('service_q42ebsg', 'template_1fdyrau', params, '5jl6JNXBemLoWgQGo')
    .then(
      function () {
        modifyBtn('success');
        console.log('success');
      },
      function (error) {
        setTimeout(() => {
          modifyBtn('fail');
        }, 2000);

        // Refresh Button after timeout
        setTimeout(resetBtn, 5000);
        console.log('error', error);
      }
    );
}

// Button states

function modifyBtn(status) {
  // Hide submit icon
  paperPlane.setAttribute('data-active', 'false');
  clearFormBtn.style.display = 'none';
  // Submitting state
  if (status === 'submitting') {
    submitBtnText.innerHTML = 'Submitting...';
    loader.setAttribute('data-active', 'true');
  }
  //   Fail state
  if (status === 'fail') {
    loader.setAttribute('data-active', 'false');
    submitBtnText.innerHTML = 'Failed!';
    submitBtn.setAttribute('data-submit', 'fail');
    exclaimation.setAttribute('data-active', 'true');
  }
  //   Success state
  if (status === 'success') {
    loader.setAttribute('data-active', 'false');
    submitBtnText.innerHTML = 'Sent!';
    submitBtn.setAttribute('data-submit', 'success');
    check.setAttribute('data-active', 'true');
    setTimeout(() => {
      submitBtn.style.display = 'none';
      resetFormBtn.style.display = 'flex';
    }, delay);
  }
}

function resetBtn() {
  form.reset();
  // Reset submit button elements
  submitBtnText.innerHTML = `Submit`;
  submitBtn.setAttribute('data-submit', 'default');
  loader.setAttribute('data-active', 'false');
  paperPlane.setAttribute('data-active', 'true');
  exclaimation.setAttribute('data-active', 'false');
  check.setAttribute('data-active', 'false');
  // Reset clear buttons
  resetFormBtn.style.display = 'none';
  clearFormBtn.style.display = 'flex';
  submitBtn.style.display = 'flex';
}
