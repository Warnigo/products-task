'use client'

import { Logo } from '@/components'
import { SwitcherLanguages, SwitcherTheme } from '@/layouts/Protected/Header'
import { AnimatedWrapper, FadeInUp } from '@/shared/motion'
import Form from './Form'

const Login = () => (
  <div className="container relative flex h-screen flex-col items-center justify-center gap-4">
    <div
      className="absolute inset-0 -z-10 bg-center bg-no-repeat opacity-[0.03]"
      style={{
        WebkitMask: `url('/logo.svg') center / contain no-repeat`,
        mask: `url('/logo.svg') center / contain no-repeat`,
        backgroundColor: 'hsl(var(--primary))',
      }}
    />

    <div className="absolute right-0 top-4 flex items-center justify-center gap-3">
      <AnimatedWrapper>
        <SwitcherTheme />
      </AnimatedWrapper>

      <AnimatedWrapper>
        <SwitcherLanguages />
      </AnimatedWrapper>
    </div>

    <FadeInUp>
      <AnimatedWrapper>
        <Logo className="size-16" />
      </AnimatedWrapper>
    </FadeInUp>

    <Form />
  </div>
)

Login.displayName = 'Login'
export default Login
