const Landing = () => {

    const scrollToContent = () => {
        document.getElementById('Content')?.scrollIntoView({behavior: 'smooth'});
    }

    return (
        <section className='flex justify-center bg-[#151C25] h-screen' id='home'>
            <div className='flex flex-col text-white justify-center items-center w-3/4 md:w-1/2 gap-2'>
                <h1 className='text-center text-4xl lg:text-6xl font-bold'>Hi, I'm <span className='text-[#55E5A4]'>Michael</span></h1>
                <h3 className='text-center text-base md:text-2xl lg:text-3xl '>Aspiring full-stack developer creating dynamic, user-focused web apps</h3>
                <div className='z-10 mt-3'>
                    <button className='button_main flex items-center gap-2 text-base md:text-xl'
                        onClick={scrollToContent}>
                        Check out My Work
                    </button>
                </div>
            </div>
        </section>
    )
}

export default Landing