import { el } from '../elements.js';

export function renderLectures(lectures, onClickHandler) {

  console.log("hi")

  let lecturesList = [];
  let lecturesElement = el('div', { class: 'lectures__list' } , " ");

  for (const lectureItem of lectures) {

    let lectureContentList = [el('h2' , {} , `${lectureItem.title}`)];


    for(const contentItem of lectureItem.content){
      switch (contentItem.type) {
        case "text":
          lectureContentList.push(el('p',{},`${contentItem.data}`));
          break;
        case "image":
          lectureContentList.push(el('img',{src: `/${contentItem.data}`}, el('figcaption',{class:"caption"}, contentItem.caption)));
          break;
        case "heading":
          lectureContentList.push(el('h3',{},`${contentItem.data}`));
          break;
        case "quote":
            lectureContentList.push(el('q',{},`${contentItem.data}`, el('figcaption',{class:"attribute"}, contentItem.attribute)));
            break;
        case "code":
            lectureContentList.push(el('code',{},`${contentItem.data}`));
          break;
        case "list":
            let contentList = [];
            for (const listItem of contentItem.data){
              contentList.push(el('li' , {} , listItem))
            }
            lectureContentList.push(el('ul',{class: "contentList"},`${contentItem.data}`, ...contentList ));
          break;
      }


         
    }

    lecturesList.push(el('div' , {class: "lectureContentList"} , ...lectureContentList))   

    
  }

  let lectureItemElement = el('div', {class: 'lectureItemElement'} , ...lecturesList )

  lecturesElement.appendChild(lectureItemElement);

  return el('div', { class: 'lectures' }, lecturesElement);
}
