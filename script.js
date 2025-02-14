/* Navigation Menu */
.navbar {
    position: fixed;
    width: 100%;
    top: 0;
    left: 0;
    background: #0f0f1e;
    padding: 10px 20px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
    z-index: 100;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.nav-menu {
    list-style: none;
    display: flex;
    gap: 20px;
}

.nav-menu a {
    text-decoration: none;
    color: #fff;
    font-weight: bold;
    transition: color 0.3s;
}

.nav-menu a:hover {
    color: #ffd700;
}

.menu-toggle {
    display: none;
    flex-direction: column;
    cursor: pointer;
}

.menu-toggle span {
    background: #fff;
    height: 3px;
    width: 25px;
    margin: 4px 0;
    transition: 0.4s;
}

/* Responsive Menu */
@media (max-width: 768px) {
    .nav-menu {
        display: none;
        flex-direction: column;
        background: #0f0f1e;
        width: 100%;
        position: absolute;
        top: 50px;
        left: 0;
    }

    .nav-menu.active {
        display: flex;
    }

    .menu-toggle {
        display: flex;
    }
}
