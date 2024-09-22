import { ReactNode } from "react"

interface Props {
  children: ReactNode
  onClose: () => void
}

function Alert({ children, onClose }: Props) {
  return (
    <div className='alert alert-primary alert-dismissable' onClick={onClose}>{children}</div>
  )
}

export default Alert