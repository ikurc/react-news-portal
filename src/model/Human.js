import User from "./User"

class Human extends User {
    constructor(name) {
        super(name)
    }

	  handleUpdate = (data) => {
        console.log(`${this.name} has read: ${data}`)
    }
}

export default Human
