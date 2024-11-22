import { el } from '../elements.js';

export function renderKeywords(keywords, onClickHandler) {

  const keywordsElement = el('ol', { class: 'keywords__list' });

  for (const item of keywords) {
    const { title, english , content } = item;

    let keywordTitle = el('h1',{},title);
    let keywordEnglish = el('h3',{},`${(english)? english : " "}`);
    let keywordcontent = el('p', {class: 'keywords__content hidden'},content);
    let keywordsDiv = el('div' , {class: 'keywords__flashCard'}, keywordTitle, keywordEnglish,keywordcontent );

    keywordsDiv.addEventListener('click', (e) => {
      if (!e) {
        return;
      }

      const contentDiv = e?.target?.parentElement?.querySelector('.keywords__content');
      contentDiv.classList.toggle('hidden');
    });

    let keywordItemElement = el('li',{ class: 'keywords__item' }, keywordsDiv);

    keywordsElement.appendChild(keywordItemElement);
  }

  return el('div', { class: 'keywords' }, keywordsElement);
}
