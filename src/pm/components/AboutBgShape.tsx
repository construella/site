import React from 'react';
import { useTheme } from '@mui/material/styles';

export const AboutBgShape: React.FC<React.SVGProps<SVGSVGElement>> = (props) => {
    const theme = useTheme();
    const color = theme.palette.mode === 'dark' ? theme.palette.background.paper : theme.palette.background.default;

    const startColor = theme.palette.mode === 'dark' ? theme.palette.background.default : color; // '#F5F6FA';
    const endColor = theme.palette.primary.main;

    return (
        <svg
            viewBox="-200.5 163.5 1297 506"
            preserveAspectRatio="xMidYMax meet"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <defs>
                <linearGradient id="aboutBgGradient" gradientTransform="rotate(90)">
                    <stop offset="5%" stopColor={startColor} />
                    <stop offset="95%" stopColor={endColor} />
                </linearGradient>
            </defs>
            <path fill="url(#aboutBgGradient)" d="M1096.5,425.889c0,81.82,0,162.79,0,244.611c-432.333,0-864.667,0-1297,0c0-144.105,0-287.359,0-431.465
	c1.332-0.493,2.757-0.941,3.994-1.523c30.528-13.622,62.958-26.034,99.001-36.25c37.565-10.62,77.318-18.596,120.97-21.732
	c7.038-0.493,13.979-0.896,21.018-1.389c10.747,0,21.494,0,32.239,0c1.047,0.135,2.092,0.359,3.139,0.403
	c37.09,1.389,71.421,6.856,103.661,15.549c41.178,11.113,75.416,26.079,105.563,43.196c23.871,13.577,46.504,27.558,70.376,41.135
	c49.166,28.05,101.282,54.801,157.963,79.491c55.729,24.287,114.883,46.422,181.266,63.942
	c55.824,14.742,114.5,25.721,178.504,29.35c58.3,3.316,114.694-0.045,168.142-11.784
	C1062.93,435.567,1079.476,430.459,1096.5,425.889z"/>
        </svg>
    );
};
