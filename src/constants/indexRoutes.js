import HomePage from '../views/HomePage'
import ChatPage from '../views/ChatPage'
import ChatScreenPage from '../views/ChatScreenPage'
// import ProfilePage from '../views/ProfilePage'

const indexRoutes = [
    {path: '/', component: HomePage },
    {path: '/chat', component: ChatPage },
    {path: '/chat/:person', component: ChatScreenPage },
    // {path: '/profile', component: ProfilePage },
    
]

export default indexRoutes