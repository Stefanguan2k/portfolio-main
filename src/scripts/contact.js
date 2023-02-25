const submitBtn = document.getElementById('submit-btn');
const submitBtnText = document.querySelector('.left-elem');
const paperPlane = document.querySelector('.plane');
const loader = document.querySelector('.loading');
const exclaimation = document.querySelector('.exclaimation');
const check = document.querySelector('.check');
const form = document.getElementById('email-form');
const resetFormBtn = document.querySelector('.reset');
const btnContainer = document.querySelector('.button-container')

const delay = 5000;

function resetForm() {
  form.reset();
}

// modifyBtn('success');
// 'service_q42ebsg', 'template_1fdyrau'

emailjs.init('5jl6JNXBemLoWgQGo');

window.onload = function () {
  document
    .getElementById('email-form')
    .addEventListener('submit', function (event) {
      event.preventDefault();

      //   Modify button to loading state
      modifyBtn('submitting');

      emailjs.sendForm('asdf', 'asdf', this).then(
        function () {
          modifyBtn('success');
          setTimeout(resetBtn, delay);
          form.reset();
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
    });
};

function modifyBtn(status) {
  // Hide submit icon
  paperPlane.setAttribute('data-active', 'false');
  resetFormBtn.style.display = 'none';
  btnContainer.setAttribute('data-single', 'true');
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
}
}

function resetBtn() {
    submitBtnText.innerHTML = `Submit`;
    submitBtn.setAttribute('data-submit', 'default');
    loader.setAttribute('data-active', 'false');
    paperPlane.setAttribute('data-active', 'true');
    exclaimation.setAttribute('data-active', 'false');
    check.setAttribute('data-active', 'false');
    btnContainer.setAttribute('data-single', 'false');
  resetFormBtn.style.display = 'flex';
}
