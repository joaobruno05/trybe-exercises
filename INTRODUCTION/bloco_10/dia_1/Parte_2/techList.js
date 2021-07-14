const techList = (list, name) => {
  if (list.length > 0) {
    const orderedList = list.sort();
    const object = [];
    orderedList.forEach((item) => {
      object.push({
        tech: item,
        name: name,
      });
    })
    // for (let index = 0; index < orderedList.length; index += 1) {
    //   object.push({
    //     tech: orderedList[index],
    //     name: name
    //   });
    // };
    return object;
  }
  return 'Vazio!';
}

console.log(techList(['React', 'Jest', 'HTML', 'CSS', 'JavaScript'], 'Lucas'));

module.exports = techList;