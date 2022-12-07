interface Props {
  children: React.ReactNode
}

const SpotifyLayout: React.FC<Props> = ({ children }) => {
  return (
    <>
        spotify!
      {children}
    </>
  )
}

export default SpotifyLayout