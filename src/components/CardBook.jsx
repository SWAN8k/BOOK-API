import { useState } from 'react'
import Modal from './Modal';

function CardBook({ book }) {

  const [show, setShow] = useState(false)
  const [bookItem, setItem] = useState()

  return (
    <>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-7 gap-6 px-3">
        {book.map((i) => {
          let thumbnail = i.volumeInfo.imageLinks && i.volumeInfo.imageLinks.smallThumbnail;
          let amount = i.saleInfo.listPrice && i.saleInfo.listPrice.amount;

          if (thumbnail != undefined && amount != undefined) {
            return (
              <div className="mx-auto" key={i.id}>
                <div className='w-[200px] h-auto justify-center items-center rounded-lg  p-2 shadow-lg shadow-amber-200' onClick={() => { setShow(true), setItem(i) }}>
                  <img
                    src={thumbnail}
                    alt="img"
                    className='border rounded-lg w-[190px] h-[280px] hover:shadow-md hover:shadow-amber-100 bg-cover'
                  />
                  <div className="mt-2 ">
                    <h1 className='text-amber-200 font-bold tracking-wider mb-2'>Title: <span className='text-white text-sm font-serif'>{i.volumeInfo.title}</span> </h1>

                    <p className='text-amber-200 font-bold tracking-wider'>Price: <span className='text-white text-sm '> ${amount}</span></p>
                  </div>
                </div>
                <Modal show={show} item={bookItem} onClose={() => setShow(false)} />
              </div>
            )
          }
        })}
      </div>

    </>

  );
}


export default CardBook