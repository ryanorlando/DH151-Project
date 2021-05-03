# Updated Proposal
## Introduction
This project will be about the weight of data and internet usage in the modern era, with an emphasis on the environmental impact. Our group (called Team Data) will be 
investigating this issue with the goal of determining its severity and investigating potential solutions. The final project we are working towards is a HTML website with an 
interactive map that is designed to provide insights into the relationship between data usage and carbon emissions.  
## Team Members

<img src = "https://github.com/ryanorlando/DH151-Project/blob/396721582cffd3521aa87da2a2c74b820973d362/profile%20photos/33A44E4A-C206-46D9-9508-245EFA8A486F-683AF7CF-FF79-4F64-91E1-7096E3E7D60C.jpg" width = "250">

Ainsleigh Douglas - Designer  
Will focus on the design and visual aesthetic of the map and data visualization outputs. For this midterm assignment she took charge of the web design portion

<img src = "https://github.com/ryanorlando/DH151-Project/blob/396721582cffd3521aa87da2a2c74b820973d362/profile%20photos/IMG_4117.jpg" width = "250">

Ryan Orlando - Content Creator  
Will primarily aid with narrative development and data analysis. For this midterm assignment he took charge of applying the layers to the map. 

<img src = "https://github.com/ryanorlando/DH151-Project/blob/8622e4a100feea39ed027f2dde0d8a5a96b159cc/profile%20photos/IMG_1471%20copy.jpeg" width = "250">

Sebastien Dills - Data Analytics and Historical Background  
Will work in data analytics and help provide a historical background. For this assignment I focused on editing our proposal. 

## Overview
In this project, we want to investigate the environmental impact of technology, particularly the internet and web-hosting services. Internet access and usage requires an enormous 
amount of energy, and there are now over 2000 data centers around the world. These data centers are a significant source of carbon emissions, and have a large impact on the total 
carbon footprint of the world. Our goal is to investigate where these data centers are and compare those locations to areas with high carbon emissions, with the goal of determining 
if internet usage is one of the leading causes of carbon dioxide pollution. This research will potentially push the world to develop new, more efficient ways to host internet access 
as the climate change crisis continues to worsen. The connection is studied and scientifically proven, but we want to provide a clear way to intuitively show the effects of this 
issue. There is a lack of clear data on this availble on the internet so we think our site can provide real value. With such a large scope and issues that are remarkably complex, 
we are aware that we will be unable to truly capture the full breadth of this issue, or even definitively prove a true relationship between the two variables. As such, our primary goal 
is to provide a strong resource for education and awareness growth.

## Methodology
Web mapping will be used as a main methodology for this investigation. The nature of our research requires us to compare location data between data centers and carbon emissions, 
with the goal of analyzing this relationship to determine the severity of this issue. Using mapping will allow us to create a cohesive story regarding big data storage and the 
impact it has on climate change as a whole. Mapping will not make up the entirety of the project, but it will be the main method through which we present our final findings. 
More research efforts will be devoted to reading literature and viewing other similar research projects so we can create a full picture of the issue at hand. We will also include 
written components, data visualizations and statistics that don't fit into a map.

## Technical Scope
We will be focusing on the geospatial relationship between the developing data centers and their environmental impact. This will involve us taking a look at their geolocation and 
comparatively mapping them on a mercator map. The workflow for something like this will involve us programming in HTML and using git to collaboratively create a web page. 
Programs like leaflet and JavaScript will allow us to create interactive maps in order to make more immersive visualizations for the viewer. We are doing all of this through 
Visual Studio Code. 

## Geographic Scope
In terms of geographic scope the entire world is of relevance in terms of the environment and access to the internet and emerging technologies. When it comes to tracking the 
impact of actual data centers much of the geographic information will be centered in the United States who accounts for around 40 percent of cloud and internet data centers. 
Additional regions of importance are Europe, East Asia and Australia; specifically Japan, China, Germany and the United Kingdom. We will see that many countries of South America 
and Africa are far less represented in terms of concentrations of data centers. The implications and reasons for this are worth investigating.

## Data Update

**Dataset #1:** [Data Center Locations](https://docs.google.com/spreadsheets/d/1xN3N2g7UtXSojj0bK3SVI-5LIGqJrMuJOjnGYc_XlC4/edit#gid=0) 

This dataset will be used to find the locations of the world's data centers. This data was not sorted in a useable format, so we parsed through it to create a simpler spreadsheet. 
Once this has happened, we will be able to dig deeper to look at the geographic impact of data centers, from their land occupancy to their actual physical space requirements. This could be accomplished through the creation of polygons to map 
land occupation of data centers.

**Dataset #2:** [CO2 Emissions per Unit of GDP](https://hub.arcgis.com/datasets/undesa::indicator-9-4-1-carbon-dioxide-emissions-per-unit-of-gdp-kilogrammes-of-co2-per-constant-2010-united-states-dollars-5?geometry=140.855%2C-39.570%2C-72.895%2C62.146)

This dataset can be used to look at the contributions of each country to global CO2 emissions. The dataset will provide a useful way to map which countries contribute 
the most to global CO2 emissions, and can perhaps be compared to our first dataset in search of a relationship between internat usage and carbon emissions. We can use this data 
as part of popup boxes to be viewed by the user.

## Storyboard:

<img src = "https://github.com/ryanorlando/DH151-Project/blob/33a6ee928a2b10b7264e9d390dd3aaf1d9ece3df/Assignment2/UX%20Design%20Images/StoryBoard-wireframe.png">

Key elements:
- navigation menu in order to easily find certain parts of the project
- CO2 live emissions timer in the top corner that follows the user as they scroll
- horizontal scrolling so the site is not excessively long

In this storyboard, we focused on the broad elements of our final website that we want the user to interact with. In more specific terms, our final map will plot carbon 
dioxide emissions as well as global data center locations as layers on an interactive map. A sidebar will allow the user to zoom to any country in the dataset, and provide a 
glimpse into a country's emissions contributions as well as their population of data centers. In addition, our site will include information from recent research into this issue, 
as well as links and further resources to promote education. All of these elements will be set up with the ultimate goal of providing reliable and useful information on this 
topic, in order to bring attention to this problem, which often goes overlooked. 
