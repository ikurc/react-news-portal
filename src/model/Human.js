import User from "./User"

class Human extends User {
  handleUpdate = (data) => {
    this.news = [...this.news, data.title]
  }
}

export default Human
