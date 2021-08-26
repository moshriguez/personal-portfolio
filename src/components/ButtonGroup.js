import React from 'react';
import { FiSun, FiSunrise, FiSunset } from 'react-icons/fi';
import { RiMoonClearFill, RiSunFoggyFill } from 'react-icons/ri';

const ButtonGroup = () => {

    const handleClick = () => {
        ``
    }

	return (
		<div className="btn-grp">
			<Button onClick={()=> {handleClick('night-time')}}>
				<RiMoonClearFill />
			</Button>
			<Button onClick={()=> {handleClick('early-sunrise')}}>
				<FiSunrise />
			</Button>
			<Button onClick={()=> {handleClick('light-day-time')}}>
				<RiSunFoggyFill />
			</Button>
			<Button onClick={()=> {handleClick('pleasant-day-time')}}>
				<FiSun />
			</Button>
			<Button onClick={()=> {handleClick('vivid-sunset')}}>
				<FiSunset />
			</Button>
		</div>
	);
};

export default ButtonGroup;
