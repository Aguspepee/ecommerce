const socket = io();

async function getProducts() {
  try {
    const response = await axios.get('http://localhost:8080/api/products');
    const products = response.data
    const productTableBody = document.getElementById("product-table-body");

    products.forEach(product => {
      const row = document.createElement("tr");

      const idCell = document.createElement("td");
      idCell.textContent = product.id;
      row.appendChild(idCell);

      const titleCell = document.createElement("td");
      titleCell.textContent = product.title;
      row.appendChild(titleCell);

      const descriptionCell = document.createElement("td");
      descriptionCell.textContent = product.description;
      row.appendChild(descriptionCell);

      const priceCell = document.createElement("td");
      priceCell.textContent = product.price;
      row.appendChild(priceCell);

      const stockCell = document.createElement("td");
      stockCell.textContent = product.stock;
      row.appendChild(stockCell);

      const statusCell = document.createElement("td");
      statusCell.textContent = product.status;
      row.appendChild(statusCell);

      const codeCell = document.createElement("td");
      codeCell.textContent = product.code;
      row.appendChild(codeCell);

      productTableBody.appendChild(row);
    });
    console.log(response.data);
  } catch (error) {
    console.log(error);
  }
}

getProducts();


socket.on('connect', () => {
  console.log('connected to server');
});
socket.emit('message', 'hola si')