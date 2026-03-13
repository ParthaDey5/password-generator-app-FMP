function Length({ setLength, length }) {
  return (
    <div className="flex flex-col lg:gap-[1.7rem] md:gap-[3.3rem] gap-[4.6rem]">
      <div className="flex items-center justify-between">
        <label
          htmlFor="length"
          className="lg:text-[1rem] md:text-[1.875rem] text-[3.375rem] leading-none "
        >
          Character Length
        </label>

        <span className=" text-neonGreen lg:text-[1.875rem] md:text-[3.375rem] text-[5rem] leading-none">
          {length}
        </span>
      </div>

      <input
        className="slider"
        id="length"
        type="range"
        name="length"
        min="1"
        max="20"
        step="1"
        defaultValue="1"
        onChange={(e) => {
          const value = Number(e.target.value)     
          setLength(value)
          e.target.style.setProperty('--value', (value / 20 * 100) + '%')
          
        }}
      />
    </div>
  )
}

export default Length
