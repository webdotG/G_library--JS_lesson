const PICTURE_COUNT = 25;
const AVATAR_COUNT = 6;
const LIKE_MIN_COUNT = 15;
const LIKE_MAX_COUNT = 200;
const COMMENTS_COUNT = 20;
const COMMENTS_LINE = [
    'Всё отлично!',
    'В целом всё неплохо. Но не всё.',
    'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
    'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
    'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
    'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];
const DESCRIPTION = [
  'description 1',
  'description 2',
  'description 3',
  'description 4',
  'description 5',
  'description 6'
];

const NAMES = ['name1', 'name2', 'name3', 'name4', 'name5', 'name6'];

getRandomInteger = (min, max) => {
  const lower = Math.ceil(Math.min(Math.abs(min), Math.abs(max)));
  const upper = Math.floor(Math.max(Math.abs(min), Math.abs(max)));
  const result = Math.random() * (upper - lower + 1) + lower;

  return Math.floor(result);
};

getRandomArrayElement = (array) =>array[getRandomInteger(0, array.length-1)];

const createIdGenerator = () =>{
    let lastGenerateId = 0;

    return () => {
      lastGenerateId += 1;
      return lastGenerateId;
    };
  };

const generateCommentId = createIdGenerator();

const createMessage = () => Array.from({length:getRandomInteger(1,2)}, () =>
  getRandomArrayElement(COMMENTS_LINE) ).join(' ');

const createComment = () => (
  {
    id:generateCommentId(),
    avatar: `img/avatar-${getRandomInteger(1, AVATAR_COUNT)}.svg`,
    message: createMessage(),
    name: getRandomArrayElement(NAMES),
  }
);

const createPictrue = (index) => (
  {
  id: index,
  url: `photos/${index}.jpg`,
  description: getRandomArrayElement(DESCRIPTION),
  comments: Array.from({length: getRandomInteger(0, COMMENTS_COUNT)}, createComment),
}
);

const getPictures = () =>
  Array.from({length: PICTURE_COUNT}, (_, pictureIndex) =>
    createPictrue( pictureIndex + 1)
);
getPictures();
console.log(getPictures())
