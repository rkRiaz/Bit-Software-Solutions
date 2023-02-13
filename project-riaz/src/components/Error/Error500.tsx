import React from 'react'
import BaseButton from '../BaseButton'
import CardBox from '../CardBox'

import { gradientBgPurplePink, gradientBgDark, gradientBgPinkRed } from '../../colors'
import { useAppSelector } from '../../stores/hooks'

export default function Error500({ bg }) {

    const darkMode = useAppSelector((state) => state.style.darkMode)

    let componentClass = 'flex min-h-screen items-center justify-center '

    if (darkMode) {
      componentClass += gradientBgDark
    } else if (bg === 'purplePink') {
      componentClass += gradientBgPurplePink
    } else if (bg === 'pinkRed') {
      componentClass += gradientBgPinkRed
    }
    
  return (
      <div className={componentClass}>
        <CardBox
          className="w-11/12 md:w-7/12 lg:w-6/12 xl:w-4/12 shadow-2xl"
          footer={<BaseButton href="/dashboard" label="Go back to dashboard" color="danger" />}
        >
          <div className="space-y-3">
            <h1 className="text-2xl">Server Error Occurred!</h1>

            <p>Please try again after some moments!</p>
          </div>
        </CardBox>
      </div>
  )
}

