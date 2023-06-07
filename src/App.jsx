import { useState } from 'react'
import axios from 'axios';
import CardBook from './components/CardBook';
import { BiSearch } from 'react-icons/bi';


function App() {
  const [search, setSearch] = useState('')
  const [bookData, setBookData] = useState([]);



  const searchBook = (evt) => {
    if (evt.key === 'Enter') {
      evt.preventDefault();

      axios.get('https://www.googleapis.com/books/v1/volumes?q=' + search + '&key=AIzaSyB6d0U6Ji1pO7H2mMFhkmRKbcIOLgwBe8k' + '&maxResults=40')
        .then((res) => setBookData(res.data.items))
        .catch((error) => console.log(error));
    }
  }

  return (
    <div className='min-h-screen bg-amber-900 pb-5'>
      {/* titolo */}
      <div className="absolute z-40 top-12 left-1/2 transform -translate-x-1/2  ">
        <h1 className='text-3xl font-bold text-amber-300'>THE BOOK'S HOUSE</h1>
      </div>

      {/* immagine */}
      <div className="flex lg:max-w-full lg:h-[530px] bg-cover m-auto relative">
        <img
          className='w-full rounded-b-md shadow-2xl shadow-amber-300'
          src="https://images.unsplash.com/photo-1634607416945-ac0c17d5b918?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzF8fGxpYnJlcmlhfGVufDB8fDB8fHww&auto=format&fit=crop&w=1500&q=60"
          alt=""
        />
      </div>

      {/* input */}

      <div className="flex justify-center items-center absolute top-[25%] left-1/2 transform -translate-x-1/2">
        <div className="flex relative items-center text-gray-400 focus-within:text-gray-600">
          <BiSearch className="absolute ml-3 w-5 h-5 pointer-events-none" />
          <input
            className='w-[300px] pl-10 pr-3 font-semibold py-2 rounded-2xl placeholder-gray-500 border-none ring-2 ring-gray-300 focus:ring-gray-500 focus:ring-2'
            type="text"
            placeholder='Enter a book name'
            value={search}
            onChange={e => setSearch(e.target.value)}
            onKeyDown={searchBook}
          />
        </div>
      </div>


      {/* card book */}
      <div className="mt-14">
        {<CardBook book={bookData} />}
      </div>
    </div>
  )
}

export default App
