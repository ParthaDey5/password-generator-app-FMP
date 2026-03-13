function Checkbox({
  handleOptionChange,
  uppercase,
  lowercase,
  numbers,
  symbols,
}) {
  return (
    <div className="checkbox__container lg:mt-[2rem] md:mt-[4.1rem] mt-[8.6rem] flex flex-col lg:gap-[0.9rem] md:gap-[1.65rem] gap-[3rem]">
      <div className="checkbox__item flex items-center lg:gap-[1.3rem] md:gap-[2.5rem] gap-[4.7rem] md:tracking-normal tracking-wide ">
        <input
          className="checkbox"
          type="checkbox"
          name="uppercase"
          id="uppercase"
          checked={uppercase}
          onChange={() => handleOptionChange('uppercase')}
        />
        <label
          className="checkbox__label text-almostWhite lg:text-[1rem] md:text-[1.875rem] text-[3.35rem] "
          htmlFor="uppercase"
        >
          Include Uppercase Letters
        </label>
      </div>
      <div className="checkbox__item flex items-center lg:gap-[1.3rem] md:gap-[2.5rem] gap-[4.7rem] md:tracking-normal tracking-wide ">
        <input
          className="checkbox"
          type="checkbox"
          name="lowercase"
          id="lowercase"
          checked={lowercase}
          onChange={() => handleOptionChange('lowercase')}
        />
        <label
          className="checkbox__label text-almostWhite lg:text-[1rem] md:text-[1.875rem] text-[3.35rem] "
          htmlFor="lowercase"
        >
          Include Lowercase Letters
        </label>
      </div>
      <div className="checkbox__item flex items-center lg:gap-[1.3rem] md:gap-[2.5rem] gap-[4.7rem] md:tracking-normal tracking-wide ">
        <input
          className="checkbox"
          type="checkbox"
          name="numbers"
          id="numbers"
          checked={numbers}
          onChange={() => handleOptionChange('numbers')}
        />
        <label
          className="checkbox__label text-almostWhite lg:text-[1rem] md:text-[1.875rem] text-[3.35rem] "
          htmlFor="numbers"
        >
          Include Numbers
        </label>
      </div>
      <div className="checkbox__item flex items-center lg:gap-[1.3rem] md:gap-[2.5rem] gap-[4.7rem] md:tracking-normal tracking-wide ">
        <input
          className="checkbox"
          type="checkbox"
          name="symbols"
          id="symbols"
          checked={symbols}
          onChange={() => handleOptionChange('symbols')}
        />
        <label
          className="checkbox__label text-almostWhite lg:text-[1rem] md:text-[1.875rem] text-[3.35rem] "
          htmlFor="symbols"
        >
          Include Symbols
        </label>
      </div>
    </div>
  )
}

export default Checkbox
