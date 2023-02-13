import { ICategory } from '../interfaces'
import  { FC } from 'react'
import {FiArrowDownCircle} from 'react-icons/fi'

const Categories: FC<ICategory[] | any> = ({ categories }) => {

  return (
    <div className='mt-2'>
       {
        categories.map((c: ICategory) => (
            <div key={c.id} className="flex justify-between items-center hover:bg-slate-300 px-3 py-3 rounded-3xl cursor-pointer font-bold">
                <span>{c.name}</span><FiArrowDownCircle/>
            </div>
        ))
       }
   

    </div>
  )
}

export default Categories

