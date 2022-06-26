import React, {useEffect, useState,useRef} from "react"
import {connect} from "react-redux";
import {login,create} from "redux/reducers/Authentication";
import {Form, Formik} from "formik"
import * as Yup from "yup"
import Cookies from 'universal-cookie';
import backgroundImage from "assets/images/FncVWD.jpg"
import {useNavigate} from "react-router-dom";
import {
    Box,
    Button,
    Grid,
    TextField,
    Typography,
    ToggleButtonGroup,
    ToggleButton,
    Stack
} from "components/base"


const Login = (props) => {
    const [mode, setMode] = useState(1);
    const cookies = new Cookies();
    const navigate = useNavigate();

    const {
        login,
        create,
    } = props

    let validationSchema = Yup.object().shape({
        username: (mode===2) && Yup.string().required("نام کاربری الزامی است"),
        password: Yup.string().required(" رمز عبور الزامی است"),
        email: Yup.string().required(" رایانامه الزامی است"),

    })



    const initialLoginValues = {
        email: '',
        password: '',
    }
    const intialCreatevalues={
        ...initialLoginValues,
        username:""
    }

    const navigateHome=(res)=>{
        if(res?.payload?.status===200){
            navigate("/")
            cookies.set('userInfo',
                (res?.payload?.data?.session)? res?.payload?.data?.session : res?.payload?.data?.account,
                {path: '/'})

        }
    }

    const onSubmit = async (values) => {
        if (mode === 1) {
            login(values).then((res) => {
                navigateHome(res)
            })
        } else if (mode === 2) {
            create(values).then((res)=> {
                navigateHome(res)
            }

        )

        }
    }



    const handleButtonChange = e => {
        setMode(+e.target.value)
    };



    return (
        <Formik
            enableReinitialize={true}
            initialValues={(mode===1)? initialLoginValues: intialCreatevalues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}>
            {({
                  errors,
                  touched,
                  handleSubmit,
                  dirty,
                  isValid,
                  values,
                  handleChange,
                  handleBlur
              }) => {
                return (

                    <Stack
                        sx={{
                            background:`url(${backgroundImage})`,
                            backgroundSize:"cover",
                            width: "100vw",
                            height: "100vh",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                        }}
                    >
                        <ToggleButtonGroup
                            value={mode}
                            exclusive
                            onChange={handleButtonChange}
                            sx={{
                                mb: 2, display: "flex",
                                width: {xs: "260px", sm: "290px", md: "320px"},
                                justifyContent: "space-around",
                                alignItems: "center",
                                gap: 2,
                            }}


                        >
                            <ToggleButton   value={1}>ورود</ToggleButton>
                            <ToggleButton   value={2}>ایجاد حساب </ToggleButton>
                        </ToggleButtonGroup>

                        <Box
                            sx={{
                                width: {xs: "260px", sm: "290px", md: "320px"},
                                height: "400px",
                                display: "flex",
                                flexDirection:"column",
                                paddingY:4,
                                alignItems: "center",
                                justifyContent: "center",
                                backgroundColor: "white",
                                borderRadius: 2

                            }}
                        >
                            <Box
                                sx={{
                                    marginY: 1,
                                    gap: 1,
                                    display: "flex",
                                    flexDirection: "column",
                                    justifyContent: "center",
                                    alignItems: "center",
                                }}
                            >

                                <Box
                                    sx={{
                                        marginTop: 2,
                                        gap: 1,
                                        display: "flex",
                                        justifyContent: "center",
                                        alignItems: "center",
                                    }}
                                >
                                </Box>

                                <Typography sx={{color: '#030073', fontSize: {xs: "22px", sm: "18px"}, marginBottom: 4}}
                                            variant="h5" gutterBottom component="div">
                                    سامانه تست شرکت نوتاش
                                </Typography>
                            </Box>
                            <Form onSubmit={handleSubmit}
                                  style={{
                                      display: "flex",
                                      flexDirection: "column",
                                      justifyContent: "center",
                                      alignItems: "center",
                                      width: 'full',
                                      height: '100%',
                                  }}>
                                <Grid container xs={11} md={10} spacing={1}>
                                    <Grid item xs={12} sm={12} md={12}>
                                        <TextField
                                            label="رایانامه"
                                            variant="outlined"
                                            fullWidth
                                            //multiline
                                            onChange={handleChange}
                                            name="email"
                                            value={values.userName}
                                            onBlur={handleBlur}
                                            error={!!errors.userName && touched.userName}
                                            helperText={!!errors.userName && touched.userName ? errors.userName : ''}

                                        />
                                    </Grid>
                                    <Grid item xs={12} sm={12} md={12}>
                                        <TextField
                                            label="رمز ورود"
                                            variant="outlined"
                                            fullWidth
                                            name="password"
                                            onChange={handleChange}
                                            value={values.password}
                                            onBlur={handleBlur}
                                            error={!!errors.password && touched.password}
                                            helperText={!!errors.password && touched.password ? errors.password : ''}

                                        />
                                    </Grid>
                                    {
                                        (mode===2) &&
                                        <Grid item xs={12} sm={12} md={12}>
                                            <TextField
                                                label="نام کاربری"
                                                variant="outlined"
                                                fullWidth
                                                name="username"
                                                onChange={handleChange}
                                                value={values.username}
                                                onBlur={handleBlur}
                                                error={!!errors.username && touched.username}
                                                helperText={!!errors.username && touched.username ? errors.username : ''}

                                            />
                                        </Grid>
                                    }


                                    <Grid item xs={12} sm={12} md={12}>
                                        <Button
                                            disabled={!dirty || !isValid}
                                            variant="contained"
                                            color="primary"
                                            type="Submit"
                                            fullWidth
                                        >
                                            ثبت
                                        </Button>

                                    </Grid>
                                </Grid>

                            </Form>
                        </Box>
                    </Stack>
                )
            }}
        </Formik>


    )
}

const mapStateToProps = (state) => {
    return {

    }
}

const mapDispatchToProps = (dispatch) => {
    return {

        login: (data) => dispatch(login(data)),
        create: (data) => dispatch(create(data)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)

