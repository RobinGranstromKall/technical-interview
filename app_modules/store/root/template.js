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

const renderItem = (item, data) => /*html*/`
        <tr style='background-color: ${getColorForProduct(item.id, data.colors)}'>
          <td>
            <a is="router-link" href='/store/${item.id}'>${item.name}</a>
          </td>
        </tr>
      `

export default data => {
  console.log(data)
  return `
    <h1>Stores List</h1>
    <table>
      <tr>
        <th>Name</th>
      </tr>
      ${data.list && data.list.map((item) => renderItem(item, data)).join("")}
    </table>
  `;
};