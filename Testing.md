## Posts

| Test | Description | Steps | Expected | Pass/Fail |
| -------| ------ | --------| -------- | -------- |
|P001|Ensure post list page returns all posts  | Load the landing page | All posts displayed in continuous scroll | Pass |
| P002| Ensure post detail page is displayed by clicking on a post | Click on any of displayed posts | Post detail page displayed with all fields | Pass |
| P003| Post can be edited by owner| Go to post detail of own post and click three dots icon, then the edit icon | User can edit all elements of post successfully | Pass |
| P0ß4 | Post can be deleted by user who created it| Go to post detail of own post and click three dots icon, then the delete icon| User can delete post successfully |Pass |
| P005 | Post should correctly calculate comment count | Make several comments on same post and ensure counter keeps track | Comments successfully counted | Pass |
| P006 |Average rating of post should be updated after new rating | Rate post and check that average rating changes | Average rating is updated after each new rating | Pass|
| P007 | Like counter functions correctly | Like a post and ensure likes counter increases and icon changes to filled |Likes accurately counted | Pass |
| P008 |Logged in user can successfully create  post | Log in, click on "add post", create content and click save |Post should be saved and displayed at top of post list | Pass |
| P009 |Search function should work correctly | Add search to search bar in post list | ONly posts including search keyword should be displayed | Pass |
| P010| Unlie function should function as expected | Like a post and then subsequently unlike it | Icon should change when unliked | Pass |
| P011| feed should only show posts from follwed users | Click on feed icon | Only posts be follwed users are shown |Pass|
| P012 |liked icon should only show posts the logged in user has liked | Click on liked icon | Only liked posts are shown | Pass |
| ?013 | User can leave a rating | Go to post detail view and click leave a rating, add a number from 1.5 and save | User is redirected to post page and average rating has been updated | Pass|

## Comments
| Test | Description | Steps | Expected | Pass/Fail |
| -------| ------ | --------| -------- | -------- |
| C001|Logged in user can create a comment| Login in, click on a post and add a comment | Comment can be saved and is shown under the post | Pass |
| C002| User can edit a comment | Make a comment on a post, then click the three dots icon and edit the comment  | Updated comment is shown in the comments box | Pass |
| C003 |User can delete a comment they have posted| Leave a comment on a post, click on the three dots icon and the the delete icon | Comment is deleted and no longer appears in the comments box | Pass |
| C004 |All comments can be viewed | Click on a post with multiple comments | All comments can be seen  | Pass |

## Profiles

| Test | Description | Steps | Expected | Pass/Fail |
| -------| ------ | --------| -------- | -------- |
| PR01 |User can edit profile | Navigate to profile page, click on three dots, select edit, update and save | Updated information appears on profile | Pass |
| PR02 | Profile page displays correct content | Navigate to profile page | Profile page displays correct info as per profile model | Pass |
| PR03| Popular profiles component displays| Navigate to posts page | Popular profiles appear as expeacted on the right | Pass |
| PR04 | User can follow other users| Click the follow button next to a popular profile | utton changes from follow to unfollow | Pass |
| PR05| Users can unfollow popular profiles | Click the unfollow button next to a user avatar you are following | Button changes from unfollow to follow | Pass |
| PR06 | User can change username | Navigate to profile page, click three dots icon then change username | New username is displaed in the profile page | Pass |
| PR07| User can change their password| Navigate to profile page, click three dots icon, then change password| User successfully changed their password  | Pass |
| PR08| Aöö posts from user can be seen on profile | Navigate to profile page and view content underneath details | All users posts are displayed | Pass |

## Authorisation

| Test | Description | Steps | Expected | Pass/Fail |
| -------| ------ | --------| -------- | -------- |
|A001|User can register for site |Navigate to landing page, click sign up, fill in form and then sign up | User successfully registered  | Pass |
| A002|User can sign in |Navigate to landing page, click sign in icon, add details and be redirected to home page |User successfully logged in  | Pass |
| A003 | Singed out users can see correct navigations icons | navigate to landing page as logged out user | Only home, sign in and sign up are visible | Pass |

## Contact Form

| Test | Description | Steps | Expected | Pass/Fail |
| -------| ------ | --------| -------- | -------- |
| C001 | User can access contact form via the icon on the navigation menu | Click on the contact us icon | The contact form is displayed | Pass |
| C002 | User can submit form | | | |
| | | | | |
| | | | | |
| | | | | |
| | | | | |
