# Real time web project

Some of the goals of this course:

* Build a Node Web App which consumes an external data source through an API and serves a frontend using routing and templating techniques.
* Create a "live" web app which reflects changes to the back-end data model in reactive front-end views, using real-time, event-based, messaging technologies like sockets or server-sent-events.
* Describe their work in a professional readme with insightful diagrams showing the life cycle of their data.

<!-- ☝️ replace this description -->
# Picture noteboard

This project is about an image noteboard. The idea come from a hackathon I did for the Weekly Nerd. The idea was to have a picture and the ability to add notes to the picture. I took the idea further and made it real time. Every user on the site can see your notes. Everybody can set a picture for the rest. With the Pixabay API added into the mix, the users can now retrieve a couple of images from Pixabay based on a keyword.

<!-- Add a nice image here at the end of the week, showing off your shiny frontend 📸 -->

<!-- Maybe a table of contents here? 📚 -->
# Navigation

- [Installation](#installation)
- [Usage](#usage)
- [Data life cycle](#data-life-cycle)
- [Pixabay](#pixabay)
- [Todo's](#todo's)


<!-- How about a section that describes how to install this project? 🤓 -->
# Installation

```bash
npm install
```

Use npm install.

<!-- ...but how does one use this project? What are its features 🤔 -->
# Usage

After installation, type `node server` in your node console. Go to http://localhost:3000 to access the application.

## Features

- You can click everywhere on an uploaded/selected picture to add a note to it. 
- Every user on the site can see your notes. 
- Everybody can set a picture for the rest. 
- With the Pixabay API added into the mix, the users can now retrieve a couple of images from Pixabay based on a keyword.

# Data Life Cycle

![](https://github.com/RobinFrugte97/real-time-web-project/blob/master/images/dataLifeCycle.png)

<!-- What external data source is featured in your project and what are its properties 🌠 -->
# Pixabay

## The Api

The Pixabay Api lets the application fetch data from the Pixabay image catalog.

[Pixabay Api](https://pixabay.com/api/docs/)

 The API is a RESTful interface for searching and retrieving free images and videos released on Pixabay under Creative Commons CC0.


<!-- Where do the 0️⃣s and 1️⃣s live in your project? What db system are you using?-->

<!-- Maybe a checklist of done stuff and stuff still on your wishlist? ✅ -->
# Todo's


## Todo's
- [ ] Differentiate users in Socket.io.
- [ ] Make it so the users have the ability to delete notes.
- [ ] Have the notes saved with different pictures.

<!-- How about a license here? 📜 (or is it a licence?) 🤷 -->
