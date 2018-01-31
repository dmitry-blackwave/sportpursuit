export default class Config {
  static get baseApiUrl() {
    return 'https://raven.sportpursuit.com/api/v2.0.0/';
  }

  static get options() {
    return {
      main: 'https://www.sportpursuit.com/',
      urlList: {
        item: 'https://www.sportpursuit.com/catalog/product/view/id/',
      },
    };
  }

  static get methodList() {
    return {
      home: 'pages/home/1/32/123/',
      menu: 'category/navigation/5/1/',
      bestSellers: 'products/bestsellers/1/123/10/GB/',
    };
  }

  static api(method) {
    return this.baseApiUrl + this.methodList[method];
  }
}
