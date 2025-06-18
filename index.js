// Задание 1: Класс User
// Описание:
// Создай класс User, у которого есть:
// свойства: name, email
// метод getInfo(), который возвращает строку вида:
//  Name: Иван, Email: ivan@example.com
// 🔧 Дополнительно:
//  Добавь валидацию: если email не содержит @, выбрасывай ошибку.

class User {
  constructor(name, email) {
    this.name = name
    this.email = email
  }
  getInfo() {
    if (!this.email.includes('@')) {
      return 'Неверный имаил'
    }
    return `Name: ${this.name}, Email: ${this.email}`
  }
}

const userFirst = new User('Иван', 'ivan@example.com')
console.log(userFirst.getInfo())