/* eslint-disable @next/next/no-img-element */
import { motion } from 'framer-motion';
import { DiJavascript } from 'react-icons/di';
type Props = {}

export default function ExperienceCard({}: Props) {
  return (
    <article className='flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md::w-[600px] xl:w-[900px] snap-center bg-[#292929] p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden '>
        <motion.img
            initial= {{
                y: -100,
                opacity: 0,
            }}
            transition={{ duration: 1.2 }} 
            whileInView={{ opacity: 1, y: 0}}
            viewport={{ once: true }}
            className="w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center "
            src="https://cdn.sanity.io/images/ltuexkre/production/050ee674d199aa8d254af2b5ea480d3dc320cbb1-1240x1440.png" 
            alt="" 
        />
        <div className='px-0 md:px-10'>
            <h4 className='text-4xl font-light'>CEO of MANIDEV</h4>
            <p className='font-bold text-2xl mt-1'>MANIDEV</p>
            <div className='flex space-x-2 my-2'>
                <DiJavascript size={40} className='bg-transparent text-yellow-400 rounded-full'/>
                <DiJavascript size={40} className='bg-transparent text-yellow-400 rounded-full'/>
                <DiJavascript size={40} className='bg-transparent text-yellow-400 rounded-full'/>
            </div>
            <p className='uppercase py-5 text-gray-300'>Started worked... - Ended ...</p>

            <ul className='list-disc space-y-4 ml-5 text-lg'>
                <li>Summary pointsSummary pointsSummary pointsSummary pointsSummary pointsSummary points</li>
                <li>Summary pointsSummary pointsSummary pointsSummary pointsSummary pointsSummary points</li>
                <li>Summary pointsSummary pointsSummary pointsSummary pointsSummary pointsSummary points</li>
                <li>Summary pointsSummary pointsSummary pointsSummary pointsSummary pointsSummary points</li>
                <li>Summary pointsSummary pointsSummary pointsSummary pointsSummary pointsSummary points</li>
                
            </ul>
        </div>
        
    </article>
  )
}