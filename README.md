# UFOs

## Overview

For this project we are making a webpage utilizing HTML and Javascript to display information relating to UFO sightings across the US. Working with Bootstrapp and css editing, we will make the page customizable and add a filter table to be able to sort UFO sightings based on date, city, state, country and shape.

### Software
VS Code \
HTML \
JavaScript \
ECMAScript \
Bootstrap \
CSS \

## Results
The filter table below lets you input data that will display the corresponding data that matches input. UFO sightings can be filtered by date, city, state, country and shape.

![Filter Table](https://github.com/roderickspells/UFOs/blob/main/readme%20pictures/filter.png)

Here you can see sightings filtered by "tx" indicating Texas.

![Filter by State](https://github.com/roderickspells/UFOs/blob/main/readme%20pictures/filter2.png)

Here you can see sightings filtered by date.

![Filter by Date](https://github.com/roderickspells/UFOs/blob/main/readme%20pictures/filter3.png)

Here you can see sightings filtered by shapes.

![Filter by Shape](https://github.com/roderickspells/UFOs/blob/main/readme%20pictures/filter4.png)

Here you can see sightings filtered by cities.

![Filter by City](https://github.com/roderickspells/UFOs/blob/main/readme%20pictures/filter5.png)



## Summary
Although this simple HTML filter table performs its intended purpose there are a few drawbacks of this. First, user input must match the data in the database exactly or no results will be shown. Secondly, if we input data in to a field such as "city", we must clear the data and press "enter" to refresh the maintable to display all available sightings again. The data does not simply refresh when you want to filter a different category.

There are a couple of improvements that can be added to make the webpage a little cleaner and easier to filter. First, we can add a "drop down" filter tab, that can function the way a "pivot table" in excel works. This would be a cleaner interface and allow the user to more clearly see what category they would like to search for and what isn't being filtered. A second improvement could simply be more data. There isn't enough "sightings" in this dataset to truly see the benefits of a filter table. A web scrapping element could be added to automatically populate more sightings as they are reported.

