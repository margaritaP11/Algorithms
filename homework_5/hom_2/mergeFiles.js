const fs = require('fs')

// Функция Merge

// Та же функция что и в сортировке слиянием
// принимает два отсортированых массива и возвращает один

function merge(left, right) {
  const result = []
  let i = 0
  let j = 0

  // Сравниваем текущие элементы пока в обоих массивах они есть
  while (i < left.length && j < right.length) {
    if (left[i] < right[j]) {
      result.push(left[i])
      i++
    } else {
      result.push(right[j])
      j++
    }
  }
  // если в правом и левом массиве остались элементы  то добвляем их все

  while (i < left.length) {
    result.push(left[i])
    i++
  }
  while (j < right.length) {
    result.push(right[j])
    j++
  }
  // Возвращаем слитый массив
  return result
}

// Функция для чтения файла
// принимает путь к файлу и читает его,превращает
// строку в массив чисел и возвращает его

function readSortedFile(path) {
  const content = fs.readFileSync(path, 'utf8')
  return content
    .trim() //убирает пробелы в начале и конце
    .split(/\s+/) // для разделения
    .map(Number) // каждая строка превращаеться в число
}

// Список файлов которые нужно обьединить
const files = ['file1.txt', 'file2.txt', 'file3.txt']

// читаем фал начиная с первого массива и дале сливаем остальные
let result = readSortedFile(files[0])
// Проходим по остальным файлам
for (let i = 1; i < files.length; i++) {
  const arr = readSortedFile(files[i])
  // djозвращаем отсортированый массив
  result = merge(result, arr)
}

// Записываем результат в файл

const output = result.join(' ')
fs.writeFileSync('result.txt', output)
console.log('Результат записан')
