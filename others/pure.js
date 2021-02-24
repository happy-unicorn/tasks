function ControlledInput({ name, value, onChange }) {
	return (
		<div>
			<div>{name}</div>
			<input onChange={e => onChange(e, name)} value={value} />
		</div>
	);
}

class Contact extends React.PureComponent {
	state = {
		firstName: null,
		secondName: null
	};

	handleInput = ({ target }, name) => {
		const state = this.state;
		state[name] = target.value;
		this.setState(state);
	};

	render() {
		const { firstName, secondName } = this.state;
		return (
			<div className="wrapper">
				<ControlledInput
					name={"firstName"}
					onChange={this.handleInput}
					value={firstName}
				/>

				<ControlledInput
					name={"secondName"}
					onChange={this.handleInput}
					value={secondName}
				/>
				<div className="hi">
					Привет, {firstName} {secondName}
				</div>
			</div>
		);
	}
}

// Происходит неглубокая проверка params и state, так что
// сравнение не будет происходить по глубоко вложенным объектам, массивам.
// this.setState({
// 	...this.state,
//   [name]: target.value
// });