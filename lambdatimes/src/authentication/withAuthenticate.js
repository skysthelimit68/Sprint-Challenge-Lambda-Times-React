import React from 'react';

const withAuthenticate = ContentComponent => LoginPromptComponent => class extends React.Component {
    
    render(){
        if(!localStorage.getItem('user')) {
            return (
                <LoginPromptComponent />
            )
        } else {
            return (
                <ContentComponent />
            )
        }

        
    } 
}

export default withAuthenticate;