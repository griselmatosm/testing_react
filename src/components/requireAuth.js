import React, { Component } from 'react'
import { connect } from 'react-redux';

export default (ChildComponent) => {
    class ComposedComponent extends Component {
        // Our component jus got rendered
        componentDidMount() {
            this.shouldNavigateAway()
        }

        //Our component just got updated
        componentDidUpdate() {
            this.shouldNavigateAway()
        }

        //If you are not auth and you try to navigate to another route
        //this method force to stay in the home path
        shouldNavigateAway() {
            if (!this.props.auth) {
                this.props.history.push('/')
            }
        }
        render() {
            return <ChildComponent {...this.props}/>
        }
    }
    const mapStateToProps = (state) => {
        return { auth: state.auth }
    }
    return connect(mapStateToProps)(ComposedComponent)
}
