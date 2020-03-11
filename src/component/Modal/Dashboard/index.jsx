import React from "react"


class Dashboard extends React.Component {
    state = {
        show: false
    }

    showModal = () => {
        this.setState({show: true})
    }
    hideModal = () => {
        this.setState({show: false})
    }

    render() {
        return (
            <div>
             
            </div>
        )
    }
}

export default Dashboard