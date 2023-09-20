# GoGoCar

This is a car rental web application that allows users in Ukraine to search,
select and save ads to favorites.

## Main page

First screen immediately lets the user know what resource he has landed on and
helps to navigate easily thanks to the header and “call to action” button. On
main page he can familiarize himself with how the application works, as well as
go directly to the catalog of cars that are available for rent using button
`Learn more` or `Open Full Catalog`.

## Catalog

This page contains a list of rental car ads that can be filtered by criteria
such as car brand, price per hour of use, and mileage. The cards provide all the
necessary information, which also includes a list of tags by which you can
analyze the search results. More ads appear on the screen after clicking the
`Load more` button. Also after clicking a heart icon in the upper right corner
of the card, the ad will be added to the list of favorites.

## Favorites

- Here the user can find all the ads he liked and view them again. When he
  clicks the heart icon (now blue) again, the ad will be removed from the list
  of favorites.

## Modal window

A window that opens when user clicks on any `Learn more` button in the ad
directory. It displays detailed information about the car, additional
accessories, functions, as well as the conditions under which the rental of this
car will be allowed.

# Technologies

- **React.js**;
- **React Router**;
- **CSS Modules**;
