import { svgType } from '../utils/svg-type.js';

const classAccordionHeader = 'accordion-header'
const classIsOpen = 'is-open';
const classAccordionSVG = 'accordion-svg';

const dSvgPlus = 'M15 3.313A12.187 12.187 0 1 0 27.188 15.5 12.203 12.203 0 0 0 15 3.312Zm4.688 13.124h-3.75v3.75a.938.938 0 0 1-1.876 0v-3.75h-3.75a.938.938 0 0 1 0-1.875h3.75v-3.75a.938.938 0 0 1 1.876 0v3.75h3.75a.938.938 0 0 1 0 1.876Z';
const dSvgMinus = 'M15 3.313A12.187 12.187 0 1 0 27.188 15.5 12.2 12.2 0 0 0 15 3.312Zm4.688 13.124h-9.375a.938.938 0 0 1 0-1.875h9.374a.938.938 0 0 1 0 1.876Z';

const fillSvgPlus = '#AD28EB';
const fillSvgMinus = '#301534';

const accordion = document.querySelectorAll(`.${classAccordionHeader}`);


const changeSvg = (element, typeSvg) => {

  const svgElement = element.getElementsByClassName(classAccordionSVG)[0];

  if(typeSvg === svgType.svgMinus) {
    svgElement.setAttribute('d', dSvgMinus);
    svgElement.setAttribute('fill', fillSvgMinus);
  }
  if (typeSvg === svgType.svgPlus) {
    svgElement.setAttribute('d', dSvgPlus);
    svgElement.setAttribute('fill', fillSvgPlus);
  }
}

accordion.forEach(accordionHeader => {
  accordionHeader.addEventListener('click', () =>{

    const isOpen = accordionHeader.classList.contains(classIsOpen);

    if(isOpen) {
      accordionHeader.classList.remove(classIsOpen);
      changeSvg(accordionHeader, svgType.svgPlus);
    }
    else {

      const accordionItemWithIsOpen = document.querySelectorAll(`.${classIsOpen}`);

      accordionItemWithIsOpen.forEach(accordionItemWithIsOpen =>{
        accordionItemWithIsOpen.classList.remove(classIsOpen);
        changeSvg(accordionItemWithIsOpen, svgType.svgPlus);
      });

      accordionHeader.classList.add(classIsOpen);
      changeSvg(accordionHeader, svgType.svgMinus);
    }
  });
});
