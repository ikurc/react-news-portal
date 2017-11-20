import User from "./User"

class Human extends User {
    constructor(name) {
        super(name)
    }

	  handleUpdate = (data) => {
        console.log(`${this.name} has read: ${data.title}`)
        // return data.title
    }
}

export default Human
