import React, { Component } from 'react';
import LanguageContext from '../contexts/LanguageContext';
import ColorContext from '../contexts/ColorContext';

class Button extends Component {
  // contexType is only required when we want to get assigned
  // data property
  // static contextType = LanguageContext;

  render() {
    // const text = this.context === 'english' ? 'Submit' : 'Voorleggen';
    // Using Consumer can pull data from multiple Provider
    return (
      <ColorContext.Consumer>
        {color => (
          <button className={`ui button ${color}`}>
            <LanguageContext.Consumer>
              {({ language }) =>
                language === 'english' ? 'Submit' : 'Vooreggen'
              }
            </LanguageContext.Consumer>
          </button>
        )}
      </ColorContext.Consumer>
    );
  }
}

export default Button;
