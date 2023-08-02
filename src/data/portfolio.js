import beatbox from '../img/portImages/beatboxMusic.png';
import portfolioWebsite from '../img/portImages/portfolioWebsite.png'
import chatApp from '../img/portImages/chatApp.png'
import wingMeals from '../img/portImages/WingMeals.png'
import expenseTracker from '../img/portImages/expenseTracker.png'
import todoApp from '../img/portImages/todoApp.png'
import solvequest from '../img/solvequest.png'
import integrateio from '../img/integrate.io.png'

const portfolios = [
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