
function shapeMaker(data) {
    if (data.shape == 'Circle') {
        function circle(data) {
            return `
            <svg width ="100" height="100">
                <circle cx="50" cy="50" r="40" stroke="black" stroke-width="3" fill="${data.color}" />

                <text x="50" y="50" text-anchor="middle" alignment-baseline="middle" font-size="12px"> ${data.text}</text>
            </svg>
            `
        }
    }

    if (data.shape == 'Square') {
        function square(data) {
            return `
            <svg width="100" height="100">
                <rect x="10" y="10" rx="20" ry="20" stroke="black" stroke-width="3" fill="${data.color}" />

                <text x="50" y="50" text-anchor="middle" alignment-baseline="middle" font-size="12px"> ${data.text}</text>
            </svg>
            `
        }
    }
    //no spaces after =, ""
    if (data.shape == 'Triangle') {
        function triangle(data) {//polygon tag
            return `
            <svg height="100" width="100" xmlns="http://www.w3.org/2000/svg">
                <polygon points="0,100 50,0 100,100" stroke="black" stroke-width="3" fill="${data.color}" />


            </svg>
            `
        }
    }

}


module.exports = shapeMaker;