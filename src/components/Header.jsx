function Header() {
    return (
        <nav className="pink lighten-3">
            <div className="nav-wrapper">
                <a href="/" className="brand-logo">
                    React Shop
                </a>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li>
                        <a
                            href="https://github.com/heorhi-bel/shop_react"
                            target="_blank"
                            rel="noreferrer"
                        >
                            Repo
                        </a>
                    </li>
                    <li>
                        <a href="badges.html">Else</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Header;
