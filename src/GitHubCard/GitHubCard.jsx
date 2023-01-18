import React from 'react'
import Card from "react-bootstrap/Card"
import Selfie from './IMG_7143.jpeg'

function GitHubCard() {
    return(
        <div className="card">
            <Card style={{ width: '18rem' }}>
            <Card.Img src={Selfie} style={{width: '80%'}}></Card.Img>
            <Card.Body>
                <Card.Title>adelgado4419</Card.Title>
                    <Card.Text>
                    I am a passionate indivual for a love for learning new things.
                    </Card.Text>
            </Card.Body>
           </Card>
        </div>
    )
}

export default GitHubCard