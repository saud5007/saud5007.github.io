// إضافة تأثير عند الضغط على زر "أضف للسلة"
const buttons = document.querySelectorAll('button');

buttons.forEach(button => {
  button.addEventListener('click', () => {
    alert('تم إضافة المنتج إلى السلة!');
  });
});