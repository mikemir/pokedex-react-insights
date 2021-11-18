import React, { Component } from 'react';

//AppInsight
import { withAITracking } from '@microsoft/applicationinsights-react-js';
import { ai, getAppInsights } from '../../TelemetryService'

class Pokemon extends Component {
  render() {
    const { pokemon } = this.props;

    return (
      <div className="pokemon">
        <button
          type="button"
          className="pokemon__sprite"
          onClick={() => {
            //log de click
            getAppInsights().trackEvent({ name: 'click pokemon' });
          }}
          style={{
            backgroundImage: `url(${`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`})`,
          }}
        />
        <p className="pokemon__name">{pokemon.name}</p>
      </div>
    );
  }
}

export default withAITracking(ai.reactPlugin, Pokemon);
