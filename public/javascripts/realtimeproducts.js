const socket = io();

document.getElementById("product-form").addEventListener("submit", async (e) => {
  e.preventDefault()
  try {
    const product = {
      title: document.getElementById("title").value,
      category: document.getElementById("category").value,
      code: document.getElementById("code").value,
      description: document.getElementById("description").value,
      price: document.getElementById("price").value,
      stock: document.getElementById("stock").value,
      status: document.getElementById("status").value === 'true'
    }
    const response = await axios.post('http://localhost:8080/api/products', product);
    console.log(response);
  } catch (error) {
    console.log(error);
  }
});


socket.on('connect', () => {
    console.log('connected to server');
});
socket.emit('message','hola si')