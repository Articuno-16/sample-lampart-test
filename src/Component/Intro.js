function Intro() {
    // console.log('...log from Intro')
    const text = "Deserunt exercitation in labore nostrud labore deserunt quis commodo. Nulla mollit voluptate ea id ea aute non duis ea dolore."
    return (
        <div className="Intro">
            <h2>Some of our top services</h2>
            <textarea disabled readOnly value={text} />
            <div className='.clear-float'></div>
        </div>
    )
}

export default Intro