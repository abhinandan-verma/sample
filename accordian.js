document.addEventListener('DOMContentLoaded', function() {
    const accordionItems = document.querySelectorAll('.accordion-item');
  
    accordionItems.forEach(item => {
      const btn = item.querySelector('.accordion-btn');
      const content = item.querySelector('.accordion-content');
      btn.addEventListener('click', function() {
        content.classList.toggle('show');
        btn.querySelector('.chevron').classList.toggle('rotate');
      });
    });
  });
