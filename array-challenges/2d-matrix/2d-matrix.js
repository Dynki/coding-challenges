

function Rotate2DMatrix(matrix) {
  return matrix.reduce((prev, curr, idx, arr) => {

    const subArr = curr.reduce((subPrev, _curr, subIdx,) => {
      return [...subPrev, arr[(arr.length-1)-subIdx][idx]]
    }, [])
    
    return [...prev, subArr]
  }, [])
}

const matrix = [
  [0,1,2],
  [3,4,5],
  [6,7,8]
]

const matrix2 = [
  [0,1,2,3],
  [4,5,6,7],
  [8,9,10,11],
  [12,13,14,15]
]

console.log(Rotate2DMatrix(matrix))
console.log(Rotate2DMatrix(matrix2))