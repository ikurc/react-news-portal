import User from "./User"

class Robot extends User {
	constructor(name) {
		super(name)
		this.name = `${name}_bot`
	}

  handleUpdate = (data) => {
      console.log(`${this.name} recieved in bytes "${data}"`)
  }
}

export default Robot
