import React from 'react';
import ReactDOM from 'react-dom';
import MainNav from './nav-feature';
import RightContent from './right-content-feature';
import RightHeader from './right-header-feature';
import { themes,context } from './theme-context';
import './index.css'
class Page extends React.Component {
    constructor(props) {
        super(props);
        this.state = { data: [], width: themes.unfold.unfoldLeft, rightWidth: themes.unfold.unfoldRight };
        this.handleClick = this.handleClick.bind(this);
    }
    componentDidMount() {
        fetch('./moker/nav.json').then(res => {
            if (res.ok) {
                res.json().then(data => {
                    this.setState({ data: data });
                })
            }
        })
    }

    handleClick() {
        let width = this.state.width === themes.unfold.unfoldLeft ? themes.fold.foldLeft : themes.unfold.unfoldLeft;
        let rightWidth = this.state.width === themes.unfold.unfoldLeft ? themes.fold.foldRight : themes.unfold.unfoldRight;
        this.setState({ width: width, rightWidth: rightWidth });
    }

    render() {
        let listNav = ''
        if (this.state.width === themes.unfold.unfoldLeft) {
            listNav = this.state.data.map((data, index) =>
                <MainNav key={index} data={data} />)
        } else {
            listNav =context.nav;
        }
        return (
            <>
                <div className='left' style={{ width: this.state.width }}>{listNav}</div>
                <div className='right' style={{ width: this.state.rightWidth }}><RightHeader width={this.state.width} onHandleClick={this.handleClick} />
                    <RightContent />
                </div>
            </>

        )
    }
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Page />);



