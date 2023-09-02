import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import TestimonialCard from './CardInfo/TestimonialCard';
export default function CarouselPage() {
    return (
        <Carousel infiniteLoop={true} autoPlay={true} Interval={5000} showStatus={false}>
            <TestimonialCard name="Micheal Caldwell" description="This is the best Mediterranean food that I've ever had!"/>
            <TestimonialCard name="John Smith" description="Really loved the cozy vibes and 
                delicious food here."/>
            <TestimonialCard name="Erika Rushton" description="I've had some great Mediterranean food before, but none of them beats
             Little Lemon in flavor and texture."/>
            <TestimonialCard name="John Rosenblum" description="Great food, welcoming staff, cozy atmosphere. A great place to 
                treat your kids to."/>
            <TestimonialCard name="Jim Rayner" description="The food here really refreshed me after a late night shift
                at the local supply depot."/>
            <TestimonialCard name="Brian Dean" description="I came to Little Lemon after a 3 hour flight from the med.
                 The food here tasted so delicious was like being back at home."/>
            <TestimonialCard name="Tyler Johnson" description="The food here was fire!! Everyone should try this place
                 out at least once if they live in London or are visiting."/>
            <TestimonialCard name="Jack Watkins" description="This restaurant served as a perfect dinner for me after a 
                long night of studying. I would definitely order from here again!"/>
             </Carousel>
    )
}