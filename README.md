# employee-contact
A simple solution to manage employee contact info across employers implemented using docker, mongo, and react.

<img src="https://cloud.githubusercontent.com/assets/1816471/15063802/28a677bc-131b-11e6-96e9-d970c960e926.png" width="269">
<img src="https://cloud.githubusercontent.com/assets/1816471/15063832/8c823596-131b-11e6-89dd-a27c2494afe9.png" width="270">
<img src="https://cloud.githubusercontent.com/assets/1816471/15063850/ba48a406-131b-11e6-8028-46c0b84b9532.png" width="270">

###Goals:

- Provide a user interface for managing employee contact information. 

- Support an interface that allows for creating, reading, updating, and deleting an employee.

###Todo:

- tests for server and client

- error handling and presentation in UI

- production / dev builds and workflow (hot reload)

- less/sass with webpack

- yoeman generator,  skeleton / boilerplate version

- figure out why linter runs differently locally vs in docker container

- improve docker setup - slimmer, different strategy around git clone perhaps

- improve / cleanup UI components:
  * icons/theme/fonts - node-font-awesome or alternative(http://alternativeto.net/software/font-awesome/?sort=recentlikes)
  * list view - sort, more info per line (responsive), icons to left and for hover(edit)
  * contact view - picture, edit then view
  * menu - is messy, clean up
  * more focus on desktop view, verify mobile view
