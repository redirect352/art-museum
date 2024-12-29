# Tестовое задание Modsen Art Museum

## Содержание

- [Техническое задание](#Техническое-задание)
- [API](#API)
- [Необходимый функционал](#Необходимый-функционал)
- [Пример графического представления](#Пример-графического-представления)
- [Используемые технологии](#Используемые-технологии)
- [Тестирование](#Тестирование)
- [Полезные ссылки](#Полезные-ссылки)

## Техническое задание

Реализовать приложение для отображения каталога с картинами.

## API:

Список API для использования (если представленные API не удовлетворяют каким-либо условиям задания, можно использовать любые другие открытые API):
[Art API](https://api.artic.edu/docs/#introduction)

## Необходимый функционал

- Получение данных о картинах с внешнего API;
- Отображение списка картин с возможностью пагинации;
- Реализация формы поиска с валидацией введенных данных;
- Использование роутинга для разделения страниц приложения;
- Реализация дебаунса для поисковой формы с помощью кастомного хука;
- Возможность добавления картины в список избранных с сохранением их в SessionStorage;
- Возможность просмотра более детальной информации о картине и возврате на главную страницу;
- Интерфейс для просмотра списка избранных и возможности удаления из списка;
- Реализация возможности сортировки картин по различным критериям (по названию произведения) (продумать самостоятельно).

## Пример графического представления

Ссылка на макет: ["Modsen Art Museum"](https://www.figma.com/file/XSLT4bMToK5tOdbXBBuqhP/Trainee-task-1?type=design&node-id=0-1&mode=design&t=tthepIdFQRlAXlVS-0).

### Так же проект предполагает

- При загрузке товаров необходимо реализовать Loader;
- Оптимизацию дизайна под мобильные устройства (до 360px);
- Реализацию burger-menu;
- Обработку ошибок через паттерн **_Error Boundaries_**;
- Использование TypeScript для типизирования и уменьшения количества потенциальных багов;
- Использование алиасов для импортирования файлов;
- Покрытие тестами 35% функциональности приложения;
- Организацию файловой структуры react приложения. Ссылка на структуру: [Структура проекта](https://github.com/mkrivel/structure);
- Деплой приложения на платформу Vercel или Netlify;
- Настройку конфигурации eslint, prettier, husky, commitlint;
- Использование корректного GitFlow в проекте;
- Использование сторонних библиотек для стилей - запрещены, кроме рекомендуемых в пункте “Используемые технологии”.

## Описание экранов

Главная страница представляет собой информационную часть приложения, в которой можно выполнить поиск и отсортировать получаемые данные. Также на главной странице необходимо реализовать пагинацию по трем картинам. При клике на выбранную картину должен осуществляться переход на страницу с детальной информацией, чтобы изучить произведение подробнее(необходимо самостоятельно добавить кнопку возврата на главную страницу). Понравившиеся произведения можно поместить в избранное, чтобы иметь быстрый доступ к их изучению и просмотру.

## Используемые технологии

- **_node.js_** - программная платформа, основанная на движке V8 (транслирующем JavaScript в машинный код);
- **_eslint_** - линтер для JavaScript кода;
- **_prettier_** - инструмент для автоформатирования кода;
- **_yarn_** - менеджер пакетов;
- **_react_** - JavaScript-библиотека для создания пользовательских интерфейсов;
- **_typescript_** - строго типизированный язык для уменьшения количества потенциальных багов;
- **_SCSS_** - препроцессор, который служит для быстрого написания CSS стилей;
- **_jest_** - библиотека для unit-тестирования;
- **_react-router-dom_** - библиотека для навигации между разными частями веб-приложения;
- **_yup_** - библиотека для валидации форм;
- **_react-hook-form_** - библиотека для обработки элемента ввода формы.

## Полезные ссылки

[React](https://reactjs.org/docs/getting-started.html)
[React hooks](https://reactjs.org/docs/hooks-intro.html)
[Eslint](https://eslint.org/docs/user-guide/configuring)
[Prettier](https://prettier.io/docs/en/install.html)
[SCSS](https://sass-lang.com/)
[Husky](https://dev.to/ivadyhabimana/setup-eslint-prettier-and-husky-in-a-node-project-a-step-by-step-guide-946)
[GitFlow](https://www.atlassian.com/ru/git/tutorials/comparing-workflows/gitflow-workflow)
[Commit Convention](https://www.conventionalcommits.org/en/v1.0.0/)