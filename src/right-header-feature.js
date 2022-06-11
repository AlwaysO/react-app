import React from 'react';
import { context } from './theme-context';
//right-Header
class RightHeader extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.state = { content: <><i className='icon' onClick={this.handleClick}>{'<'}</i><span>{context.unfold}</span></> }
    }
    handleClick() {
        if (this.props.width === '20%') {
            this.setState({ content: <><i className='icon' onClick={this.handleClick}>{'>'}</i><span>{context.fold}</span></> });
        } else {
            this.setState({ content: <><i className='icon' onClick={this.handleClick}>{'<'}</i><span>{context.unfold}</span></> })
        }
        this.props.onHandleClick();
    }
    render() {
        return (
            <div className='right-header'>{this.state.content}</div>
        )
    }
}
export default RightHeader;