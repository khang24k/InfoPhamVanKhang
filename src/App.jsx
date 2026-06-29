import './App.css'

function App() {
  const skillsData = [
    {
      category: "Ngôn ngữ lập trình",
      icon: "💻",
      items: ["Java", "C", "JavaScript (ES6+)"]
    },
    {
      category: "Backend Development",
      icon: "⚙️",
      items: ["Spring Boot", "Spring Data JPA", "RESTful API"]
    },
    {
      category: "Frontend Development",
      icon: "🎨",
      items: ["React", "TailwindCSS", "Bootstrap", "HTML5/CSS3", "Axios"]
    },
    {
      category: "Kiến trúc hệ thống & Middleware",
      icon: "🌐",
      items: ["Microservices Architecture", "Distributed Systems", "Event-Driven Architecture", "API Gateway", "RabbitMQ", "WebSockets"]
    },
    {
      category: "Cơ sở dữ liệu & Caching",
      icon: "💾",
      items: ["SQL (MySQL/PostgreSQL)", "NoSQL (MongoDB)", "Redis"]
    },
    {
      category: "Cloud & DevOps",
      icon: "☁️",
      items: ["Docker", "AWS S3"]
    },
    {
      category: "Công cụ hỗ trợ",
      icon: "🛠️",
      items: ["Git", "Postman"]
    }
  ];

  return (
    <>
      {/* Navigation Bar */}
      <nav className="navbar">
        <div className="container navbar-container">
          <a href="#" className="nav-logo">Khang.Dev</a>
          <ul className="nav-links">
            <li><a href="#about" className="nav-link">Giới thiệu</a></li>
            <li><a href="#skills" className="nav-link">Kỹ năng</a></li>
            <li><a href="#projects" className="nav-link">Dự án</a></li>
            <li><a href="#education" className="nav-link">Học vấn</a></li>
            <li><a href="#contact" className="nav-link">Liên hệ</a></li>
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="about" className="hero-section">
        <div className="container hero-grid">
          <div className="hero-content">
            <span className="hero-tagline">Fullstack Developer Intern</span>
            <h1 className="hero-title">Phạm Văn Khang</h1>
            <p className="hero-subtitle">Industrial University of Ho Chi Minh City</p>
            <p className="hero-desc">
              Sinh viên chuyên ngành Kỹ thuật Phần mềm với đam mê xây dựng các ứng dụng web tối ưu. Có kinh nghiệm làm việc với kiến trúc vi dịch vụ (Microservices), giao tiếp thời gian thực qua WebSockets và gọi điện thoại trực tuyến qua WebRTC. Sẵn sàng học hỏi công nghệ mới và đóng góp giá trị cho dự án thực tế.
            </p>
            <div className="hero-actions">
              <a href="#projects" className="btn btn-primary">Xem dự án</a>
              <a href="#contact" className="btn btn-secondary">Liên hệ ngay</a>
            </div>
          </div>
          <div className="avatar-container">
            <div className="avatar-wrapper">
              <span className="avatar-inner">PVK</span>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="section section-alt">
        <div className="container">
          <div className="section-header">
            <span className="section-subtitle">Chuyên môn</span>
            <h2 className="section-title">Kỹ năng công nghệ</h2>
          </div>
          <div className="skills-grid">
            {skillsData.map((skillGroup, index) => (
              <div className="skill-card" key={index}>
                <h3 className="skill-card-title">
                  <span>{skillGroup.icon}</span>
                  {skillGroup.category}
                </h3>
                <div className="skill-list">
                  {skillGroup.items.map((skill, sIdx) => (
                    <span className="skill-badge" key={sIdx}>{skill}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="section">
        <div className="container">
          <div className="section-header">
            <span className="section-subtitle">Sản phẩm thực tế</span>
            <h2 className="section-title">Dự án cá nhân</h2>
          </div>
          <div className="projects-container">
            <div className="project-card">
              <div className="project-header">
                <div>
                  <h3 style={{ fontSize: '1.6rem', marginBottom: '0.25rem' }}>DepLao Premium</h3>
                  <span className="project-role">Full-stack Developer</span>
                </div>
                <a 
                  href="https://github.com/Hiep0718/DepLaoPremium" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn btn-secondary"
                  style={{ padding: '0.5rem 1rem', fontSize: '0.85rem' }}
                >
                  GitHub Repository
                </a>
              </div>
              <p style={{ color: 'var(--text-secondary)', marginBottom: '1rem', fontSize: '1.05rem' }}>
                Hệ thống ứng dụng nhắn tin OTT đa nền tảng, lấy cảm hứng từ Zalo. Dự án được thiết kế sử dụng kiến trúc phân tán Polyglot Microservices tiên tiến giúp dễ dàng mở rộng và tối ưu hiệu suất.
              </p>
              
              <div className="project-tech">
                <span className="tech-badge">React 19</span>
                <span className="tech-badge">TypeScript</span>
                <span className="tech-badge">TailwindCSS</span>
                <span className="tech-badge">Node.js (Express)</span>
                <span className="tech-badge">Socket.io</span>
                <span className="tech-badge">WebRTC</span>
                <span className="tech-badge">MongoDB</span>
              </div>

              <h4 style={{ color: 'var(--text-primary)', marginTop: '1.5rem', marginBottom: '0.5rem' }}>Trách nhiệm & Tính năng chính:</h4>
              <ul className="project-responsibilities">
                <li>
                  <strong>Core UI Development:</strong> Phát triển giao diện người dùng web đáp ứng (responsive client) sử dụng React, TypeScript và TailwindCSS đảm bảo trải nghiệm người dùng mượt mà.
                </li>
                <li>
                  <strong>Real-time Messaging:</strong> Tích hợp WebSockets (Socket.io) để truyền tải tin nhắn cá nhân và nhóm tức thời dưới 500ms, xử lý trạng thái đang soạn thảo (typing indicator), theo dõi trạng thái tin nhắn (Đã gửi/Đã nhận/Đã đọc), và gửi biểu tượng cảm xúc (emojis).
                </li>
                <li>
                  <strong>WebRTC Voice/Video Calls:</strong> Thiết lập luồng trao đổi tín hiệu (signaling) ở phía client và xây dựng giao diện cuộc gọi thoại/video P2P, hỗ trợ gọi 1-1 ổn định và họp hội nghị nhóm trực tuyến.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="section section-alt">
        <div className="container">
          <div className="section-header">
            <span className="section-subtitle">Hành trình</span>
            <h2 className="section-title">Học vấn</h2>
          </div>
          <div className="education-card">
            <div className="edu-icon-box">🎓</div>
            <div className="edu-details">
              <h3>Đại học Công nghiệp TP.HCM</h3>
              <p className="edu-major">Chuyên ngành Kỹ thuật Phần mềm</p>
              <p className="edu-date">Năm học: 2022 - Hiện tại</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section">
        <div className="container">
          <div className="section-header">
            <span className="section-subtitle">Kết nối</span>
            <h2 className="section-title">Thông tin liên hệ</h2>
          </div>
          <div className="contact-container">
            <p>Tôi luôn sẵn sàng đón nhận những cơ hội thực tập và hợp tác phát triển phần mềm mới. Đừng ngần ngại liên hệ với tôi qua các kênh dưới đây!</p>
            <div className="contact-cards">
              <a href="mailto:khangvanpham204@gmail.com" className="contact-card">
                <span className="contact-icon">✉️</span>
                <span className="contact-label">Email</span>
                <span className="contact-value">khangvanpham204@gmail.com</span>
              </a>
              <a href="tel:0339165536" className="contact-card">
                <span className="contact-icon">📞</span>
                <span className="contact-label">Số điện thoại</span>
                <span className="contact-value">0339165536</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-socials">
            <a href="https://github.com/Hiep0718/DepLaoPremium" target="_blank" rel="noopener noreferrer" className="footer-link">
              🐙 GitHub Project
            </a>
          </div>
          <p>© 2026 Phạm Văn Khang. Thiết kế với React & Vite.</p>
        </div>
      </footer>
    </>
  )
}

export default App

