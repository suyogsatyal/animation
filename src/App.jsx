import Bibhu from './assets/bibhu.jpg'
import fb from './assets/fb.svg'
import insta from'./assets/insta.svg' 
import linkedin from'./assets/linkedin.svg' 

function App() {
  return (
    <>
      <div className="grid place-content-center h-screen w-screen">
        <div className="bg-blue-500 max-w-xs px-5 py-8 relative group overflow-hidden">
          <div className="overlay bg-gray-100 group-hover:bg-blue-500 w-full h-full drop-shadow-lg z-50 absolute top-0 left-0 grid place-content-center text-center group-hover:opacity-0 duration-700">
            <div className='group-hover:-translate-y-64 group-hover:-translate-x-64 duration-700 bg-gray-50 rounded-full'>
              <img src={Bibhu} alt="" srcset="" className=' w-48 h-48 p-3 rounded-full' />
            </div>
            <div className=' '>
              <h2 className='group-hover:-translate-y-64 z-30 group-hover:-translate-x-16 duration-700 text-2xl font-bold'>Bibhu Paudel</h2>
              <h3 className='group-hover:-translate-y-64 z-30 group-hover:-translate-x-24 duration-700'>Producer</h3>
            </div>
          </div>
          <div>
              <h2 className='group-hover:translate-y-0 translate-y-64 z-30 group-hover:translate-x-0 translate-x-16 duration-700 text-2xl font-bold'>Bibhu Paudel</h2>
              <h3 className='group-hover:translate-y-0 translate-y-64 z-30 group-hover:translate-x-0 translate-x-24 duration-700'>Producer</h3>
          </div>
          <p className='translate-y-10 translate-x-3 group-hover:translate-x-0 group-hover:translate-y-0 duration-700'>
            Started the career as an assistant director and then as ann art director, Bibhu has been in Nepali Film Industry since 2012. Experienced on a wide range of films from World Cinema Art house hits such as Bulbul(2019); Looking for Lady with Fangs and Mustache (2019) to local Nepali Box Office sensations such as Pashupati Prasad (2015); started working as a producer where he produced films like Junu ko Jutta -- Shoes of a Little Girl (2020)
          </p>
          <div className="flex flex-row justify-start translate-y-32 group-hover:translate-y-0 duration-700">
            
              <img src={fb} alt="" srcset="" className='w-8 h-8 mx-1' />
              <img src={insta} alt="" srcset="" className='w-7 h-7 mx-1' />
              <img src={linkedin} alt="" srcset="" className='w-7 h-7 mx-1' />
            
          </div>
        </div>
      </div>
    </>
  )
}

export default App
