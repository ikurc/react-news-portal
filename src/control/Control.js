class Control {
  constructor(model) {
    this.model = model
  }

  handleChange = () => {
    console.log(this.model)
  }

  updateNews(news) {
    this.model.storage.addNews(news);
    this.model.trigger();
  }

  updateUsers(user) {
    this.model.storage.addUser(user);
    this.model.trigger();
  }

  subscribe(paper, user) {
    this.model.subscribe(paper, user)
    this.model.trigger();
  }

  subscribeOnPaper(papers) {
    papers.forEach(paper => paper.subscribePortal(this.model.notify))
  }
}

export default Control
