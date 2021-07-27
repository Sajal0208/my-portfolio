import beatbox from '../img/portImages/beatboxMusic.png';
import portfolioWebsite from '../img/portImages/portfolioWebsite.png'
import chatApp from '../img/portImages/chatApp.png'
import wingMeals from '../img/portImages/WingMeals.png'
import expenseTracker from '../img/portImages/expenseTracker.png'
import todoApp from '../img/portImages/todoApp.png'

const portfolios = [
    {
        id: 1,
        category: 'ReactJs',
        image: portfolioWebsite,
        link1: 'https://github.com/Sajal0208/my-portfolio',
        link2: '',
        title: 'My Portfolio Website',
        text: 'Created Using React Js'
    },
    {
        id: 2,
        category: 'NodeJs',
        image: chatApp,
        link1: 'https://github.com/Sajal0208/chat-app',
        link2: 'https://chat-app-so-io.herokuapp.com/',
        title: 'Chat App',
        text: 'Created Using NodeJs and Socket.io'
    },
    {
        id: 3,
        category: 'ReactJs',
        image: wingMeals,
        link1: 'https://github.com/Sajal0208/food-order-app',
        link2: 'https://food-order-app-io.herokuapp.com/',
        title: 'Wing Meals',
        text: 'Craving some wings?'
    },
    {
        id: 4,
        category: 'ReactJs',
        image: expenseTracker,
        link1: 'https://github.com/Sajal0208/expense-tracker',
        link2: 'https://expenses-tracker-io.herokuapp.com/',
        title: 'Expense Tracker',
        text: 'Track your monthly expenses and filter them by year'
    },
    {
        id: 5,
        category: 'Javascript',
        image: beatbox,
        link1: 'https://github.com/Sajal0208/BeatBoxMusicApp',
        link2: 'https://sajal0208.github.io/BeatBoxMusicApp/',
        title: 'Beatbox Music App',
        text: 'Play Some Music'
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
]

export default portfolios;