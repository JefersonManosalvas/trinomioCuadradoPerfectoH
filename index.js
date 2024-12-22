const express = require('express');
const app = express();

app.use(express.json());

function esTrinomioCuadradoPerfecto(a, b, c) {
    return b * b === 4 * a * c;
}

app.get('/trinomiocp/:ecuacion', (req, resp) => {
    const ecuacion = decodeURIComponent(req.params.ecuacion.replace(/\s+/g, ''));
    const regex = /^([+-]?\d*)([a-zA-Z]+)\^2([+-]?\d+)([a-zA-Z]+)?([+-]?\d+)$/;
    const match = ecuacion.match(regex);

    if (!match) {
        return resp.status(400).send("Formato inválido.");
    }

    const a = match[1] ? parseInt(match[1], 10) : 1;
    const b = parseInt(match[3], 10);
    const c = parseInt(match[5], 10);

    if (esTrinomioCuadradoPerfecto(a, b, c)) {
        const sqrtA = Math.sqrt(a);
        const sqrtC = Math.sqrt(c);
        const sign = b > 0 ? '+' : '-';
        return resp.send({
            mensaje: "Es un trinomio cuadrado perfecto.",
            resultado: `(${sqrtA}${match[2]} ${sign} ${sqrtC})^2`
        });
    } else {
        return resp.send({ mensaje: "No es un trinomio cuadrado perfecto." });
    }
});

app.listen(3000, () => {
    console.log('El servidor está corriendo en el puerto 3000');
});
