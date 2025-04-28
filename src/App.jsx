import { BrowserRouter, Route, Routes, } from 'react-router-dom';
import { Footer, Header, PageNotFound } from './components';
import { Home, RoomDetails } from './pages';
import CheckIn from './components/CheckIn';
import BusinessTravelers from './components/BusinessTravellers';
import LocationSection from './components/LocationSection';
import GuestReviews from './components/GuestReview';
import GallerySection from './components/GallerySection';
import Facilities from './components/Facilities';



const App = () => {

 

  return (

    <main className=''>
      <BrowserRouter>

        <Header />

        <Routes>
          <Route path={'/'} element={<Home />} />
          <Route path={'/room/:id'} element={<RoomDetails />} />
          <Route path="/checkin" element={<CheckIn />} /> {/* Add this line */}

          <Route path={'*'} element={<PageNotFound />} />
        </Routes>
        <BusinessTravelers/>
        <LocationSection/>
        <GuestReviews/>
        <GallerySection/>
        <Facilities/>
        <Footer />

      </BrowserRouter>
    </main>
  )
}

export default App