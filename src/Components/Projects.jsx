import React from 'react'
import foodx from '../assets/foodx.png'
import paste from '../assets/paste.png'
import fetch from '../assets/fetch.png'
import movie from '../assets/movie.png'
import game from '../assets/game.png'
import chat from '../assets/chat.png'
import Cards from './Cards'


const Projects = () => {

    const projectJson = [
        {
          title: 'Flavor Food ordering',
          desc: 'Flavor is a modern, easy-to-use food-ordering application built with React. This app is designed to streamline the ordering experience, offering a sleek, responsive interface where users can browse through various food items, customize orders, and place them directly through the app.',
          image: foodx,
          live: "https://food-recipe-liart.vercel.app/",
          github: "https://github.com/vikas8669/food-recipe"
        },
        {
          title: 'Paste Web App',
          desc: 'A simple React application for creating, updating, and managing text snippets. This app allows users to save their thoughts, ideas, or any text content they wish to keep track of in an organized manner.Features Create Snippet, Edit Snippet ,Delete Snippet, Responsive Design, React Router',
          image: paste,
          live: "https://paste-app-ten.vercel.app/",
          github: "https://github.com/vikas8669/pasteApp"
        },
        {
          title: 'Food ordering',
          desc: 'A simple, interactive web application for browsing and organizing food recipes, built using JavaScript Api. This app allows users to search for recipes and watch videos with detailed ingredients and instructions.',
          image: fetch,
          live: "https://vikas8669.github.io/food/",
          github: "https://github.com/vikas8669/food"
        },
        {
          title: 'Movie Search',
          desc: 'This Movie Search Application is a web-based tool built with JavaScript, allowing users to search for movies, and actors quickly. It utilizes external APIs to fetch data in real-time and provides an interactive user experience.',
          image: movie,
          live: "https://vikas8669.github.io/Movie-app/",
          github: "https://github.com/vikas8669/Movie-app"
        },
        {
          title: 'Simon-Says-Game',
          desc: 'A classic "Simon Says" game built using JavaScript, HTML, and CSS! Test your memory and concentration skills by repeating the sequence of colors and sounds that Simon gives you. With increasing difficulty levels, this game offers endless fun for players of all ages! ',
          image: game,
          live: "https://vikas8669.github.io/Simon-Says-Game/",
          github: "https://github.com/vikas8669/Simon-Says-Game"
        },
        {
          title: 'Ai Chat-Boat',
          desc: 'A simple Gemini chatbot clone built with JavaScript, allowing real-time conversational interaction using natural language processing (NLP). This project demonstrates how to integrate a chatbot with APIs, handle user input dynamically, and create a responsive chat interface ',
          image: chat,
          live: "https://vikas8669.github.io/Chat-Boat/",
          github: "https://github.com/vikas8669/Chat-Boat"
        },
      ];

  return (
    <section id='projects' className='relative bg-gray-700 py-10 px-4'>
      <div className='mb-16 max-w-7xl mx-auto'>
        <h2 className='text-3xl font-bold mb-8 text-white border-b border-red-500 w-max pb-4'>My Projects</h2>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center gap-10'>
            {projectJson.map((items)=> {
                return <Cards item={items}/>
            })}
        </div>
      </div>
    </section>
  )
}

export default Projects
