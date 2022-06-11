// import React from 'react';
// import ReactDOM from 'react-dom';
// // class NameSelectFrom extends React.Component{
// //     constructor(props){
// //         super(props);
// //         this.state={name:'',friuts:''};
// //         this.handleOnchange = this.handleOnchange.bind(this);
// //         this.handleSubmit = this.handleSubmit.bind(this);
// //     }
// //     handleSubmit(e){
// //         alert(this.state.friuts+this.state.name);
// //         e.preventDefault();
// //     }
// //     handleOnchange(e){
// //         const target = e.target;
// //     const value = target.value;
// //     const name = target.name;

// //     this.setState({
// //       [name]: value
// //     });
// //     }
// //     render(){
// //         return(
// //             <form onSubmit={this.handleSubmit}>
// //                  <label>name:<textarea  type="text" name="name" onChange={this.handleOnchange}value={this.state.name}/></label>
// //                 <label>水果:  <select name="friuts" value={this.state.friuts} onChange={this.handleOnchange}>
// //             <option value="grapefruit">葡萄柚</option>
// //             <option value="lime">酸橙</option>
// //             <option value="coconut">椰子</option>
// //             <option value="mango">芒果</option>
// //           </select></label>
// //                 <input type="submit" value="提交"/>
// //             </form>
// //         )
// //     }
// // }
// // class NameTextArearFrom extends React.Component{
// //     constructor(props){
// //         super(props);
// //         this.state={value:''};
// //         this.handleOnchange = this.handleOnchange.bind(this);
// //         this.handleSubmit = this.handleSubmit.bind(this);
// //     }
// //     handleSubmit(e){
// //         alert(this.state.value);
// //         e.preventDefault();
// //     }
// //     handleOnchange(evnet){
// //         this.setState({value:evnet.target.value});
// //     }
// //     render(){
// //         return(
// //             <form onSubmit={this.handleSubmit}>
// //                 <label>name:<textarea  type="text" onChange={this.handleOnchange}value={this.state.value}/></label>
// //                 <input type="submit" value="提交"/>
// //             </form>
// //         )
// //     }
// // }
// // class NameFrom extends React.Component{
// //     constructor(props){
// //         super(props);
// //         this.state={value:''};
// //         this.handleOnchange = this.handleOnchange.bind(this);
// //         this.handleSubmit = this.handleSubmit.bind(this);
// //     }
// //     handleSubmit(e){
// //         alert(this.state.value);
// //         e.preventDefault();
// //     }
// //     handleOnchange(evnet){
// //         this.setState({value:evnet.target.value});
// //     }
// //     render(){
// //         return(
// //             <form onSubmit={this.handleSubmit}>
// //                 <label>name:<input  type="text" onChange={this.handleOnchange} value={this.state.value}/></label>
// //                 <input type="submit" value="提交"/>
// //             </form>
// //         )
// //     }
// // }
// //状态提升代码 

// function BoilingVerdict(props) {
//     if (props.celsius >= 100) {
//         return <p>the water would boil.</p>
//     } else {
//         return <p>the water would not boil.</p>
//     }
// }
// const scaleNames={
//     c:'Celsius',
//     f:'Fahrenheit'
// };
// class TemperatureInput extends React.Component{
//     constructor(props) {
//         super(props)
//         this.handleChange = this.handleChange.bind(this);
//         // this.state = { temperature: '' };
//     }
//     handleChange(event) {
//         this.props.onTemperatureCahnge(event.target.value);
//         // this.setState({ temperature: event.target.value });
//     }
//     render() {
//         const temperature = this.props.temperature;
//         const scale=this.props.scale;
//         return (
//             <fieldset>
//                 <legend>Enter temperature in {scaleNames[scale]}:</legend>
//                 <input value={temperature} onChange={this.handleChange}></input>
//                 <BoilingVerdict celsius={temperature} />
//             </fieldset>
//         )
//     }
// }
// class Calculator extends React.Component {
//     constructor(props) {
//         super(props)
//         this.handleFahrenheitChange = this.handleFahrenheitChange.bind(this);
//         this.handleCelsiusChange = this.handleCelsiusChange.bind(this);
//         this.state = { temperature: '',scale:'c' };
//     }
//     onTemperatureCahnge(event) {
//         this.setState({ temperature: event.target.value });
//     }
//     handleFahrenheitChange(temperature){
//         this.setState({scale:'f',temperature})
//     }
//     handleCelsiusChange(temperature){
//         this.setState({scale:'c',temperature})
//     }
//     render() {
//         const temperature = this.state.temperature;
//         return (
//             <div>
//                 <TemperatureInput scale="c" temperature={temperature} onTemperatureCahnge={this.handleCelsiusChange}/>
//                 <TemperatureInput scale="f" temperature={parseInt(temperature)+100} onTemperatureCahnge={this.handleFahrenheitChange}/>
//             </div>
//         )
//     }
// }
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<Calculator />);

// // function Clock(props) {
// //     return (
// //       <div>
// //         <h1>Hello, world!</h1>
// //         <h2>It is {props.date.toLocaleTimeString()}.</h2>
// //       </div>
// //     );
// //   }
// // class Clock extends React.Component {
// //     constructor(props) {
// //         super(props);
// //         this.state = {
// //             date: new Date()
// //         }
// //     }
// //     componentDidMount() {
// //         this.timer = setInterval(() => {
// //             this.setState({
// //                 date: new Date()
// //             })
// //         }, 1000)
// //     }
// //     componentWillUnmount() {
// //         clearInterval(this.timer)
// //     }
// //     render() {
// //         return (
// //             <div>
// //                 <h1>Hello, world!</h1>
// //                 <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
// //             </div>
// //         );
// //     }
// // }
// // const root = ReactDOM.createRoot(document.getElementById("root"));
// // root.render(<Clock />);
// // import './index.css';
// // function Square(props) {
// //     return (
// //         <button className='square' onClick={props.onClick}>{props.value}</button>
// //     )
// // }

// // class Board extends React.Component {
// //     renderSquare(i) {
// //         return <Square value={this.props.squares[i]} onClick={() => { this.props.onClick(i) }} />;
// //     }

// //     render() {
// //         return (
// //             <div>
// //                 <div className="board-row">
// //                     {this.renderSquare(0)}
// //                     {this.renderSquare(1)}
// //                     {this.renderSquare(2)}
// //                 </div>
// //                 <div className="board-row">
// //                     {this.renderSquare(3)}
// //                     {this.renderSquare(4)}
// //                     {this.renderSquare(5)}
// //                 </div>
// //                 <div className="board-row">
// //                     {this.renderSquare(6)}
// //                     {this.renderSquare(7)}
// //                     {this.renderSquare(8)}
// //                 </div>
// //             </div>
// //         );
// //     }
// // }

// // class Game extends React.Component {
// //     constructor(props) {
// //         super(props);
// //         this.state = {
// //             history: [
// //                 {
// //                     squares: Array(9).fill(null)
// //                 }
// //             ],
// //             XIsNext: true,
// //             stepNumber:0
// //         }
// //     }
// //this.handleClick = this.handleClick.bind(this);

// //     handleClick(i) {
// //         const history = this.state.history.slice(0, this.state.stepNumber + 1);
// //         const current = history[history.length - 1];
// //         const squares = current.squares.slice();
// //         if (calculateWinner(squares) || squares[i]) {
// //           return;
// //         }
// //         squares[i] = this.state.XIsNext ? 'X' : 'O';
// //         this.setState({
// //           history: history.concat([{
// //             squares: squares,
// //           }]),
// //           stepNumber: history.length,
// //           XIsNext: !this.state.XIsNext,
// //         });
// //       }

// //     jumpTo(step){
// //         this.setState({
// //             stepNumber: step,
// //             xIsNext: (step % 2) === 0,
// //           });
// //     }
// //     render() {
// //         const history=this.state.history;
// //         const current=history[this.state.stepNumber];
// //         const winner = calculateWinner(current.squares);
// //         let status;
// //         if (winner) {
// //             status = 'winner:' + winner;
// //         } else {
// //             status = 'Next player:' + (this.state.XIsNext ? 'X' : 'O');
// //         }
// //         const moves = history.map((step, move) => {
// //             const desc = move ?
// //               'Go to move #' + move :
// //               'Go to game start';
// //             return (
// //               <li key={move}>
// //                 <button onClick={() => this.jumpTo(move)}>{desc}</button>
// //               </li>
// //             );
// //           });
// //         return (
// //             <div className="game">
// //                 <div className="game-board">
// //                     <Board squares={current.squares} onClick={(i) => this.handleClick(i)}
// //           />
// //                 </div>
// //                 <div className="game-info">
// //                     <div>{status}</div>
// //                     <ol>{moves}</ol>
// //                 </div>
// //             </div>
// //         );
// //     }
// // }

// // // ========================================

// // const root = ReactDOM.createRoot(document.getElementById("root"));
// // root.render(<Game />);

// // function calculateWinner(squares) {
// //     const lines = [
// //         [0, 1, 2],
// //         [3, 4, 5],
// //         [6, 7, 8],
// //         [0, 3, 6],
// //         [1, 4, 7],
// //         [2, 5, 8],
// //         [0, 4, 8],
// //         [2, 4, 6],
// //     ];
// //     for (let i = 0; i < lines.length; i++) {
// //         const [a, b, c] = lines[i];
// //         if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
// //             return squares[a];
// //         }
// //     }
// //     return null;
// // }

// import { ThemeContext, themes } from './theme-context';
// import ThemeButton from './theme-button';
// import React, { Profiler } from 'react';
// import ReactDOM from 'react-dom';
// import ThemeTogglerButton from './theme-toggler-button';

// function Toolbar(props) {
//     return (<ThemeTogglerButton />)
//     // return (
//     //     <ThemeButton onClick={props.changeTheme}>Change Theme</ThemeButton>
//     // )
// }

// // const EnhancedComponent=higher
// class App extends React.Component {
//     constructor(props) {
//         super(props);
//         this.toggleTheme = this.toggleTheme.bind(this);
//         this.state = {
//             themes: themes.light,
//             toggleThem: this.toggleTheme,
//             hasError: true
//         };

//     }
//     static getDerivedStateFromError(error) {
//         return { hasError: true }
//     }
//     componentDidCatch(error, errorInfo) {
//         console.log(error, errorInfo);
//     }
//     toggleTheme() {
//         this.setState(state => ({ themes: state.themes === themes.dark ? themes.light : themes.dark }));
//     }
//     render() {
//         if (this.state.hasError) {
//             return <h1>Something went wrong.</h1>
//         }
//         return (
//             <div>
//                 <ThemeContext.Provider value={this.state}>
//                     <Content />
//                 </ThemeContext.Provider>
//             </div>
//         )
//     }
// }
// function Content() {
//     return (
//         <div>
//             <ThemeTogglerButton />
//         </div>
//     )
// }

// class Chosen extends React.Component{
//     componentDidMount(){
//         this.$el=$(this.el);
//         this.$el.chosen();
//         this.handleChange=this.handleChange.bind(this);
//         this.$el.on('change',this.handleChange);
        
//     }
//     componentWillUnmount(){
//         this.$el.off('change',this.handleChange);
//         this.$el.chosen('destroy');
//     }
//     componentDidUpdate(preProps){
//         if(preProps.children!==this.props.children){
//             this.$el.trigger("chosen:updated");
//         }
//     }
//     handleChange(e){
//         this.props.onChange(e.target.value);
//     }
//     render(){
//         return(
//             <div>
//                 <Profiler id="selected" onRender={callback}>
//                 <select className='Chosen-select' ref={el=>this.el=el}>{this.props.children}</select>
//                 </Profiler>
               
//             </div>
//         )
//     }
// }

// class MouseTracker  extends React.Component{
//     constructor(props){
//         super(props);
//         this.handleMouseMove=this.handleMouseMove.bind(this);
//         this.state={x:0,y:0};
//     }
//     handleMouseMove(event){
//         this.setState({
//             x:event.clientX,
//             y:event.clientY
//         })
//     }
//     render(){
//         return(
//             <div style={{height:'100vh'}} onMouseMove={this.handleMouseMove}>
//                 <h1>移动鼠标！</h1>
//                 <p>当前的鼠标位置是（{this.state.x},{this.state.y}）</p>
//             </div>
//         );
//     }
// }

// class Mouse extends React.Component{
//     constructor(props){
//         super(props);
//         this.handleMouseMove=this.handleMouseMove.bind(this);
//         this.state={x:0,y:0};
//     }
//     handleMouseMove(event){
//         this.setState({
//             x:event.clientX,
//             y:event.clientY
//         })
//     }
//     render(){
//         return(
//             <div style={{height:'100vh'}} obnMouseMove={this.handleMouseMove}>
//                 <p>The current mouse position is  ({this.state.x},{this.state.y})</p>
//             </div>
//         )
//     }
// }
// class MouseTracker2 extends React.Component{
//     render(){
//         return(
//             <>
//               <h1>移动鼠标！</h1>
//               <Mouse/>
//             </>
//         )
//     }
// }

// class Cat extends React.Component{
//     render(){
//         const mouse =this.props.mouse;
//         return(
//             <img src="/a.jpg" style={{position:'absolute',left:mouse.x,top:mouse.y}}/>
//         );
//     }
// }

// class MouseWithCat extends React.Component{
//     constructor(props){
//         super(props);
//         this.handleMouseMove=this.handleMouseMove.bind(this);
//         this.state={x:0,y:0};
//     }
//     handleMouseMove(event){
//         this.setState({
//             x:event.clientX,
//             y:event.clientY
//         })
//     }
//     render(){
//         return(
//             <div style={{height:'100vh'}} onMouseMove={this.handleMouseMove}>
//                 this.props.render(this.state);
//             </div>
//         )
//     }
// }
// class MouseTracker3 extends React.Component{
//     render(){
//         return(
//             <>
//               <h1>移动鼠标！</h1>
//               <MouseWithCat render={mouse=>(<Cat mouse={mouse}/>)}/>
//             </>
//         )
//     }
// }
// // const root = ReactDOM.createRoot(document.getElementById("root"));
// // root.render(<App />);



