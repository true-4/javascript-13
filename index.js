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
      throw 'Неверный имаил'
    }
    return `Name: ${this.name}, Email: ${this.email}`
  }
}

const userFirst = new User('Иван', 'ivan@example.com')
console.log(userFirst.getInfo())

// Задание 2: Наследование: User → Admin
// Описание:
// Создай класс Admin, который наследует от User:
// добавь поле role (по умолчанию: 'admin')
// переопредели метод getInfo() так, чтобы он также включал роль:
//  Name: Иван, Email: ivan@example.com, Role: admin

class Admin extends User {
  constructor(name, email, role = 'admin') {
    super(name, email)
    this.role = role
  }
  getInfo() {
    return `Name: ${this.name}, Email: ${this.email}, Role: ${this.role}`
  }
}

const adminFirst = new Admin('Егор', 'egor@example.com')
console.log(adminFirst.getInfo())  // невнимателен был исправил

// 🧩 Задание 3: Инкапсуляция
// Описание:
// Создай класс BankAccount:
// приватные свойства: #balance
// публичные методы:
// deposit(amount)
// withdraw(amount)
// getBalance()
// 🔧 Условия:
// Нельзя снимать больше, чем есть
// Баланс можно узнать только через метод

class BankAccount {
  #balance
  constructor(balance) {
    this.#balance = balance
  }


}