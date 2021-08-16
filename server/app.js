const express = require( 'express' );
const app = express();

app.get( '/', ( req, res, ) =>
{
    res.send( 'Everythings up and running! 👍' );
} );

app.get( '/posts', ( req, res ) =>
{

} );

app.set( '/submit-post', ( req, res ) =>
{

} );

app.listen( '8888' );