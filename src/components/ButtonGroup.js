import React from 'react';
import { FiSun, FiSunrise, FiSunset } from 'react-icons/fi';
import { RiMoonClearFill, RiSunFoggyFill } from 'react-icons/ri';

const ButtonGroup = () => {

    const handleClick = () => {
        
    }

	return (
		<div className="btn-grp">
			<button onClick={()=> {handleClick('night-time')}}>
				<RiMoonClearFill />
			</button>
			<button onClick={()=> {handleClick('early-sunrise')}}>
				<FiSunrise />
			</button>
			<button onClick={()=> {handleClick('light-day-time')}}>
				<RiSunFoggyFill />
			</button>
			<button onClick={()=> {handleClick('pleasant-day-time')}}>
				<FiSun />
			</button>
			<button onClick={()=> {handleClick('vivid-sunset')}}>
				<FiSunset />
			</button>
		</div>
	);
};

export default ButtonGroup;
