const accordion = document.querySelectorAll('.accordion-header');

accordion.forEach(accordionHeader => {
  accordionHeader.addEventListener('click', () =>{

    if(accordionHeader.classList.contains('is-open')) {

      accordionHeader.classList.remove('is-open');

      accordionHeader.getElementsByClassName('accordion-svg')[0].setAttribute('d', 'M15 3.313A12.187 12.187 0 1 0 27.188 15.5 12.203 12.203 0 0 0 15 3.312Zm4.688 13.124h-3.75v3.75a.938.938 0 0 1-1.876 0v-3.75h-3.75a.938.938 0 0 1 0-1.875h3.75v-3.75a.938.938 0 0 1 1.876 0v3.75h3.75a.938.938 0 0 1 0 1.876Z');
      accordionHeader.getElementsByClassName('accordion-svg')[0].setAttribute('fill', '#AD28EB');
    }
    else {

      const accordionItemWithIsOpen = document.querySelectorAll('.is-open');

      accordionItemWithIsOpen.forEach(accordionItemWithIsOpen =>{
        accordionItemWithIsOpen.classList.remove('is-open');
      });

      accordionHeader.classList.add('is-open');
      
      accordionHeader.getElementsByClassName('accordion-svg')[0].setAttribute('d', 'M15 3.313A12.187 12.187 0 1 0 27.188 15.5 12.2 12.2 0 0 0 15 3.312Zm4.688 13.124h-9.375a.938.938 0 0 1 0-1.875h9.374a.938.938 0 0 1 0 1.876Z');
      accordionHeader.getElementsByClassName('accordion-svg')[0].setAttribute('fill', '#301534');
    }
  });
});
