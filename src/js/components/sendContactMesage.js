import apiService from '../services/api-service';

export const createSender = async () => {
  const contactModalFormRef = document.getElementById('contact-modal-form');
  const closeBtn = document.querySelector('[modal-contact-button]');

  contactModalFormRef.addEventListener('submit', e => {
    e.preventDefault();
    // TODO: cheeck if email
    const { name, email, message } = e.target.elements;
    if (valid(email)) return;

    apiService.sendEmail({
      name: name.value,
      email: email.value,
      text: message.value
    });
    closeBtn.click();
  });
};

function valid (email) {
  const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return pattern.test(email);
}
