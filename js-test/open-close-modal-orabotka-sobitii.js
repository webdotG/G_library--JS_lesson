
const userModalElement = document.querySelector('.setup');
const userModalOpenElement = document.querySelector('.setup-open');
const userModalCloseElement = userModalElement.querySelector('.setup-close');

const onDocumentKeydown = (evt) => {
    if (isEscapeKey(evt)) {
        evt.preventDefault();
        closeUserModal();
    }
};

function openUserModal () {
    userModalElement.classList.remove('hidden');

    document.addEventListener('keydown', onDocumentKeydown);
}

function closeUserModal () {
    userModalElement.classList.add('hidden');

    document.removeEventListener('keydown', onDocumentKeydown);
}

userModalOpenElement.addEventListener('click', () => {
    openUserModal();
});


userModalCloseElement.addEventListener('click', () => {
    closeUserModal();
});


/*
const isEscapeKey = (evt) => evt.key === 'Escape';
const isEnterKey = (evt) => evt.key === 'Enter';


userModalOpenElement.addEventListener('keydown', (evt) => {
    if (isEnterKey(evt)) {
        openUserModal();
    }
});

userModalCloseElement.addEventListener('keydown', (evt) => {
    if (isEnterKey(evt)) {
        closeUserModal();
    }
});
*/
//Кстати, если бы разметка была семантически верная, например крестик закрытия модального окна был button, а не span, нам бы не пришлось добавлять обработчик нажатия Enter, поскольку браузер сам бы вызвал обработчик click при работе с клавиатурой. Такие вот преимущества семантичной вёрстки в JavaScript. Помните об этом, когда будете делать домашнее задание.
