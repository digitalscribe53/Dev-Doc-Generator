import React, { useState } from "react";
import { Download, FileText, Eye, EyeOff } from "lucide-react";

const DevDocGenerator = () => {
  const [formData, setFormData] = useState({
    projectName: "",
    projectDescription: "",
    techStack: "",
    functionalRequirements: "",
    technicalRequirements: "",
    apiSpecs: "",
    databaseSchema: "",
    setupInstructions: "",
    acceptanceCriteria: "",
    timeline: "",
    additionalNotes: "",
  });

  const [enabledSections, setEnabledSections] = useState({
    projectDescription: true,
    techStack: true,
    functionalRequirements: true,
    technicalRequirements: true,
    apiSpecs: true,
    databaseSchema: true,
    setupInstructions: true,
    acceptanceCriteria: true,
    timeline: true,
    additionalNotes: true,
  });

  const [showPreview, setShowPreview] = useState(true);
  const [focusedField, setFocusedField] = useState("");

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const toggleSection = (section) => {
    setEnabledSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  const generateMarkdown = () => {
    const sections = [
      {
        title: "# Project Requirements Document",
        content: "",
        key: "header",
        enabled: true,
      },
      {
        title: "## Project Overview",
        content: `**Project Name:** ${formData.projectName}\n\n${formData.projectDescription}`,
        key: "projectDescription",
        enabled:
          enabledSections.projectDescription &&
          (formData.projectName || formData.projectDescription),
      },
      {
        title: "## Technical Stack",
        content: formData.techStack,
        key: "techStack",
        enabled: enabledSections.techStack && formData.techStack,
      },
      {
        title: "## Functional Requirements",
        content: formData.functionalRequirements,
        key: "functionalRequirements",
        enabled:
          enabledSections.functionalRequirements &&
          formData.functionalRequirements,
      },
      {
        title: "## Technical Requirements",
        content: formData.technicalRequirements,
        key: "technicalRequirements",
        enabled:
          enabledSections.technicalRequirements &&
          formData.technicalRequirements,
      },
      {
        title: "## API Specifications",
        content: formData.apiSpecs,
        key: "apiSpecs",
        enabled: enabledSections.apiSpecs && formData.apiSpecs,
      },
      {
        title: "## Database Schema",
        content: formData.databaseSchema,
        key: "databaseSchema",
        enabled: enabledSections.databaseSchema && formData.databaseSchema,
      },
      {
        title: "## Development Setup",
        content: formData.setupInstructions,
        key: "setupInstructions",
        enabled:
          enabledSections.setupInstructions && formData.setupInstructions,
      },
      {
        title: "## Acceptance Criteria",
        content: formData.acceptanceCriteria,
        key: "acceptanceCriteria",
        enabled:
          enabledSections.acceptanceCriteria && formData.acceptanceCriteria,
      },
      {
        title: "## Timeline & Milestones",
        content: formData.timeline,
        key: "timeline",
        enabled: enabledSections.timeline && formData.timeline,
      },
      {
        title: "## Additional Notes",
        content: formData.additionalNotes,
        key: "additionalNotes",
        enabled: enabledSections.additionalNotes && formData.additionalNotes,
      },
    ];

    return sections
      .filter((section) => section.enabled && section.content.trim())
      .map((section) => `${section.title}\n\n${section.content}`)
      .join("\n\n---\n\n");
  };

  const exportAsMarkdown = () => {
    const markdown = generateMarkdown();
    const blob = new Blob([markdown], { type: "text/markdown" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `${formData.projectName || "project"}-requirements.md`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const exportAsHTML = () => {
    const markdown = generateMarkdown();
    const html = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${formData.projectName} - Requirements</title>
    <style>
        body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; line-height: 1.6; max-width: 800px; margin: 0 auto; padding: 20px; }
        h1, h2, h3 { color: #333; }
        pre { background: #f4f4f4; padding: 10px; border-radius: 5px; overflow-x: auto; }
        code { background: #f4f4f4; padding: 2px 4px; border-radius: 3px; }
        hr { border: none; border-top: 2px solid #eee; margin: 30px 0; }
    </style>
</head>
<body>
    ${markdown
      .replace(/\n/g, "<br>")
      .replace(/#{3} (.*?)(<br>|$)/g, "<h3>$1</h3>")
      .replace(/#{2} (.*?)(<br>|$)/g, "<h2>$1</h2>")
      .replace(/#{1} (.*?)(<br>|$)/g, "<h1>$1</h1>")
      .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
      .replace(/---<br>/g, "<hr>")}
</body>
</html>`;

    const blob = new Blob([html], { type: "text/html" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `${formData.projectName || "project"}-requirements.html`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const exportAsPDF = () => {
    const markdown = generateMarkdown();
    const printWindow = window.open("", "_blank");
    printWindow.document.write(`
      <html>
        <head>
          <title>${formData.projectName} Requirements</title>
          <style>
            body { font-family: Arial, sans-serif; margin: 40px; line-height: 1.6; }
            h1 { color: #2563eb; border-bottom: 2px solid #2563eb; padding-bottom: 10px; }
            h2 { color: #1e40af; margin-top: 30px; }
            pre { background: #f8f9fa; padding: 15px; border-radius: 5px; }
            @media print { body { margin: 20px; } }
          </style>
        </head>
        <body>
          ${markdown
            .replace(/\n/g, "<br>")
            .replace(/#{3} (.*?)(<br>|$)/g, "<h3>$1</h3>")
            .replace(/#{2} (.*?)(<br>|$)/g, "<h2>$1</h2>")
            .replace(/#{1} (.*?)(<br>|$)/g, "<h1>$1</h1>")
            .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
            .replace(/---<br>/g, "<hr>")}
        </body>
      </html>
    `);
    printWindow.document.close();
    printWindow.print();
  };

  const formFields = [
    {
      key: "projectName",
      label: "Project Name",
      placeholder: "Enter your project name...",
      type: "input",
    },
    {
      key: "projectDescription",
      label: "Project Description",
      placeholder: "Brief overview of the project and its goals...",
      type: "textarea",
    },
    {
      key: "techStack",
      label: "Technical Stack",
      placeholder: "List technologies, frameworks, languages, databases...",
      type: "textarea",
    },
    {
      key: "functionalRequirements",
      label: "Functional Requirements",
      placeholder: "What should the application do? User stories, features...",
      type: "textarea",
    },
    {
      key: "technicalRequirements",
      label: "Technical Requirements",
      placeholder: "Performance specs, scalability, security requirements...",
      type: "textarea",
    },
    {
      key: "apiSpecs",
      label: "API Specifications",
      placeholder: "REST endpoints, GraphQL schemas, external integrations...",
      type: "textarea",
    },
    {
      key: "databaseSchema",
      label: "Database Schema",
      placeholder: "Tables, relationships, data models...",
      type: "textarea",
    },
    {
      key: "setupInstructions",
      label: "Development Setup",
      placeholder: "Installation steps, environment variables, local setup...",
      type: "textarea",
    },
    {
      key: "acceptanceCriteria",
      label: "Acceptance Criteria",
      placeholder: "Definition of done, testing requirements...",
      type: "textarea",
    },
    {
      key: "timeline",
      label: "Timeline & Milestones",
      placeholder: "Project phases, deadlines, deliverables...",
      type: "textarea",
    },
    {
      key: "additionalNotes",
      label: "Additional Notes",
      placeholder: "Any other relevant information...",
      type: "textarea",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Header */}
      <div className="bg-gray-800 border-b border-gray-700">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                DevDoc Generator
              </h1>
              <p className="text-gray-400 mt-2">
                Create professional development requirements documents
              </p>
            </div>
            <div className="flex items-center space-x-4">
              <button
                onClick={() => setShowPreview(!showPreview)}
                className="flex items-center space-x-2 px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded-lg transition-colors"
              >
                {showPreview ? <EyeOff size={20} /> : <Eye size={20} />}
                <span>{showPreview ? "Hide" : "Show"} Preview</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        <div
          className={`grid gap-8 ${
            showPreview ? "lg:grid-cols-2" : "lg:grid-cols-1"
          }`}
        >
          {/* Form Section */}
          <div className="space-y-6">
            <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
              <h2 className="text-xl font-semibold mb-6 flex items-center">
                <FileText className="mr-2" size={24} />
                Project Information
              </h2>

              <div className="space-y-6">
                {formFields.map((field) => (
                  <div key={field.key} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <label className="block text-sm font-medium text-gray-300">
                        {field.label}
                      </label>
                      {field.key !== "projectName" && (
                        <div className="flex items-center space-x-2">
                          <input
                            type="checkbox"
                            id={`enable-${field.key}`}
                            checked={enabledSections[field.key]}
                            onChange={() => toggleSection(field.key)}
                            className="w-4 h-4 text-blue-600 bg-gray-700 border-gray-600 rounded focus:ring-blue-500 focus:ring-2"
                          />
                          <label
                            htmlFor={`enable-${field.key}`}
                            className="text-xs text-gray-400 cursor-pointer hover:text-gray-300"
                          >
                            Include in doc
                          </label>
                        </div>
                      )}
                    </div>
                    {field.type === "input" ? (
                      <input
                        type="text"
                        value={formData[field.key]}
                        onChange={(e) =>
                          handleInputChange(field.key, e.target.value)
                        }
                        onFocus={() => setFocusedField(field.key)}
                        onBlur={() => setFocusedField("")}
                        placeholder={field.placeholder}
                        className={`w-full px-4 py-3 bg-gray-700 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all ${
                          focusedField === field.key
                            ? "border-blue-500 shadow-lg shadow-blue-500/20"
                            : "border-gray-600"
                        } ${
                          field.key !== "projectName" &&
                          !enabledSections[field.key]
                            ? "opacity-50"
                            : ""
                        }`}
                        disabled={
                          field.key !== "projectName" &&
                          !enabledSections[field.key]
                        }
                      />
                    ) : (
                      <textarea
                        value={formData[field.key]}
                        onChange={(e) =>
                          handleInputChange(field.key, e.target.value)
                        }
                        onFocus={() => setFocusedField(field.key)}
                        onBlur={() => setFocusedField("")}
                        placeholder={field.placeholder}
                        rows={4}
                        className={`w-full px-4 py-3 bg-gray-700 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none ${
                          focusedField === field.key
                            ? "border-blue-500 shadow-lg shadow-blue-500/20"
                            : "border-gray-600"
                        } ${
                          field.key !== "projectName" &&
                          !enabledSections[field.key]
                            ? "opacity-50"
                            : ""
                        }`}
                        disabled={
                          field.key !== "projectName" &&
                          !enabledSections[field.key]
                        }
                      />
                    )}
                  </div>
                ))}
              </div>

              {/* Export Buttons */}
              <div className="mt-8 pt-6 border-t border-gray-700">
                <h3 className="text-lg font-medium mb-4 flex items-center">
                  <Download className="mr-2" size={20} />
                  Export Options
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                  <button
                    onClick={exportAsMarkdown}
                    className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors text-sm font-medium"
                  >
                    Markdown
                  </button>
                  <button
                    onClick={exportAsHTML}
                    className="px-4 py-2 bg-green-600 hover:bg-green-700 rounded-lg transition-colors text-sm font-medium"
                  >
                    HTML
                  </button>
                  <button
                    onClick={exportAsPDF}
                    className="px-4 py-2 bg-red-600 hover:bg-red-700 rounded-lg transition-colors text-sm font-medium"
                  >
                    PDF
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Preview Section */}
          {showPreview && (
            <div className="space-y-6">
              <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
                <h2 className="text-xl font-semibold mb-6 flex items-center">
                  <Eye className="mr-2" size={24} />
                  Live Preview
                </h2>

                <div className="bg-gray-900 rounded-lg p-6 border border-gray-600 max-h-96 overflow-y-auto">
                  <div className="prose prose-invert max-w-none">
                    <pre className="whitespace-pre-wrap text-sm text-gray-300 font-mono leading-relaxed">
                      {generateMarkdown() ||
                        "Start filling out the form to see your document preview..."}
                    </pre>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DevDocGenerator;
