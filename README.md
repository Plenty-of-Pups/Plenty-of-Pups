<h1 align="center"> Plenty-of-Pups </h1>
<h3 align="center"> CS-4393-001-Spring-2022-User Interfaces </h3>


## Table of Contents
1. [Overview](#Overview)
2. [Product Spec](#Product-Spec)
3. [Wireframes](#Wireframes)

## Overview

### Description
Plenty of Pups is an app that will connect dog owners with each other for the purpose of socializing their dogs. Whether they want exercise buddies, training partners, or just play time for their dogs, this app will enable dog owners to find ideal matches for their companions based on various different criteria such as dog breed, age, distance, etc.


### App Evaluation
- **Category: Social Media**
- **Mobile: This app would be primarily developed for mobile.**
- **Market: Any individual with a dog could choose to use this app.**
- **Habit: This app could be used as often or unoften as the user wanted depending on what exactly they're looking for their dog(s).**

### Languages

![JavaScript](https://img.shields.io/badge/-JavaScript-05122A?style=flat&logo=javascript)&nbsp;
![Java](https://img.shields.io/badge/-Java-05122A?style=flat&logo=Java&logoColor=FFA518)&nbsp;
![HTML](https://img.shields.io/badge/-HTML-05122A?style=flat&logo=HTML5)&nbsp;
![CSS](https://img.shields.io/badge/-CSS-05122A?style=flat&logo=CSS3&logoColor=1572B6)&nbsp;

### Collaborators

![Gaby](https://img.shields.io/badge/1-Gaby%20Castellanos%20-pink)
![Iris](https://img.shields.io/badge/2-Iris%20Han-red)
![Kelsey](https://img.shields.io/badge/3-Kelsey%20Maine-purple)
![Ethan](https://img.shields.io/badge/4-%20Ethan%20Chen-blue)
![Jacob](https://img.shields.io/badge/5-Jacob%20Dehoyos-green)


<p align="right">(<a href="#top">Back to top</a>)</p>

## Product Spec

### 1. User Stories

* User log in and creation page
  * [ ] User able to login with username and password
  * [ ] sign up
* Create User Profile
  * [ ] Users will create a profile by first picking a username and password. Then they will input their information: name, email, number, biography
  * [ ] Users will have an option to add a pup profile, which will lead to the ‘Create Pup Profile’ function
  * [ ] Confirmation with an email to verify your account, done your account will be shown to others as ‘verified’
  * [ ] Users can link their accounts with other social media platforms. If they do  it will be displayed on their account for others to see
* Edit User Profile
  * [ ] Users will be able to go back and change any information in their profile
* Create Pup Profile(s)
  * [ ] Pup profiles will be linked to a user’s profile. They will include information about the pup: breed, age, location, gender, size, temperament, preferred activities, biography, profile picture, vaccination status, neutered/spayed
* Edit Pup Profile
  * [ ] Users can make any changes to the information about their pup.
* User Login
  * [ ] Login authentication will be required for users to sign in to the app
* User Sign Out
  * [ ] Users may sign out of the app if needed.
* Find Pup Matches
  * [ ] Users may specify what they are looking for in a pup’s playmate (like the breed, weight, temperament, etc). Matches will load so users may swipe left or right.
* Swipe Left/Right
  * [ ] Users will be able to see potential matches and view their profile and after deciding either swipe right to say they want to match or left they want to pass on the potential match.
* Open Matched Pup’s Profiles
  * [ ] Users can see the profile of the pup with descriptions of themselves, temperament, and age.
* Open Matched Pup’s Owner’s Profile
  * [ ] When looking at the profile of a potential match they can see their interests, pictures, and name.
* Chat With Match
  * [ ] Users can message their matches by sending texts, images, videos, gifs.
* Activity
  * [ ] This will be a tab that shows recent activity, like new messages and matches.
* Q&A
  * [ ] Access to commonly asked questions and answers
  * [ ] Users can submit questions that have not been answered
  * [ ] A video demo can be watched
  
 <p align="right">(<a href="#top">Back to top</a>)</p>
 

### 2. Screen Archetypes

* Creating new profile/Log-in
  * Login will take the string inputs (username and password) and encrypt the password, then the encrypted string will be checked against the one stored in the database
  * Creating new user profile. They will input strings/ints to complete their profile, including their name, email, age, phone number, biography, and social media information. Their username and password will be taken in as a string, and the password will be encrypted, then stored in the database as the encrypted string.
  * Creating new pup profile. They will input strings/ints to complete their pup’s profile(s), including their breed, age, location, gender, size, temperament, preferred activities, biography, profile picture, vaccination status, neutered/spayed
* Home/Swiping Page
  * Will take input from the user's physical swiping on the screen. Dragging a profile to the left confirms the user has decided to not try to connect with the profile. Dragging the profile to the right determines the user is trying to make a connection with said profile
* Edit Profile Page
  * Will take information already being stored in the profile from a database and update with any new strings/ints input from the user or their pup(s)
* Messaging Page
  * Input will include the user’s touch to select a match which will display a text screen, and the strings input by the user to send messages to said match
* Setting page
  * App settings provide an easy way to change the contents and layout of each of our app.
* Profile page
  * A selection of pup owner's profiles are displayed whereupon selecting a profile will switch the view to display the pup owner's profile showing personal info along with their list of pup profiles
  * A selection of pup profiles are displayed where upon selecting a profile will switch the view to display info such as name, picture, and bio

<p align="right">(<a href="#top">Back to top</a>)</p>

## Wireframes
![view](https://user-images.githubusercontent.com/66335530/159576776-54a153ba-d22b-45cf-b9d1-910f70a17e1d.gif)
