import logo from './logo.svg';
import './App.css';
import { Button, Card, CardActions, CardContent, Link, TextField, Typography } from '@material-ui/core';
import { useState } from 'react';

function App()
{

  const [textDeepLinking, setTextDeepLinking] = useState(null)

  return (
    <div className="App">
      <header className='header-app'>
        <img src="/logo.png" alt="Logo" className='img-logo' />
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

          >
            <section className='card-actions'>
              <div>
                <Typography>
                  Link app
                </Typography>
                <Typography>
                  <Link href={`rpgo://app/${textDeepLinking}`}>rpgo://app/{textDeepLinking}</Link>
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
            </section>
          </CardActions>
        </Card>
      </div>
      <div  className='row-center mt-10'> 
        <Link
          variant="h4"
          download="excel.xls"
          href="data:application/octet-stream;base64,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
          AAAJAAkAPgIAAI4TAAAAAA=="
        >
          Descargar archivo
        </Link>

      </div>
    </div >
  );
}

export default App;
