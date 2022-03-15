import { Box, Link, Typography } from "@mui/material";
import { GitHub } from "@mui/icons-material";

const Footer = () => {
    return (  
        <Box sx={{maxWidth:1/3, mx:'auto', textAlign:'center', mb:4, mt:8}}>
            <Typography>
                all rights reserved © <Link href="https://github.com/xnti"><a>antidev</a></Link>.
            </Typography>
            <Typography>
                <GitHub/>
            </Typography>
        </Box>
    );
}
 
export default Footer;