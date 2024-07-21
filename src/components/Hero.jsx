import {logo} from '../assets'

const Hero = () => {
  return (
    <header className="w-full flex justify-centre items-centre flex-col">
        <nav className='flex justify-between items-center flex-row w-full mb-20 pt-6'>
            <img src={logo} alt='Goku' className='w-28 object-contain'/>
            <button
            type='button'
            onClick={() => window.open('https://github.com/shubhra-9')}
            className='black_btn'>GitHub</button>
        </nav>
        <h1 className='head_text'>
            Summarize Articles with <br className='max-md:hidden'/>
            <span className='orange_gradient'>OpenAI GPT-4</span>
        </h1>
        <h2 className='desc'>
            Simplify your reading with Summize , an open-source article summarizer
        </h2>
    </header >
  )
}

export default Hero