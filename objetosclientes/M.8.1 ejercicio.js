const buscarPorDni = () => {
    let preguntaDni = prompt(
      "Dime tu DNI para saber si estás registrad@ en la plataforma"
    );
    let personaEncontrada = personas.find((persona) => persona.dni === preguntaDni);
    let posicion = personas.findIndex((persona) => persona.dni === preguntaDni);

    if (preguntaDni.length < 8) {
      alert("El DNI debe contener 8 números");
    } else if (!personaEncontrada) {
      alert("No estas registrad@");
    } else {
      alert(`Bienvenid@ ${personaEncontrada.nombre}`);
      alert(`Estás en la posición número: ${posicion}`);
    }
  };

  const personasSameHobby = () => {
    let pregunta = prompt("¿Cuál es tu hobby?");
    let hobbyEncontrado = personas.filter((persona) =>  persona.hobbies.includes(pregunta));

    if (hobbyEncontrado.length === 0) {
      alert("No hay ninguna persona con el mismo hobby");
    } else {
       let nombres = hobbyEncontrado.map((persona) => persona.nombre).join(",")
       alert(`Personas con el mismo hobby: ${nombres}`);
    }
  };

  const totalDeHobbies = () => {
    let totalHobbies = personas.reduce((allHobbies, persona) => {
      return Array.from(new Set([...allHobbies, ...persona.hobbies]));
    }, []);

    alert(`El total de hobbies es : \n${totalHobbies.join("\n")}`);
  };

  const HobbiesConSomeInclude = () => {
    let pregunta = prompt("Dime un hobby y te diré quienes lo tienen");
    let hobbyEncontrado = personas.some((persona) =>persona.hobbies.includes(pregunta));
    if (hobbyEncontrado) {
      alert("Si, al menos hay una persona con ese hobby");
    } else {
      alert("No hay nadie con ese hobby.");
    }
  };

  const EncontrarPrimeraPersonaHobby = () => {
    let pregunta = prompt(
      "Dime un hobby y te diré la primera persona que tiene el mismo hobby..."
    );
    let personaEncontrada = personas.find((persona) =>
      persona.hobbies.includes(pregunta)
    );

    if (personaEncontrada) {
      alert(
        `La primera persona encontrada con el hobby ${pregunta} es ${personaEncontrada.nombre}`
      );
    } else {
      alert("No se encontró ninguna persona con ese hobby");
    }
  };

  const arrayNuevoMayusculas = () => {
    let nuevoArray = personas.map(persona => persona.nombre.toUpperCase());
    alert(`Nombres en mayúsculas : ${nuevoArray.join(", ")}`)
  }

  const buscarDNI = () => {
    buscarPorDni();
  };
  const personasMismoHobby = () => {
    personasSameHobby();
  };

  const totalHobbies = () => {
    totalDeHobbies();
  };

  const HobbySomeInclude = () => {
    HobbiesConSomeInclude();
  };

  const primeraPersonaHobby = () => {
    EncontrarPrimeraPersonaHobby();
  };

  const arrayNuevo = () => {
    arrayNuevoMayusculas()
  }
