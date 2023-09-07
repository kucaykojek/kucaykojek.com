'use client'

import {
  SetStateAction,
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState
} from 'react'

import Logo from '@/component/Logo'
import { cn } from '@/lib/utils'

import './Loader.css'

type LoaderContextType = {
  initial: boolean
  setInitial: SetStateAction<boolean>
}

type LoaderProps = {
  show?: boolean
}

export const LoaderContext = createContext<LoaderContextType | undefined>(
  undefined
)

export const LoaderProvider: React.FC<any> = (props) => {
  const [initial, setInitial] = useState<boolean>(true)

  const value = useMemo(() => {
    return {
      initial
    }
  }, [initial])

  useEffect(() => {
    setTimeout(() => {
      setInitial(false)
    }, 2000)
  }, [])

  return <LoaderContext.Provider value={{ ...value, setInitial }} {...props} />
}

export const useLoader = (): LoaderContextType => {
  const context = useContext(LoaderContext)
  if (context === undefined) {
    throw new Error('useLoader must be used within an LoaderProvider')
  }
  return context
}

export default function Loader({ show }: LoaderProps) {
  const { initial } = useLoader()

  return (
    <div className={cn('loader', (initial || show) && 'loader--show')}>
      <div className="loader-logo">
        <Logo />
      </div>
    </div>
  )
}
