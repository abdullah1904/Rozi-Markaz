import { ReactNode } from 'react'

type Props = {
    children: ReactNode
}

const AuthLayout = ({ children }: Props) => {
    return (
        <div className='flex h-screen w-screen items-center justify-center'>
            {children}
        </div>
    )
}

export default AuthLayout