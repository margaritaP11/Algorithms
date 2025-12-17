/* Реализовать стек и его операции на основе массива. 


empty  — проверка стека на наличие в нем элементов,

push  — операция вставки нового элемента,

pop  — операция удаления нового элемента.


Реализовать нижеперечисленные операции самостоятельно для структуры Стек:


peek() – Возвращает элемент c вершины стека, но не удаляет его.

search(element) -  Определяет, существует ли объект в стеке. Если элемент найден, возвращает позицию элемента с вершины стека.
 В противном случае он возвращает -1.

 */
class Stack {
  constructor() {
    // Массив который будет хранить элементы стека
    this.items = []
  }
  // еmpty() мы проверяем пуст ли стек
  empty() {
    return this.items.length === 0
  }
  // push (element)- так добавляем элемент на вершину стека
  push(element) {
    this.items.push(element)
  }
  // pop()так удаляем и возвращаем элемент с вершины стека
  pop() {
    if (this.empty()) {
      return null
    }
    return this.items.pop()
  }
  //peek() - возвращает верхний элемент, не удаляя его
  peek() {
    if (this.empty()) {
      return null
    }
    return this.items[this.items.length - 1]
  }
  // search (element)- возвращет позицию элемента от вершины стека,
  // 1 это самый верхний эдемент а 2 это следующий
  // но если элемента нет возвращает -1
  search(element) {
    let position = 1
    for (let i = this.items.length - 1; i >= 0; i--) {
      if (this.items[i] === element) {
        return position
      }
      position++
    }
    return -1
  }
}

const stack = new Stack()
console.log('Стек пустой', stack.empty())
stack.push(10)
stack.push(20)
stack.push(30)
console.log('Верхний элемент :', stack.peek())

console.log('Удален элемент :', stack.pop())

console.log('Позиция 20 от верха :', stack.search(20))

console.log('Новый верх :', stack.peek())
console.log('Стек пуст?  :', stack.empty())
