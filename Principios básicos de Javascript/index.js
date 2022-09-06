class Usuario {
  constructor(name, lastname, books, pet) {
    this.name = name;
    this.lastname = lastname;
    this.books = books;
    this.pet = pet;
  }

  getFullName() {
    console.log(`Hola ${this.name} ${this.lastname}, como estás?`);
  }

  addPet(pet) {
    this.pet.push(pet);
    console.log(`Tu ${this.pet} ha sido registrada correctamente`);
  }

  countPets() {
    let quantPets = this.pet.length;
    console.log(`${this.name} ${this.lastname} tiene ` + quantPets + " mascotas");
  }

  addBook(title, author) {
    return this.books.push({ title, author });
  }

  getBookNames() {
    let userBooks = this.books.map((books) => {
      return books.title;
    });
    console.log(userBooks);
  }
}

let user1 = new Usuario("Eduardo", "Medrano", [{ title: "Steve Jobs", author: "Steve Jobs" }], ["toby"]);

console.log("****************************");
user1.getFullName();
console.log("****************************");
user1.getBookNames();
console.log("****************************");
user1.countPets();
console.log("****************************");
user1.addBook("Doctor Strange", "Marvel");
user1.addBook("Game Ender", "Ender");
console.log("****************************");
user1.getBookNames();
