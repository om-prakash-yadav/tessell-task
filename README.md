# Tessell Task - Database Provisioning Interface

A modern React TypeScript application built for database provisioning management with a comprehensive component library and intuitive user interface.

## 🚀 Features

- **Database Provisioning Interface**: Complete UI for Oracle Server provisioning
- **Component-Driven Architecture**: Atomic design system with atoms, molecules, and organisms
- **TypeScript Support**: Full type safety throughout the application
- **Storybook Integration**: Interactive component documentation and testing
- **Styled-JSX**: CSS-in-JS styling with optimized performance
- **Responsive Design**: Mobile-first approach with flexible layouts
- **Context Management**: Efficient state management with React Context
- **Custom Hooks**: Reusable logic with custom React hooks

## 🛠️ Tech Stack

- **Framework**: React 19.1.0
- **Language**: TypeScript 4.9.5
- **Build Tool**: Create React App with CRACO
- **Styling**: Styled-JSX 5.1.7
- **Testing**: Jest + React Testing Library
- **Documentation**: Storybook 9.0.18
- **Date Handling**: Moment.js

## 📁 Project Structure

```
src/
├── components/           # Component library
│   ├── atoms/           # Basic building blocks
│   │   ├── button/      # Button component
│   │   ├── checkbox/    # Checkbox component
│   │   ├── input-field/ # Input field component
│   │   └── ...
│   ├── molecules/       # Composed components
│   │   ├── breadcrumbs/ # Navigation breadcrumbs
│   │   ├── radio/       # Radio button groups
│   │   └── ...
│   └── organisms/       # Complex components
│       ├── drawer/      # Navigation drawer
│       ├── header/      # Application header
│       ├── table/       # Data tables
│       └── ...
├── pages/               # Application pages
│   ├── provisioning.tsx # Main provisioning interface
│   ├── context/         # Page-specific contexts
│   ├── hooks/           # Custom hooks
│   └── sections/        # Page sections
├── resources/           # Static assets
│   └── icons/           # SVG icon library
└── theme/               # Design system
    ├── theme.ts         # Theme configuration
    ├── constants/       # Theme constants
    └── types/           # Theme type definitions
```

## 🚦 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/om-prakash-yadav/tessell-task.git
cd tessell-task
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

The application will open at [http://localhost:3000](http://localhost:3000)

## 📜 Available Scripts

### Development

- **`npm start`** - Runs the app in development mode
- **`npm test`** - Launches the test runner in interactive watch mode
- **`npm run build`** - Builds the app for production
- **`npm run storybook`** - Starts Storybook on port 6006
- **`npm run build-storybook`** - Builds Storybook for deployment

### Testing

The project includes comprehensive testing setup with:
- Unit tests with Jest
- Component tests with React Testing Library
- Interactive testing with Storybook

## 🎨 Component Library

The application follows atomic design principles:

### Atoms
- **Button**: Customizable button component with variants
- **Checkbox**: Checkbox input with custom styling
- **Input Field**: Text input with validation support
- **Flex Container**: Layout utility component
- **Text**: Typography component with theme integration

### Molecules
- **Breadcrumbs**: Navigation breadcrumb component
- **Radio**: Radio button group component
- **Stepper**: Multi-step process indicator

### Organisms
- **Drawer**: Collapsible navigation sidebar
- **Header**: Application header with user info and breadcrumbs
- **Table**: Data table with sorting and pagination
- **Dropdown**: Advanced dropdown with search and selection

## 🎯 Key Features

### Database Provisioning
- Step-by-step provisioning workflow
- Application configuration panel
- Advanced configuration settings
- Real-time validation and feedback

### Design System
- Consistent theme across all components
- Responsive breakpoints and media queries
- Icon library with custom SVG icons
- Color palette and typography scales

### State Management
- Context-based state management
- Custom hooks for complex logic
- Efficient re-rendering with memoization

## 🔧 Configuration

### CRACO Configuration
The project uses CRACO (Create React App Configuration Override) for:
- Styled-JSX babel plugin integration
- Custom webpack configurations
- Build optimization

### TypeScript Configuration
- Strict type checking enabled
- Custom type definitions for styled-jsx
- Path aliases for cleaner imports

## 🚀 Deployment

### Build for Production
```bash
npm run build
```

This creates an optimized production build in the `build` folder.

### Deploy to GitHub Pages
```bash
# Build the project
npm run build

# Deploy to gh-pages branch
npx gh-pages -d build
```

## 📖 Storybook Documentation

Access the interactive component documentation:

```bash
npm run storybook
```

Storybook will be available at [http://localhost:6006](http://localhost:6006)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/new-feature`
3. Commit your changes: `git commit -m 'Add new feature'`
4. Push to the branch: `git push origin feature/new-feature`
5. Submit a pull request

## 📝 Code Style

- Use TypeScript for all new components
- Follow the atomic design pattern
- Write tests for new components
- Document components in Storybook
- Use meaningful commit messages

## 🐛 Known Issues

- None currently reported

## 📄 License

This project is private and proprietary.

## 👥 Authors

- **Om Prakash Yadav** - [GitHub](https://github.com/om-prakash-yadav)

## 🔗 Links

- [Repository](https://github.com/om-prakash-yadav/tessell-task)
- [Issues](https://github.com/om-prakash-yadav/tessell-task/issues)
- [Create React App Documentation](https://facebook.github.io/create-react-app/docs/getting-started)
- [React Documentation](https://reactjs.org/)
