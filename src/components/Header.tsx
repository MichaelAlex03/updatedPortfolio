interface HeaderProps {
  scrollToSection: (sectionId: string) => void;
}

const Header = ({ scrollToSection }: HeaderProps) => {


  return (
    <header className='flex flex-row items-center justify-center bg-[#151C25] py-6 px-10 sticky top-0'>
      
      <div className='flex flex-row items-center gap-8'>
        <button onClick={() => scrollToSection('about')} className='border border-white text-white hover:text-black hover:bg-[#55E5A4] py-2 px-4 rounded-lg'>About</button>
        <button onClick={() => scrollToSection('projects')} className='border border-white text-white hover:text-black hover:bg-[#55E5A4] py-2 px-4 rounded-lg'>Projects</button>
        <button  onClick={() => scrollToSection('contact')} className='border border-white text-white hover:text-black hover:bg-[#55E5A4] py-2 px-4 rounded-lg'>Contact</button>
      </div>

      
    </header>
  )
}

export default Header