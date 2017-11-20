import User from "./User"

class Robot extends User {
	constructor(name) {
		super(name)
		this.name = `${name}_bot`
		this.news = []
	}

  handleUpdate = (data) => {
		let binaryData = this.textToBinary(data)
		this.news = [...this.news, binaryData]
  }

	textToBinary = (data) => {
		let title = data.title
		return title.split('').map(char => {
			return char.charCodeAt(0).toString(2)
		}).join(' ')
	}
}

export default Robot
