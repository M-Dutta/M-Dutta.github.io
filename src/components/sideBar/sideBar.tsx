import { Grid, Slide, } from '@mui/material';
import { styled } from "@mui/material/styles";
import { LinkedInIcon, GitHubIcon, ResumeIcon } from './icons'

const SideBarContainer = styled(Grid)(({ theme }) => ({
    alignContent: 'baseline',
    justifyContent: 'center',
    position: 'fixed',
    top: 'calc(50% - 42px)',
    right: '1%',
    width: 'fit-content!important',
    borderRadius: '1em',
    zIndex: 1
    ,
    [theme.breakpoints.down("sm")]: {
        right: '0%'
    }
}));

export const SideBar = () => {
    return (
        <Slide in={true} direction='left' timeout={2000}>
            <Grid component={SideBarContainer} direction='column'>
                <Grid item>
                    <LinkedInIcon />
                </Grid>
                <Grid item>
                    <GitHubIcon />
                </Grid>
                <Grid item>
                    <ResumeIcon />
                </Grid>
            </Grid>
        </Slide>
    )
}