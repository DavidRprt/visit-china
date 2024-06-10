import React from "react"
import Image from "next/image"

const VisaHelp = () => {
  return (
    <section className="flexCenter w-full flex-col pb-[100px]">
      <div className="padding-container max-container w-full pb-24">
        <p className="uppercase regular-24 -mt-1 mb-3 text-primary">
          Need Visa Assistance?
        </p>
        <div className="flex flex-wrap justify-between gap-5 lg:gap-10">
          <h2 className="bold-40 lg:bold-64 xl:max-w-[390px]">
            Help to Get Your Visa
          </h2>
          <div className="flex flex-col items-center gap-3">
            <p className="regular-16 text-gray-30 xl:max-w-[520px]">
              Our comprehensive guide provides step-by-step instructions and all
              the necessary information to help you successfully obtain your
              visa. Available for both iOS and Android users, our app ensures
              that you have access to the latest updates and requirements for
              visa applications worldwide.
            </p>
            <button
              type="button"
              className="flexCenter gap-3 rounded-full border border-[#BB8378] bg-white px-8 py-3 text-black hover:bg-[#BB8378] hover:text-white transition-colors duration-300 ease-in-out"
            >
              <label className="medium-14 whitespace-nowrap cursor-pointer">
                More Info
              </label>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default VisaHelp
