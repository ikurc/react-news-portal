import User from "./User"

class Human extends User {
    constructor(name) {
        super(name);
    }

	  handleUpdate = (data) => {
        this.news = [...this.news, data.title]
    }
}

export default Human
