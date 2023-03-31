import {getPictures} from './data.js';
//ищу template а в нем контент ищу именно так потому что то что лежит в теге template не видно ни для кого
//добраться до еонтента в temoplate можно только так
const thumbnailTemplate = document.querySelector('#picture').content.querySelector('.picture');

//функция для создания нескольких миниатю фото
const createThumbnail = (picture) => {
    //создаю переменную для создания одной миниатюры в неё клонирую содержимое template
    const thumbnail = thumbnailTemplate.cloneNode(true);

    //подставляю значения из обьекта в шаблон template
    thumbnail.querySelector('.picture__img').src = picture.url;
    thumbnail.querySelector('.picture__img').alt = picture.description;
    thumbnail.querySelector('.picture__comments').textContent = picture.comments.length;
    thumbnail.querySelector('.picture__likes').textContent = picture.likes;

    return thumbnail;
};

const renderThumbnails = (pictures) => {

    const fragment = document.createDocumentFragment();
    pictures.forEach((picture) => {
        const thumbnail = createThumbnail(picture);
        fragment.append(thumbnail);
    });

    container.append(fragment);
};

export {renderThumbnails};

//-------------------------------------------------------------------------------------
import {getPictures} from './data.js';
//ищу template а в нем контент ищу именно так потому что то что лежит в теге template не видно ни для кого
//добраться до еонтента в temoplate можно только так
const thumbnailTemplate = document.querySelector('#picture').content.querySelector('.picture');

//функция для создания нескольких миниатю фото
const createThumbnail = ({comments, url, description, likes}) => {
    //создаю переменную для создания одной миниатюры в неё клонирую содержимое template
    const thumbnail = thumbnailTemplate.cloneNode(true);

    //подставляю значения из обьекта в шаблон template
    thumbnail.querySelector('.picture__img').src = url;
    thumbnail.querySelector('.picture__img').alt = description;
    thumbnail.querySelector('.picture__comments').textContent = comments.length;
    thumbnail.querySelector('.picture__likes').textContent = likes;

    return thumbnail;
};

const renderThumbnails = (pictures) => {

    const fragment = document.createDocumentFragment();
    pictures.forEach((picture) => {
        const thumbnail = createThumbnail(picture);
        fragment.append(thumbnail);
    });

    container.append(fragment);
};

export {renderThumbnails};

