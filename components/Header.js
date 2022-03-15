import MenuIcon from '@mui/icons-material/Menu';
import { Box, Link } from '@mui/material';

const Header = () => {
    return (
        <Box sx={{
            borderBottom: 1,
            borderColor: 'primary.main'
        }}>
            <Box sx={{
                maxWidth: 800,
                mx: 'auto',
            }}>
                <nav className="navbar navbar-expand-lg">
                    <div className="container">
                        <Box component="a" color={'primary.main'} className="navbar-brand fs-4">
                            <Link className='text-decoration-none' href='/'>
                                <>4nt1d3v</>
                            </Link>
                        </Box>
                        <button className="navbar-toggler text-muted" type="button" data-bs-toggle="collapse" data-bs-target="#antidevNavbar" aria-controls="antidevNavbar" aria-expanded="false" aria-label="Toggle navigation">
                            <MenuIcon display='span' sx={{ fontSize: 36 }} />
                        </button>

                        <div className="collapse navbar-collapse" id="antidevNavbar">
                            <ul className='navbar-nav ms-auto text-white'>
                                <li className='nav-item text-uppercase fs-5 fw-bold' style={{ cursor: 'pointer' }}>
                                    <Box component="a" sx={{ p: '0.5rem 1rem' }} color={'primary.main'}>
                                        <Link href='/' className='text-decoration-none'>
                                            <>
                                                Blog
                                            </>
                                        </Link>
                                    </Box>
                                </li>
                                <li className='nav-item text-uppercase fs-5 fw-bold' style={{ cursor: 'pointer' }}>
                                    <Box component="a" sx={{ p: '0.5rem 1rem' }} color={'primary.main'}>
                                        <Link href='/about' className='text-decoration-none'>
                                            <>
                                                About
                                            </>
                                        </Link>
                                    </Box>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </Box>
        </Box>
    )
}

export default Header;