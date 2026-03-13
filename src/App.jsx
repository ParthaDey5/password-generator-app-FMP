import Form from './components/Form'

function App() {
  return (
    <main className='relative flex justify-center '>
      
      <div className="Password__container lg:w-[30rem] md:w-[56rem] w-[73rem] lg:mt-[7.2rem] mt-[13.5rem]">
        <h1 className="container__header text-center text-lightGrey lg:text-[1.34rem] md:text-[2.5rem] text-[3.425rem]">
          Password Generator
        </h1>

        <Form />
      </div>
    </main>
  )
}

export default App
