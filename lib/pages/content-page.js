import { renderNavigation } from '../components/navigation.js';
import { renderKeywords } from '../components/keywords.js';
import { el } from '../elements.js';

export function renderContentPage(root, indexJson, contentJson) {
  console.log('rendering content page', root, indexJson.title);

  const headerElement = el('header', {}, el('h1', {}, indexJson.title));

  headerElement.appendChild(renderNavigation(indexJson.navigation));

  const mainElement = el(
    'main',
    {},
    el(
      'section',
      {},
      el('p', {}, indexJson.description),
      renderKeywords(contentJson.keywords),
      renderNavigation(indexJson.navigation),
    ),
  );
  const footerElement = el('footer', {}, indexJson.footer);

  root.appendChild(headerElement);
  root.appendChild(mainElement);
  root.appendChild(footerElement);
}
