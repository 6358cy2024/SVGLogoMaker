function circle(data) {
    return`
        <svg width ="100" height="100">
        <${data.shape} cx="50" cy="50" r="40" stroke="black stroke-width="3" fill= ${data.color}/>

        <text x="50" y="50" text-anchor= "middle" alignment-baseline="middle" font-size="12px"> ${data.text}</text>
        </svg>
        ` 
}