import type { FC } from 'react'
import Link from 'next/link'
import Image from 'next/image'

const NotFound: FC = () => {
    return (
        <div className={'w-full min-h-screen bg-white grid items-center'}>
            <div className={'flex flex-col items-center'}>
                <Image className={'min-w-72 w-1/2'} src={'/images/error-oops.png'} height={434} width={1401} alt={'Oops'}/>
                <div className={'text-center max-w-min py-4'}>
                    <h2 className={'font-bold text-2xl min-w-max px-20'}>404 - Page Not Found</h2>
                    <p className={'text-sm mt-4'}>{`The page you are looking for might have been removed, had its name changed or is temporarily unavailable.`}</p>
                </div>

                    <Link href={'/'}><div className={'bg-[#0045d3] text-white rounded-full py-4 px-10 mt-4 drop-shadow-2xl tracking-widest'}>GO TO HOMEPAGE
                    </div>
                    </Link>
            </div>
        </div>
    )
}

export default NotFound
