import {React,useState,useEffect} from 'react'
import './Homepage.css'

const Homepage = () => {
    //ApartmentSale
    const [dataApartmentSale, setDataApartmentSale] = useState([])
    
    useEffect(() => {
        fetch('/real-estate/get-by-category/apartments_for_sale', {
        }).then(res => res.json())
            .then(result => {
                setDataApartmentSale(result)
            })
    }, [])
    const displayDataApartmentSale = dataApartmentSale.slice(6, 10)

    //ApartmentRent
    const [dataApartmentRent, setDataApartmentRent] = useState([])
    
    useEffect(() => {
        fetch('/real-estate/get-by-category/apartments_for_rent', {
        }).then(res => res.json())
            .then(result => {
                setDataApartmentRent(result)
            })
    }, [])
    const displayDataApartmentRent = dataApartmentRent.slice(1, 5)

    //HometownRent
    const [dataHometownRent, setDataHometownRent] = useState([])
    
    useEffect(() => {
        fetch('/real-estate/get-by-category/townhouses_for_rent', {
        }).then(res => res.json())
            .then(result => {
                setDataHometownRent(result)
            })
    }, [])
    const displayDataHometownRent = dataHometownRent.slice(5, 9)

    //HometownSale
    const [dataHometownSale, setDataHometownSale] = useState([])
    
    useEffect(() => {
        fetch('/real-estate/get-by-category/townhouses_for_sale', {
        }).then(res => res.json())
            .then(result => {
                setDataHometownSale(result)
            })
    }, [])
    const displayDataHometownSale = dataHometownSale.slice(1, 5)

    return (
        <main>
            <section className="home-banner">
                <div className="home-background">
                    <img src="/images/home-bg2.jpg" alt="" />
                </div>
                <div className="home-search">
                    <h1 className="title">Đúng nhà, đúng giá, đúng thời điểm</h1>
                    <div className="search-bar">
                        <ul className="services clearfix">
                            <li className="active">Mua</li>
                            <li >Thuê</li>
                            <li >Dự án</li>
                        </ul>
                        <div className="search clearfix">
                            <div className="search-keyword clearfix">
                                <input type="text" placeholder="Vui lòng nhập địa chỉ, đường, quận hoặc dự án ..."/>
                            </div>
                            <button type="submit" class="btn-search">
                                <i className="fa fa-search"></i>
                            </button>
                        </div>
                        <ul className="search-filter clearfix">
                            <li>Toàn quốc</li>
                            <li>Loại bất động sản</li>
                            <li>Giá bán</li>
                        </ul>
                    </div>
                </div>
            </section>
            <section className="home-apartment">
                <div className="container">
                    <div className="apartment-for-sale ">
                        <div className="title clearfix">
                            <h2 className="hogi-title">Căn hộ bán</h2>
                            <a className="btn-view-all" href="/mua-ban/can-ho">
                                Xem tất cả
                                <em className="fa fa-angle-right"></em>
                            </a>
                        </div> 
                        <div className="tabs-apartment">
                            <div className="property-items">
                                <div className="property-item">
                                    {
                                        displayDataApartmentSale.map(item => {
                                            return (
                                                <div className="apartment-item">
                                                    <div className="item-image">
                                                        <a>
                                                            <img src={item.imgList[0]}></img>
                                                        </a>
                                                    </div>
                                                    <div className="item-caption">
                                                        <div className="top-caption">
                                                            <div className="caption-title">
                                                                <a>{item.name}</a>
                                                            </div>
                                                            <div className="caption-address">
                                                                <address>{item.full_address}</address>
                                                            </div>
                                                            <ul className="caption-list-infor">
                                                                <li>
                                                                    <div className="icon bg-selection"></div>
                                                                    <p>{item.area.split(" ",1)}  m<sup>2</sup></p>
                                                                </li>
                                                                <li>
                                                                    <div className="icon bg-hotel"></div>
                                                                    <p>{item.num_bedroom}</p>
                                                                </li>
                                                                <li>
                                                                    <div className="icon bg-bathroom"></div>
                                                                    <p>{item.num_wc}</p>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                        <div className="bottom-caption">
                                                            <div className="caption-price">
                                                                <p>{item.price}</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="view-details">
                                                        <a>Xem chi tiết</a>
                                                    </div>
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="apartment-for-rent ">
                        <div className="title clearfix">
                            <h2 className="hogi-title">Căn hộ cho thuê</h2>
                            <a className="btn-view-all" href="/cho-thue/can-ho">
                                Xem tất cả
                                <em className="fa fa-angle-right"></em>
                            </a>
                        </div>
                        
                        <div className="tabs-apartment">
                            <div className="property-items">
                                <div className="property-item">
                                    {
                                        displayDataApartmentRent.map(item => {
                                            return (
                                                <div className="apartment-item">
                                                    <div className="item-image">
                                                        <a>
                                                            <img src={item.imgList[0]}></img>
                                                        </a>
                                                    </div>
                                                    <div className="item-caption">
                                                        <div className="top-caption">
                                                            <div className="caption-title">
                                                                <a>{item.name}</a>
                                                            </div>
                                                            <div className="caption-address">
                                                                <address>{item.full_address}</address>
                                                            </div>
                                                            <ul className="caption-list-infor">
                                                                <li>
                                                                    <div className="icon bg-selection"></div>
                                                                    <p>{item.area.split(" ",1)}  m<sup>2</sup></p>
                                                                </li>
                                                                <li>
                                                                    <div className="icon bg-hotel"></div>
                                                                    <p>{item.num_bedroom}</p>
                                                                </li>
                                                                <li>
                                                                    <div className="icon bg-bathroom"></div>
                                                                    <p>{item.num_wc}</p>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                        <div className="bottom-caption">
                                                            <div className="caption-price">
                                                                <p>{item.price}</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="view-details">
                                                        <a>Xem chi tiết</a>
                                                    </div>
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="hometown-for-sale ">
                        <div className="title clearfix">
                            <h2 className="hogi-title">Nhà phố bán</h2>
                            <a className="btn-view-all" href="/mua-ban/nha-pho">
                                Xem tất cả
                                <em className="fa fa-angle-right"></em>
                            </a>
                        </div>
                        
                        <div className="tabs-apartment">
                            <div className="property-items">
                            <div className="property-item">
                                    {
                                        displayDataHometownSale.map(item => {
                                            return (
                                                <div className="apartment-item">
                                                    <div className="item-image">
                                                        <a>
                                                            <img src={item.imgList[0]}></img>
                                                        </a>
                                                    </div>
                                                    <div className="item-caption">
                                                        <div className="top-caption">
                                                            <div className="caption-title">
                                                                <a>{item.name}</a>
                                                            </div>
                                                            <div className="caption-address">
                                                                <address>{item.full_address}</address>
                                                            </div>
                                                            <ul className="caption-list-infor">
                                                                <li>
                                                                    <div className="icon bg-selection"></div>
                                                                    <p>{item.area.split(" ",1)}  m<sup>2</sup></p>
                                                                </li>
                                                                <li>
                                                                    <div className="icon bg-hotel"></div>
                                                                    <p>{item.num_bedroom}</p>
                                                                </li>
                                                                <li>
                                                                    <div className="icon bg-bathroom"></div>
                                                                    <p>{item.num_wc}</p>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                        <div className="bottom-caption">
                                                            <div className="caption-price">
                                                                <p>{item.price}</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="view-details">
                                                        <a>Xem chi tiết</a>
                                                    </div>
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="hometown-for-rent ">
                        <div className="title clearfix">
                            <h2 className="hogi-title">Nhà phố cho thuê</h2>
                            <a className="btn-view-all" href="/cho-thue/nha-pho">
                                Xem tất cả
                                <em className="fa fa-angle-right"></em>
                            </a>
                        </div>
                        
                        <div className="tabs-apartment">
                            <div className="property-items">
                                <div className="property-item">
                                    {
                                        displayDataHometownRent.map(item => {
                                            return (
                                                <div className="apartment-item">
                                                    <div className="item-image">
                                                        <a>
                                                            <img src={item.imgList[0]}></img>
                                                        </a>
                                                    </div>
                                                    <div className="item-caption">
                                                        <div className="top-caption">
                                                            <div className="caption-title">
                                                                <a>{item.name}</a>
                                                            </div>
                                                            <div className="caption-address">
                                                                <address>{item.full_address}</address>
                                                            </div>
                                                            <ul className="caption-list-infor">
                                                                <li>
                                                                    <div className="icon bg-selection"></div>
                                                                    <p>{item.area.split(" ",1)}  m<sup>2</sup></p>
                                                                </li>
                                                                <li>
                                                                    <div className="icon bg-hotel"></div>
                                                                    <p>{item.num_bedroom}</p>
                                                                </li>
                                                                <li>
                                                                    <div className="icon bg-bathroom"></div>
                                                                    <p>{item.num_wc}</p>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                        <div className="bottom-caption">
                                                            <div className="caption-price">
                                                                <p>{item.price}</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="view-details">
                                                        <a>Xem chi tiết</a>
                                                    </div>
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </main>
    )
}

export default Homepage;