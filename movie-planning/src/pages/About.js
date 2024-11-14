import React from 'react';
import { Card, CardBody, CardTitle, CardText } from 'reactstrap';

const About = () => {
return (
    <Card>
    <CardBody>
        <CardTitle tag="h2">About Movie Night Planning</CardTitle>
        <CardText>
        This application helps you plan your movie nights by searching for movies,
        marking them as watched, and rating them. Perfect for keeping track of what
        to watch next with friends!
        </CardText>
    </CardBody>
    </Card>
);
};

export default About;