import generateID from './generateID';

class User {
	constructor(name) {
		this.name = name;
		this.ID = generateID();
	}
}

export default User
