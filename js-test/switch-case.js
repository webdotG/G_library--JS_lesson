const seasons = ['Лето','Осень','Весна','Зима', 'Дождь'];

const getCloth = (season) => {
    switch (season) {
        case 'Осень':
            return 'Зонт';
        case 'Зима':
            return 'Варежки';
        case 'Лето':
            return 'Майку';
        case 'Весна':
            return 'Плащ';
        default:
            return 'Непонятно :-(';
    }
};

const questionsContainer = document.querySelector('.questions');

seasons.forEach((season) => {
    questionsContainer.insertAdjacentHTML('beforeend', `— Что надеть, если сейчас ${season}?<br>`);
    questionsContainer.insertAdjacentHTML('beforeend', `— ${getCloth(season)}<br>`);
});
//-===================================================================================
const seasons = ['Лето','Осень','Весна','Зима', 'Дождь'];

const getCloth = (season) => {
    switch (season) {
        case 'Осень':
            return 'Зонт';
        case 'Зима':
            return 'Варежки';
        case 'Лето':
            return 'Майку';
        case 'Весна':
            return 'Плащ';
        default:
            throw new Error(`Неизвестное время года: «${season}»`);
    }
};

const questionsContainer = document.querySelector('.questions');

seasons.forEach((season) => {
    questionsContainer.insertAdjacentHTML('beforeend', `— Что надеть, если сейчас ${season}?<br>`);
    try {
        questionsContainer.insertAdjacentHTML('beforeend', `— ${getCloth(season)}<br>`);
    } catch (error) {
        questionsContainer.insertAdjacentHTML('beforeend', '— Непонятно :-(<br>');
    }
});

questionsContainer.insertAdjacentHTML('beforeend', '— А что в Муссон?<br>');

try {
    questionsContainer.insertAdjacentHTML('beforeend', `${getCloth('Муссон')}<br>`);
} catch (error) {
    questionsContainer.insertAdjacentHTML('beforeend', '— Непонятно :-(<br>');
}

/*
    Как обработать исключения?
    Показать ответ

    Чтобы обработать исключение, нужно потенциально небезопасный код или код, в котором мы сами при некоторых условиях бросаем исключения, обернуть конструкцией try...catch:

    // Что если имя не будет введено?
    const names = ['Keks', 'Bob', 'Marley', '', 'Jack'];

    function getName (name) {
      if (!name) {
        throw new Error('Имя неизвестно');
      }
      return `Привет, ${name}!`;
    };

    names.forEach((name) => {
      try {
        console.log(getName(name));
      } catch (error) {
        console.log('Введите имя') // В случае ошибки, попросим ввести имя
      }
    })

 */
