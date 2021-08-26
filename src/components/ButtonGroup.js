import React from 'react';
import { FiSun, FiSunrise, FiSunset } from 'react-icons/fi';
import { RiMoonClearFill, RiSunFoggyFill } from 'react-icons/ri';

const ButtonGroup = () => {

    const handleClick = (timeOfDay) => {
		const bodyClasses = document.body.classList
		document.body.classList.remove(...bodyClasses)
		document.body.classList.add(timeOfDay)
    }

	return (
		<div className="btn-grp">
			<button onClick={()=> {handleClick('night-time')}}>
				<RiMoonClearFill />
			</button>
			<button onClick={()=> {handleClick('early-sunrise')}}>
				<FiSunrise className='move-up-svg'/>
			</button>
			<button onClick={()=> {handleClick('light-day-time')}}>
				<RiSunFoggyFill />
			</button>
			<button onClick={()=> {handleClick('pleasant-day-time')}}>
				<FiSun />
			</button>
			<button onClick={()=> {handleClick('vivid-sunset')}}>
				<FiSunset className='move-up-svg'/>
			</button>
		</div>
	);
};

export default ButtonGroup;
