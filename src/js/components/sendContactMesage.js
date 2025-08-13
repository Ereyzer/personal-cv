import apiService from '../services/api-service';

export const createSender = async () => {
  const contactModalFormRef = document.getElementById('contact-modal-form');

  contactModalFormRef.addEventListener('submit', e => {
    e.preventDefault();
    // TODO: cheeck if email
    const { name, email, message } = e.target.elements;

    apiService.sendEmail({
      name: name.value,
      email: email.value,
      text: message.value
    });
  });
};
