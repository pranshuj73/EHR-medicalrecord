import { ConnectWallet } from '@thirdweb-dev/react'
import React from 'react'


export default function card({title, description, onclick}) {
  return (
    <div class="xl:w-1/3 md:w-1/2 p-4" onClick={onclick}>
        <div class="border border-gray-200  bg-white cursor-pointer p-6 rounded-lg">
          <div class="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-6 h-6" viewBox="0 0 24 24">
              <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
              <circle cx="12" cy="7" r="4"></circle>
            </svg>
          </div>
          <h2 class="text-lg text-gray-900 font-medium title-font mb-2">{title}</h2>
          <p class="leading-relaxed text-base">{description}</p>

          <ConnectWallet style={{width: "100%", marginTop: "1rem"}} btnTitle="🦊 Connect Wallet" theme='light'/>
        </div>
      </div>
  )
}
