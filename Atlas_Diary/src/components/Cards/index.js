import React from 'react';
import Card from 'react-bootstrap/Card';
import Hawa_Mahaal from './images/Hawa_Mahal.jpg';
import Monsoon_Palace from './images/Monsoon_Palace.jpg';
import Shaking_Minarets from './images/Shaking_Minarets.jpg';
import Taj from './images/Taj.jpg';
import './index.css';

function Cards() {
    return (
        <>
            <Card border="info" style={{ width: '60rem', display: 'flex', flexDirection: 'row',alignItems: 'center',justifyContent: 'center' }} className="card">
                <Card.Img variant="top" src={Hawa_Mahaal} style={{ width: '335px', height:'500px' }} />
                <Card.Body>
                    <Card.Title>Hawa_Mahaal</Card.Title>
                    <Card.Text>
                        Hawa Mahal's unique attraction is its 953 windows that cover the lace-like walls to
                        allow royal ladies to watch the daily drama in the street below, without being noticed.
                    </Card.Text>
                </Card.Body>
            </Card>
            <br></br>
            <Card border="info" style={{ width: '50rem', display: 'flex', flexDirection: 'row',alignItems: 'center',justifyContent: 'center' }} className="card-1">
                <Card.Img variant="top" src={Monsoon_Palace} style={{ width: '335px', height:'500px' }} />
                <Card.Body>
                    <Card.Title>Monsoon_Palace</Card.Title>
                    <Card.Text>
                    Situated just outside Udaipur, this 19th-century palace is built on top of Bansdara hills.
                    Used as a monsoon palace and hunting lodge, its builder, Maharana Sajjan Singh, originally planned to make it an astronomical center.
                    The plan was cancelled with Maharana Sajjan Singh's premature death.
                    It is still an awe-inspiring sight on the Udaipur skyline and offers spectacular views of the city and the areas around.
                    </Card.Text>
                </Card.Body>
            </Card>
            <br></br>
            <Card border="info" style={{ width: '60rem', display: 'flex', flexDirection: 'row',alignItems: 'center',justifyContent: 'center' }} className="card-2">
                <Card.Img variant="top" src={Shaking_Minarets} style={{ width: '335px', height:'500px' }}/>
                <Card.Body>
                    <Card.Title>Shaking_Minarets</Card.Title>
                    <Card.Text>
                    Shaking Minarets, they are playful but with a whir of quivering mystery.
                    They have left the best of architects and pioneering design engineers intrigued and in unresolvable wonder.
                    What they cannot unravel is when one minaret is shaken the other begins to vibrate, though the connecting passage between the two remains vibration-free;
                    what causes this vibration is unknown. There are two well-known pairs of Shaking Minarets in Ahmedabad,
                    one located opposite the Sarangpur Darwaja and the other near the Kalupur Railway Station Area.
                    The one near Sarangpur Darwaja is within the vicinity of the Sidi Bashir Mosque built in 1452 AD by Sidi Bashir,a slave of Sultan Ahmed Shah.
                    </Card.Text>
                </Card.Body>
            </Card>
            <br></br>
            <Card border="info" style={{ width: '50rem', display: 'flex', flexDirection: 'row',alignItems: 'center',justifyContent: 'center' }} className="card-3">
                <Card.Img variant="top" src={Taj} style={{ width: '335px', height:'500px' }}/>
                <Card.Body>
                    <Card.Title>Taj_Mahaal</Card.Title>
                    <Card.Text>
                    The Taj Mahal is an ivory-white marble mausoleum on the south bank of the Yamuna river in the Indian city of Agra.
                    It was commissioned in 1632 by the Mughal emperor, Shah Jahan (reigned from 1628 to 1658), to house the tomb of his favourite wife, Mumtaz Mahal.
                    The tomb is the centrepiece of a 17-hectare (42-acre)complex, which includes a mosque and a guest house,
                    and is set in formal gardens bounded on three sides by a crenellated wall.
                    </Card.Text>
                </Card.Body>
            </Card>
            <br></br>
        </>
    );
}

export default Cards;