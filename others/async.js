class Example extends React.Component {
  state = {
     title: 'older',
  };

  componentDidMount() {
    this.setState({ title: 'newest' });
    console.log(this.state);
  }

  render() {
  	const { title } = this.state;
    return (
    	<h1>Typeof title: {title}</h1>
    );
  };
}

// this.setState({ title: 'newest' }, () => {
//   console.log(this.state);
// });