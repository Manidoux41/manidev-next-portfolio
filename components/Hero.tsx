/* eslint-disable @next/next/no-img-element */
import { useTypewriter, Cursor } from 'react-simple-typewriter'
import BackgroundCircles from './BackgroundCircles'

type Props = {}

export default function Hero({}: Props) {

    const [text, count] = useTypewriter({
        words: [
            "Hi; My name is Manfred",
            "Guy-who-loves-coffee.tsx",
            "<ButLovesToCodeMore />",
        ],
        loop: true, 
        delaySpeed: 2000,
    })

  return (
    <div className='h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden'>
        <BackgroundCircles />
        <img 
            className='relative rounded-full h-32 w-32 mx-auto object-cover'
            src="https://my-portfolio-manidev.vercel.app/assets/heroImage-9d3e9679.png" alt="" />
        <h1>
            <span>{text}</span>
            <Cursor cursorColor='#F7AB0A' />
        </h1>
    </div>
  )
}