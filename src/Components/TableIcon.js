import React, { Component } from 'react'
import AirlineSeatReclineNormalIcon from '@material-ui/icons/AirlineSeatReclineNormal';
import PropTypes from 'prop-types'


class Table extends Component {

    static propTypes = {
        label: PropTypes.string,
        width: PropTypes.number,
        chairNum: PropTypes.number,
        modalShow: PropTypes.bool,
        setModalShow: PropTypes.bool
    }

    getStyle = () => {
        const w = this.props.width;
        return {
            width: w,
            height: '150px',
            border: '3px solid gainsboro',
            borderRadius: '20px',
            textAlign: 'center',
            verticalAlign: 'middle',
            lineHeight: '20px',
            margin: '25px',
        }
    }

    getButtonStyle = () => {
        return {
            display: 'inline-flex',
        }
    }

    render() {
        return (
            <button style={this.getStyle()} onClick={this.props.clicked}>
                <h2 style={{ paddingTop: '10%' }}>{this.props.label}</h2>
                <p>
                    <AirlineSeatReclineNormalIcon></AirlineSeatReclineNormalIcon> x {this.props.chairNum}
                </p>
            </button>
        )
    }
}

export default Table


