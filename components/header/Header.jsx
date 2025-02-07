import { Button } from '../ui/button'

const Header = () => {
  return (
    <div className='w-11/12 my-5 md:w-10/12 mx-auto'>
      <div className="flex items-center justify-between">
        <p>TaskFlow </p>
        <ul className="flex items-center justify-between gap-5">
          <li>Task</li>
          <li>Task</li>
          <li>Task</li>
          <li>Task</li>
        </ul>
        <div className="">
          <Button>Login</Button>
        </div>
      </div>
    </div>
  )
}

export default Header