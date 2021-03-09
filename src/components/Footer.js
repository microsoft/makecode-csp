const Footer = () => (
    <footer role="contentinfo">
        <a
            href="https://makecode.com/privacy"
            target="_blank"
            rel="noopener noreferrer"
        >
            Privacy &amp; Cookies
        </a>
        <a
            href="https://makecode.com/termsofuse"
            target="_blank"
            rel="noopener noreferrer"
        >
            Terms Of Use
        </a>
        <a
            href="https://makecode.com/trademarks"
            target="_blank"
            rel="noopener noreferrer"
        >
            Trademarks
        </a>
        <span>© {new Date().getFullYear()} Microsoft Corporation</span>
    </footer>
);

export default Footer;
