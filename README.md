# DevDoc Generator

A modern, intuitive web application that helps business teams and project managers create professional development requirements documents in a standardized format. Built specifically to bridge the communication gap between non-technical stakeholders and development teams.

![DevDoc Generator](https://img.shields.io/badge/React-18.2.0-blue) ![Tailwind](https://img.shields.io/badge/TailwindCSS-3.4.0-blue) ![Vite](https://img.shields.io/badge/Vite-4.4.5-purple)

## 🚀 Features

- **🎨 Modern Dark UI**: Clean, professional interface with smooth animations and focus states
- **📝 Guided Form Interface**: Step-by-step form with real-time validation and helpful placeholders
- **👁️ Live Preview**: See your document generate in real-time as you type
- **✅ Section Toggle**: Choose which sections to include in your final document
- **📤 Multiple Export Formats**: Export as Markdown, HTML, or PDF documents
- **📱 Responsive Design**: Works perfectly on desktop, tablet, and mobile devices
- **⚡ Zero Backend**: No server required - deploys instantly as a static site
- **🔒 Privacy First**: All processing happens client-side - your data never leaves your browser

## 🛠️ Tech Stack

- **Frontend**: React 18 with functional components and hooks
- **Styling**: Tailwind CSS 3 for modern, responsive design
- **Icons**: Lucide React for beautiful, consistent iconography
- **Build Tool**: Vite 4 for fast development and optimized builds
- **Deployment**: Optimized for static hosting (Netlify, Vercel, GitHub Pages)

## 📋 Document Sections

The generator creates comprehensive requirements documents with the following sections:

- **Project Overview**: Name, description, and high-level goals
- **Technical Stack**: Technologies, frameworks, and tools
- **Functional Requirements**: User stories and feature specifications
- **Technical Requirements**: Performance, scalability, and architecture needs
- **API Specifications**: Endpoints, integrations, and data contracts
- **Database Schema**: Data models, relationships, and structures
- **Development Setup**: Installation steps and environment configuration
- **Acceptance Criteria**: Definition of done and testing requirements
- **Timeline & Milestones**: Project phases and delivery dates
- **Additional Notes**: Any other relevant project information

## 🚀 Quick Start

### Prerequisites

- Node.js 16+ installed on your machine
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/dev-doc-generator.git
   cd dev-doc-generator
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` to see the application

### Building for Production

```bash
npm run build
```

This creates an optimized build in the `dist/` directory ready for deployment.

## 🌐 Deployment

### Netlify (Recommended)

1. **Connect your repository** to Netlify
2. **Set build settings**:
   - Build command: `npm run build`
   - Publish directory: `dist`
3. **Deploy** - Netlify will automatically build and deploy your site

### Vercel

1. **Import your project** to Vercel
2. **Vercel will auto-detect** the Vite configuration
3. **Deploy** - Your site will be live in minutes

### GitHub Pages

1. Run `npm run build`
2. Deploy the `dist/` folder to GitHub Pages
3. Configure your repository settings for Pages deployment

## 📖 How to Use

### For Business Teams & Project Managers

1. **Fill out the form**: Start with the project name and work your way through each section
2. **Use the toggles**: Uncheck sections you don't need for your specific project
3. **Watch the preview**: See your document take shape in real-time
4. **Export your document**: Choose from Markdown, HTML, or PDF formats
5. **Share with your dev team**: Send the generated document to developers

### For Development Teams

1. **Receive the document**: Get standardized requirements from business stakeholders
2. **Review all sections**: Check technical requirements, API specs, and acceptance criteria
3. **Ask clarifying questions**: Use the document as a basis for technical discussions
4. **Track progress**: Reference the timeline and milestones throughout development

## 🎯 Use Cases

- **New Project Kickoffs**: Create comprehensive requirements for greenfield projects
- **Feature Specifications**: Document new features and enhancements
- **Technical Handoffs**: Standardize communication between teams
- **Client Projects**: Professional documentation for external development work
- **Internal Tools**: Requirements for internal applications and utilities

## 🛠️ Development

### Project Structure

```
dev-doc-generator/
├── public/
│   └── index.html              # Main HTML template
├── src/
│   ├── components/
│   │   └── DevDocGenerator.jsx # Main application component
│   ├── App.jsx                 # Root component
│   ├── main.jsx               # Application entry point
│   └── index.css              # Tailwind CSS imports
├── package.json
├── vite.config.js             # Vite configuration
├── tailwind.config.js         # Tailwind CSS configuration
└── postcss.config.js          # PostCSS configuration
```

### Key Components

- **DevDocGenerator.jsx**: Main application component containing all form logic, state management, and export functionality
- **Form State Management**: Uses React's `useState` for form data and section toggles
- **Export Functions**: Client-side document generation using Blob API and browser download
- **Responsive Layout**: CSS Grid and Flexbox with Tailwind classes for mobile-first design

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally

## 🎨 Customization

### Styling

The application uses Tailwind CSS for styling. Key design tokens:

- **Colors**: Dark theme with gray-900 background, blue accent colors
- **Typography**: System font stack with multiple font weights
- **Spacing**: Consistent padding and margins using Tailwind scale
- **Borders**: Rounded corners and subtle borders throughout

### Adding New Sections

To add a new document section:

1. Add the field to the `formData` state in `DevDocGenerator.jsx`
2. Add the section toggle to `enabledSections` state
3. Add the field configuration to the `formFields` array
4. Update the `generateMarkdown` function to include the new section

### Export Formats

Currently supported export formats:

- **Markdown**: Native `.md` file download
- **HTML**: Styled HTML with embedded CSS
- **PDF**: Browser print dialog (opens print preview)

## 🤝 Contributing

We welcome contributions! Here's how to get started:

1. **Fork the repository**
2. **Create a feature branch**: `git checkout -b feature/amazing-feature`
3. **Make your changes**: Follow the existing code style and patterns
4. **Test thoroughly**: Ensure your changes work across different browsers
5. **Commit your changes**: `git commit -m 'Add amazing feature'`
6. **Push to your branch**: `git push origin feature/amazing-feature`
7. **Open a Pull Request**: Describe your changes and their benefits

### Development Guidelines

- Use functional components with React hooks
- Follow the existing Tailwind CSS patterns
- Ensure responsive design on all screen sizes
- Add appropriate accessibility attributes
- Test export functionality across different formats
- Maintain consistent code formatting (use Prettier)

## 🐛 Known Issues & Limitations

- **PDF Export**: Uses browser print functionality - advanced PDF features may be limited
- **File Upload**: No document import functionality yet
- **Templates**: Pre-built templates for different project types planned
- **Offline Mode**: Currently requires internet connection for initial load

## 🔮 Roadmap

- [ ] **Document Templates**: Pre-built templates for web apps, mobile apps, APIs, etc.
- [ ] **Import Functionality**: Upload existing documents to edit
- [ ] **Advanced PDF Export**: Better formatting and styling options
- [ ] **Collaboration Features**: Share and collaborate on documents
- [ ] **Version History**: Track changes and revisions
- [ ] **Custom Sections**: Add your own custom document sections
- [ ] **Dark/Light Mode Toggle**: User preference for color scheme
- [ ] **Export Presets**: Save custom export configurations

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙋‍♂️ Support

- **Documentation**: Check this README and inline code comments
- **Issues**: Report bugs and request features via GitHub Issues
- **Questions**: Start a discussion in the GitHub Discussions tab

## 🎉 Acknowledgments

- Built with [Vite](https://vitejs.dev/) for fast development experience
- Icons by [Lucide](https://lucide.dev/) for beautiful, consistent iconography
- Styled with [Tailwind CSS](https://tailwindcss.com/) for rapid UI development
- Deployed on [Netlify](https://www.netlify.com/) for seamless hosting

---

**Made with ❤️ for better developer-business communication**

## 📊 Browser Support

- Chrome 87+
- Firefox 78+
- Safari 14+
- Edge 88+

---

### Getting Help

If you encounter any issues or have questions:

1. Check the [Issues](https://github.com/yourusername/dev-doc-generator/issues) page
2. Search existing discussions
3. Create a new issue with detailed information about your problem
4. Include your browser version, operating system, and steps to reproduce

Happy documenting! 🚀
