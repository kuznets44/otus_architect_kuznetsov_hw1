export const solve = (a: number, b: number, c: number): number[] => {

  const EPS: number = 1e-5;
  
  if ((a === Infinity) || (b === Infinity) || (c === Infinity)) {
    throw "input parameter should be a number";
  }
  
  if (isNaN(a) || isNaN(b) || isNaN(c)) {
    throw "input parameter should be a number";
  }

  if(a < EPS) {
    throw "a should not be equal to 0";
  }

  const d = b*b - 4*a*c;
  
  if(d < 0) {
    return [];
  }

  if(d < EPS) {
    return [
      -b/ (2 * a),
      -b/ (2 * a),
    ];
  } else {
    return [
      (-b + Math.sqrt(d))/ (2 * a),
      (-b - Math.sqrt(d))/ (2 * a),
    ];
  }
}