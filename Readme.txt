this is mock of google keep user interface to some extent.

This is and angular application. So following are the steps to run this application.

1)npm install
2)ng serve

Note:- if angular cli is not installed then install it with npm install -g  @angular/cli


Interfaces that are added here are :-

1) You can add notes here
2)you can search through the notes and it will search with respect to title of notes
3)title is kept as mandatory to save in the backend server so it should be provided while saving
4) image , body is kept as optional


The backend server is supported with node js express application and data is stored in mysql

Note : I didnt do the authorization step in this application since the main focus was on the
notes application in general. For testability as an example i made one integration test for notescomponent

