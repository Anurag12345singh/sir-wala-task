import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Image from 'next/image';
import ecomlogo from '../../public/cardimage1.png'

import styles from '../../styles/card.module.css';

function cards() {
    return (
        <div>
     <div style={{ display: 'flex' , marginTop:'80px'}}>
                <div style={{marginLeft:'110px'}}>
                    <div>
                        <Card sx={{ maxWidth: '485px', height: '285px', backgroundColor: '#733838', borderRadius: '15px' }}>
                            {/* <CardMedia
        sx={{ height: 100 }}
        image="/reptile.jpg"
        title="info"
      /> */}
                            <Typography variant="h6" noWrap component="div">

                                <Image src={ecomlogo} alt="logo" width="95" height="95" style={{ borderRadius: '50px', marginTop: '20px',marginLeft:'20px' }} />
                            </Typography>
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div" style={{ color: 'white' }}>
                                    Web Design
                                </Typography>
                                <Typography variant="body2" color="text.secondary" style={{ color: 'white' }}>
                                    Lizards are a widespread group of squamate reptiles, with over 6,000
                                    species, ranging across all continents except Antarctica
                                </Typography>
                            </CardContent>
                        </Card>
                    </div >
                    <div style={{ marginTop:'70px'}}>
                    <Card sx={{ maxWidth: '485px', height: '285px', backgroundColor: '#733838', borderRadius: '15px' }}>
                        {/* <CardMedia
        sx={{ height: 100 }}
        image="/reptile.jpg"
        title="info"
      /> */}
                        <Typography variant="h6" noWrap component="div">

                            <Image src={ecomlogo} alt="logo" width="95" height="95" style={{ borderRadius: '50px', marginTop: '20px',marginLeft:'20px'}} />
                        </Typography>
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div" style={{ color: 'white' }}>
                                Web Design
                            </Typography>
                            <Typography variant="body2" color="text.secondary" style={{ color: 'white' }}>
                                Lizards are a widespread group of squamate reptiles, with over 6,000
                                species, ranging across all continents except Antarctica
                            </Typography>
                        </CardContent>
                    </Card>
                    </div>
                    <div style={{ marginTop:'70px'}}>
                        <Card sx={{ maxWidth: '485px', height: '285px', backgroundColor: '#733838', borderRadius: '15px' }}>
                            {/* <CardMedia
        sx={{ height: 100 }}
        image="/reptile.jpg"
        title="info"
      /> */}
                            <Typography variant="h6" noWrap component="div">

                                <Image src={ecomlogo} alt="logo" width="95" height="95" style={{ borderRadius: '50px',  marginTop: '20px',marginLeft:'20px' }} />
                            </Typography>
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div" style={{ color: 'white' }}>
                                    Web Design
                                </Typography>
                                <Typography variant="body2" color="text.secondary" style={{ color: 'white' }}>
                                    Lizards are a widespread group of squamate reptiles, with over 6,000
                                    species, ranging across all continents except Antarctica
                                </Typography>
                            </CardContent>
                        </Card>
                    </div>
                </div>
                <div style={{marginLeft:'145px'}}> 
                    <div>
                        <Card sx={{ maxWidth: '485px', height: '285px', backgroundColor: '#733838', borderRadius: '15px' }}>
                            {/* <CardMedia
        sx={{ height: 100 }}
        image="/reptile.jpg"
        title="info"
      /> */}
                            <Typography variant="h6" noWrap component="div">

                                <Image src={ecomlogo} alt="logo" width="95" height="95" style={{ borderRadius: '50px',  marginTop: '20px',marginLeft:'20px' }} />
                            </Typography>
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div" style={{ color: 'white' }}>
                                    Web Design
                                </Typography>
                                <Typography variant="body2" color="text.secondary" style={{ color: 'white' }}>
                                    Lizards are a widespread group of squamate reptiles, with over 6,000
                                    species, ranging across all continents except Antarctica
                                </Typography>
                            </CardContent>
                        </Card>
                    </div>
                    <div style={{ marginTop:'70px'}}> 
                        <Card sx={{ maxWidth: '485px', height: '285px', backgroundColor: '#733838', borderRadius: '15px' }}>
                            {/* <CardMedia
        sx={{ height: 100 }}
        image="/reptile.jpg"
        title="info"
      /> */}
                            <Typography variant="h6" noWrap component="div">

                                <Image src={ecomlogo} alt="logo" width="95" height="95" style={{ borderRadius: '50px', marginTop: '20px',marginLeft:'20px'}} />
                            </Typography>
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div" style={{ color: 'white' }}>
                                    Web Design
                                </Typography>
                                <Typography variant="body2" color="text.secondary" style={{ color: 'white' }}>
                                    Lizards are a widespread group of squamate reptiles, with over 6,000
                                    species, ranging across all continents except Antarctica
                                </Typography>
                            </CardContent>
                        </Card>
                    </div>
                    <div style={{ marginTop:'70px'}}>
                        <Card sx={{ maxWidth: '485px', height: '285px', backgroundColor: '#733838', borderRadius: '15px' }}>
                            {/* <CardMedia
        sx={{ height: 100 }}
        image="/reptile.jpg"
        title="info"
      /> */}
                            <Typography variant="h6" noWrap component="div">

                                <Image src={ecomlogo} alt="logo" width="95" height="95" style={{ borderRadius: '50px',  marginTop: '20px',marginLeft:'20px' }} />
                            </Typography>
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div" style={{ color: 'white' }}>
                                    Web Design
                                </Typography>
                                <Typography variant="body2" color="text.secondary" style={{ color: 'white' }}>
                                    Lizards are a widespread group of squamate reptiles, with over 6,000
                                    species, ranging across all continents except Antarctica
                                </Typography>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
            <div>

            </div>
        </div>
    )
}

export default cards 