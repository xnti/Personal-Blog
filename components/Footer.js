import { Box, Link, Typography } from "@mui/material";
import { GitHub } from "@mui/icons-material";

const Footer = () => {
    return (  
        <Box sx={{maxWidth:1/3, mx:'auto', textAlign:'center', mb:4, mt:8}}>
            <Typography color={'primary.contrastText'}>
                all rights reserved © <Link href="https://github.com/xnti" color={'primary.main'}>antidev</Link>.
            </Typography>
            <Typography color={'primary.contrastText'}>
                <GitHub/>
            </Typography>
        </Box>
    );
}
 
export default Footer;