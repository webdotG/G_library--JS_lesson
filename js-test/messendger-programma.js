//Третья программа: «Мессенджер»
/*
    Нужно запрограммировать мессенджер. Как должна работать программа:

        Шаблон сообщения находится в теге template с идентификатором message-template.
        Новое сообщение добавляется в конец контейнера с классом chat-content.
        Чтобы добавить новое сообщение, нужно ввести текст в поле ввода (элемент с классом chat-form-input) и нажать кнопку «Отправить» (отправляет данные из формы с классом chat-form).
        В блоке сообщения (класс chat-message) должен быть текст сообщения, кнопка удаления и имя пользователя.
        Чтобы удалить сообщение, нужно кликнуть по кнопке с крестиком (элемент с классом chat-message-button). Эта кнопка появляется при наведении на сообщение.

 */

// Контейнер для сообщений
let chatContainer = document.querySelector('.chat-content');
// Создаем динамическую коллекцию из сообщений внутри контейнера сообщений
let items = chatContainer.children;
// Форма и поле ввода текста
let newMessageForm = document.querySelector('.chat-form');
let newMessageInput = newMessageForm.querySelector('.chat-form-input');

// Шаблон для сообщения
let messageTemplate = document.querySelector('#message-template').content;
let newMessageTemplate = messageTemplate.querySelector('.chat-message');

// Удаление сообщения по крестику
let deleteMessageHandler = function(item) {
    let closeButton = item.querySelector('.chat-message-button');
    closeButton.addEventListener('click', function() {
        item.remove();
    });
}
for (let i = 0; i < items.length; i++) {
    deleteMessageHandler(items[i]);
}

// Создание нового сообщения
newMessageForm.addEventListener('submit', function(evt) {
    evt.preventDefault();

    // Получаем текст из поля ввода
    let messageText = newMessageInput.value;
    // Клонируем шаблон сообщения
    let newMessage = newMessageTemplate.cloneNode(true);
    // Находим контейнер для текста и записываем туды сообщение из ввода
    newMessage.querySelector('.chat-message-text').textContent = messageText;
    // Добавляем сообщение на страницу
    chatContainer.appendChild(newMessage);
    // Добавляем обработчик удаления сообщений по крестику
    deleteMessageHandler(newMessage);
    // Чистим содержимое поля ввода
    newMessageInput.value = '';
});

// ==============================================
var chat = document.querySelector(’.chat-content’);
var messages = chat.children;
var newMessageForm = document.querySelector(’.chat-form’);
var newMessageInput = document.querySelector(’.chat-form-input’);
var messageTemplate = document.getElementById(‘message-template’).content;
var newMessageTemplate = messageTemplate.querySelector(’.chat-message’);

newMessageForm.addEventListener(‘submit’, function (evt) {
    evt.preventDefault();
    var messageText = newMessageInput.value;
    var message = newMessageTemplate.cloneNode(true);
    var messageBox = message.querySelector(‘p’);
    messageBox.textContent = messageText;
    chat.appendChild(message);
    var deleteButton = message.querySelector(’.chat-message-button’);
    deleteButton.addEventListener(‘click’, function () {
        message.remove();
    });
    newMessageInput.value = ‘’;
})
