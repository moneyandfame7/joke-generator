import {createTheme} from "@mui/material";

export const theme=createTheme({
    palette:{
      primary:{
          main:'#E0A96D',
          light:'#ffda9c',
          dark:'#ac7941',
          contrastText:'#000',
      },
        secondary:{
          main:'#383838',
            light:'#626262',
            dark:'#121212',
      }
    },
    typography:{
        button:{
            fontWeight:'600',
            fontSize:'1rem'
        }
    },


})