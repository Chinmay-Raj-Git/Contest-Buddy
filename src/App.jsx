import Navbar from './components/Navbar'
import EmailInput from './components/EmailInput'
import Content from './components/Content'

function App() {
  return (
    <>
      <div className='flex flex-col font-[Roboto] bg-linear-to-br from-emerald-400 to-green-400
            dark:bg-linear-to-br dark:from-slate-900 dark:to-emerald-950  w-screen h-screen'>
        <Navbar />

        <div className="flex justify-center items-center">
          <EmailInput />
        </div>

        <div className='flex flex-col items-center justify-center m-4 mb-8 py-4 px-6 w-5/6 h-6/12 bg-linear-to-r from-emerald-200 to-green-200 dark:from-emerald-900/80 dark:to-emerald-600/80
                rounded-xl'>
        <Content />

                </div>

      </div>

    </>
  )
}

export default App
