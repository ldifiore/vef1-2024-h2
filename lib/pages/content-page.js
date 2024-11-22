import { renderNavigation } from '../components/navigation.js';
import { renderKeywords } from '../components/keywords.js';
import { renderQuestions } from '../components/questions.js';
import { renderLectures } from '../components/lectures.js';
import { el } from '../elements.js';

export function renderContentPage(root, indexJson, contentJson) {
  console.log('rendering content page', root, indexJson.title);

  const headerElement = el('header', {}, el('h1', {}, indexJson.title));

  headerElement.appendChild(renderNavigation(indexJson.navigation));

  let content;

  if ("lectures" in contentJson){
    content = renderLectures(contentJson.lectures);
  }else if("keywords" in contentJson){
    content = renderKeywords(contentJson.keywords);
  }else if ("questions" in contentJson){
    content = renderQuestions(contentJson.questions);
  }

  const mainElement = el(
    'main',
    {},
    el(
      'section',
      {},
      el('p', {}, indexJson.description),
      content,
      renderNavigation(indexJson.navigation),
    ),
  );
  const footerElement = el('footer', {}, indexJson.footer);

  root.appendChild(headerElement);
  root.appendChild(el('h1' , {} , `${contentJson.title}`))
  root.appendChild(mainElement);
  root.appendChild(footerElement);
}
