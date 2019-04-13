import React from 'react'

class MemeGenerator extends React.Component {
    constructor() {
        super()
        this.state ={
            topText:"",
            bottomText:"",
            randomImage: "http://i.imgflip.com/1bij.jpg",
            allMemeImgs: []
        }
        this.handleChange = this.handleChange.bind(this)
        this.genMeme = this.genMeme.bind(this)
    }

    componentDidMount(){
        fetch("https://api.imgflip.com/get_memes")
        .then(response => response.json())
        .then(response => { 
            const {memes} = response.data
            console.log(memes)
            this.setState({allMemeImgs:memes})
        })
    }

     handleChange(event) {
        const {name,value} = event.target
        this.setState({
            [name] : value
        })
    }

    genMeme(event){
        event.preventDefault()
        const r = Math.floor(Math.random()*(this.state.allMemeImgs.length-1))
        const url = this.state.allMemeImgs[r].url
        console.log('url',url)
        this.setState({randomImage: url})
    }

    render() {
    return (<div>
        <form className="meme-form">
        <label>
        Top Text
        <input type="text" name="topText" value={this.state.topText}
         onChange={this.handleChange}/>       
        </label>
        <label>
        Bottom Text
        <input type="text" name="bottomText" value={this.state.bottomText}
         onChange={this.handleChange}/>
        </label>
        <button onClick={this.genMeme}>Gen</button>
        </form>
        <div className="meme">
            <img src={this.state.randomImage} alt="" />
            <h2 className="top">{this.state.topText}</h2>
            <h2 className="bottom">{this.state.bottomText}</h2>
        </div>
    </div>)
}
}

export default MemeGenerator