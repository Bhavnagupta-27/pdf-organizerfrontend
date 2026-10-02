import { useState } from "react";
import "../styles/dashboard.css";

function Dashboard() {
  const [search, setSearch] = useState("");
  const [documents, setDocuments] = useState([]);

  const handleUpload = (e) => {
    const files = Array.from(e.target.files);

    const newDocuments = files.map((file) => ({
      name: file.name,
      size: (file.size / (1024 * 1024)).toFixed(2) + " MB",
      category: "Uncategorized",
    }));

    setDocuments((prev) => [...prev, ...newDocuments]);
  };

  const filteredDocuments = documents.filter((doc) =>
    doc.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="dashboard-page">

      {/* Sidebar */}
      <aside className="dashboard-sidebar">
        <div className="sidebar-logo">
          SmartPDF <span>AI</span>
        </div>

        <div className="sidebar-menu">
          <button className="active-menu">📊 Dashboard</button>
          <button>📄 All Documents</button>
          <button>🗂️ Categories</button>
          <button>⭐ Favorites</button>
          <button>🕘 Recent</button>
        </div>
      </aside>

      {/* Main Dashboard */}
      <main className="dashboard-main">

        <div className="dashboard-header">
          <div>
            <h1>Dashboard</h1>
            <p>Welcome to your PDF workspace.</p>
          </div>

          <label className="upload-btn">
            + Upload PDF
            <input
              type="file"
              accept=".pdf"
              multiple
              onChange={handleUpload}
              hidden
            />
          </label>
        </div>

        {/* Stats */}
        <div className="dashboard-stats">

          <div className="stat-card">
            <h2>{documents.length}</h2>
            <p>Total Documents</p>
          </div>

          <div className="stat-card">
            <h2>{documents.length}</h2>
            <p>PDFs Analyzed</p>
          </div>

          <div className="stat-card">
            <h2>
              {new Set(documents.map((doc) => doc.category)).size}
            </h2>
            <p>Categories</p>
          </div>

          <div className="stat-card">
            <h2>
              {documents
                .reduce((total, doc) => total + parseFloat(doc.size), 0)
                .toFixed(2)}{" "}
              MB
            </h2>
            <p>Storage Used</p>
          </div>

        </div>

        {/* Search */}
        <div className="dashboard-search">
          <input
            type="text"
            placeholder="🔍 Search your PDFs..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        {/* Documents */}
        <div className="documents-section">

          <div className="section-title">
            <h2>Recent Documents</h2>
            <span>{filteredDocuments.length} documents</span>
          </div>

          {filteredDocuments.length === 0 ? (
            <div className="empty-documents">
              <div className="empty-icon">📄</div>

              <h3>No documents yet</h3>

              <p>
                Upload your first PDF and let SmartPDF AI organize it for you.
              </p>

              <label className="empty-upload-btn">
                Upload PDF
                <input
                  type="file"
                  accept=".pdf"
                  multiple
                  onChange={handleUpload}
                  hidden
                />
              </label>
            </div>
          ) : (
            <div className="documents-list">

              {filteredDocuments.map((doc, index) => (
                <div className="document-card" key={index}>

                  <div className="document-icon">
                    📄
                  </div>

                  <div className="document-info">
                    <h3>{doc.name}</h3>
                    <p>{doc.size}</p>
                  </div>

                  <div className="document-category">
                    {doc.category}
                  </div>

                </div>
              ))}

            </div>
          )}

        </div>

        {/* AI Section */}
        <div className="ai-section">
          <div className="ai-icon">✨</div>

          <div>
            <h2>AI-Powered Organization</h2>
            <p>
              Upload your PDFs and SmartPDF AI will help you organize,
              categorize and search your documents.
            </p>
          </div>
        </div>

      </main>
    </div>
  );
}

export default Dashboard;