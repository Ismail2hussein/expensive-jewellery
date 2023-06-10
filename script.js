function mostExpensive(jewelry) {
  let maxPrice = 0;
  let maxName = '';

  for (let name in jewelry) {
    if (jewelry[name] > maxPrice) {
      maxPrice = jewelry[name];
      maxName = name;
    }
  }

  return `The most expensive one is the ${maxName}`;
}

console.log(mostExpensive({
  "Silver Bracelet": 280,
  "Gemstone Earrings": 180,
  "Diamond Ring": 5500
})); // "The most expensive one is the Diamond Ring"