import User from "./User"
import Actions from '../flux-model/Actions'

class Human extends User {
  handleUpdate = (data) => {
    this.news = [...this.news, data.title]
    Actions.getUserNews(this.ID)
  }
}

export default Human
