import React, { useState } from 'react';
import { Button } from 'reactstrap';

const Rating = ({ movieId }) => {
const [rating, setRating] = useState(0);

const handleRate = (value) => {
    setRating(value);
};

return (
    <div className="mb-2">
    {[1, 2, 3, 4, 5].map((value) => (
        <Button
        key={value}
        color={value <= rating ? "warning" : "secondary"}
        size="sm"
        className="me-1"
        onClick={() => handleRate(value)}
        >
        ★
        </Button>
    ))}
    </div>
);
};

export default Rating;
