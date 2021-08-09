function lgConcatenacion(a, b) {
  let resultado = [];
  for (let i = 0; i < a.length; i++) {
    let pa = a[i];
    for (let j = 0; j < b.length; j++) {
      let pb = b[j];
      if (pa === "@") resultado.push(pb);
      else if (pb === "@") resultado.push(pa);
      else resultado.push(`${pa + pb}`);
    }
  }

  return Array.from(new Set([...resultado]));
}

function lgPotencia(a, nPotencia) {
  let resultado = [...a];
  for (let i = 0; i < nPotencia; i++) {
    resultado = lgConcatenacion(resultado, a);
  }

  return Array.from(new Set([...resultado]));
}

function lgInverso(a) {
  let resultado = a;
  resultado.reverse();
  return resultado;
}

function lgCardinalidad(a) {
  if (a.join("") === "") return "0 palabras";
  else return `${a.length} palabra${a.length > 1 ? "s" : ""}`;
}

function opLenguajes(op, a, b, nPotencia) {
  switch (op) {
    case "Union":
    return afUnion(a, b);
    break;
    case "Interseccion":
    return afIntersection(a, b);
    break;
    case "Diferencia":
    return afDifference(a, b);
    break;
    case "Concatenacion":
    return lgConcatenacion(a, b);
    break;
    case "Potencia":
    return lgPotencia(a, nPotencia);
    break;
    case "Inverso":
    return lgInverso(a);
    break;
    case "Cardinalidad":
    return lgCardinalidad(a);
    break;
  }
}
