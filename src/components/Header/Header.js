import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './Header.css';



const Header = () => {
    return (
        <nav>
            <div className="nav-wrapper white">
                <div className="nav-logo">
                    <a href="/" className="brand-logo">Logo</a>
                </div>
                <div className="nav-menu">
                    <ul className="right">
                        <li><a href="/mua-ban/can-ho">Mua bán</a></li>
                        <li><a href="/cho-thue/can-ho">Cho thuê</a></li>
                        <li><a href="/du-an">Dự án</a></li>
                        <li><a href="/dang-nhap">Đăng nhập</a></li>
                        <li><a href="/dang-tin" className="dangtin">Đăng tin</a></li>
                    </ul>
                </div>
            </div>
        </nav>
    )
};

export default Header;