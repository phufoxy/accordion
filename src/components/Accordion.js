import React, { Component } from 'react';

class Accordion extends Component {
    constructor(props){
        super(props);
        this.state = {
            isCollapsed: true
        };
        this.onClick = this.onClick.bind(this);
    }
    onClick(){
        this.setState({
            isCollapsed: !this.state.isCollapsed
        });
    }
    render() {
        const { heading, content} = this.props;
        const { isCollapsed } = this.state;
        return (
            <div className="Accordion">
               <div className="Heading" >    
                    <button class="btn btn-primary" type="button" onClick={this.onClick}>
                    { heading }
                    </button>
               </div>
               { !isCollapsed && <div >
                    <div class="card card-body">
                        <p>{ content }</p>
                    </div>
                </div>
                }
               
            </div>
        );
    }
}

export default Accordion;