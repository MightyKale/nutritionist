import React from 'react'

const Button = ({text, color, border, textColor, full}) => {
  return (
    <button className={`${color} font-semibold text6-[18px] px-4 py-3 rounded-[8px] ${border && 'border'} ${border} ${full}`}>
        <lable className={`text-${textColor}`}>{text}</lable>
    </button>
  )
}

export default Button