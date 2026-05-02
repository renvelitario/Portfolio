import "./Footer.css";

export default function Footer() {
  return (
    <footer className="site-footer">
      <hr />
      <div className="footer-content">
        <p>&copy; {new Date().getFullYear()} Ren Velitario. All rights reserved.</p>
      </div>
    </footer>
  );
}
