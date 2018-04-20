# Real time web project

Some of the goals of this course:

* Build a Node Web App which consumes an external data source through an API and serves a frontend using routing and templating techniques.
* Create a "live" web app which reflects changes to the back-end data model in reactive front-end views, using real-time, event-based, messaging technologies like sockets or server-sent-events.
* Describe their work in a professional readme with insightful diagrams showing the life cycle of their data.

<!-- ☝️ replace this description -->
# Guess the song

This project is all about music. There are multiple rooms, each with their own music genre playing in the background. The goal is to join a room about a genre of your preference and try to guess the song that's currently playing.

<!-- Add a nice image here at the end of the week, showing off your shiny frontend 📸 -->

<!-- Maybe a table of contents here? 📚 -->
# Navigation

[Installation](#installation)
[Usage](#usage)
[Spotify](#spotify)
[Done's and Todo's](#done's-and-todo's)


<!-- How about a section that describes how to install this project? 🤓 -->
# Installation

```bash
npm install
```

Use npm install.

<!-- ...but how does one use this project? What are its features 🤔 -->
# Usage

After installation, type `node server` in your node console. Go to http://localhost:3000 to access the application.

<!-- What external data source is featured in your project and what are its properties 🌠 -->
# Spotify

## The Api

The Spotify Web Api lets the application fetch data from the Spotify music catalog and manage user’s playlists and saved music.

[Spotify Web Api](https://developer.spotify.com/web-api/)

## Api wrapper

I'm using the universal wrapper for the Spotify Web Api: [Spotify Web API Node](https://www.npmjs.com/package/spotify-web-api-node). The wrapper makes it easier to get specific data from the Spotify Api.

<!-- Where do the 0️⃣s and 1️⃣s live in your project? What db system are you using?-->

<!-- Maybe a checklist of done stuff and stuff still on your wishlist? ✅ -->
# Done's and Todo's

## Done's:
[x] Messaging through Socket.io.
[x] Join different chat Socket rooms.
[x] SpotifyWebApi web api login button.
[x] Receive data from SpotifyWebApi.
[x] Render data from SpotifyWebApi.

## Todo's
[] Differentiate users in Socket.io.
[] Different users can log in to their own Spotify account.
[] Music playlists play in the chat rooms.
[] Users in rooms can guess the current song playing.
[] Scoreboard in each room.

<!-- How about a license here? 📜 (or is it a licence?) 🤷 -->
