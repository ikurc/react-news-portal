import generateID from './generateID';

class News {
    constructor(title, paper) {
        this.title = title;
        this.paper = paper.name;
        this.ID = generateID()
    }
}

export default News
