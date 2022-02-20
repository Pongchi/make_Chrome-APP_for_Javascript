const quotes = [
    {
        quote: "삶이 있는 한 희망은 있다.",
        author : "키케로",
    },
    {
        quote: "산다는 것. 그것은 치열한 전투이다.",
        author: "로망로랑",
    },
    {
        quote: "하루에 3시간을 걸으면 7년 후에 지구를 한 바퀴 돌 수 있다.",
        author: "사무엘존슨",
    },
    {
        quote: "언제나 현재에 집중할 수 있다면 행복할 것이다.",
        author: "파울로 코엘료",
    },
    {
        quote: "진정으로 웃으려면 고통을 참아야하며, 나아가 고통을 즐길 줄 알아야 해.",
        author: "찰리 채플린",
    },
    {
        quote: "직업에서 행복을 찾아라. 아니면 행복이 무엇인지 절대로 모를 것이다.",
        author: "엘버트 허버드",
    },
    {
        quote: "신은 용기있는자를 결코 버리지 않는다.",
        author: "켄러",
    },
    {
        quote: "피할 수 없으면 즐겨라.",
        author: "로버트 엘리엇",
    },
    {
        quote: "1%의 가능성, 그것이 나의 길이다.",
        author: "나플레옹",
    },
    {
        quote: "마음만을 가지고 있어서는 안된다. 반드시 실천하여야 한다.",
        author: "이소룡",
    },
    {
        quote: "사람이 여행을 하는 것은 도착하기 위해서가 아니라 여행하기 위해서이다.",
        author: "괴테",
    },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;