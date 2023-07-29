import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    data: [
        {
            pic: "/images/cinema.png",
            title: `MOViE - a film website`,
            desc: `MOViE is a React based movie website. A user can easily see what the main premieres are, watch latest movie trailers, search movies and see basic information about them.`,
            alt: "a movie app",
            id: 1,
            link: "https://preeminent-arithmetic-77bd09.netlify.app/"
        },
        {
            pic: "/images/todos.png",
            title: `mytodos - a todo app`,
            desc: `A simple note-taking app concept`,
            alt: "todo",
            id: 2,
            link: "https://eugeneqg.github.io/to_do_app/"
        },
        {
            pic: "/images/weather.png",
            title: `Weather'ly - a weather app`,
            desc: `A simple React-based app that allows you to plan your tasks and get access to them on any device you want.`,
            alt: "banking",
            id: 3,
            link: "https://melodious-cupcake-a2d46f.netlify.app"
        },
        {
            pic: "/images/domodedovo.png",
            title: `Domodedovo Airport`,
            desc: `A new website concept for Domodedovo airport`,
            alt: "airport Domodedovo",
            id: 4,
            link: "https://earnest-bavarois-b61c59.netlify.app"
        },
        {
            pic: "/images/tasty.png",
            title: `Tasty - a recipe app`,
            desc: `A website for finding good recipes`,
            alt: "recipe app",
            id: 5,
            link: "https://main--lucent-basbousa-0257d2.netlify.app/"
        }
    ]
}

export const webSlice = createSlice({
    name: "web",
    initialState,
    reducers: {}
});

export default webSlice.reducer;