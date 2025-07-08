// === Simulador de Planta Mutante ===

// Variables y estructura de datos
const planta = {
    agua: 60,
    energia: 50,
    mutacion: 0,
    felicidad: 50
  };
  
  const acciones = [
    {
      id: 1,
      nombre: "Regar",
      efectos: { agua: 10, energia: -5, mutacion: 0, felicidad: 2 }
    },
    {
      id: 2,
      nombre: "Dar sol",
      efectos: { agua: -10, energia: 15, mutacion: 0, felicidad: 3 }
    },
    {
      id: 3,
      nombre: "Fertilizante mutante",
      efectos: { agua: -5, energia: 5, mutacion: 30, felicidad: -2 }
    },
    {
      id: 4,
      nombre: "Contarle chistes",
      efectos: { agua: 0, energia: 0, mutacion: 5, felicidad: 10 }
    }
  ];
  
  // Funciones
  function pedirAccion() {
    let mensaje = "Elige una acción para tu planta:\n";
    acciones.forEach(a => {
      mensaje += `${a.id}. ${a.nombre}\n`;
    });
  
    let eleccion = parseInt(prompt(mensaje));
    while (!acciones.some(a => a.id === eleccion)) {
      eleccion = parseInt(prompt("❌ Número inválido. Elegí de nuevo:\n" + mensaje));
    }
  
    return acciones.find(a => a.id === eleccion);
  }
  
  function aplicarAccion(accion) {
    planta.agua = Math.max(0, planta.agua + accion.efectos.agua);
    planta.energia = Math.max(0, planta.energia + accion.efectos.energia);
    planta.mutacion = Math.max(0, planta.mutacion + accion.efectos.mutacion);
    planta.felicidad = Math.max(0, planta.felicidad + accion.efectos.felicidad);
  
    console.log("🛠️ Acción:", accion.nombre);
    console.log("📊 Estado actual de la planta:");
    console.log("💧 Agua:", planta.agua);
    console.log("⚡ Energía:", planta.energia);
    console.log("🧬 Mutación:", planta.mutacion);
    console.log("😊 Felicidad:", planta.felicidad);
    console.log("-".repeat(30));
  }
  
  function mostrarResultadoFinal() {
    console.log("\n" + "=".repeat(30));
    console.log("🌱 RESULTADO FINAL 🌱");
    console.log("=".repeat(30));
  
    let mensajeFinal = "🌱 RESULTADO FINAL 🌱\n" + "=".repeat(30) + "\n";
  
    if (planta.mutacion >= 80) {
      console.log("🚀 Tu planta se fue al espacio. Ahora lidera una colonia de lechugas marcianas.");
      mensajeFinal += "🚀 Tu planta se fue al espacio. Ahora lidera una colonia de lechugas marcianas.\n";
    } else if (planta.agua >= 80 && planta.felicidad >= 80) {
      console.log("🌺 Tu planta sonríe. Cree que es un gato. Y tal vez lo sea.");
      mensajeFinal += "🌺 Tu planta sonríe. Cree que es un gato. Y tal vez lo sea.\n";
    } else if (planta.agua <= 20 || planta.energia <= 20) {
      console.log("🥀 Tu planta pidió vacaciones y se fue a mirar novelas.");
      mensajeFinal += "🥀 Tu planta pidió vacaciones y se fue a mirar novelas.\n";
    } else {
      console.log("🤷‍♂️ No murió. No floreció. Solo... existe. Como los lunes.");
      mensajeFinal += "🤷‍♂️ No murió. No floreció. Solo... existe. Como los lunes.\n";
    }
  
    console.log("\n📊 Estadísticas finales:");
    console.log(`💧 Agua: ${planta.agua}`);
    console.log(`⚡ Energía: ${planta.energia}`);
    console.log(`🧬 Mutación: ${planta.mutacion}`);
    console.log(`😊 Felicidad: ${planta.felicidad}`);
  
    mensajeFinal += "\n📊 Estadísticas finales:\n";
    mensajeFinal += `💧 Agua: ${planta.agua}\n`;
    mensajeFinal += `⚡ Energía: ${planta.energia}\n`;
    mensajeFinal += `🧬 Mutación: ${planta.mutacion}\n`;
    mensajeFinal += `😊 Felicidad: ${planta.felicidad}`;
    
    alert(mensajeFinal);
  
    // Preguntar si quiere jugar de nuevo
    let jugarDeNuevo = confirm("¿Querés jugar de nuevo?");
    if (jugarDeNuevo) {
      reiniciarJuego();
    } else {
      alert("¡Gracias por jugar! 🌱");
    }
  }
  
  function reiniciarJuego() {
    // Resetear el estado de la planta
    planta.agua = 60;
    planta.energia = 50;
    planta.mutacion = 0;
    planta.felicidad = 50;
    
    // Limpiar consola
    console.clear();
    
    // Mostrar mensaje de reinicio
    alert("🔄 ¡Nuevo juego iniciado! 🌱");
    console.log("🔄 Juego reiniciado - Nueva planta creada");
    
    // Iniciar el juego nuevamente
    simularCicloDeVida();
  }
  
  // Simulación principal
  function simularCicloDeVida() {
    for (let dia = 1; dia <= 5; dia++) {
      console.log("\n" + "🌱".repeat(11));
      console.log(`📅 DÍA ${dia}`);
      console.log("🌱".repeat(11) + "\n");
  
      let accion = pedirAccion();
      aplicarAccion(accion);
    }
  
    mostrarResultadoFinal();
  }
   
  // Iniciar simulador cuando el DOM esté listo
  document.addEventListener('DOMContentLoaded', () => {
    // Mensaje inicial muy visible en consola
    console.log("🚨 ¡IMPORTANTE! 🚨");
    console.log("🚨 ¡ABRE LA CONSOLA DEL NAVEGADOR (F12) PARA VER EL JUEGO! 🚨");
    console.log("🚨 ¡IMPORTANTE! 🚨");

    setTimeout(() => {
      alert("🌱 ¡Bienvenido al Simulador de Planta Mutante! 🌱\n\nTendrás 5 días para cuidar a tu planta. \nElige sabiamente las acciones.\n\n⚠️ IMPORTANTE: Para ver el juego en la consola del navegador presiona (F12). Juega una primera partida y al finalizarla cancela. Luego, presiona (F5) para recargar la página y vuelve a jugar.");
      simularCicloDeVida();
    }, 500); // Espera medio segundo después de que el DOM esté listo
  }); 
  