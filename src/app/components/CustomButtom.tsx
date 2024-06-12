import { ButtonHTMLAttributes, FC } from 'react';

const btnSizes = {
  sm: 'w-12',
  md: 'w-24',
  lg: 'w-32',
  xl: 'w-64',
  wrap: ''
}

type sizeType = keyof typeof btnSizes
type btntype = 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'yellow'

interface props extends ButtonHTMLAttributes<HTMLButtonElement>{
  text: string;
  size?: sizeType;
  colorType?: btntype;
  isLoading?: boolean;
}

const btnProps = {
  primary:    'bg-buttons-primary',
  secondary:  'bg-buttons-secondary',
  success:    'bg-buttons-success',
  warning:    'bg-buttons-warning',
  danger:     'bg-buttons-danger',
  yellow:      'bg-buttons-yellow'
}

export const CustomButtom: FC<props> = ({
  text,
  size = 'wrap',
  colorType = 'primary',
  isLoading = false,
  ...buttonProps
}) => {
  return (
    <button
      className={
        `${btnProps[colorType]}
        rounded-lg p2 text-md
        ${isLoading ? 'text-white/60' : 'text-white'}
        drop-shadow-xl font-semibold hover:${btnProps[colorType]}-hover
        ${btnSizes[size]}
        ${isLoading ? 'flex' : ''}
      `}{...buttonProps}
    >
    {/* //   {isLoading ? true : false}Loading... */}
    </button>
  )
}
