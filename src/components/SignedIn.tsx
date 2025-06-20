import { ReactNode, Suspense } from 'react'
import { SignedIn as ClerkSignedIn } from '@clerk/nextjs'

type Props = {
    children: ReactNode
}

const SignedIn = ({ children }: Props) => {
    return (
        <Suspense>
            <ClerkSignedIn>
                {children}
            </ClerkSignedIn>
        </Suspense>
    )
}

export default SignedIn