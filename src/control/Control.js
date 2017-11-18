class Control {
  constructor(model) {
    this.model = model
  }

  handleChange = () => {
    console.log(this.model)
  }

  addNews(news) {
    this.model.storage.addNews(news);
    this.model.trigger();
  }

  addUser(user) {
    this.model.storage.addUser(user);
    this.model.trigger();
  }

  deleteUser(user) {
    this.model.storage.deleteUser(user);
    this.model.trigger();
  }

  subscribe(paper, user) {
    this.model.subscribe(paper, user)
    this.model.trigger();
  }

  unsubscribe(paper, user) {
    this.model.unSubscribe(paper, user)
    this.model.trigger();
  }

  subscribeOnPaper(papers) {
    papers.forEach(paper => paper.subscribePortal(this.model.notify))
  }

  getFromServer() {
    console.log("getFromServer() from controller")
  }
}

export default Control
