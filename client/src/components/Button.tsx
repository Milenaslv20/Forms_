import { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Button = ({ to, label }) => {
  const [isDisabled, setIsDisabled] = useState(false);
  const navigate = useNavigate();

  const handleClick = () =>{
    setIsDisabled(true);
    setTimeout(() =>{
      navigate(to);
    }, 400);
  };

  return (
    <div>
        <button className='btn' onClick={handleClick} disabled={isDisabled}>{label}</button>
    </div>
  )
}

export default Button