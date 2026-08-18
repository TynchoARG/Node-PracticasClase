// Array de automóviles con los datos de prueba
const flota = [
  { marca: 'FIAT', modelo: 'Cronos', año: 2020, color: 'Blanco' },
  { marca: 'Peugeot', modelo: '208', año: 2022, color: 'Gris' },
  { marca: 'Ford', modelo: 'Focus', año: 2017, color: 'Negro' },
  { marca: 'Toyota', modelo: 'Corolla', año: 2021, color: 'Rojo' },
  { marca: 'Volkswagen', modelo: 'Gol Trend', año: 2016, color: 'Azul' },
  { marca: 'Chevrolet', modelo: 'Cruze', año: 2019, color: 'Plata' },
  { marca: 'Renault', modelo: 'Sandero', año: 2018, color: 'Blanco' },
  { marca: 'Jeep', modelo: 'Renegade', año: 2023, color: 'Verde' },
  { marca: 'Nissan', modelo: 'Kicks', año: 2020, color: 'Gris' },
  { marca: 'Honda', modelo: 'Civic', año: 2015, color: 'Negro' }
];

// Función que analiza la información requerida
function contarAutosPorColor(listaAutos, colorBuscado) {
  // Aplicamos destructuring ({ color }) directamente en los parámetros de la función del filter
  const autosEncontrados = listaAutos.filter(({ color }) => {
    return color.toLowerCase() === colorBuscado.toLowerCase();
  });

  console.log(`Cantidad de automóviles de color ${colorBuscado}: ${autosEncontrados.length}`);
}

// Ejemplo de uso:
contarAutosPorColor(flota, 'Blanco');
contarAutosPorColor(flota, 'Gris');
contarAutosPorColor(flota, 'Rojo');