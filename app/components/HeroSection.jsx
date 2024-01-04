import Image from "next/image"

const HeroSection = () => {
  return (
    <section>
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <div className="col-span-7 place-self-center text-center sm:text-left">
          <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-6xl  font-extrabold">
            <span class="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-600">Hello, I'm{" "}</span>
            Tejas
          </h1>
          <p className="text-[#ADB7BE] text-base sm:text-lg lg:text-xl mb-4">
            loremkdshf ksdjfh gkjdsh fgkdsh fgkdshf gkhdsfkghsdfkjghdsfk jghsdkfhgksdfh gksdfhg
          </p>
          <div>
            <button className="px-6 py-3 sm:w-fit rounded-full mr-4 bg-gradient-to-br from-blue-500 via-purple-500 to-emerald-500 bg-white hover:bg-slate-200 text-white">
              Hire Me
            </button>
            <button className="px-1 py-1 sm:w-fit rounded-full mr-4 bg-gradient-to-br from-blue-500 via-purple-500 to-emerald-500 hover:bg-slate-800 text-white mt-3">
              <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">Download CV</span>
            </button>
          </div>
        </div>
        <div className="col-span-5 place-self-center mt-4 lg:mt-0">
          <div class="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
            <Image
              src="/hero-image.png"
              alt="hero image"
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              width={300}
              height={300}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
export default HeroSection