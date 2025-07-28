// Import the CSS file to apply styles globally
import './theme.css';

// CSS Custom Properties (Variables)
export const ThemeColors = {
  // Primary Colors
  'primary-50': 'var(--primary-50)',
  'primary-100': 'var(--primary-100)',
  'primary-200': 'var(--primary-200)',
  'primary-300': 'var(--primary-300)',
  'primary-400': 'var(--primary-400)',
  
  // Secondary Colors
  'secondary-0': 'var(--secondary-0)',
  'secondary-50': 'var(--secondary-50)',
  'secondary-100': 'var(--secondary-100)',
  'secondary-200': 'var(--secondary-200)',
  'secondary-300': 'var(--secondary-300)',
  'secondary-400': 'var(--secondary-400)',
  
  // Success Colors
  'success-0': 'var(--success-0)',
  'success-50': 'var(--success-50)',
  'success-100': 'var(--success-100)',
  'success-200': 'var(--success-200)',
  'success-300': 'var(--success-300)',
  'success-400': 'var(--success-400)',
  
  // Danger Colors
  'danger-0': 'var(--danger-0)',
  'danger-50': 'var(--danger-50)',
  'danger-100': 'var(--danger-100)',
  'danger-200': 'var(--danger-200)',
  'danger-300': 'var(--danger-300)',
  'danger-400': 'var(--danger-400)',
  
  // Warning Colors
  'warning-0': 'var(--warning-0)',
  'warning-50': 'var(--warning-50)',
  'warning-100': 'var(--warning-100)',
  'warning-200': 'var(--warning-200)',
  'warning-300': 'var(--warning-300)',
  'warning-400': 'var(--warning-400)',
  
  // Surface Colors
  'surface-0': 'var(--surface-0)',
  'surface-50': 'var(--surface-50)',
  'surface-100': 'var(--surface-100)',
  'surface-200': 'var(--surface-200)',
  'surface-300': 'var(--surface-300)',
  'surface-400': 'var(--surface-400)',
  'surface-500': 'var(--surface-500)',
  'surface-600': 'var(--surface-600)',
  'surface-700': 'var(--surface-700)',
  'surface-800': 'var(--surface-800)',
  'surface-900': 'var(--surface-900)',
  'surface-secondary': 'var(--surface-secondary)',
  
  // Text Colors
  'primary': 'var(--primary)',
  'subtler': 'var(--subtler)',
  'subtlest': 'var(--subtlest)',
  'disabled': 'var(--disabled)',
  'inverse': 'var(--inverse)',
  'bolder': 'var(--bolder)',
  'text-100': 'var(--text-100)',
  
  // Border Colors
  'border-focus': 'var(--border-focus)',
  'border-bold': 'var(--border-bold)',
  'border-disabled': 'var(--border-disabled)',
  'border-icon-button': 'var(--border-icon-button)',
  'border-gray-muted': 'var(--border-gray-muted)',
  
  // Dark Colors
  'dark-50': 'var(--dark-50)',
  'dark-100': 'var(--dark-100)',
  'dark-200': 'var(--dark-200)',
  'dark-300': 'var(--dark-300)',
  
  // Opacity Colors
  'opacity-transparent': 'var(--opacity-transparent)',
};

// CSS Classes for Components
export const ThemeButtons = {
  variants: {
    primary: {
      className: 'btn btn-primary',
      sizes: {
        small: 'btn-small',
        regular: 'btn-regular',
        large: 'btn-large',
      },
    },
    tertiary: {
      className: 'btn btn-tertiary',
      sizes: {
        small: 'btn-small',
        regular: 'btn-regular',
        large: 'btn-large',
      },
    },
  },
};

export const ThemeText = {
  classes: {
    headingLg: 'text-heading-lg',
    headingMd: 'text-heading-md',
    headingSm: 'text-heading-sm',
    headingForm: 'text-heading-form',
    bodyPrimary: 'text-body-primary',
    bodySecondary: 'text-body-secondary',
    bodyMdMono: 'text-body-md-mono',
    bodyXs: 'text-body-xs',
    'Text-body/secondary/secondary': 'text-body-secondary-secondary',
    'Text-body/primary/primary': 'text-body-primary-primary',
    'heading/primary': 'text-heading-primary',
    'heading/secondary': 'text-heading-secondary',
    'heading/form titles': 'text-heading-form-titles',
    'heading/Titles': 'text-heading-titles',
    'Heading/3': 'text-heading-3',
    'button/large': 'text-button-large',
  },
};

export const ThemeTextInput = {
  variants: {
    primary: {
      className: 'text-input text-input-primary',
      sizes: {
        small: 'text-input-small',
        default: 'text-input-default',
      },
    },
  },
};

export const ThemeCheckbox = {
  className: 'checkbox',
};

export const ThemeRadio = {
  className: 'radio',
  variants: {
    primary: {
      selected: {
        default: { borderColor: 'primary-200', dotColor: 'primary-200', backgroundColor: 'opacity-transparent' },
        hover: { borderColor: 'primary-300', dotColor: 'primary-200', backgroundColor: 'opacity-transparent' },
        disabled: { borderColor: 'surface-300', dotColor: 'disabled', backgroundColor: 'opacity-transparent' }
      },
      unselected: {
        default: { borderColor: 'surface-300', backgroundColor: 'opacity-transparent' },
        hover: { borderColor: 'surface-400', backgroundColor: 'opacity-transparent' },
        disabled: { borderColor: 'surface-300', backgroundColor: 'opacity-transparent' }
      }
    },
    secondary: {
      selected: {
        default: { borderColor: 'secondary-200', dotColor: 'secondary-200', backgroundColor: 'opacity-transparent' },
        hover: { borderColor: 'secondary-300', dotColor: 'secondary-200', backgroundColor: 'opacity-transparent' },
        disabled: { borderColor: 'surface-300', dotColor: 'disabled', backgroundColor: 'opacity-transparent' }
      },
      unselected: {
        default: { borderColor: 'surface-300', backgroundColor: 'opacity-transparent' },
        hover: { borderColor: 'surface-400', backgroundColor: 'opacity-transparent' },
        disabled: { borderColor: 'surface-300', backgroundColor: 'opacity-transparent' }
      }
    },
    danger: {
      selected: {
        default: { borderColor: 'danger-200', dotColor: 'danger-200', backgroundColor: 'opacity-transparent' },
        hover: { borderColor: 'danger-300', dotColor: 'danger-200', backgroundColor: 'opacity-transparent' },
        disabled: { borderColor: 'surface-300', dotColor: 'disabled', backgroundColor: 'opacity-transparent' }
      },
      unselected: {
        default: { borderColor: 'surface-300', backgroundColor: 'opacity-transparent' },
        hover: { borderColor: 'surface-400', backgroundColor: 'opacity-transparent' },
        disabled: { borderColor: 'surface-300', backgroundColor: 'opacity-transparent' }
      }
    },
    success: {
      selected: {
        default: { borderColor: 'success-200', dotColor: 'success-200', backgroundColor: 'opacity-transparent' },
        hover: { borderColor: 'success-300', dotColor: 'success-200', backgroundColor: 'opacity-transparent' },
        disabled: { borderColor: 'surface-300', dotColor: 'disabled', backgroundColor: 'opacity-transparent' }
      },
      unselected: {
        default: { borderColor: 'surface-300', backgroundColor: 'opacity-transparent' },
        hover: { borderColor: 'surface-400', backgroundColor: 'opacity-transparent' },
        disabled: { borderColor: 'surface-300', backgroundColor: 'opacity-transparent' }
      }
    },
    warning: {
      selected: {
        default: { borderColor: 'warning-200', dotColor: 'warning-200', backgroundColor: 'opacity-transparent' },
        hover: { borderColor: 'warning-300', dotColor: 'warning-200', backgroundColor: 'opacity-transparent' },
        disabled: { borderColor: 'surface-300', dotColor: 'disabled', backgroundColor: 'opacity-transparent' }
      },
      unselected: {
        default: { borderColor: 'surface-300', backgroundColor: 'opacity-transparent' },
        hover: { borderColor: 'surface-400', backgroundColor: 'opacity-transparent' },
        disabled: { borderColor: 'surface-300', backgroundColor: 'opacity-transparent' }
      }
    }
  },
  sizes: {
    small: { size: 14, dotSize: 6 },
    regular: { size: 16, dotSize: 8 },
    large: { size: 20, dotSize: 10 }
  }
};

export const ThemeIconButton = {
  className: 'icon-btn',
  variants: {
    primary: {
      default: { iconColor: 'primary-100' as const },
      hover: { iconColor: 'primary-200' as const },
      active: { iconColor: 'primary-300' as const },
      focus: { iconColor: 'primary-100' as const, outlineColor: 'border-focus' as const, outlineWidth: 2 },
      disabled: { iconColor: 'disabled' as const }
    },
    secondary: {
      default: { iconColor: 'subtler' as const },
      hover: { iconColor: 'bolder' as const },
      active: { iconColor: 'primary-100' as const },
      focus: { iconColor: 'subtler' as const, outlineColor: 'border-focus' as const, outlineWidth: 2 },
      disabled: { iconColor: 'disabled' as const }
    },
    danger: {
      default: { iconColor: 'danger-200' as const },
      hover: { iconColor: 'danger-300' as const },
      active: { iconColor: 'danger-400' as const },
      focus: { iconColor: 'danger-200' as const, outlineColor: 'border-focus' as const, outlineWidth: 2 },
      disabled: { iconColor: 'disabled' as const }
    },
    success: {
      default: { iconColor: 'success-200' as const },
      hover: { iconColor: 'success-300' as const },
      active: { iconColor: 'success-400' as const },
      focus: { iconColor: 'success-200' as const, outlineColor: 'border-focus' as const, outlineWidth: 2 },
      disabled: { iconColor: 'disabled' as const }
    },
    warning: {
      default: { iconColor: 'warning-200' as const },
      hover: { iconColor: 'warning-300' as const },
      active: { iconColor: 'warning-400' as const },
      focus: { iconColor: 'warning-200' as const, outlineColor: 'border-focus' as const, outlineWidth: 2 },
      disabled: { iconColor: 'disabled' as const }
    }
  },
  sizes: {
    small: { iconSize: 16, buttonRadius: 4 },
    medium: { iconSize: 20, buttonRadius: 6 },
    large: { iconSize: 24, buttonRadius: 8 }
  }
};

export const ThemeSpacing = {
  variables: {
    GUTTER: 'var(--gutter)',
    GAP: 'var(--gap)',
    PAGE_PADDING: 'var(--page-padding)',
  },
  classes: {
    gutter: 'spacing-gutter',
    gap: 'spacing-gap',
    pagePadding: 'spacing-page-padding',
  },
};

export const AppDefaultTheme = {
  text: ThemeText,
  colors: ThemeColors,
  buttons: ThemeButtons,
  iconButton: ThemeIconButton,
  textInput: ThemeTextInput,
  checkbox: ThemeCheckbox,
  radio: ThemeRadio,
  spacing: ThemeSpacing,
};

export type AppTheme = typeof AppDefaultTheme;
