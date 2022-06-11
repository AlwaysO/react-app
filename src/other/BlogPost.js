class BlogPost extends React.Component{
    constructor(props){
        super(props);
        this.handleChange=this.handleChange.bind(this);
        this.state={
            blogPost:DataSource.getBlogPost(props.id)
        };
    }
    componentDidMount(){
        DataSource.addChangeLister(this.handleChange);
    }
    componentWillUnmount(){
        DataSource.removeChangeLister(this.handleChange);
    }
    handleChange(){
        this.setState({
            blogPost:DataSource.getBlogPost(this.props.id)
        })
    }
    render(){
        return(
            <TextBlock text={this.state.blogPost}/>
        )
    }
}
const BlogPostWithSubscription=withSubscription(BlogPost,(DataSource,props)=>DataSource.getBlogPost(props.id))
const CommentListWithSubscription=withSubscription(CommentList,(DataSource)=>DataSource.getComments())

function withSubscription(WrappedComponent,selectData){
   return class extends React.Component{
        constructor(props){
            super(props);
            this.handleChange=this.handleChange.bind(this);
            this.state={
                data:selectData(DataSource,props)
            };
        }
        componentDidMount(){
            DataSource.addChangeLister(this.handleChange);
        }
        componentWillUnmount(){
            DataSource.removeChangeLister(this.handleChange);
        }
        handleChange(){
            this.setState({
                data:selectData(DataSource,this.props)
            })
        }
        render(){
            return <WrappedComponent data={this.state.data} {...this.props}/>
        }
       
    }
}
function App1(){
    return <Greeting firstName="Ben" lastName="Hector"/>
}

function App2(){
    const props={firstName:'Ben',lastName:'Hector'};
    return <Greeting {...props}/>;
}

const Button=props=>{
    const {kind,...other}=props;
    const className=kind==="primary"?"PrimaryButton":"SecondaryButton";
    return <button className={className}{...other}></button>
}
const App=()=>{
    return (
        <div>
            <Button kind="primary" onClick={()=>console.log("clicked!")}>Hello World !</Button>
        </div>
    )
}