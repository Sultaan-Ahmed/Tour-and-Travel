import {Route,Routes,Navigate} from 'react-router-dom'
import Home from '../pages/Home'
import Tours from '../pages/Tours'
import TourDetails from '../pages/TourDetails'
import Login from '../pages/Login'
import Register from '../pages/Register'
import SearchResutLists from '../pages/SearchResutList'
import ThankYou from '../pages/ThankYou'
import About from '../pages/About'
const Router = () => {
  return (
    <>
        <Routes>
            <Route path='/' element={<Navigate to='/home'/>}/>
            <Route path='/home' element={<Home/>}/>
            <Route path='/tours' element={<Tours/>}/>
            <Route path='/tours/:id' element={<TourDetails/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/register' element={<Register/>}/>
            <Route path='/tours/search' element={<SearchResutLists/>}/>
            <Route path='/thank-you' element={<ThankYou/>}/>
            <Route path='/about' element={<About/>}/>
            {/* <Route path='/' element={<Home/>}/>
            <Route path='/' element={<Home/>}/> */}
        </Routes>
    </>
  )
}

export default Router