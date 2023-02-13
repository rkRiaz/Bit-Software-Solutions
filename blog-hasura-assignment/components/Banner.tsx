import { FC } from 'react'
import Search from './Search'

const Banner: FC = () => {
  return (
    <div className="bg-blue-600 h-[400px]">
        <div className="container mx-auto flex flex-col justify-center h-full px-2 sm:px-8">
          <h3 className="text-4xl text-white font-black">How can we help you?</h3>
        
            <div className="">
              <Search/>
            </div>
      
        </div>
    </div>
  )
}

export default Banner