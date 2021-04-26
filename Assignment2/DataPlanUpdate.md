# Data Plan Update

**Dataset #1:** [Individuals Using the Internet (% of the Population)](https://data.worldbank.org/indicator/IT.NET.USER.ZS)

This dataset provides a downloadable link to a CSV file that we will be able to use to map the internet usage of every country. With this data 
we can broadly estimate the contributions of individual countries to total global internet usage. This very simple dataset will provide a good starting point 
for us to look at which countries are widely using the internet, and therefore rely on data centers. It can be visualized through popup boxes on our final map.

**Dataset #2:** [Data Center Locations](https://www.datacenters.com/locations) 

This dataset will be used to find the locations of the world's data centers. This data is not sorted in a useable format, so it would require a Python script 
to parse through the entries to separate addresses to be geocoded and mapped. Once this has happened, we will be able to dig deeper to look at the geographic 
impact of data centers, from their land occupancy to their actual physical space requirements. This could be accomplished through the creation of polygons to map 
land occupation of data centers.

**Dataset #3:** [CO2 Emissions per Capita](https://data.worldbank.org/indicator/EN.ATM.CO2E.PC)

This dataset can be used to look at the contributions of each country to global CO2 emissions. The dataset will provide a useful way to map which countries contribute 
the most to global CO2 emissions, and can perhaps be compared to our first dataset in search of a relationship between internat usage and carbon emissions. We can use this data 
as part of popup boxes to be viewed by the user.
