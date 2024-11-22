import { el } from '../elements.js';

export function renderQuestions(questions, onClickHandler) {

  const questionsElement = el('ol', { class: 'questions__list' });

  for (const item of questions) {
    const { title, english , content } = item;

    let questionTitle = el('h2',{class: 'questions__title '},title);
    let questionEnglish = el('h3',{class: 'questions__english '},`${(english)? english : " "}`);
    let questioncontent = el('p', {class: 'questions__content hidden'},content);
    let questionsDiv = el('div' , {class: 'questions__flashCard'}, questionTitle, questionEnglish,questioncontent );

    questionsDiv.addEventListener('click', (e) => {
      if (!e) {
        return;
      }

      const titleDiv = e?.target?.parentElement?.querySelector('.questions__title');
      titleDiv.classList.toggle('hidden');
      const englishDiv = e?.target?.parentElement?.querySelector('.questions__english');
      englishDiv.classList.toggle('hidden');
      const contentDiv = e?.target?.parentElement?.querySelector('.questions__content');
      contentDiv.classList.toggle('hidden');
    });

    let questionItemElement = el('li',{ class: 'questions__item' }, questionsDiv);

    questionsElement.appendChild(questionItemElement);
  }

  return el('div', { class: 'questions' }, questionsElement);
}
