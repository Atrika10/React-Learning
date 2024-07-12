import React from 'react'
import lang from '../../Utils/LanguageConstant'
import { useSelector } from 'react-redux'

export default function GptSearchInputBar() {
    const languagePreference = useSelector(state => state.config.language);

  return (
    <div className='z-30 '>
      <form className='flex justify-center'>
          <input 
          className='w-6/12 border-b-[1px] border-rose-400 p-2 text-white bg-[#1a1a1a] rounded-lg mr-5 px-4 py-4 shadow-lg shadow-rose-400/30'
          type="text" placeholder={lang[languagePreference].inputPlaceholder}/>

          <button className='bg-rose-600 text-white font-bold rounded-lg px-5 tracking-wide cursor-pointer'>{lang[languagePreference].Search}</button>
        </form>
    </div>
  )
}
