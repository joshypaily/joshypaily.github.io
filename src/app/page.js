import Image from "next/image";
import styles from "./page.module.css";
import CircularProgress from '@mui/material/CircularProgress';
import Grid from '@mui/material/Grid';


export default function Home() {
  return (
    
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justifyContent="center"
      flexDirection = "row"
      sx={{ minHeight: '100vh' }}
    >
      <Grid item xs={1} >
        <h1>Inprogress</h1>
      </Grid>
      <Grid item xs={1}>
        <CircularProgress />
      </Grid>
    </Grid>
  );
}


