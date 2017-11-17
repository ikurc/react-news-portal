class Control {
  constructor(model) {
    this.model = model
  }

  handleChange = () => {
    console.log(this.model)
  }
}

export default Control
