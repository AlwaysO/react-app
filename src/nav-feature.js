import React from 'react';
//nav
class MainNav extends React.Component {
    constructor(props) {
        super(props);
        this.handleMouseEnter = this.handleMouseEnter.bind(this);
        this.handleMouseOut = this.handleMouseOut.bind(this);
        this.state = { name: "", secondTitle: "" }
    }
    handleMouseEnter(event) {
        this.setState({
            name: this.props.data.name,
            secondTitle: this.props.data.secondTitle
        })
    }
    handleMouseOut(event) {
        this.setState({
            name: "",
            secondTitle: ""
        })
    }
    render() {
        return (
            <>
                <div className='mainNav' onMouseEnter={this.handleMouseEnter} onMouseOut={this.handleMouseOut}>{this.props.data.name}</div>
                <SecondNav secondTitle={this.state.secondTitle} />
            </>
        )
    }
}
class SecondNav extends React.Component {
    render() {
        const datas = this.props.secondTitle;
        let secondNav = [];
        if (datas && datas.length > 0) {
            secondNav = datas.map((data, index) => <div key={index}>{data}</div>)
        }
        return (
            <div>{secondNav}</div>
        )
    }
}
export default MainNav;