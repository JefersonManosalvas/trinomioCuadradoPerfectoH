const express = require('express'); 
const app = express(); 

app.use(express.json()); 





app.get('/trinomiocp/:a/:b', (req, resp) => {
    let a = parseFloat(req.params.a);
    let b = parseFloat(req.params.b); 

    let a2 = a * a; 
    let b2 = b * b; 
    let terminosmedio = 2 * a * b; 

    let resultado = a2 + terminosmedio + b2; 

    resp.send(`Resultado: ${resultado}`);
});




// Iniciar servidor en el puerto 3000
app.listen(3000, () => {
  console.log('El puerto 3000 está corriendo'); 
});