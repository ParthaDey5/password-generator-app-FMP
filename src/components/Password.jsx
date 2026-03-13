function Password({ password, copyPassword, isCopied }) {
  return (
    <div className="container__password mt-[3rem] flex items-center justify-between bg-grey md:mt-[3.3rem] lg:mt-[1.5rem]">
      <input
        className="container__password__input placeholder:text-red-400 w-full border-none bg-grey py-[2.8rem] pl-[3.3rem] text-[5.33rem] text-textPassword placeholder:text-lightGrey placeholder:opacity-50 focus:outline-none md:py-[1.5rem] md:pl-[3.4rem] md:text-[3.5rem] lg:py-[1rem] lg:pl-[1.8rem] lg:text-[1.79rem]"
        type="text"
        name="password"
        id="password"
        aria-label="Generated password"
        value={password}
        readOnly
        placeholder="P4$5W0rD!"
      />

      <button
        type="button"
        className="group relative cursor-none pr-[3.3rem] md:pr-[3.4rem] lg:pr-[1.8rem]"
        aria-label="Copy password"
      >
        <p
          className={`absolute -top-[3.5rem] text-[2rem] md:-top-[1.7rem] md:text-[1rem] lg:-left-1/4 ${isCopied ? 'group-hover:opacity-0' : ''} opacity-0 transition duration-300 ease-out group-hover:opacity-100`}
        >
          Copy
        </p>

        {isCopied ? (
          <svg
            className="icon-check pointer-events-none w-[3.4rem] md:w-[2.2rem] lg:w-[1.0625rem]"
            viewBox="0 0 14 12"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke="#A4FFAF"
              strokeWidth="3"
              fill="none"
              d="M1 5.607 4.393 9l8-8"
            />
          </svg>
        ) : (
          <svg
            className="icon-copy w-[3.4rem] cursor-custom md:w-[2.2rem] lg:w-[1.0625rem]"
            onClick={() => {
              copyPassword()
            }}
            viewBox="0 0 21 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              className="fill-[#A4FFAF] group-hover:fill-almostWhite"
              d="M20.341 3.091 17.909.659A2.25 2.25 0 0 0 16.319 0H8.25A2.25 2.25 0 0 0 6 2.25V4.5H2.25A2.25 2.25 0 0 0 0 6.75v15A2.25 2.25 0 0 0 2.25 24h10.5A2.25 2.25 0 0 0 15 21.75V19.5h3.75A2.25 2.25 0 0 0 21 17.25V4.682a2.25 2.25 0 0 0-.659-1.591ZM12.469 21.75H2.53a.281.281 0 0 1-.281-.281V7.03a.281.281 0 0 1 .281-.281H6v10.5a2.25 2.25 0 0 0 2.25 2.25h4.5v1.969a.282.282 0 0 1-.281.281Zm6-4.5H8.53a.281.281 0 0 1-.281-.281V2.53a.281.281 0 0 1 .281-.281H13.5v4.125c0 .621.504 1.125 1.125 1.125h4.125v9.469a.282.282 0 0 1-.281.281Zm.281-12h-3v-3h.451c.075 0 .147.03.2.082L18.667 4.6a.283.283 0 0 1 .082.199v.451Z"
            />
          </svg>
        )}
      </button>
    </div>
  )
}

export default Password
