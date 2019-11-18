export default class NewsApiServices {
    _apiBase = 'https://newsapi.org/v2/everything?q=apple&from=2019-11-16&to=2019-11-16&sortBy=popularity&apiKey=';
    _key = 'c8a9937851e14e1d82d33ee6f782807d';

    getResource = async () => {
        const res = await fetch(`${this._apiBase}${this._key}`);
    
        if (!res.ok) {
          throw new Error(`Could not fetch, received ${res.status}`)
        }
        return await res.json();
    };

    getAllNews = async () => {
        const res = await this.getResource();
        return res.articles.map(this._transformNews);
    };

    _transformNews = (news) => {
        return {
          id: Math.floor(Math.random() * 10000),
          title: news.title,
          description: news.description,
          img: news.urlToImage,
          author: news.author,
          date: news.publishedAt,
          content: news.content
        };
    };
}