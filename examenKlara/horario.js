document.getElementById("crear").onclick = () => {
  document.getElementById("zona").innerHTML = `
    <table border="1">
      <tr><th>Horario</th><th>Lunes</th><th>Martes</th><th>Miercoles</th><th>Jueves</th><th>Viernes</th></tr>
      <tr><th>09:00 - 11:00</th><td></td><td></td><td></td><td></td><td></td></tr>
      <tr><th>11:00 - 13:00</th><td></td><td></td><td></td><td></td><td></td></tr>
      <tr><th>13:00 - 15:00</th><td></td><td></td><td></td><td></td><td></td></tr>
    </table>
    </br>
    <table border="1">
      <tr><th>Horario</th><th>Lunes</th><th>Martes</th><th>Miercoles</th><th>Jueves</th><th>Viernes</th><th>Sabado</th><th>Domingo</th></tr>
      <tr><th>16:00 - 17:00</th><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
      <tr><th>17:00 - 18:00</th><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
      <tr><th>18:00 - 19:00</th><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
      <tr><th>19:00 - 20:00</th><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
      <tr><th>20:00 - 21:00</th><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
    </table>
  `;
};
