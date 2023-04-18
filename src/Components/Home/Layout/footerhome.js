import * as React from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import AddCircleIcon from '@mui/icons-material/AddCircle';

import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PersonIcon from '@mui/icons-material/Person';
import Box from '@mui/material/Box';
import SvgIcon from '@mui/material/SvgIcon';



import Compass from './img/compass.svg';

export default function Footerhome() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
   <Box className="footerhome">
        <Box className="footerhome__circle"> 
            <AddCircleIcon />
        </Box>
        <BottomNavigation className='footerhome__menu' value={value} onChange={handleChange}>
          <BottomNavigationAction className='footerhome__item Mui-selected'
            label="Khám phá"
            value="recents"
            icon={
            <SvgIcon>
            <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" viewBox="0 0 23 23" fill="none">
            <path opacity="0.3" d="M11.5 12.5781C12.0954 12.5781 12.5781 12.0954 12.5781 11.5C12.5781 10.9046 12.0954 10.4219 11.5 10.4219C10.9046 10.4219 10.4219 10.9046 10.4219 11.5C10.4219 12.0954 10.9046 12.5781 11.5 12.5781Z" fill="#5669FF"/>
            <path d="M11.5 2.15625C6.34791 2.15625 2.15625 6.34791 2.15625 11.5C2.15625 16.6521 6.34791 20.8438 11.5 20.8438C16.6521 20.8438 20.8438 16.6521 20.8438 11.5C20.8438 6.34791 16.6521 2.15625 11.5 2.15625ZM16.2199 7.24725L14.114 12.5121C13.9694 12.8737 13.7528 13.2021 13.4775 13.4775C13.2021 13.7528 12.8737 13.9694 12.5121 14.114L7.24725 16.2199C7.18194 16.2461 7.11039 16.2525 7.04148 16.2383C6.97257 16.2242 6.90932 16.1902 6.85958 16.1404C6.80984 16.0907 6.77579 16.0274 6.76165 15.9585C6.74752 15.8896 6.75392 15.8181 6.78006 15.7528L8.886 10.4879C9.0306 10.1263 9.24715 9.79788 9.52252 9.52252C9.79788 9.24715 10.1263 9.0306 10.4879 8.886L15.7528 6.78006C15.8181 6.75392 15.8896 6.74752 15.9585 6.76165C16.0274 6.77579 16.0907 6.80984 16.1404 6.85958C16.1902 6.90932 16.2242 6.97257 16.2383 7.04148C16.2525 7.11039 16.2461 7.18194 16.2199 7.24725V7.24725Z" fill="#5669FF"/>
            </svg></SvgIcon>
            }
          />
          <BottomNavigationAction className='footerhome__item'
            label="Sự kiện"
            value="favorites"
            icon={ <SvgIcon><svg xmlns="http://www.w3.org/2000/svg" width="19" height="21" viewBox="0 0 19 21" fill="none">
            <path fillRule="evenodd" clipRule="evenodd" d="M13.7271 1.65334L13.728 2.37173C16.3679 2.57863 18.1117 4.37748 18.1146 7.1361L18.125 15.2108C18.1288 18.2185 16.2392 20.069 13.2105 20.0738L5.81223 20.0834C2.8024 20.0872 0.889206 18.1926 0.885421 15.1763L0.875013 7.19644C0.871228 4.41962 2.55355 2.62556 5.19342 2.38323L5.19247 1.66484C5.19153 1.24338 5.50377 0.926331 5.92009 0.926331C6.33642 0.925373 6.64866 1.24146 6.64961 1.66292L6.65055 2.33342L12.2709 2.32576L12.27 1.65526C12.269 1.2338 12.5813 0.91771 12.9976 0.916752C13.4045 0.915795 13.7262 1.23189 13.7271 1.65334ZM2.33311 7.49236L16.6584 7.4732V7.13795C16.6177 5.07857 15.5845 3.99811 13.73 3.83719L13.7309 4.57474C13.7309 4.98661 13.4101 5.31324 13.0033 5.31324C12.587 5.3142 12.2738 4.98853 12.2738 4.57665L12.2728 3.80079L6.65246 3.80845L6.65341 4.58336C6.65341 4.99619 6.34211 5.32186 5.92579 5.32186C5.50946 5.32282 5.19627 4.99811 5.19627 4.58527L5.19533 3.84773C3.35026 4.03259 2.32932 5.11688 2.33216 7.19447L2.33311 7.49236ZM12.605 11.8458V11.8563C12.6145 12.2969 12.974 12.6312 13.4102 12.6216C13.836 12.6111 14.1757 12.2462 14.1662 11.8055C14.1463 11.3841 13.8048 11.0402 13.3799 11.0412C12.9447 11.0508 12.604 11.4052 12.605 11.8458ZM13.3864 16.1466C12.9512 16.137 12.6002 15.7739 12.5992 15.3333C12.5898 14.8927 12.9389 14.5278 13.3741 14.5172H13.3836C13.8283 14.5172 14.1888 14.8803 14.1888 15.3305C14.1898 15.7807 13.8302 16.1456 13.3864 16.1466ZM8.70662 11.8612C8.72554 12.3018 9.08604 12.6457 9.52129 12.6265C9.94707 12.6064 10.2868 12.2424 10.2678 11.8018C10.2574 11.3708 9.90733 11.0355 9.48154 11.0365C9.0463 11.0557 8.70567 11.4206 8.70662 11.8612ZM9.52514 16.1035C9.0899 16.1227 8.73034 15.7788 8.71047 15.3382C8.71047 14.8976 9.05016 14.5336 9.4854 14.5135C9.91119 14.5125 10.2622 14.8478 10.2717 15.2779C10.2916 15.7194 9.95093 16.0834 9.52514 16.1035ZM4.80836 11.8947C4.82728 12.3353 5.18778 12.6801 5.62303 12.66C6.04881 12.6408 6.38849 12.2759 6.36862 11.8353C6.35916 11.4042 6.00907 11.069 5.58234 11.07C5.14709 11.0891 4.80741 11.4541 4.80836 11.8947ZM5.62677 16.1082C5.19152 16.1283 4.83197 15.7835 4.8121 15.3429C4.81115 14.9023 5.15178 14.5373 5.58703 14.5182C6.01281 14.5172 6.36385 14.8525 6.37331 15.2835C6.39318 15.7241 6.0535 16.0891 5.62677 16.1082Z" fill="#2C3550"/>
            </svg></SvgIcon>}
          />
          <BottomNavigationAction className='footerhome__item'
            label="Bản đồ"
            value="nearby"
            icon={<LocationOnIcon />}
          />
          <BottomNavigationAction  className='footerhome__item' label="Cá nhân" value="folder" icon={<PersonIcon />} />
        </BottomNavigation>
        </Box>
      );
}