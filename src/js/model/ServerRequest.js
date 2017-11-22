import News from './News';

class ServerRequest {
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

    static fetchNews(requestURL, paper){
        return (fetch(requestURL, {
            headers : {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        })
            .then(ServerRequest.status)
            .then(ServerRequest.json)
            .then(data => {
                let random = Math.floor(data.length * Math.random());
                let dataNews = data[random];
                return new News(dataNews.title, paper, dataNews.body)
            }).then(news => {
                paper.notifySubscribers(news);
                return news;
            }))
            .catch(error => console.log('Fetch Error :', error));
    }
}

export default ServerRequest
