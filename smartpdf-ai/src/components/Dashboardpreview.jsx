import "../styles/dashboard.css";
function DashboardPreview() {
  return (
    <section className="dashboard-preview">

      <div className="dashboard-header">
        <h2>SmartPDF Dashboard</h2>
        <p>Your documents, organized intelligently.</p>
      </div>

      <div className="dashboard-cards">

        <div className="dashboard-card">
          <p>Total Documents</p>
          <h3>128</h3>
        </div>

        <div className="dashboard-card">
          <p>PDFs Analyzed</p>
          <h3>96</h3>
        </div>

        <div className="dashboard-card">
          <p>Categories</p>
          <h3>12</h3>
        </div>

        <div className="dashboard-card">
          <p>Storage Used</p>
          <h3>2.4 GB</h3>
        </div>

      </div>

    </section>
  );
}

export default DashboardPreview;