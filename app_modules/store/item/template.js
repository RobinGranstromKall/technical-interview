const getColorForProduct = (id, colors) => {
  let result = []
  for (const colorItem of colors) {
    if (colorItem.ids.includes(id)) {
      result.push(colorItem.color)
    }
  }
  if (result.length === 1) {
    return result[0]
  }
  const seed = result.length
  const random = Math.ceil(Math.random() * seed);
  return result[random]
}

export default ({colors, item}) => {
  console.log(colors, item)
  return /*html*/`
    <style>
      html {
        background-color: ${getColorForProduct(item.id, colors)};
        color: white;
      }
    </style>
    <h1>${item.name}</h1>
    <p>We Inserted some style here</p>
  `
}