import React from 'react';

const About = () => {
  const skills = [
    'React.js', 'JavaScript (ES6+)', 'Node.js', 
    'Git & GitHub', 'Jenkins (CI/CD)', 'Tailwind CSS'
  ];

  return (
    <div style={styles.container}>
      {/* Header Section */}
      <header style={styles.header}>
        <h1 style={styles.title}>Giới Thiệu Về Tôi</h1>
        <p style={styles.subtitle}>
          Lập trình viên Web / DevOps Enthusiast đam mê xây dựng sản phẩm chất lượng & quy trình tự động hóa.
        </p>
      </header>

      {/* Main Content */}
      <div style={styles.cardGroup}>
        {/* Bio Card */}
        <div style={styles.card}>
          <h2 style={styles.cardTitle}>👤 Xin chào, tôi là Đỗ Tiến Đạt</h2>
          <p style={styles.cardText}>
            Tôi là một lập trình viên phần mềm hướng tới việc tối ưu hóa trải nghiệm người dùng 
            và xây dựng hệ thống triển khai tự động (CI/CD). Tôi tin rằng công nghệ hiệu quả 
            phải đi kèm với quy trình phát triển tinh gọn.
          </p>
        </div>

        {/* Skills Card */}
        <div style={styles.card}>
          <h2 style={styles.cardTitle}>🚀 Kỹ Năng & Công Nghệ</h2>
          <div style={styles.badgeContainer}>
            {skills.map((skill, index) => (
              <span key={index} style={styles.badge}>
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Footer / Contact Section */}
      <footer style={styles.footer}>
        <p style={styles.footerText}>
          📫 Kết nối với tôi qua GitHub:{' '}
          <a 
            href="https://github.com/DoTienDat-DTD" 
            target="_blank" 
            rel="noopener noreferrer"
            style={styles.link}
          >
            github.com/DoTienDat-DTD
          </a>
        </p>
      </footer>
    </div>
  );
};

// CSS-in-JS style object đơn giản, chạy ngay không lo thiếu thư viện
const styles = {
  container: {
    maxWidth: '800px',
    margin: '40px auto',
    padding: '20px',
    fontFamily: 'Segoe UI, Tahoma, Geneva, Verdana, sans-serif',
    color: '#333',
    lineHeight: '1.6',
  },
  header: {
    textAlign: 'center',
    marginBottom: '40px',
  },
  title: {
    fontSize: '2.5rem',
    color: '#2c3e50',
    marginBottom: '10px',
  },
  subtitle: {
    fontSize: '1.1rem',
    color: '#7f8c8d',
  },
  cardGroup: {
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
  },
  card: {
    backgroundColor: '#f8f9fa',
    padding: '24px',
    borderRadius: '12px',
    borderLeft: '5px solid #007bff',
    boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
  },
  cardTitle: {
    fontSize: '1.4rem',
    marginTop: 0,
    color: '#1a252f',
  },
  cardText: {
    margin: 0,
    color: '#555',
  },
  badgeContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '10px',
    marginTop: '10px',
  },
  badge: {
    backgroundColor: '#007bff',
    color: '#ffffff',
    padding: '6px 14px',
    borderRadius: '20px',
    fontSize: '0.9rem',
    fontWeight: '500',
  },
  footer: {
    marginTop: '40px',
    textAlign: 'center',
    borderTop: '1px solid #eee',
    paddingTop: '20px',
  },
  footerText: {
    color: '#666',
  },
  link: {
    color: '#007bff',
    textDecoration: 'none',
    fontWeight: 'bold',
  },
};

export default About;