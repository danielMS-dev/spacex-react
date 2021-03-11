import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const Launche = ({ details, links, ...otherProps }) => {
  return (
    <Card style={{ width: "20rem" }}  className='card text-white bg-dark mb-3'>
      <Card.Header>
        <h4>{otherProps.name}</h4>
      </Card.Header>
      <Card.Img
        variant="top"
        src={links.patch.small}
        className="rounded mx-auto d-block"
      />
      <Card.Body>
        <Card.Title>
          Status:{" "}
          <strong>
            {otherProps.success ? (
              <span class="text-success">Successful</span>
            ) : (
              <span class="text-danger">Failed</span>
            )}
          </strong>
        </Card.Title>
        <Card.Text >
          {details.substring(0, 50)}
             <Link to="/">  <strong> Más...</strong></Link>
        </Card.Text>
      </Card.Body>
      <Card.Footer>
        <small className="text-muted">{otherProps.date_local}</small>
      </Card.Footer>
    </Card>
  );
};

export default Launche;

/*    <Grid item xs={12} sm={6}>
    <Paper className="defaultPaper">
     
      <ul>
        <li>
         <img alt="small" src={links.patch.small} /> 
        
         <p>{otherProps.name}</p>
         <p>{otherProps.success ? 'SUCCESS' : 'FAIL'}</p>
         <p>{otherProps.date_local}</p>
          <p>{details}</p>
        </li>
        
      </ul>
    </Paper>
  </Grid>  */

/*   
    <Card className={classes.root}>
       <CardHeader
        title={otherProps.name}
        subheader={otherProps.date_local}
      />
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="10%"
          width="10%"
          image= {links.patch.small}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="h2">
          {otherProps.success ? 'Success' : 'failed'}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
    */
