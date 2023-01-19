import Header from "./Header"
import Main1 from "./Main1"
import Main2 from "./Main2"

const itemList = [
    { id: 1, title: "Our Story" },
    { id: 2, title: "Membership" },
    { id: 3, title: "Write" },
    { id: 4, title: "Sign In" },
];
const imgList = {
    img1: require("../images /logo.png"),
    img2: require("../images /mmm.png"),
    img3: require("../images /Group.png"),
}
const main2Items = [
    {
        id: "1",
        img: require("../images /11.png"),
        head: "Understanding Long Covid",
        title: "We know more now than before, and it’s still alarming",
        isTrending: false,
        category: "",
        date: "Dec 19, 2022",
        key: "Long Covid",
        read: "9 min read",
        createdUser: { Name: "Dr. Tom Frieden", userId: "1", img: require("../images /pro11.png") },
    },
    {
        id: "2",
        img: require("../images /22.png"),
        head: "Braiding Past into Future",
        title: "Nican Huehcatlahtolli, a New Futurism",
        date: "Nov 25, 2022",
        isTrending: true,
        category: "",
        key: "Futurism",
        read: "11 min read",
        createdUser: { Name: "David Bowles", userId: "2", img: require("../images /pro22.png") },
    },
    {
        id: "3",
        img: require("../images /33.png"),
        head: "Learning to Cope with Estrangement: When Children “Cancel” Their Parents",
        title: "An estranged father reflects on the stigma and surprising prevalence of these family rifts.",
        date: "Aug 21, 2022",
        isTrending: true,
        category: "",
        key: "Parental Alienation",
        read: "6 min read",
        createdUser: { Name: "Ed Erginziger", userId: "3", img: require("../images /pro33.png") },
    },
    {
        id: "4",
        img: require("../images /44.png"),
        head: "ChatGPT Is Having a Thomas Edison Moment",
        title: "Why breakthrough technologies need to be accessible",
        date: "Dec  8, 2022",
        isTrending: false,
        category: "",
        key: "Gpt 3",
        read: "4 min read",
        createdUser: { Name: "Thomas Smith", userId: "4", img: require("../images /pro44.png") },
    },
    {
        id: "5",
        img: require("../images /55.png"),
        head: " Spotify’s Year-End Lists Are the Ultimate Personality Test",
        title: "Why the mass sharing of the music streaming service’s year-end lists is uniquely telling",
        date: "Dec 6, 2022",
        isTrending: false,
        category: "",
        key: "Music",
        read: "3 min read",
        createdUser: { Name: "Allegra Hobbs", userId: "5", img: require("../images /pro55.png") },
    },
    {
        id: "6",
        img: require("../images /66.png"),
        head: " Why Your Team Needs a Weekly Metrics Review",
        title: "What is it, how you can start, and why it will make your product team much better builders and collaborators.",
        date: "Nov 30, 2022",
        isTrending: false,
        category: "",
        key: "Data",
        read: "7 min read",
        createdUser: { Name: "Julie Zhuo", userId: "6", img: require("../images /pro66.png") },
    },
    {
        id: "7",
        img: require("../images /77.png"),
        head: "Tyrion Lannister and The 7 Habits of Highly Effective People",
        title: "A Game of Thrones-themed synopsis of The 7 Habits of Highly Effective People",
        date: "Dec 2, 2022",
        isTrending: false,
        category: "",
        key: "Game Of Thrones",
        read: "14 min read",
        createdUser: { Name: "Elliot Graebert", userId: "7", img: require("../images /pro77.png") },
    },
    {
        id: "8",
        img: require("../images /88.png"),
        head: "Microdosing, Mastodon, and Jonah Hill.",
        title: "Seeking peace, finding kindness.",
        date: "Nov 30, 2022",
        isTrending: false,
        category: "",
        key: "Mental Health",
        read: "6 min read",
        createdUser: { Name: "Mindy Stern in Thoughts And Ideas", userId: "8", img: require("../images /pro88.png") },
    },
    {
        id: "9",
        img: require("../images /99.png"),
        head: "What if failure is the plan?",
        title: "I’ve been thinking a lot about failure lately. Failure comes in many forms, but I’m especially interested in situations in which people…",
        date: "Dec 5, 2022",
        isTrending: false,
        category: "",
        key: "Twitter",
        read: "14 min read",
        createdUser: { Name: "danah boyd", userId: "9", img: require("../images /pro99.png") },
    },
    {
        id: "10",
        img: require("../images /100.png"),
        head: "Why are there so many Web3 startups?",
        title: "This week, Pitchbook published their latest Emerging Tech Indicator (ETI) report which tracks early stage investment activity amongst the…",
        date: "Dec 4, 2022",
        isTrending: false,
        category: "",
        key: "Web 3",
        read: "6 min read",
        createdUser: { Name: "Eric Feng", userId: "10", img: require("../images /pro100.png") },
    },
    {
        id: "11",
        img: require("../images /110.png"),
        head: "What Marriage Means to Me",
        title: "After dropping the kids off, I came home and stopped in the kitchen to take in the aftermath of our chaotic morning together. And it got me…",
        date: "Nov 29, 2022",
        isTrending: false,
        category: "",
        key: "Parenting",
        read: "3 min read",
        createdUser: { Name: "Chasten Buttigieg", userId: "11", img: require("../images /pro110.png") },
    },
];
const asideList = [
    { id: 1, title: "Programming" },
    { id: 2, title: "Data Science" },
    { id: 3, title: "Technology" },
    { id: 4, title: "Parenting" },
    { id: 5, title: "Web 3" },
    { id: 6, title: "Data" },
    { id: 7, title: "Music" },
    { id: 8, title: "Twitter" },
    { id: 9, title: "Futurism" },
];
const main1Items = [
    {
        id: "01",
        img: require("../images /pic1.png"),
        text1: "Barack Obama",
        text2: "My 2022 End of Year Lists",
        date: "Dec 23, 2022",
        read: "3 min read",
    },
    {
        id: "02",
        img: require("../images /pic2.png"),
        text1: "Natasha Selvaraj in Towards Data Science",
        text2: "How to Make Money While Learning Data Science in 2023",
        date: "Dec 28, 2022",
        read: "7 min read",
        icon: require("../images /star.png"),
    },
    {
        id: '03',
        img: require("../images /pic3.png"),
        text1: "Maria Milojkovic, MA in Lessons from History",
        text2: "He Used AI to See Today's Looks of The Famous People From the Past",
        date: "Dec 28, 2022",
        read: "10 min read",
        icon: require("../images /star.png"),
    },
    {
        id: '04',
        img: require("../images /pic4.png"),
        text1: "Yang Zhou in TechToFreedom",
        text2: "9 Python Built-In Decorators That Optimize Your Code Significantly",
        date: "Jan 1, 2022",
        read: "7 min read",
        icon: require("../images /star.png"),
    },
    {
        id: '05',
        img: require("../images /5.png"),
        text1: "Hanif Abdurraqib",
        text2: "100 Favorite Albums of 2022",
        date: "Dec 30, 2022",
        read: "9 min read"
    },
    {
        id: '06',
        img: require("../images /pic1.png"),
        text1: "Christopher Clemmons in Level Up Coding",
        text2: "Structure Your React Project Like a Senior Developer",
        date: "Dec 31, 2022",
        read: "3 min read"
    },
];
export const Home = () => {
    return (
        <>
            <Header logo2={imgList.img2} />
            <Main1 icon={imgList.img3} card1={main1Items} />
            <Main2 card={main2Items} aside={asideList} />
        </>
    )
}