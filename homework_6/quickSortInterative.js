function quickSortInterative(arr) {
  // Копия массива что бы не испортить оригинал
  const array = [...arr]
  // Тут храним диапазоны что нужно отсортировать
  const stack = []

  // Кладем в стек весь массив
  stack.push({ left: 0, right: array.length - 1 })
  //  И пока в стеке диапазон мы продолжаем сортировать
  while (stack.length > 0) {
    const { left, right } = stack.pop()

    // Если диапазон слишком маленький  - пропускаем
    if (left >= right) continue
    // Выбираем pivot - середина диапазона
    const pivotIndex = Math.floor((left + right) / 2)
    const pivot = array[pivotIndex]
    // Два указателя
    let i = left
    let j = right

    // Разделение массива(patrition)
    while (i <= j) {
      while (array[i] < pivot) i++
      while (array[j] > pivot) j--
      if (i <= j) {
        // Меняем элементы местами
        const temp = array[i]
        array[i] = array[j]
        array[j] = temp

        i++
        j--
      }
    }
    // Теперь у нас два подмассива:
    // Кладем их в стек чтобы отсортировать позже
    if (left < j) {
      stack.push({ left: left, right: j })
    }
    if (i < right) {
      stack.push({ left: i, right: right })
    }
  }
  return array
}

console.log(quickSortInterative([5, 3, 8, 1, 2]))
console.log(quickSortInterative([1, 2, 3, 4]))
console.log(quickSortInterative([3, 3, 3]))
