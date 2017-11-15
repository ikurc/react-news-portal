class News {
    constructor(title, body) {
        this.title = title;
        this.body = body;
        this.ID = News.generateID()
    }

	static generateID(a,b){
        for (b=a=''; a++<36; b+=a*51&52 ? (a^15?8^Math.random()*(a^20?16:4):4).toString(16):'-');
        return b
    }
}

export default News
