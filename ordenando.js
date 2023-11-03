//Este ejemplo es que la función swaprecibe un vector arry sus pos1posiciones pos2. Ela verifica se as posições estão dentro de dos 
//limites válidos do vetor e, em seguida, usa a desestruturação para trocar os valores nas posições especificadas. El vehículo modificado 
//se retorna como resultado.

const swap = (arr, pos1, pos2) => {
  if (pos1 < 0 || pos1 >= arr.length || pos2 < 0 || pos2 >= arr.length) {
    console.error("Posições fora dos limites do vetor.");
    return arr; // Retorne o vetor original se as posições forem inválidas.
  }

  // Use a desestruturação para trocar os valores nas posições.
  [arr[pos1], arr[pos2]] = [arr[pos2], arr[pos1]];
  
  return arr; // Retorne o vetor com os valores trocados.
};


//Esta función shuffleusa Math.random()para generar índices aleatorios y luego intercambiar los elementos en esas posiciones aleatorias
//dentro del array. La cantidad de trocas determina cuantas veces se debe realizar el intercambio. Si la cantidad de trocas es menor o 
//igual a cero, la función retornará el array original.


const shuffle = (arr, numSwaps) => {
  if (numSwaps < 0) {
    console.error("A quantidade de trocas deve ser maior ou igual a zero.");
    return arr; // Retorne el array original si la cantidad de trocas es inválida.
  }

  const arrayLength = arr.length;

  for (let i = 0; i < numSwaps; i++) {
    const randomIndex1 = Math.floor(Math.random() * arrayLength);
    const randomIndex2 = Math.floor(Math.random() * arrayLength);

    // Use la técnica de desestructuración para intercambiar los elementos en posiciones aleatorias.
    [arr[randomIndex1], arr[randomIndex2]] = [arr[randomIndex2], arr[randomIndex1]];
  }

  return arr; // Retorne el array con los elementos embarazados.
};


//El algoritmo Bubble Sort compara pares de elementos adyacentes y los intercambian si están en el orden incorrecto, repitiendo este 
//proceso hasta que no se realiza ningún intercambio durante un pase completo a través del array. La función recibe un array de enteros 
//como parámetro y retorna el array ordenado en orden ascendente.

const bubble_sort = (arr) => {
  const n = arr.length;
  let swapped;
  
  do {
    swapped = false;
    
    for (let i = 0; i < n - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]]; // Intercambiar elementos
        swapped = true;
      }
    }
  } while (swapped);

  return arr;
};



//El algoritmo Selection Sort selecciona el elemento más pequeño en cada iteración y lo coloca en su posición correcta, repitiendo este 
//proceso hasta que todos los elementos estén ordenados. La función recibe un array de enteros como parámetro y retorna el array ordenado 
//en orden ascendente.



const selection_sort = (arr) => {
  const n = arr.length;
  
  for (let i = 0; i < n - 1; i++) {
    let minIndex = i;

    for (let j = i + 1; j < n; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }

    if (minIndex !== i) {
      [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]]; // Intercambiar elementos
    }
  }

  return arr;
};


//El algoritmo Quick Sort selecciona un elemento llamado "pivote" y organiza los elementos en el array de manera que los elementos más 
//pequeños que el pivote estén a la izquierda y los elementos más grandes estén a la derecha. Luego, el algoritmo se aplica recursivamente
//a las dos mitades del array. La función quick_sorttoma un array, una posición inicial (predeterminada como 0) y una posición final 
//(predeterminada como el último índice) como parámetros y retorna el array ordenado en orden ascendente.


const quick_sort = (arr, low = 0, high = arr.length - 1) => {
  if (low < high) {
    const pivotIndex = partition(arr, low, high);

    quick_sort(arr, low, pivotIndex - 1);
    quick_sort(arr, pivotIndex + 1, high);
  }

  return arr;
};

const partitione = (arr, low, high) => {
  const pivot = arr[high];
  let i = low - 1;

  for (let j = low; j < high; j++) {
    if (arr[j] < pivot) {
      i++;
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
  }

  [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];

  return i + 1;
};


//Esta función partition realiza la partición del array en función del valor del pivote. Es similar a la versión que tenías, pero toma el 
//valor del pivote como parámetro en lugar de obtenerlo del array en la posición high.


const partition = (arr, low, high, pivot) => {
  let i = low - 1;

  for (let j = low; j <= high - 1; j++) {
    if (arr[j] < pivot) {
      i++;
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
  }

  [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];

  return i + 1;
};
