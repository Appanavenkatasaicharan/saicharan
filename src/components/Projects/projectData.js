import chat from "../../Assets/Projects/chatapp.png";
import delivery from "../../Assets/Projects/delivery.png";
import journal from "../../Assets/Projects/journal.png";
import notes from "../../Assets/Projects/notesapp.png";
import quiz from "../../Assets/Projects/quizlet.png";

const data = [
    {
        imgPath:chat,
        isBlog:false,
        title:"SafeComm",
        description:"A messaging app which implements end-to-end encryption of messages which means that only sender and receiver can understand the messages. A Symetric key is exchanged using diffie-hellman key exchange while forming a connection and further messages are encrypted using AES algorithm with the symmetric key. New keys are generated for every connection. Implemented using ReactJS,ExpressJS and SocketIO.",
        ghLink:"https://github.com/Appanavenkatasaicharan/chat-app-with-end-to-end-encryption",
        demoLink:"https://chat-app-with-end-to-end-encryption-frontend.vercel.app/"
    },
    {
        imgPath:delivery,
        isBlog:false,
        title:"Tomato",
        description:"A website for placing orders for a college cafeteria. An order is placed on the website and the cafeteria will receive the order. They will let us know when the order is ready and we can go take the food. It will help us reduce our wait times. Includes authentication with payment page and cart features etc. Built using MERN stack and Stripe.",
        ghLink:"https://github.com/Appanavenkatasaicharan/busybeecafe-frontend",
        demoLink:"https://busybeecafe-frontend.vercel.app/"
    },
    {
        imgPath:journal,
        isBlog:false,
        title:"JournalPlus",
        description:"A Journaling app where can enter our thoughts and feelings like an online diary. It provides features for task management and event management. This app brings our feelings, our schedule and our tasks to the same place making it easier to manage our time and increase our productivity.Implemented authentication using JWt.Built using MERN stack.",
        ghLink:"https://github.com/Appanavenkatasaicharan/JournalPlus",
        demoLink:"https://journal-plus-frontend.vercel.app/"
    },
    {
        imgPath:notes,
        isBlog:false,
        title:"NoteDown",
        description:"A simple notes app where we can enter our notes and save them. We can create, edit and delete our notes. Markdown is supported. We can also give titles for easily recognizing them. Built using ReactJS.",
        ghLink:"https://github.com/Appanavenkatasaicharan/notes-app",
        demoLink:"https://vermillion-kataifi-c687f4.netlify.app/"
    },
    {
        imgPath:quiz,
        isBlog:false,
        title:"Quizlet",
        description:"A quiz app that will ask 5 random questions related to movies. The questions are random every time and brought in by an API call. We can check our score after completing the quiz. Built using ReactJS",
        ghLink:"https://github.com/Appanavenkatasaicharan/quizzical",
        demoLink:"https://lighthearted-otter-f5d651.netlify.app/"
    }
]

export default data;
    