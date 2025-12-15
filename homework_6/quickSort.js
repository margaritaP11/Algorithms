//1 Базовый случай, масив уже отсортирован если он пустой
// или в нем 1 элемент
// это условие останавливаеться рекурсией
function quickSort(array) {
  if (array.length <= 1) {
    return array
  }
  // 2 Нужно выбрать опорный элемент(pivot)
  // для хорошего баланса беру середину массива
  const pivotIndex = Math.floor(array.length / 2)
  const pivot = array[pivotIndex]

  // 3 Создание трех массивов
  // где элементы равны больше или меньше pivot
  const less = []
  const equal = []
  const greater = []

  // 4 Нужно разобрать каждый элемент массива, сравнивая
  // каждый элемент с pivot и ложим в нужный массив
  for (let i = 0; i < array.length; i++) {
    const value = array[i]

    if (value < pivot) {
      less.push(value)
    } else if (value > pivot) {
      greater.push(value)
    } else {
      equal.push(value)
    }
  }

  // 5 Нужно отсортировать левую и правую часть реккурсивно
  //quickSort(less) делить массив, пока не останеться 1 элемент

  const sortedLeft = quickSort(less)
  const sortedRight = quickSort(greater)
  // 6. Обьедняем результаты в правельном порядке
  return [...sortedLeft, ...equal, ...sortedRight]
}
