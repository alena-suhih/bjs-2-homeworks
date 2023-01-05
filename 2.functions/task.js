function getArrayParams(...arr) {
  let min = arr[0]
  let max = arr[0]
  let sum = 0

  if (arr.length > 0) {
    for (i = 0; i < arr.length; i++){
     if (arr[i] > max) {
        max = arr[i]
     } 
     if (arr[i] < min) {
        min = arr[i]
    }
    sum = sum + arr[i]
    }
  }
  
  let avg = Number((sum / arr.length).toFixed(2))
  return { min: min, max: max, avg: avg };
}

function summElementsWorker(...arr) {
  let sum = 0

  if (arr.length > 0) {
    for (i = 0; i < arr.length; i++){
      sum += arr[i]
    }
  }
  return sum
}

function differenceMaxMinWorker(...arr) {
  let min = arr[0]
  let max = arr[0]
  let differenceMaxMin = 0

  if (arr.length > 0) {
    for (i = 0; i < arr.length; i++){
      if (arr[i] > max) {
        max = arr[i]
      } 
      if (arr[i] < min) {
        min = arr[i]
      }
      differenceMaxMin = max - min
      }
  }

  return differenceMaxMin
}

function differenceEvenOddWorker(...arr) {
  let sumEvenElement = 0
  let sumOddElement = 0
  let diffEvenOdd = 0

  if (arr.length > 0) {
    for (i = 0; i < arr.length; i++){
      if (arr[i] % 2 == 0) {
        sumEvenElement += arr[i]
      } else {
        sumOddElement += arr[i]
      }
    diffEvenOdd = sumEvenElement - sumOddElement
    }
  }
  return diffEvenOdd
}

function averageEvenElementsWorker(...arr) {
  let sumEvenElement = 0
  let countEvenElement = 0
  let averageEven = 0

  if (arr.length > 0) {
    for (i = 0; i < arr.length; i++){
      if (arr[i] % 2 == 0) {
        sumEvenElement += arr[i]
        countEvenElement += 1
      } 
    averageEven = sumEvenElement / countEvenElement
    }
  }
  return averageEven

}

function makeWork(arrOfArr, func) {
  let maxWorkerResult = -Infinity

  for (let i = 0; i < arrOfArr.length; i++) {
    const result = func(...arrOfArr[i])
    if (result > maxWorkerResult) {
      maxWorkerResult = result
    }
  }

  return maxWorkerResult
}