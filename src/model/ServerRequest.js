class ServerRequest {
    constructor() {}

    static status(response) {
        if (response.status >= 200 && response.status < 300) {
            return Promise.resolve(response)
        } else {
            return Promise.reject(new Error(response.statusText))
        }
    }

    static json(response) {
        return response.json();
    }

    fetchNews(requestURL, paper){
        fetch(requestURL)
            .then(ServerRequest.status)
            .then(ServerRequest.json)
            .then((data) => {
                data.forEach(function(news) {
                    newsStorage.addNews(new News(news.title, news.body));
                    paper.notifyPortals(news.title)
                });
            })
			.catch((error) => {
                console.log('Fetch Error :', error);
            });
    }
}

export default ServerRequest
