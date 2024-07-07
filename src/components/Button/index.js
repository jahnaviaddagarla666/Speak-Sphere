import React from 'react'
const Button = ({
label = 'Button',
type = 'button',
className = '',
disabled = false,
}) => {
return (
<button type={type} className={`text-white bg-[#132743] hover:bg[#602020] focus:ring-4 focus:outline-none focus:ring-[#862d2d]-300 font-large rounded-lg text-lg px-5 py-2.5 text-center ${className}`} disabled={disabled}>{label}</button>
 )
}
export default Button