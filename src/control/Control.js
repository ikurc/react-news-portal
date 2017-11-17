class Control {
  constructor(model) {
    this.model = model
  }

  handleChange = () => {
    console.log(this.model)
  }

  update(news) {
    this.model.storage.addNews(news);

    this.model.trigger();
  }
}

export default Control
