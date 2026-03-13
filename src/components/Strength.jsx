function Strength({ strength }) {
  const strengthConfig = {
    'Too Weak!': { level: 1, color: 'Red' },
    Weak: { level: 2, color: 'Orange' },
    Medium: { level: 3, color: 'Yellow' },
    Strong: { level: 4, color: 'neonGreen' },
  }


  return (
    <div className="Password__strength__container mt-[6rem] flex h-[12.2rem] items-center justify-between bg-darkGrey px-[3.3rem] md:mt-[3rem] md:h-[7.7rem] lg:mt-[1.8rem] lg:h-[4rem] lg:px-[1.8rem]">
      <p className="strength__label text-[3.375rem] uppercase text-lightGrey md:text-[1.875rem] lg:text-[1rem]">
        Strength
      </p>
      <div className="strength__content flex items-center gap-[4rem] md:gap-[1.75rem] lg:gap-[1rem]">
        <p className="strength__value text-[3.5rem] uppercase tracking-wide md:text-[2.5rem] md:tracking-normal lg:text-[1.375rem]">
          {strength}
        </p>
        <div className="strength__bars flex gap-[1.7rem] md:gap-[1rem] lg:gap-[0.6rem]">
          {Array(4)
            .fill('')
            .map((_, index) => (
              <div
                key={index}
                className={`h-[5.5rem] w-[1.7rem] outline outline-1 md:h-[3rem] md:w-[0.95rem] lg:h-[1.5rem] lg:w-[0.4rem] ${
                  index < strengthConfig[strength]?.level ? `bg-${strengthConfig[strength].color} outline-${strengthConfig[strength].color}` : `bg-grey-500 outline-white`
                }`}
              />
            ))}
        </div>
      </div>
    </div>
  )
}
export default Strength
