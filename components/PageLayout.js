import Head from 'next/head'
import { Box } from '@mui/material';
import Header from './Header';
import { useRouter } from 'next/router';
import Footer from './Footer';

const PageLayout = ({ children, PageTitle }) => {
    const { asPath, pathname } = useRouter();
    return (
        <>
            <Head>
                <title>{PageTitle} - 4nt1d3v.n3t </title>
                <meta name="description" content="Personal blog of a developer." />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Box sx={{ backgroundColor: 'background.default', minHeight: '100vh', display:'flex', flexDirection:'column' }}>
                <Header />
                <Box sx={{
                    maxWidth: '42rem',
                    mx: 'auto',
                    pt: 4
                }}>
                    {children}
                </Box>
                
                <Box sx={{ mt: 'auto' }}>
                    <Footer />
                </Box>
            </Box>
        </>
    );
}

export default PageLayout;