// Example usage of the CSS-based theme

import React from 'react';
import { AppDefaultTheme } from './theme';

export const ThemeUsageExample: React.FC = () => {
  return (
    <div>
      {/* Typography Examples */}
      <h1 className={AppDefaultTheme.text.classes.headingLg}>
        This is a large heading
      </h1>
      
      <h2 className={AppDefaultTheme.text.classes.headingMd}>
        This is a medium heading
      </h2>
      
      <p className={AppDefaultTheme.text.classes.bodyPrimary}>
        This is primary body text
      </p>
      
      <p className={AppDefaultTheme.text.classes.bodySecondary}>
        This is secondary body text
      </p>
      
      {/* Button Examples */}
      <div className={AppDefaultTheme.spacing.classes.gap}>
        <button className={`${AppDefaultTheme.buttons.variants.primary.className} ${AppDefaultTheme.buttons.variants.primary.sizes.regular}`}>
          Primary Button
        </button>
        
        <button className={`${AppDefaultTheme.buttons.variants.tertiary.className} ${AppDefaultTheme.buttons.variants.tertiary.sizes.small}`}>
          Tertiary Small Button
        </button>
      </div>
      
      {/* Input Examples */}
      <div className={AppDefaultTheme.spacing.classes.gutter}>
        <input 
          type="text" 
          placeholder="Enter text here"
          className={`${AppDefaultTheme.textInput.variants.primary.className} ${AppDefaultTheme.textInput.variants.primary.sizes.default}`}
        />
        
        <input 
          type="text" 
          placeholder="Small input"
          className={`${AppDefaultTheme.textInput.variants.primary.className} ${AppDefaultTheme.textInput.variants.primary.sizes.small}`}
        />
      </div>
      
      {/* Checkbox and Radio Examples */}
      <div>
        <label className={AppDefaultTheme.checkbox.className}>
          <input type="checkbox" />
          Check me
        </label>
        
        <label className={AppDefaultTheme.radio.className}>
          <input type="radio" name="example" />
          Radio option
        </label>
      </div>
      
      {/* Color Usage Examples */}
      <div className="bg-primary-200 text-inverse" style={{ padding: '16px' }}>
        Primary background with inverse text
      </div>
      
      <div className="bg-success-100 text-primary" style={{ padding: '16px' }}>
        Success background with primary text
      </div>
      
      {/* Using CSS Variables directly in styles */}
      <div style={{ 
        backgroundColor: AppDefaultTheme.colors['surface-50'], 
        color: AppDefaultTheme.colors.primary,
        padding: AppDefaultTheme.spacing.variables.GUTTER
      }}>
        Using CSS variables directly in inline styles
      </div>
    </div>
  );
};

// Alternative approach using CSS classes directly (more performant)
export const DirectClassUsageExample: React.FC = () => {
  return (
    <div>
      <h1 className="text-heading-lg">Direct class usage</h1>
      <p className="text-body-primary">This approach uses CSS classes directly</p>
      <button className="btn btn-primary btn-regular">Primary Button</button>
      <input type="text" className="text-input text-input-primary text-input-default" placeholder="Input field" />
    </div>
  );
};
