import beatbox from '../img/portImages/beatboxMusic.png';
import portfolioWebsite from '../img/portImages/portfolioWebsite.png'
import chatApp from '../img/portImages/chatApp.png'
import wingMeals from '../img/portImages/WingMeals.png'
import expenseTracker from '../img/portImages/expenseTracker.png'
import todoApp from '../img/portImages/todoApp.png'
import solvequest from '../img/solvequest.png'
import integrateio from '../img/integrate.io.png'
import parkit from '../img/ParkIt.png'
import streamify from '../img/streamify.png'
import chatify from '../img/chatify.png'

const portfolios = [
    {
        id: 10,
        category: 'tRPC',
        image: streamify,
        link1: 'https://github.com/Sajal0208/solve-quest',
        link2: 'https://streamify-sajal0208.vercel.app/',
        title: 'Streamify',
        text: 'Developed a feature-rich platform enabling users to upload, like, and dislike videos, enhancing the overall content discovery and user engagement.'
    },
    {
        id: 11,
        category: 'Full-Stack',
        image: chatify,
        link1: 'https://github.com/Sajal0208/chatify',
        link2: '',
        title: 'Chatify',
        text: 'Developed a video-calling application using raw WebRTC implementation, providing users with a seamless and immersive real-time communication experience.'
    },
    {
        id: 1,
        category: 'Full-Stack',
        image: solvequest,
        link1: 'https://github.com/Sajal0208/solve-quest',
        link2: 'https://solve-quest.vercel.app/',
        title: 'solve-quest',
        text: 'Developed a web application to provide a coding practice platform akin to LeetCode.'
    },
    {
        id: 9,
        category: 'Full-Stack',
        image: parkit,
        link1: 'https://github.com/Sajal0208/ParkIt-Frontend',
        link2: '',
        title: 'ParkIt',
        text: 'A parking lot management system that allows users to book parking slots in advance.'
    },
    {
        id: 8,
        category: 'Full-Stack',
        image: integrateio,
        // link1: 'https://github.com/Sajal0208/solve-quest',
        link2: 'https://integrate-app.netlify.app',
        title: 'Integrate.xyz',
        text: 'A completely free web app service that allows you to do the following: Schedule a post on Dev.to && Cross-Post between Dev.to Medium Hash node'
    },
    {
        id: 4,
        category: 'ReactJs',
        image: portfolioWebsite,
        link1: 'https://github.com/Sajal0208/my-portfolio',
        link2: '',
        title: 'My Portfolio Website',
        text: 'A fully responsive portfolio website which enables light and dark mode made using ReactJs.'
    },
    {
        id: 2,
        category: 'NodeJs',
        image: chatApp,
        link1: 'https://github.com/Sajal0208/chat-app',
        link2: 'https://chat-app-h2m0.onrender.com/',
        title: 'Chat App',
        text: 'A real-time, bidirectional and event based web chat application made using NodeJs and Socket.Io.'
    },
    {
        id: 3,
        category: 'ReactJs',
        image: wingMeals,
        link1: 'https://github.com/Sajal0208/food-order-app',
        link2: 'https://sajal0208.github.io/food-order-app/',
        title: 'Wing Meals',
        text: 'Craving some wings?'
    },
    {
        id: 5,
        category: 'ReactJs',
        image: expenseTracker,
        link1: 'https://github.com/Sajal0208/expense-tracker',
        link2: 'https://expenses-tracker-io.herokuapp.com/',
        title: 'Expense Tracker',
        text: 'Track your monthly expenses and filter them by year'
    },
    
    {
        id: 6,
        category: 'ReactJs',
        image: todoApp,
        link1: 'https://github.com/Sajal0208/to-do',
        link2: 'https://tos-dos.herokuapp.com/',
        title: 'Got Something To-Do?',
        text: 'Mandatory Project for all React Developers'
    },
    {
        id: 7,
        category: 'Javascript',
        image: beatbox,
        link1: 'https://github.com/Sajal0208/BeatBoxMusicApp',
        link2: 'https://sajal0208.github.io/BeatBoxMusicApp/',
        title: 'Beatbox Music App',
        text: 'Play Some Music'
    },
    
    
]

export default portfolios;