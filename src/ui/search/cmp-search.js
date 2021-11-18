import React from 'react';

//AppInsight
import { withAITracking } from '@microsoft/applicationinsights-react-js';
import { ai } from '../../TelemetryService'

const Search = ({ onChange, value }) => (
  <input
    type="text"
    onChange={onChange}
    value={value}
    placeholder="Enter pokemon name..."
    autoFocus
  />
);

export default withAITracking(ai.reactPlugin, Search);
