export const fadeln = (direction: "left" | "right" | "up" | "down", delay: number) => {
    return {
        hidden: {
            y: direction === "up" ? 40 : direction === "down" ? -40 : 0,
            x: direction === "left" ? 40 : direction === "right" ? -40 : 0
        },
        show: {
            y: 0,
            x: 0,
            opacity: 1,
            transition: {
                type: "tween",
                duration: 1.2,
                delay: delay,
                ease: [0.25, 0.25, 0.25, 0.75]
            }
        },
        initial: {
            opacity: 0,
            x: direction === "left" ? -100 : direction === "right" ? 100 : 0,
            y: direction === "up" ? -100 : direction === "down" ? 100 : 0
        },
        animate: {
            opacity: 1,
            x: 0,
            y: 0,
            transition: { duration: 0.5, delay: delay }
        },
        exit: {
            opacity: 0,
            x: direction === "left" ? 100 : direction === "right" ? -100 : 0,
            y: direction === "up" ? 100 : direction === "down" ? -100 : 0,
        }
    }
}