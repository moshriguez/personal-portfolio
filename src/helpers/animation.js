export const risingDiv = {
    start: {
        // y: 700
        opacity: 0
    },
    end: {
        opacity: 1,
        // y: 0,
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
        transition: {duration: 3, delay: 0}
    }
}

export const risingNavBar = {
    start: {
    },
    end: {
        transition: {
            staggerChildren: 0.5,
            delayChildren: 1
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
