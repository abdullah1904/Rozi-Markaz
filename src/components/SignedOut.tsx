import { ReactNode, Suspense } from 'react';
import { SignedOut as ClerkSignedOut } from '@clerk/nextjs';

type Props = {
    children: ReactNode,
}

const SignedOut = ({ children }: Props) => {
    return (
        <Suspense>
            <ClerkSignedOut>
                {children}
            </ClerkSignedOut>
        </Suspense>
    )
}

export default SignedOut