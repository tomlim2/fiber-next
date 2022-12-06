import type { FC, ReactNode } from 'react'

interface Props {
  children: ReactNode
}

const SpotifyLayout: FC<Props> = ({ children }) => {
  return (
    <>
        spotify!
      {children}
    </>
  )
}

export default SpotifyLayout