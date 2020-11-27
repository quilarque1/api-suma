# api-suma
Api encargada de sumar valores dado un parámetro de entrada.


## Como Usar:

#instalar dependencias
npm install

#correr api
node src/app.js

##Docker
docker-compse up -build

#Url
<span>

*http://localhost:3000*

</span>

#Verificar si la api esta arriba

**GET:**
***``
{url}/health
``***
##

## Como usra


**GET:** 
***``{url}/suma/1+2+3+4
``***

**Where:**

| Parameter    |Descripction   |Example   |
| ------------| ------------ | ---------- |
|  1+2+3+4   |  es la cadena de operaciones a realizar  | **1+2+6+4** |

**Ejemplo respuesta:**

```json
{
    "suma": {
        "operacion": "1+2+3+4",
        "resultado": 10
    }
}
```

**Donde:**

| Parameter         |Descripction         |Example        |
| ------------      | ------------        | ------------  |
|  suma            |  arreglo de operaciones  |  **operacion, resultado**  |
|  operacion        |  cadena de opraciones a realizar | **1+2+3+4**|
|  resultado        |  resultado de la operacion | **10**|

## Si necesitas otra informacion

Escribirme a:

**quilarque1@gmail.com**
