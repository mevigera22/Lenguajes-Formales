function afUnion(a, b) {
  return Array.from(new Set([...a, ...b]));
}

function afIntersection(a, b) {
  let resultado = [];
  for (let el of a) {
    if (b.includes(el)) resultado.push(el);
  }

  return Array.from(new Set([...resultado]));
}

function afDifference(a, b) {
  let resultado = [];
  for (let el of a) {
    if (!b.includes(el)) resultado.push(el);
  }

  return Array.from(new Set([...resultado]));
}

function opAlfabetos(op, a, b) {
  switch (op) {
    case "Union":
      return afUnion(a.b);
    case "Interseccion":
      return afIntersection(a, b);
    case "Diferencia":
      return afDifference(a, b);
  }
}
