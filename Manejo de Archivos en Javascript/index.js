    const fs = require("fs");

    class Container {
      constructor(file) {
        this.file = file;
      }

      async save(product) {
        let content = await fs.promises.readFile(this.file);
        let contObj = JSON.parse(content);

        let newId;
        newId = contObj.length > 0 ? contObj.length + 1 : 1;
        product.id = newId;

        contObj.push(product);
        await fs.promises.writeFile(this.file, JSON.stringify(contObj));
      }

      async getAll() {
        let content = await fs.promises.readFile(this.file);
        let contObj = JSON.parse(content);
        console.log(contObj);
        return contObj;
      }

      async getById(id) {
        let contObj = await this.getAll();
        let result = contObj.find((obj) => obj.id == id);
        console.log(result);
      }

      async deleteById(id) {
        let contObj = await this.getAll();
        let newObj = contObj.filter((obj) => obj.id != id);
        await fs.promises.writeFile(this.file, JSON.stringify(newObj));
      }

      async deleteAll() {
        await fs.promises.writeFile(this.file, "[]");
        console.log("Borrado Completamente", this.file);
      }
    }

    let container = new Container("productos.txt"); // Archivo 

    container.deleteAll();

  const ejecutor = async () => {
    await container.save({ name: "Producto A", price: 100201 });
    await container.save({ name: "Producto B", price: 100201 });
    await container.save({ name: "Producto C", price: 100201 });
    await container.save({ name: "Producto D", price: 100201 });
    await container.save({ name: "Producto F", price: 100201 });
  };

  ejecutor();




