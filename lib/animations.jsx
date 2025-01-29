export const fade = {
    initial: { 
        opacity: 0, 
        y: -50 },
    animate: { 
        opacity: 1, 
        y: 0 
    }
}

export const slide = {
    initial: {
        x: "100%", 
        opacity: 0
    },
    enter: {
        x: "0px",
        opacity: 1,
        transition: {duration: 0.5, ease: [0.76, 0, 0.24, 1]}
    },
    exit: {
        x: "100%",
        opacity: 0,
        transition: {duration: 0.5, ease: [0.76, 0, 0.24, 1]}
    }
}