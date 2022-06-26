import * as React from 'react';
import {styled, useTheme} from '@mui/material/styles';
import Cookies from 'universal-cookie';

import {
    Stack,
    MuiAppBar,
    CssBaseline,
    Box,
    Toolbar,
    IconButton,
    MenuIcon,

} from "components/base/index"
import {useNavigate} from "react-router-dom";
import {FaSignOutAlt} from "react-icons/fa";
import {Outlet} from "react-router-dom";
import {connect} from "react-redux";
import {logOut, setUserInfo,} from "redux/reducers/Authentication";


const drawerWidth = 280;

const Main = styled('main', {shouldForwardProp: (prop) => prop !== 'open'})(
    ({theme, open}) => ({
        flexGrow: 1,
        padding: theme.spacing(3),
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        marginRight: -drawerWidth,
        ...(open && {
            transition: theme.transitions.create('margin', {
                easing: theme.transitions.easing.easeOut,
                duration: theme.transitions.duration.enteringScreen,
            }),
            marginRight: 0,
        }),
    }),
);

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
})(({theme, open}) => ({
    transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
        marginRight: drawerWidth,
    }),
}));



function MainLayout(props) {
    const {logOut,setUserInfo,userInfo} = props

    const cookies = new Cookies();
    const navigation=useNavigate()

    const [open,setOpen]=React.useState()



    const handleLogOut=()=>{
        const valuse={sessionId:userInfo.id}
        logOut(valuse).then(res=>{
            if(res.payload.status===200){
                navigation("/login")
                cookies.remove('userInfo', { path: '/' });
            }

        })


    }



    return
    (
    <>
        {(userInfo && userInfo!=={})?
            <Box
            className="mainHeader"
        >
            <CssBaseline/>
            <AppBar position="fixed" open={open}>
                <Toolbar className="mainAppBar">
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="end"
                        sx={{...(open && {display: 'none'})}}
                    >
                        <MenuIcon/>
                    </IconButton>

                    <Stack direction={"row"} alignItems={"center"}  gap={"20px"} sx={{marginRight:"auto"}}>

                        <span style={{fontSize: ".85rem"}}>سامانه تست شرکت نوتاش</span>
                        <Box sx={{cursor:"pointer"}}>
                            <FaSignOutAlt size={24} onClick={handleLogOut}/>
                        </Box>

                    </Stack>
                </Toolbar>
            </AppBar>
            <Main open={open} sx={{margin: "0", padding: "0", marginTop: "150px", marginLeft: "16px"}}>

                <Outlet/>


            </Main>
        </Box>
        : <Box/>}
    </>

    );
}

const mapStateToProps = (state) => {

    return {
        userInfo: state?.login?.userInfo,

    }
}

const mapDispatchToProps = (dispatch) => {

    return {
        logOut: (data) => dispatch(logOut(data)),
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(MainLayout);