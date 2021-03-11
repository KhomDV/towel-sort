
// You should implement your task here.

module.exports = function towelSort (matrix) {
  
  if ( !Array.isArray(matrix) ) return [];
	if (matrix.length === 0) return [];

	return matrix.map((element, i)=> (i%2 !== 0) ? element.reverse() : element).flat();

}
