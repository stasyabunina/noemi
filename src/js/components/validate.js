const asideValidation = new JustValidate('.subscribe', {
  successFieldCssClass: 'is-valid',
  errorFieldCssClass: 'is-invalid',
  errorLabelCssClass: 'is-label-invalid',
  errorLabelStyle: {
    color: '#F06666',
  },
});

asideValidation
  .addField('#email', [
    {
      rule: 'required',
      errorMessage: 'Вы не ввели e-mail',
    },
    {
      rule: 'email',
      errorMessage: 'Пожалуйста, введите действительный e-mail',
    },
  ])
