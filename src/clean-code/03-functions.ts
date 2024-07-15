(() => {
  // función para obtener información de una película por Id
  function getMovieById(movieId: string) {
    console.log({ movieId });
  }

  // función para obtener información de los actores de una película - Actors o Cast // id = movieId getMovieCast
  function getMovieCastById(movieId: string) {
    console.log({ movieId });
  }

  // funcion para obtener el bio del actor por el id
  function getActorBioById(ActorId: string) {
    console.log({ ActorId });
  }

  interface Movie {
    cast: string[];
    description: string;
    rating: number;
    title: string;
  }

  // Crear una película
  function createMovie(movie: Movie) {
    console.log({ movie });
  }

  interface Actor {
    birthdate: Date;
    fullName: string;
  }

  function checkFullName(fullName: string) {
    console.log({ fullName });

    return true;
  }

  // Crea un nuevo actor
  function createActor(actor: Actor): boolean {
    // tarea asincrona para verificar nombre
    // ..
    // ..
    if (checkFullName(actor.fullName)) return false;

    console.log("Crear actor");
    return true;
  }


  // Continuar

  const getPayAmount = ({ isDead = false, isSeparated = true, isRetired = false }): number => {

    if (isDead) {
      return 1500;
    }

    if (isSeparated) {
      return 2500;
    } 
    
    return (isRetired) ? 3000 : 4000;

}
})();
