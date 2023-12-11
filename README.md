# ArtXChange

ArtXChange is a social media platform for artists and art lovers. Users can posts images of their work, which can be commented on and rated by other site users. Users can also follow the profiles of specific users if they choose to.

THe live site can be found here: [ArtXChange](https://pp5-frontend-4b5821b7dc88.herokuapp.com/)

![homepage](../pp5-frontend/src/assets/screenshots/Homepage%20Desktop.png)
![homepage tablet](../pp5-frontend/src/assets/screenshots/Homepage%20Tablet.png)
![homepage mobile](../pp5-frontend/src/assets/screenshots/Screenshot%20mobile.png)

## Site Goals

ArtXChange is aimed at art creators and enthusiasts. It aims to connect artists from accross the globe, allowing users to view many pieces of art in one space and eventually lead to increased exposure to all the contributing artists.

## Agile Planning

The project was developed using agile methodologies. User stories were created detailing the specific needs of the site users and implemented step by step. Each user story was assigned a label according to importance, ranging from "Must haves", through "Should haves", "could haves" to "Would be nice to have". This mothodology ensures the most important aspects of the project get implemented first.
A Kanban board was created using GitHub Projects.

## Epics

### Setup

This covers all the requirements involved in setting up the application

### Posts

This covers all stories relating to user posts, allowing them to access the API for CRUD functionality

### Profiles

This covers all stories relating to user profiles, allowing them to access the API for CRUD functionality

### Comments

This covers all stories relating to user comments, allowing them to access the API for CRUD functionality

### Reviews

This covers all stories relating to user reviews, allowing them to access the API for CRUD functionality

## User Stories

### Posts

- As a logged in user I can create posts and share images

- As a user I can continue scrolling through content so that I don't have to switch to a new page

- As a user I can edit and delete my posts so that I have full control over my information

- As a logged in user I can view the posts I liked so that I can find the posts I enjoyed the most

- As a logged in user I can edit and delete my posts so that I have full control over my information

- As a logged in user I can like posts so that I can support my favourite artists

- As a logged in user I can view individual posts so that I can learn more about it

- As a logged in user I can view the posts I liked so that I can find the posts I enjoyed the most

- As a logged in user I can view filtered content so that I can keep up to date with users that interest me

### Profiles

- As a user I can create a profile so that other users can see my information

- As a logged in user I can edit my profile so that I can keep my info up to date

- As a logged in user I can view all posts by a specific user so that I can catch up on their latest contributiions

- As a user I can view avatars of other users so that I can recognise individual users easily

- As a user I can see a list of the most popular profiles so that I can see which profiles are popular

- As a user I can view other user profiles so that see their posts and learn more about them

- As a user I can view statistics about posts so that see relevant likes and comments

### Setup

- As a user I can see a favicon so that I can easily identify the website if multiple tabs are open

- As a logged out user I can easily see the sign in and sign up options so that I can access the main site quickly

- As a user I can have a fully responsive navigation menu so that access all the site pages quicky

- As a user I can contact the site so that any issues or questions can be addressed

## Features

A site favicon was implemented using the application logo. This allows users to easily identify the site when multiple sites are open simultaneously

![Favicon](../pp5-frontend/src/assets/screenshots/Favicon.png)

A responsive navigation menu was implemented. On a desktop, all icons are visible. These shrink into a burger menu as the screen size decreases. This ensures that no icons overlap when the screen width is not available.

### Landing Page

Initially, the user is presented with the option to sign in or sign up. All other icons are hidden until a user has either registered or logged in.

![Sign In Page](../pp5-frontend/src/assets/screenshots/Sign%20in%20Page.png)

Once a user has registered and signed in the following navigation icons are displayed:

- Add post

- Home

- Feed

- Liked

- Contact us

- Sign out

- Profile Image

![Logged in Navigation](../pp5-frontend/src/assets/screenshots/Logged%20in%20nav.png)

The site logo is always displayed on the left of the navigation. When a page is active, the relevant icon changes colour to the red of the logo to show the user which page they are currently on.

### Home

The homepage displays all the most recent posts, starting with the newest. Theses posts are visible to both logged in and logged out users. They are intended to tempt potential users into signing up to view more content.

### Posts

Both logged in and logged out users can click on an individual post to find out more about it. Comments and the average rating of the post are displayed, as well as the number of likes.

Infinite scolling was implemented, meaing posts are loaded continuously without the need for the user to change to the next page. Most recent posts are always loaded first, so that users are not confronted with content they may have already seen.

A user can click on an individual post to see more details

![post detail](../pp5-frontend/src/assets/screenshots/post%20detail.png)

Logged in users can like, comment on and rate each post. This ensures that unregistered users cannot spam individual posts anonymously, while registered users can really have their say.

![Comments](../pp5-frontend/src/assets/screenshots/Comments%20example.png)

Via the "add post" button, logged in users can create a post.

![Create post](../pp5-frontend/src/assets/screenshots/Create%20post.png)

Via the feed icon, users can view posts from users they have followed.

Via the liked button, users can view all of the posts that they have liked.

A search bar has been added, allowing users to search for users or for keywords present in either the title or the content of the posts available

![Search bar](../pp5-frontend/src/assets/screenshots/Search%20bar.png)

### Comments

There is a comment box below each post available to logged in users.

![Comment box](../pp5-frontend/src/assets/screenshots/my%20comment.png)

A comment count is also displayed underneath the post, showing how many users have left comments. The time the comment was left is also displayed, as well as the avatar and name of the user leaving the comment.

![Comment with date](../pp5-frontend/src/assets/screenshots/comment%20with%20date.png)

### Profiles

Profile pages have been implemented and can be viewed by clicking on the avatar displayed next to a post.
Users can also view their own profile by clicking on the avatar in the navigation menu.

If the user is the owner of a profile, they can edit all the relevant information as well as providing different images for the avatar via the three dot dropdown menu.

[Three Dot Dropdown](../pp5-frontend/src/assets/screenshots/Three%20Dots.png)

When a user is logged in, their profile image is displayed clearly in the top right of the navigation. This allows the user to know they are logged in and with which account. should they have more than one.

A component showing the most followed profiles is shown on the right hand sidde of the desktop version, moving to above the posts on smaller screens. Users can choose to follow or unfollwer these profiles by clicking the follow/unfollow button next to the avatar. The 10 most popular profiles are displayed on desktops, reducing to 4 on smaller screens.

[Popular Profiles](../pp5-frontend/src/assets/screenshots/Popular%20Profiles.png)

### Reviews

A button underneath each post redirects the user to a window where they can leave a rating from 1-5. The average rating of each post is also displayed underneath it.

[Rating](../pp5-frontend/src/assets/screenshots/Ratings%20Page.png) [Average Rating](../pp5-frontend/src/assets/screenshots/Avg%20Rating.png)

### Contact

A contact form is available by clicking the contact icon in the navigation menu. This allow both logged in and logged out users to get in touch with site with potential questions or issues they want to raise.

## Future Features

- Artists will be able to display links to their own websites, should users be interested in purchasing their art.

- I tried to implement a star rating system with a five star image but sadly no system I could find could be installed into my IDE. This would be the first thing I would like to implement going forward with the project.

- A messaging system for users to exchange private messages would also benefit the site greatly.

## Design

### Colour Scheme

The background colour of the app is azure, while the navigation menu has a background colour of RGB (210,222,250). The icons are crimson when active, reflecting the colour of the logo, which is also crimson with a black X in the centre.

### Typography

The main font of the site is "Ubuntu", taken from Google Fonts, with sans-serif as a backup font.

### Images

The images are all downloaded royalty free from the Unsplash website.

### Logo

The logo was designed by the developer

## Technology

- React
  Main framework to create the user interface

- Node
  Package manager user to install dependencies

- Eslint
  Linting tool user to ensure best practice coding standards

- Heroku
  Used for application deployment

- GitHub
  Repository for storing code

## Testing

Testing can be found in the [TestingMD File](../pp5-frontend/Testing.md)

## Deployment

The site was deployed to Heroku. The steps to deploy are as follows:

- Create a heroku account

- Create a new app by clicking the button in the top right hand corner

- Enter app name

- Enter region

- Create app

- Click the deploy tab and connect the app to the relevant GitHub repository

- Scroll to manual deploy and select the main branch

- Click deploy

## Version Control

The site was created using the gitpod code editor and pushed regularly to the GitHub repository.
The following git commands were used throughout to push the code to the repository:

git add . - add the files to the staging area before they are committed

git commit -m "message"- Commits changes to a local repository

git push - pushes the code to the GitHub repository

## Forking

Forks are used to either propose changes to some else`s project or use some else's project as a starting point for your own work.

- Navigate to the repository four want to fork

- Click on the fork button

- This will create a duplicate of the project in your GitHub repository

## Credits

The upload, no results and profile template images were provided by Code Institute during the walkthrough preceding this project.

I would like to thank my mentors, Sheryl Goldberg and Gareth McGirr for providing me with endless tips and tricks along the way.
