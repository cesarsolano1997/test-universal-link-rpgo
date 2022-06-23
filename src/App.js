import logo from './logo.svg';
import './App.css';
import { Card, CardActions, CardContent, Link, TextField, Typography } from '@material-ui/core';
import { useState } from 'react';

function App()
{

  const [textDeepLinking, setTextDeepLinking] = useState(null)

  return (
    <div className="App">
      <header className='header-app'>
        <img src="/logo.png" alt="Logo" className='img-logo'/>
        <Typography
          variant={'h3'}
          className={'header-title'}
          align='center'
        >Pruebas universal linking RPGO</Typography>
      </header>
      <div className='row-center'>
        <Card className='card-navigation'>
          <CardContent>
            <Typography>
              Navegación App
            </Typography>
            <TextField
              onChange={(e) => setTextDeepLinking(e.target.value)}
              placeholder='Ingrese el deep linking'
              className='input-deep-linking'
            />
          </CardContent>
          <CardActions
            className='card-actions'
          >
            <div>
              <Typography>
                Link app
              </Typography>
              <Typography>
                <Link href={`rpgo://${textDeepLinking}`}>rpgo://{textDeepLinking}</Link>
              </Typography>
            </div>
            <div>
              <Typography>
                Link friendly
              </Typography>
              <Typography>
                <Link href={`${window.location.href}${textDeepLinking}`}>{window.location.href}{textDeepLinking}</Link>
              </Typography>
            </div>
          </CardActions>
        </Card>
      </div>
    </div>
  );
}

export default App;
