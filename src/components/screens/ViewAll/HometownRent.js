import {React,useState,useEffect} from 'react'
import './ApartmentRent.css'
import ReactPaginate from 'react-paginate'

const HometownRent = () => {
    const [data, setData] = useState([])
    
    useEffect(() => {
        fetch('/real-estate/get-by-category/townhouses_for_rent', {
        }).then(res => res.json())
            .then(result => {
                setData(result)
            })
    }, [])
    
    const [pageNumber, setPageNumber] = useState(0)
    const datasPerPage = 15
    const pagesVisited = pageNumber * datasPerPage
    const displayDatas = data.slice(pagesVisited, pagesVisited + datasPerPage)
    const pageCount = Math.ceil(data.length / datasPerPage)
    const changePage = ({selected}) => {
        setPageNumber(selected)
    }
    return (
        <main>
            <section className="hogi-search-bar">
                <div className="main-form">
                    <div className="form-group form-search-box">
                        <div className="form-select">
                            <select className="form-control">
                                <option value="ForRent">Cho thuê</option>
                                <option value="ForBuy">Mua Bán</option>
                            </select>
                        </div>
                        <div className="form-search">
                            <input className="form-control" type="text" autoComplete="off" placeholder="Từ khóa, địa chỉ, quận,..." ></input>
                            <button className="btn btn-primary">
                                <em className="fa fa-search"></em>
                            </button>
                        </div>
                    </div>
                    <div className="property-location-filter search-dropdown">
                        <div className="btn-group dropdown" auto-close="outsideClick">
                            <button type="button" className="btn btn-search-dropdown">
                                <i className="fa fa-map-marker"></i>
                                <span>Toàn quốc</span>
                                <i className="fa fa-chevron-down"></i>
                            </button>
                        </div>
                    </div>  
                    <div className="property-type-filter search-dropdown">
                        <div className="btn-group dropdown" auto-close="outsideClick">
                            <button type="button" className="btn btn-search-dropdown">
                                <i className="fa fa-home"></i>
                                <span>Loại bất động sản</span>
                                <i className="fa fa-chevron-down"></i>
                            </button>
                        </div>
                    </div>  
                    <div className="property-price-filter search-dropdown">
                        <div className="btn-group dropdown" auto-close="outsideClick">
                            <button type="button" className="btn btn-search-dropdown">
                                <i className="fa fa-usd"></i>
                                <span>Giá bán</span>
                                <i className="fa fa-chevron-down"></i>
                            </button>
                        </div>
                    </div>  
                </div>
            </section>
            <section className="hogi-ds-bds main-section">
                <div className="container">
                    <div className="breadcrumb-scroll">
                        <ul className="breadcrumb clearfix">
                            <li className="breadcrumb-item">
                                <a>Hogi</a>
                            </li>
                            <li className="breadcrumb-item">
                                <i className="fa fa-chevron-right"></i>
                                <a>Nhà phố</a>
                            </li>
                        </ul>
                    </div>
                    <div className="head-ds-bds">
                        <h2 className="title">Cho Thuê Nhà Phố</h2>
                        <div className="apartment-number">
                            <p>
                                <span>
                                    {data.length} bất động sản
                                </span>
                            </p>
                        </div>
                    </div>
                    <div className="body-ds-bds">
                        {
                            displayDatas.map(item => {
                                return (
                                    <div className="col-sm-6 col-lg-4">
                                        <div className="apartment-item">
                                            <div className="item-image">
                                                <a href={`/chi-tiet/${item._id}`}>
                                                    <img src={item.imgList[0]}></img>
                                                </a>
                                            </div>
                                            <div className="item-caption">
                                                <div className="top-caption">
                                                    <div className="caption-title">
                                                        <a href={`/chi-tiet/${item._id}`}>{item.name}</a>
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
                                                <a href={`/chi-tiet/${item._id}`}>Xem chi tiết</a>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                    <div className="paging">
                        <ReactPaginate
                            previousLabel={<i className="fa fa-angle-left"></i>}
                            nextLabel={<i className="fa fa-angle-right"></i>}
                            pageCount={pageCount}
                            onPageChange={changePage}
                            containerClassName={"pagination"}
                            activeClassName={"paginationActive"}
                            previousLinkClassName={"previousBtn"}
                            nextLinkClassName={"nextBtn"}
                            disabledClassName={"paginationDisabled"}
                        />
                    </div>
                </div>
            </section>
        </main>
    )
}

export default HometownRent;