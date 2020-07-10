[![Build Status](https://travis-ci.com/nyu-software-engineering/spring-2020-crazy-phoenix.svg?branch=master)](https://travis-ci.com/nyu-software-engineering/spring-2020-crazy-phoenix)

# Project Description
Transportation for Everyone is a web application with the goal of providing accessible public transportation routes for the disabled within
New York City. A map of the city will be visible for reference. Users will be able to input their desired start and end points. The 
application will use data available from the MTA to show users possible subway and bus routes they can take which have accomodations for 
the disabled(such as ramp access). Users can then pick a route and see detailed instructions on how to follow it.

Our MVP will consist of the following main features:
* Account creation
* Login functionality
* Route generation
* Route selection

# to run
* database (Mongo DB, either on local machine or Atlas) must be already running.
* in the back-end directory, in the console, type node server.js
* in the front-end directory, in another console, type npm start.
* type in http://localhost:3000/login
This should direct you to a login page. Create account (by clicking on the create account page), then login.
Our code on GitHub doesn't include the key for Google Maps API. In order to search for directions, please obtain your key or contact us.


# Project History
This project was originally proposed by Ayako after thinking about how Google Maps was not sufficient for people with disabilities. 
Our team decided on this project because we thought it would lead to an interesting and useful finished product within the timeframe 
and scope of this class.

# How to Contribute
[Contributing](https://github.com/nyu-software-engineering/spring-2020-crazy-phoenix/blob/master/CONTRIBUTING.md)

# Additional Links
[Prototype](https://invis.io/SPW6ONDHE5K)
