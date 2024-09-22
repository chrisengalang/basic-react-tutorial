interface Props {
  children: string
  type?: 'primary' | 'secondary' | 'danger'
  onClick: () => void
}

function Button({ children, type, onClick }: Props) {
  return <button className={'btn btn-' + type} onClick={onClick}>
    {children}
  </button>
}

export default Button