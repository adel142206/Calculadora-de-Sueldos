function calcularDescuentos() {
    // Obtenemos los valores de los sueldos ingresados por el usuario
    const sueldo1 = parseFloat(document.getElementById("sueldo1").value);
    const sueldo2 = parseFloat(document.getElementById("sueldo2").value);
    const sueldo3 = parseFloat(document.getElementById("sueldo3").value);
    const sueldo4 = parseFloat(document.getElementById("sueldo4").value);
    const sueldo5 = parseFloat(document.getElementById("sueldo5").value);
  
    // Calculamos los descuentos para cada sueldo
    const afp = 0.012; // 1.2%
    const ss = 0.02; // 2%
    const ir = 0.05; // 5%
  
    const sueldosConDescuentos = [
      { sueldo: sueldo1, afp: sueldo1 * afp, ss: sueldo1 * ss, ir: sueldo1 > 33500 ? sueldo1 * ir : 0 },
      { sueldo: sueldo2, afp: sueldo2 * afp, ss: sueldo2 * ss, ir: sueldo2 > 33500 ? sueldo2 * ir : 0 },
      { sueldo: sueldo3, afp: sueldo3 * afp, ss: sueldo3 * ss, ir: sueldo3 > 33500 ? sueldo3 * ir : 0 },
      { sueldo: sueldo4, afp: sueldo4 * afp, ss: sueldo4 * ss, ir: sueldo4 > 33500 ? sueldo4 * ir : 0 },
      { sueldo: sueldo5, afp: sueldo5 * afp, ss: sueldo5 * ss, ir: sueldo5 > 33500 ? sueldo5 * ir : 0 }
    ];
  
    // Calculamos el promedio de los sueldos
    const promedioSueldos = (sueldo1 + sueldo2 + sueldo3 + sueldo4 + sueldo5) / 5;
  
    // Mostramos los resultados en la tabla y el promedio en el párrafo
    const resultadoTabla = document.getElementById("resultadoTabla");
    
    resultadoTabla.innerHTML = "";

    sueldosConDescuentos.forEach((sueldo) => {
      resultadoTabla.innerHTML += `
        <tr>
          <td>${sueldo.sueldo}</td>
          <td>${sueldo.afp.toFixed(2)}</td>
          <td>${sueldo.ss.toFixed(2)}</td>
          <td>${sueldo.ir.toFixed(2)}</td>
        </tr>
      `;
    });
  
    const promedioSueldosElement = document.getElementById("promedioSueldos");
    promedioSueldosElement.textContent = promedioSueldos.toFixed(2);
  }
  