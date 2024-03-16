import { ReactNode } from "react"

type Props = {
  children: ReactNode
}

const MainLoyout = ({ children }: Props) => {
  return (
    <>
      <div className="flex flex-row">header</div>
      {children}
      <div>footer</div>
    </>
  )
}

export default MainLoyout
