import React from 'react'

export default function MainButton({text,type = 'button',onClick, className}) {
  return (
    <button className={"border border-black px-5 py-3 rounded bg-violet-900 text-white " + className} type={type} onClick={onClick}>{text}</button>
  )
}
