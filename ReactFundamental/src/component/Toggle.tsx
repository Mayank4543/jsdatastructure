type ToggleProps={
    onToggle:()=>void,
    isOn:boolean
}
export default function Toggle({ onToggle, isOn }: ToggleProps) {
  return (
    <button 
      onClick={onToggle} 
      className={`w-16 h-8 flex items-center rounded-full p-1 duration-300 ${isOn ? 'bg-green-500 justify-end' : 'bg-gray-300 justify-start'}`}>
      <div className='w-6 h-6 bg-white rounded-full shadow-md duration-300'></div>
    </button>
  )
}