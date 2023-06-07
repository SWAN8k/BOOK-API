import { GrClose } from 'react-icons/gr';

function Modal({ show, item, onClose }) {

    if (!show) {
        return null;
    }
    let thumbnail = item.volumeInfo.imageLinks && item.volumeInfo.imageLinks.smallThumbnail;


    return (
        // overlay
        <div className='flex justify-center items-center fixed left-0 top-0  w-full h-screen bg-black/10 md:bg-black/50 z-[50]' onClick={onClose}>

            <div className="bg-slate-500 h-auto lg:w-[80%] lg:h-[80%] p-2 lg:px-5 rounded-2xl z-[100]">

                <div className="flex justify-end my-2">
                    <div className="">
                        <button className='' onClick={onClose}>
                            <GrClose className='text-white w-6 h-6' />
                        </button>
                    </div>
                </div>


                <div className="">
                    <div className="flex gap-5 md:gap-10">
                        <img src={thumbnail} alt="img" className=' w-48 h-48  xl:w-[13%] shadow-xl shadow-black' />
                        <div className="flex flex-col items-baseline justify-center gap-5 ">
                            <h1 className='text-2xl font-bold text-amber-200 '>Title: <span className='text-slate-100 font-serif'>{item.volumeInfo.title}</span></h1>
                            <p className='text-xl font-bold text-amber-200'>Author: <span className='text-slate-100 font-serif '>{item.volumeInfo.authors}</span></p>
                            <p className='text-xl font-bold text-amber-200'>Publisher: <span className='text-slate-100 font-serif'>{item.volumeInfo.publisher}</span></p>
                            <p className='text-xl font-bold text-amber-200 hidden sm:flex'>Published:<span className='ml-1 text-slate-100 hidden sm:flex'>{item.volumeInfo.publishedDate}</span></p>
                            <p className='flex text-xl font-bold text-amber-200 '>Language:<span className='ml-1 text-slate-100  uppercase'>{item.volumeInfo.language}</span></p>

                            <a className='font-serif  text-sm' target='_blank' href={item.volumeInfo.previewLink}>
                                <button className='border px-4 py-2 rounded-md bg-amber-100 text-amber-800 tracking-wider'>Learn More</button>
                            </a>
                        </div>
                    </div>
                </div>
                <h4 className='font-serif hidden md:flex text-yellow-200 mt-24 overflow-scroll max-h-64 p-1 overflow-x-hidden '>{item.volumeInfo.description}</h4>


            </div>

        </div>
    )
}

export default Modal