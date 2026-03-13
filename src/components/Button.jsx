function Button() {
  return (
    <button className="generate-button group lg:mt-[1.8rem] md:mt-[3rem] mt-[3rem] lg:py-[0.85rem] md:py-[1.7rem] py-[3rem] flex w-full items-center justify-center lg:gap-[1.4rem] md:gap-[1.8rem] gap-[3rem] border-2 border-transparent bg-neonGreen lg:text-[1rem] md:text-[2rem] text-[3.5rem] uppercase text-darkGrey transition-all hover:border-neonGreen hover:bg-darkGrey hover:text-neonGreen transition ease-out duration-[300ms]">
      Generate
      <svg className="generate-button__icon group-hover:text-neonGreen" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
  <path fill="currentColor" d="m5.106 12 6-6-6-6-1.265 1.265 3.841 3.84H.001v1.79h7.681l-3.841 3.84z"/>
</svg>
    </button>
  )
}

export default Button
