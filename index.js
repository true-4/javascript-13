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
  constructor(balance) {
    this._balance = balance
  }

  deposit(amount) {
    this._balance += amount
    return 'Баланс обновлён'
  }

  withdraw(amount){
    if (this._balance >= amount) {
      return this._balance -= amount
    } else {
      throw 'Недостаточно средств'
    }
  }

  getBalance() {
    return this._balance
  }
}

const myAccount = new BankAccount(174900)
console.log(myAccount)
console.log(myAccount.getBalance())
console.log(myAccount.withdraw(4900))
console.log(myAccount)
console.log(myAccount.deposit(30000))
console.log(myAccount)

// 🧩 Задание 4: Полиморфизм и переопределение методов
// Описание:
// Создай класс Shape с методом getArea(), который возвращает 0.
// Создай 2 наследника:
// Rectangle(width, height) → getArea() возвращает площадь
// Circle(radius) → getArea() возвращает π * r²
// 🔧 Дополнительно:
//  Сделай общий массив фигур и вычисли суммарную площадь всех объектов.
// const shapes = [new Rectangle(10, 20), new Circle(5),  new Rectangle(3, 3)];
// // Вычисляем суммарную площадь всех фигур
// let totalArea = shapes. (напишите вычисление)

class Shape {
  getArea() {
    return 0
  } 
}

class Rectangle extends Shape { // наследую свойства у класса Shape
  constructor(width, height) {
    super() // наследую свойства у класса Shape
    this.width = width
    this.height = height
  }

  getArea() {
    return this.width * this.height
  }
}

class Circle extends Shape {
  constructor(radius) {
    super()
    this.radius = radius
  }

  getArea() {
    return (Math.PI * this.radius ** 2).toFixed(2)
  }
}

const myRectangle = new Rectangle(4, 3)
console.log(myRectangle.getArea())

const myCircle = new Circle(2)
console.log(myCircle.getArea())

const shapes = [new Rectangle(10, 20), new Circle(5),  new Rectangle(3, 3)] // НЕ ЗНАЮ ЧТО ПРИМЕНЯТЬ
console.log(shapes)