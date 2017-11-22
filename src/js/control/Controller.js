class Controller {
  constructor(model) {
    this.model = model
  }

  addNews(news) {
    this.model.storage.addNews(news);
    this.model.trigger()
  }

  addUser(user) {
    this.model.storage.addUser(user);
    this.model.trigger()
  }

  deleteUser(user) {
    this.model.storage.deleteUser(user);
    this.model.trigger()
  }

  subscribe(paper, user) {
    this.model.subscribe(paper, user);
    this.model.trigger()
  }

  unsubscribe(paper, user) {
    this.model.unSubscribe(paper, user);
    this.model.trigger()
  }

  subscribeOnPaper(papers) {
    papers.forEach(paper => paper.subscribeSubscribers(this.model.notify))
  }

  unSubscribeFromAllPapers(user) {
    this.model.unSubscribeFromAllPapers(user);
    this.model.trigger()
  }
}

export default Controller
