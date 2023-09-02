**[Завдання](README.ua.md).**

# goit-node-js-hw-01

- Отримуємо і виводимо весь список контактів у вигляді таблиці (console.table)

node index.js --action="list"
![Alt text](images/HW1-1.jpg)

- Отримуємо контакт по id і виводимо у консоль об'єкт контакту або null, якщо контакту з таким id не існує.

node index.js --action="get" --id 05olLMgyVQdWRwgKfg5J6
![Alt text](images/HW1-2.jpg)

- Додаємо контакт та виводимо в консоль об'єкт новоствореного контакту

node index.js --action="add" --name Mango --email mango@gmail.com --phone 322-22-22
![Alt text](images/HW1-3.jpg)

- Видаляємо контакт та виводимо в консоль об'єкт видаленого контакту або null, якщо контакту з таким id не існує.

node index.js --action="remove" --id qdggE76Jtbfd9eWJHrssH
![Alt text](images/HW1-4.jpg)
