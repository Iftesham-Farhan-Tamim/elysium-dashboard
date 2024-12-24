import { button } from "@material-tailwind/react";
import user1 from "../assets/_MG_6293.jpg";

export const navItems = [
    { label: "Dashboard", href: "dashboard" },
    { label: "Inbox", href: "inbox" },
    { label: "Calender", href: "calender" },
    { label: "Insights", href: "insights" },
    { label: "Listings", href: "listings" },
];

export const zerobox = [
    {
        profile: user1,
        title: "Good morning!",
        text: "Here's an overview of your properties",
    },
    {
        button1: "Last Month",
        icon: <i class="ri-arrow-down-s-line"></i>,
        button2: "Analytics",
    },
]

export const firstBox = [
    {
        title: "Check'ins",
        icon: "key",
        number: 12
    },
    {
        title: "Check'outs",
        icon: "shooping",
        number: 32
    },
    {
        title: "Earnings",
        icon: "wallet",
        number: "$ 4.923,68",
    },
    {
        title: "Reviews",
        icon: "analytics",
        number: "4.5(1400)"
    },
];

export const secondBox = [
    {
        icon: <i class="ri-error-warning-line"></i>,
        text: "Set up your calender",
        icon2: "red",
        number: 4 / 6,
    },
    {
        icon: <i class="ri-pulse-line"></i>,
        text: "Increase your bookings",
        icon1: "green",
        number: 2 / 6,
    },
];

export const thirdBox = [
    {
        profile: user1,
        address: "196 Kanas Avenue...",
        date: "24.08-1.09",
        duration: "7 Days",
        price: "$2.178,78",

    },
    {
        profile: user1,
        address: "197 Garden Street...",
        date: "24.08-1.09",
        duration: "7 Days",
        price: "$2.178,78",    },
    {
        profile: user1,
        address: "568 Gotham Cen...",
        date: "24.08-1.09",
        duration: "7 Days",
        price: "$2.178,78",
    },
];

export const fourthBox = [
    {
        image: <i class="ri-calendar-todo-line"></i>,
        title: "Pet Friendlines",
        text: "3h ago . 196 Kansas Avenue, Block A, 7th Floor, number 14",
        text1: "Question",
        icon: <i class="ri-links-fill"></i>,
        number: 2,
    },
    {
        image: <i class="ri-calendar-todo-line"></i>,
        title: "Water issue",
        text: "10h ago . 917 Garden street, Santa Monica, CA 987 360",
        text1: "Damage Report",
        icon: <i class="ri-links-fill"></i>,
        number: 2,
    },
    {
        image: <i class="ri-calendar-todo-line"></i>,
        title: "Invoice Inquiry",
        text: "2 days ago . 568 Gotham Center, Santa Monica, CA 987 360",
        text1: "Request",
        icon: <i class="ri-links-fill"></i>,
        number: 2,
    },
    {
        image: <i class="ri-calendar-todo-line"></i>,
        title: "Water issue",
        text: "5 days ago . 1016 Penstreet, Block A, 7th Floor, Number 14",
        text1: "Request",
        icon: <i class="ri-links-fill"></i>,
        number: 2,
    },
];