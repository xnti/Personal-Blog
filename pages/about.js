
import { Box, Typography } from '@mui/material'
import PageLayout from '../components/PageLayout';



const AboutPage = () => {
    return (
        <PageLayout PageTitle={"4b0ut"}>
            <Box>
                <Typography variant="h1" component="h1" color={'primary.main'}>About</Typography>
                <Typography component="p" color={'primary.dark'}>Hello, I'm a blogger and I blog about interesting things.</Typography>
            </Box>
        </PageLayout>
    );
}

export default AboutPage