import React from 'react'

const ForgetPassword = () => {
    return (
        <>
            <section style={{ backgroundImage: 'linear-gradient(to right top, #72a5f1, #4dc3eb, #7cd7d4, #bae5c8, #edf0d5)' }} className='h-screen'>
                <header className='flex justify-between p-4'>
                    <img width={40} className='cursor-pointer mix-blend-color-burn' src='https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQgByBT5IiAT_a2x9pUVb4VMoOrlzHH7Jrzj-HB5jzHlR4lNLMS' />
                    <div className='flex gap-4 items-center'>
                        <p className='hover:underline cursor-pointer font-medium text-md'>Need help?</p>
                        <i className="cursor-pointer animate-spin text-center rounded-full fa-solid fa-gear text-xl text-gray-500"></i>
                    </div>
                </header>
                <div className=' my-10 p-5'>
                    <div className='w-[450px] rounded-2xl mx-auto text-center flex justify-center items-center flex-col gap-2 bg-white p-5 shadow-lg'>
                        <img width={100} className='my-5 bg-transparent' src='https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQgByBT5IiAT_a2x9pUVb4VMoOrlzHH7Jrzj-HB5jzHlR4lNLMS' />
                        <p className='text-xl font-medium'>Forget your password?</p>
                        <p className='text-[16px] text-gray-500'>Please enter the email address associated with your account and we'll email you a link to reset your password.</p>
                        <form className='w-full mt-8 my-4 relative'>
                            <input className='py-3 rounded-lg px-4 border-2 w-full ' type='email' placeholder='example@gmail.com' />
                            <label className='text-sm bg-white px-2 font-semibold absolute -top-3 text-gray-700 left-2'>Email address</label>
                        </form>
                        <button type='submit' className='mb-4 bg-gray-950 text-white hover:bg-gray-700 py-3 w-full rounded-lg'>Send Request</button>
                        <p className='gap-2 flex items-center'><i className="text-sm fa-solid fa-arrow-left"></i> <span className='text-md cursor-pointer hover:underline'>Return to sign in</span></p>
                    </div>
                </div>
            </section>
        </>
    )
}

export default ForgetPassword