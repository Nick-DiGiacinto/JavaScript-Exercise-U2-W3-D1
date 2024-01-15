class User {
    constructor(_firstName, _lastName, _age, _location) {
      (this._firstName = _firstName),
        (this._lastName = _lastName),
        (this._age = _age),
        (this._location = _location),
        (this.older = function () {
          if (this._age > utente2._age) {
            console.log(
              `My name is ${this._firstName} and i am the older one`
            );
          } else {
            console.log(
              `My name is ${utente2._firstName} and i am the younger one`
            );
          }
        });
    }
  }
  
  const utente1 = new User("Mirco", "Ruggeri", 24, "Piemonte");
  console.log(utente1);
  
  const utente2 = new User("Daniele", "Collodi", 22, "Toscana");
  console.log(utente2);
  
  console.log(utente1.older(utente2));
  console.log(utente2.older(utente1));