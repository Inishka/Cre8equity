import React, { ReactNode } from 'react'

const RootLayout = ({ children }: { children: ReactNode }) => {
return(
    <main className=' relative'>
        <div className='flex'>
          <section className="flex min-h-screen flex-1 flex-col px-3 pb-6 pt-0 max-md:pb-14 font-sans ">
            <div className="w-full">
               {children}
            </div>
          </section>
        </div>
    </main>
)

}
export default RootLayout