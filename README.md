# News Scraper

## Overview
News Scraper app uses a web scrapping Node npm package Cheerio to scrape news from other site, in this case it is [thehackernews.com](https://thehackernews.com). Users can also view, leave and delete comments on each news article. Articles and notes are save in MongoDB databse. The app is deployed to Heroku with mLab provision to set up remote MongoDB databse. Try it out [news-scraper-01.herokuapp.com](https://news-scraper-01.herokuapp.com/).

![homepage](public/images/homepage.PNG)

### Technology used:
- Node.js
- Express
- Cheerio
- MongoDB
- Mongoose
- Axios
- Handlebars
- jQuery
- Bootstrap
- Heroku
- mLab


### How the App Works
Whenever a user visits the site, the app scrapes stories from a news outlet and displays them for the user. Each scraped article is saved in MongoDB database. The app scrapes and displays article title, summary and link.

Users is also able to leave comments on the articles displayed and revisit them later. The comments are saved to the database as well and associated with their articles. Users is also able to delete comments left on articles. All stored comments should are visible to every user.

### How to Setup 
1. After cloning this repo run `npm install` to install all dependencies. 
2. We use Mongoose to setup and connect to MongoDB database. 
3. Inside your terminal or Bash window run `node server` and navigate to `localhost:3000` to view the app.

### Helpful Links

* [MongoDB Documentation](https://docs.mongodb.com/manual/)
* [Mongoose Documentation](http://mongoosejs.com/docs/api.html)
* [Cheerio Documentation](https://github.com/cheeriojs/cheerio)
