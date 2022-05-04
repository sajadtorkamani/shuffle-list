import React from 'react'
import classNames from 'classnames'

type Props = React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>

const ActionButton: React.FC<Props> = (props) => {
  const className = classNames(
    'text-[14px] text-gray-600 underline',
    props.className
  )

  return <button {...props} className={className} />
}

export default ActionButton
