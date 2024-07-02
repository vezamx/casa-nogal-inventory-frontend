import Logo from '../../components/logo/Logo'

export const SidebarLeft = () => {
  return (
    <div className="bg-customYellow min-h-screen min-w-screen flex justify-center">
      <Logo
        className='w-1/2 h-1/2 object-cover'
        width={200}
        height={200}
      />
    </div>
  )
}