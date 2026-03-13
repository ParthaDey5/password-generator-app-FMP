import { useState, useEffect } from 'react'
import Password from './Password'
import Length from './Length'
import Checkbox from './Checkbox'
import Strength from './Strength'
import Button from './Button'

function Form() {
  const [length, setLength] = useState(0)
  const [options, setOptions] = useState({
    uppercase: false,
    lowercase: false,
    numbers: false,
    symbols: false,
    isCopied: false,
    password: '',
    strength: '',
    characters: ''   
  })


  function generatePassword(e) {
    e.preventDefault()

    if (!length || options.characters === '') {
      alert('Password length and character types must be selected.')
      return
    }

    // Generate the password
    const newPassword = Array.from({length}, ()=>
      options.characters[Math.floor(Math.random() * options.characters.length)]
    ).join('')
    

    // Calculate strength
    const typesCount = Object.values([options.uppercase, options.lowercase, options.numbers, options.symbols]).filter(Boolean).length 
    

    const getStrength = (length, typesCount) => {
      if (length < 6 || typesCount < 2) return 'Too Weak!'
      if (length < 8 || typesCount < 3) return 'Weak'
      if (length < 12 || typesCount < 4) return 'Medium'
      return 'Strong'
    }

    setOptions({... options, strength: getStrength(length, typesCount), password: newPassword})
  }
 
 
  const handleOptionChange = (type) => {
    setOptions({ ...options, [type]: !options[type] })
  }

  function copyPassword() {
    setOptions({...options, isCopied: true})
    setTimeout(() => {
      setOptions({...options, isCopied: false})
    }, 3000);

    navigator.clipboard.writeText(options.password)
  }

  useEffect(() => {
    let pool = ''
    if (options.uppercase) pool += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    if (options.lowercase) pool += 'abcdefghijklmnopqrstuvwxyz'
    if (options.numbers) pool += '0123456789'
    if (options.symbols) pool += '!@#$%^&*()+-={}[];<>:'

    setOptions({...options, characters: pool})
       
  }, [options.uppercase, options.lowercase, options.numbers, options.symbols])


  return (
    <form onSubmit={generatePassword} className="flex flex-col text-textForm">
      <Password
        copyPassword={copyPassword}
        {...options}
      />
      <div className="container__form bg-grey flex flex-col lg:px-[1.8rem] lg:pt-[1.45rem] lg:pb-[2rem] md:px-[3.25rem] md:pt-[3.1rem] md:pb-[3.5rem] px-[3.5rem] py-[4rem] lg:mt-[1.4rem] md:mt-[2.5rem] mt-[3.5rem]">
        <Length length={length} setLength={setLength} />
        <Checkbox         
          handleOptionChange={handleOptionChange}
          {...options}
        />
        <Strength {...options} />
        <Button />
      </div>
    </form>
  )
}

export default Form
