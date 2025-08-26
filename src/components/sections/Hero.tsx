export default function Hero() {
    return (
      <section 
        id="inicio" 
        className="relative z-0 pt-24 sm:pt-32 lg:pt-40 flex items-center bg-cover bg-center"
        style={{ backgroundImage: "url(/background.jpg)" }}
      >
        <div className="relative z-10 w-full max-w-6xl mx-auto 
                        px-8 pr-16 sm:px-10 md:px-12 lg:px-16 
                        grid grid-cols-1 md:grid-cols-[1fr_auto] 
                        items-start gap-10 md:gap-16 
                        border-b border-zinc-200
                        pb-12 md:pb-0">
          
          {/* TEXT */}
          <div className="space-y-6 mt-2 sm:mt-6 md:mt-10">
            <h1 className="
                text-4xl sm:text-5xl md:text-3xl 
                font-normal tracking-tight leading-tight md:leading-snug 
                max-w-4xl md:max-w-3xl text-black
              ">
              {/* Mobile version - larger text, multiple lines */}
              <div className="md:hidden space-y-3">
                <div>Desarrolladora Front-End y diseñadora UX/UI. Actualmente combino diseño y código para crear experiencias web fluidas.</div>
              </div>
              {/* Desktop version - exactly as it was */}
              <div className="hidden md:block">
                <div>Desarrolladora Front-End y diseñadora UX/UI. Actualmente combino diseño y código para crear experiencias web fluidas.</div>
              </div>
            </h1>
          </div>
  
          {/* IMAGE - Hidden on mobile, visible on md+ */}
          <div className="hidden md:block justify-self-start md:justify-self-end">
            <img
              src="/IMG_0353.png"
              alt="Portrait of Marta Jover"
              width={420}
              height={560}
              className="
                w-full max-w-sm sm:max-w-md md:w-auto
                h-[80vh] sm:h-[90vh] md:h-[32rem] lg:h-[36rem]
                object-cover object-top 
              "
            />
          </div>
        </div>
      </section>
    );
  }