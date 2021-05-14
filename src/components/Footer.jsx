function Footer() {
    return (
        <footer className="page-footer  pink darken-4">
            <div className="footer-copyright">
                <div className="container">
                    © {new Date().getFullYear()} Copyright Text
                    <a
                        className="grey-text text-lighten-4 right"
                        href="https://github.com/heorhi-bel/shop_react"
                        target="_blank"
                        rel="noreferrer"
                    >
                        Repo
                    </a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
