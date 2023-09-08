import "./App.css";
import ThreadListing from "./components/ThreadListing";
import ThreadCreateBtn from "./components/ThreadCreateBtn";
import Card from "./components/Card";
import LazyLoad from "react-lazy-load";

function App() {
  const threadData = [
    {
      title: "How to Build a React App",
      description:
        "Discuss the steps and best practices for building a React web application.",
      date: new Date(2023, 0, 5, 14, 30), // Date and time of the thread creation
      author: "John Doe",
      replies: 23, // Number of replies to the thread
      views: 134, // Number of times the thread has been viewed
    },
    {
      title: "JavaScript Frameworks Comparison",
      description:
        "Share your experiences and insights on different JavaScript frameworks.",
      date: new Date(2023, 1, 12, 10, 15),
      author: "Alice Smith",
      replies: 11,
      views: 75,
    },
    {
      title: "Favorite Books of 2023",
      description:
        "Recommend your favorite books that you have read this year.",
      date: new Date(2023, 2, 20, 18, 45),
      author: "Eleanor Brown",
      replies: 37,
      views: 215,
    },
    {
      title: "Solo Travel Adventures",
      description:
        "Share your solo travel experiences and tips for fellow adventurers.",
      date: new Date(2023, 3, 8, 8, 0),
      author: "David Chen",
      replies: 14,
      views: 98,
    },
    {
      title: "Delicious Dessert Recipes",
      description:
        "Exchange your favorite dessert recipes and baking techniques.",
      date: new Date(2023, 4, 16, 16, 20),
      author: "Sophia Lee",
      replies: 29,
      views: 162,
    },
    {
      title: "Achieving Fitness Goals",
      description:
        "Discuss fitness routines, diet plans, and personal success stories.",
      date: new Date(2023, 5, 25, 12, 40),
      author: "Michael Johnson",
      replies: 18,
      views: 124,
    },
    {
      title: "Artistic Creations Showcase",
      description:
        "Share your latest artwork and creative projects with the community.",
      date: new Date(2023, 6, 3, 19, 55),
      author: "Emily Davis",
      replies: 42,
      views: 289,
    },
    {
      title: "Upcoming Music Concerts",
      description:
        "Discuss your favorite music genres and upcoming concerts in your area.",
      date: new Date(2023, 7, 10, 7, 10),
      author: "Daniel White",
      replies: 9,
      views: 63,
    },
    {
      title: "Top Movies of 2023",
      description:
        "Recommend and rate the best movies you have watched this year.",
      date: new Date(2023, 8, 18, 22, 5),
      author: "Olivia Green",
      replies: 31,
      views: 198,
    },
    {
      title: "Video Game Strategies",
      description:
        "Share tips, strategies, and reviews for your favorite video games.",
      date: new Date(2023, 9, 27, 15, 50),
      author: "Robert Johnson",
      replies: 16,
      views: 112,
    },
  ];

  return (
    <div className="App">
      <h2 class="logo">Threadart.online</h2>
      <ThreadCreateBtn />
      <Card className="main-container">
        {threadData.map((thread, index) => (
          <LazyLoad key={index} height={300}>
            <ThreadListing
              title={thread.title}
              description={thread.description}
              date={thread.date}
            />
          </LazyLoad>
        ))}
      </Card>
    </div>
  );
}

export default App;
