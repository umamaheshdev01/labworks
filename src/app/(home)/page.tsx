import { SignedIn, SignedOut, SignInButton } from '@clerk/nextjs'
import React from 'react'
import ProductGrid from './Signedin'

function page() {
  return (
    <div>

      <SignedIn>
       <ProductGrid></ProductGrid>
      </SignedIn>

      <SignedOut>

        <div className='h-[90vh] flex   justify-center items-center'>
        <div className='bold text-2xl'>
        Please {' '}
      <SignInButton></SignInButton> {' '}
      to continue !
        </div>
        </div>
        
      </SignedOut>
      
    </div>
  )
}

export default page
