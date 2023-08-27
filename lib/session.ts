// this file is a wrapper with defaults to be used in both API routes and `getServerSideProps` functions
import type { IronSessionOptions } from 'iron-session'

import { User } from '@/entities/user'

export const sessionOptions: IronSessionOptions = {
  password: process.env.SECRET_COOKIE_SECRET as string,
  cookieName: process.env.SECRET_COOKIE_KEY as string,
  // secure: true should be used in production (HTTPS) but can't be used in development (HTTP)
  cookieOptions: {
    secure: process.env.NODE_ENV === 'production'
  }
}

declare module 'iron-session' {
  // eslint-disable-next-line no-unused-vars, unused-imports/no-unused-vars
  interface IronSessionData {
    user?: User
  }
}
