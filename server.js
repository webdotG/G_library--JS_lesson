// Загружаю модуль 'http' для создания HTTP-сервера
const http = require('http');
// Загружаю модуль 'fs' для работы с файловой системой, например, для чтения файлов
const fs = require('fs');
// Загружаю модуль 'path' для управления путями файлов, что упрощает работу с файловой структурой
const path = require('path');

// Задаю IP-адрес и порт 
const hostname = '127.0.0.1';
const port = 2552;

// Создаю HTTP-сервер
http.createServer((req, res) => {
  console.log('Request URL:', req.url);

  // Определяю путь к запрашиваемому файлу, если это корневой URL, то возвращаю 'index.html'
  let filePath = path.join(__dirname, req.url === '/' ? 'index.html' : req.url);
  // Получаю расширение файла, чтобы понять, какой контент передается
  const extname = String(path.extname(filePath)).toLowerCase();

  // Определяю MIME-типы для различных расширений файлов
  const mimeTypes = {
    '.html': 'text/html',
    '.js': 'text/javascript',
    '.css': 'text/css',
    '.json': 'application/json',
    '.png': 'image/png',
    '.jpg': 'image/jpg',
    '.gif': 'image/gif',
    '.svg': 'image/svg+xml',
  };

  // Устанавливаю MIME-тип контента на основе расширения файла, или использую 'application/octet-stream' по умолчанию
  let contentType = mimeTypes[extname] || 'application/octet-stream';

  // Читаю файл, который был запрошен
  fs.readFile(filePath, function(error, content) {
    if (error) {
      if (error.code == 'ENOENT') {
        // Если файл не найден, возвращаю страницу 404.html
        fs.readFile('./404.html', function(error, content) {
          res.writeHead(404, { 'Content-Type': 'text/html' });
          res.end(content, 'utf-8');
        });
      } else {
        // При других ошибках чтения файла возвращаю код ошибки 500
        res.writeHead(500);
        res.end('Извините, уже чиним : '+error.code+' ..\n');
      }
    } else {
      // Если файл успешно прочитан, отдаю его с нужным MIME-типом
      res.writeHead(200, { 'Content-Type': contentType });
      res.end(content, 'utf-8');
    }
  });

}).listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});


// MIME-типы (Multipurpose Internet Mail Extensions) первоначально были разработаны для улучшения возможностей электронной почты, позволяя отправлять данные, не ограничиваясь текстом. Они используются в Интернете для определения типа данных, которые содержатся в файле или передаются между клиентом и сервером через HTTP.
// Основная функция MIME-типов

// MIME-типы позволяют браузерам правильно интерпретировать и отображать различные типы данных, такие как изображения, видео, звук, приложения и множество других форматов. Они также помогают определить, какие приложения или плагины должны быть использованы для обработки входящего содержимого.
// Структура MIME-типов

// MIME-тип состоит из двух основных частей, разделенных слэшем (/):

//     Тип (Type): Основная категория файла, например text, image, application.
//     Подтип (Subtype): Более конкретное определение типа файла, например html, jpeg, pdf.

// Примеры MIME-типов:

//     text/html для HTML-документов.
//     image/jpeg для JPEG-изображений.
//     application/json для JSON-документов.
//     video/mp4 для MP4-видеофайлов.

// Зачем важны MIME-типы?

//     Контент-обработка: Сервер использует MIME-типы, чтобы сообщить браузеру, как обрабатывать приходящий контент. Например, браузер может отобразить изображение или предложить сохранить файл на основании его MIME-типа.
//     Безопасность: Некорректная обработка MIME-типов может привести к уязвимостям безопасности, например, если вредоносные данные будут интерпретированы как безопасный тип содержимого.
//     Фильтрация контента: На серверах часто используются MIME-типы для фильтрации загрузок или электронной почты, чтобы предотвратить обработку нежелательного или потенциально опасного содержимого.

// Управление MIME-типами в Web-разработке

// В контексте веб-разработки, правильное управление MIME-типами критически важно для функционирования веб-приложений. Например, сервер должен корректно указывать MIME-типы в HTTP-заголовках ответа, чтобы браузеры правильно отображали или загружали контент пользователям. Неправильная настройка MIME-типов может привести к непредвиденному поведению веб-приложения, вплоть до серьезных проблем с безопасностью.

// Таким образом, MIME-типы являются важным компонентом инфраструктуры Интернета, обеспечивающим эффективное взаимодействие различных систем и программных продуктов в процессе передачи данных.