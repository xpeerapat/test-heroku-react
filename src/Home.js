import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import CheckroomIcon from '@mui/icons-material/Checkroom';

import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import IconButton from '@mui/material/IconButton';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import CssBaseline from '@mui/material/CssBaseline';
import Link from '@mui/material/Link';
import TwoWheelerIcon from '@mui/icons-material/TwoWheeler';
import SportsGymnasticsIcon from '@mui/icons-material/SportsGymnastics';
import SavingsIcon from '@mui/icons-material/Savings';
import FastfoodIcon from '@mui/icons-material/Fastfood';
import CurrencyBitcoinIcon from '@mui/icons-material/CurrencyBitcoin';
import EuroIcon from '@mui/icons-material/Euro';
import LinearProgress from '@mui/material/LinearProgress';
import EqualizerIcon from '@mui/icons-material/Equalizer';


const theme = createTheme({
    palette: {
        green: {
            main: '#66bb6a',
        },
        yellow: {
            main: '#ffb74d',
        },
        pink: {
            main: '#ce93d8',
        },
    },
});

const ListDaily = (props) => {
    return (

        <ListItem >
            <ListItemAvatar >
                {props.icon === 'bank' && <AccountBalanceIcon color='primary' />}
                {props.icon === 'foods' && <RestaurantIcon color='yellow' />}
                {props.icon === 'clothes' && <CheckroomIcon color='green' />}
            </ListItemAvatar>
            <Typography >
                <Box sx={{
                    fontWeight: 'bold',
                }}>{props.spend}</Box>
                <Box>{props.price}</Box>
            </Typography>
            <Typography variant="body2" sx={{
                display: 'flex',
                position: 'absolute',
                right: 20, 
            }}>
                dd / mm / yyyy
            </Typography >
        </ListItem >
    )
}

const BlockItem = (props) => {
    return (
        <props.icon fontSize="large" sx={{
            // boxShadow: 1,
            borderRadius: '50%',
            display: 'block',
            mb: 1
        }} />
    )
}

function Item(props) {
    const { ...otherz } = props;
    return (
        <Link href="#" underline="none">
            <Box
                sx={{
                    pt: 1,
                    px: 3,
                    m: 2,
                    bgcolor: props.color,
                    color: 'white',
                    boxShadow: 10,
                    borderRadius: 2,
                    fontSize: '0.8rem',
                    fontWeight: '700',
                }}
                {...otherz}
            />
        </Link>
    );
}



function Home() {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Box sx={{ backgroundColor: '#C8D5FF' }}>
                <Box
                    sx={{
                        width: '100%',
                        height: '100%',
                        // border: 0.1,
                        borderRadius: 10,
                        boxShadow: 1,
                        backgroundColor: 'white',
                        // position: 'relative'
                    }}
                >   {/* DashBoard */}
                    <Box sx={{
                        fontSize: 25,
                        fontWeight: 'bold',
                        // border: 2,
                        pt: 5,
                        pb: 1,
                        pl: 3,
                        pr: 6,
                        alignContent: 'center',
                        display: 'inline-block',
                    }}>
                        <Typography variant="h4" fontWeight="bold" >
                            Dashboard
                        </Typography >
                    </Box>

                    {/* Avartar */}
                    <Avatar src="https://pbs.twimg.com/profile_images/564495660/avataravatar_400x400.jpg" variant="rounded"
                        sx={{
                            width: 35,
                            height: 35,
                            mt: 5,
                            mb: -1,
                            right: 30,
                            display: 'inline-block',
                            position: 'absolute',

                        }}></Avatar>


                    <Box sx={{
                        color: 'white',
                        fontSize: 34,
                        fontWeight: 'medium',
                        mx: 1,
                        pl: 3,
                        py: 2,
                        mt: 2,
                        mb: 2,
                        borderRadius: 5,
                        boxShadow: 1,
                        backgroundColor: '#2A5CFF',
                    }}>
                        <Typography variant="body1">
                            January
                        </Typography >

                        <Box sx={{
                            display: 'inline-block',
                        }}>
                            $ 500
                        </Box>
                        <Box sx={{
                            display: 'flex',
                            position: 'absolute',
                            right: 30,
                            mt: -7
                        }}>
                            <EqualizerIcon fontSize="large" />

                        </Box>
                        <Box sx={{
                            display: 'flex',
                            position: 'absolute',
                            right: 33,
                            mt: -2

                        }}>
                            <Typography variant="body2" color="white">70%</Typography>
                        </Box>

                        {/* Progress bar */}
                        <Box sx={{ display: 'flex', my: 1 }}>
                            <Box sx={{ width: '100%', mr: 3, border: 1 }}>
                                <LinearProgress variant="determinate" value="70" />
                            </Box>
                            <Box sx={{
                                minWidth: 35,
                                display: 'flex',
                                position: 'absolute',
                                right: 15,
                            }}>
                            </Box>
                        </Box>
                        <Typography variant="body2" fontSize="2">
                            Daily spend target: $16.67
                        </Typography>
                    </Box>

                    {/* Daily spends */}
                    <Typography variant="overline" sx={{
                        display: 'inline-block',
                        color: 'gray',
                        ml: 2,
                    }}>
                        Daily Spends
                    </Typography>
                    <Typography variant="caption" sx={{
                        position: 'absolute',
                        right: 10,
                        mt: 0.6

                    }}>
                        <Link href="#" underline="none" fontSize="13px"> See All </Link>
                    </Typography>

                    <List sx={{
                        width: '100%',   
                        borderRadius: 10,
                        boxShadow: 1, 
                        mb:2
                    }}>
                        <ListDaily spend="Net Banking" price="$365" icon="bank" />
                        <ListDaily spend="Foods & Drinks" price="$169" icon="foods" />
                        <ListDaily spend="Clothes" price="$65" icon="clothes" />
                    </List>

                    {/* Wishlist */}
                    <Typography variant="overline" sx={{
                        ml: 2,
                        display: 'inline-block',
                        color: 'gray', 
                    }}>
                        Wishlist
                    </Typography>
                    <Typography variant="caption" sx={{
                        position: 'absolute',
                        right: 10,
                        // border: 1,
                        mt: 0.6

                    }}>
                        <Link href="#" underline="none" fontSize="13px" > See All </Link>

                    </Typography>

                    {/* Slide items */}
                    <Box sx={{
                        width: '100%',
                        height: 120,
                        borderRadius: 10,
                        // backgroundColor: 'gray',
                        display: 'flex',
                        flexWrap: 'nowrap',
                        p: 1,
                    }}>
                        <Item color="#2A5CFF" ><BlockItem icon={CheckroomIcon} /> Shirt</Item>
                        <Item color="#4BD07F" ><BlockItem icon={SportsGymnasticsIcon} /> Gym</Item>
                        <Item color="#F9CD29" ><BlockItem icon={TwoWheelerIcon} /> Bike</Item>
                        <Item color="#F36B63" ><BlockItem icon={SavingsIcon} /> Saving</Item>
                        <Item color="#E14BB7" ><BlockItem icon={FastfoodIcon} /> Foods</Item>
                        <Item color="#2A5CFF" ><BlockItem icon={CurrencyBitcoinIcon} /> BTC</Item>
                        <Item color="#4BD07F" ><BlockItem icon={EuroIcon} /> ETH</Item>

                    </Box>

                    {/* Plus Button */}
                    <Box sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        mb: -2,
                    }}
                    >
                        <IconButton color="primary"  >
                            <AddCircleIcon fontSize="large" sx={{
                                boxShadow: 1,
                                borderRadius: '50%',
                            }} />
                        </IconButton>

                    </Box>

                    {/* Navigate Bar */}
                    <BottomNavigation sx={{
                        borderRadius: 6,
                        boxShadow: 6,
                        // mx: 1,
                        // border: 1,
                    }}>
                        <BottomNavigationAction icon={<HomeOutlinedIcon color="primary" />} />
                        <BottomNavigationAction icon={<FavoriteBorderOutlinedIcon color="primary" />} />
                        <BottomNavigationAction icon={<LocationOnOutlinedIcon color="primary" />} />
                        <BottomNavigationAction icon={<PersonOutlineOutlinedIcon color="primary" />} />
                    </BottomNavigation>

                </Box>
            </Box>
        </ThemeProvider >

    )
}

export default Home