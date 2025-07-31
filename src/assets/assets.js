import green from "/green.jpg"
import orange from "/orange.jpg"
import original from "/original.jpg"
import pink from "/pink.jpg"

import user from "/user.webp"

export const flavours = [
    {   
        _id: 1,
        Image: pink,
        name: "Cherry"
    },
    {   
        _id: 2,
        Image: orange,
        name: "Orange Vanilla"
    },
    {
        _id: 3,
        Image: green,
        name: "Night"
    },
    {
        _id: 4,
        Image: original,
        name: "Original"
    }
]

export const reviews = [
    {
        Image: user,
        name: "Sarah M.",
        review: "Cola-Cola is my go-to drink for any occasion. It's always refreshing and delicious!"
    },
    {
        Image: user,
        name: "David L.",
        review: "I love the variety of flavours Cola-Cola offers. There's something for everyone."
    },
    {
        Image: user,
        name: "Emily R.",
        review: "The taste of Cola-Cola brings back so many happy memories. It's a classic!"
    }
]

export const team = [
    {
        Image: user,
        name: "Sarah Johnson",
        position: "CEO"
    },
    {
        Image: user,
        name: "Mark Thompson",
        position: "Head of Marketing"
    },
    {
        Image: user,
        name: "Emily Davis",
        position: "Sustainability Director"
    }
]