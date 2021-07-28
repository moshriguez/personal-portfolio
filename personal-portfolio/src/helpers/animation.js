export const risingDiv = {
    start: {
        y: 700
    },
    end: {
        y: 0,
        transition: {
            duration: 1,
            type: 'spring',
            bounce: 0.1
        }
    }
}

export const risingName = {
    start: {
        opacity: 0,
        y: 500
    },
    end: {
        y: 0,
        opacity: 1, 
        transition: {duration: 3, delay: 2}
    }
}

export const risingNavBar = {
    start: {
        opacity: 0
    },
    end: {
        opacity: 1, 
        transition: {
            staggerChildren: 0.5,
            delayChildren: 4
        }
    }
}

export const navLink = {
    start: {
        y: 100
    }, 
    end: {
        y: 0,
        transition: {
            duration: 2
        }        
    }
}
