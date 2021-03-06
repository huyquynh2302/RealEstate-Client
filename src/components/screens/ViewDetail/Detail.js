import { React, useState, useEffect } from 'react'
import {useParams, Link} from 'react-router-dom'
import './Detail.css'

const Detail = () => {
    const params = useParams()
    const [product, setProduct] = useState([])

    // useEffect(() => {
    //     fetch(`/real-estate/get-by-id/${params.id}`, {
    //     }).then(res => res.json())
    //         .then(result => {
    //             setProduct(result.data)
    //         })
    // }, [])

    useEffect(() => {
        async function fetchData(){
            try {
                const response = await fetch(`/real-estate/get-by-id/${params.id}`)
                const responseJson = await response.json()
                const { data } = responseJson
                setProduct(data)
            } catch (error) {
                console.log("Error:", error.message)
            }
        }
        fetchData()
    }, [])

    

    if (product.length === 0) {
        return <main></main>
    } else if (product.length !== 0) {
        var string = product.more_description.split('\n', 10);
        return (
            <main>
                <section className="hogi-details">
                    <div className="container">
                        <div className="all-images">
                            <div className="image-left">
                                <img src={product.imgList[0]}></img>
                            </div>
                            <div className="image-right">
                                <div className="image-top">
                                    <div className="image-top-left">
                                        <img src={product.imgList[1]}></img>
                                    </div>
                                    <div className="image-top-right">
                                        <img src={product.imgList[2]}></img>
                                    </div>
                                </div>
                                <div className="image-bottom">
                                    <div className="image-bottom-left">
                                        <img src={product.imgList[3]}></img>
                                    </div>
                                    <div className="image-bottom-right">
                                        <img src={product.imgList[4]}></img>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="infor-property">
                            <div className="breadcrumb-scroll">
                                <ul className="breadcrumb clearfix">
                                    <li className="breadcrumb-item">
                                        <a>Hogi</a>
                                    </li>
                                    <li className="breadcrumb-item">
                                        <i className="fa fa-chevron-right"></i>
                                        <a>{product.detail_address.district}</a>
                                    </li>
                                    {/* <li className="breadcrumb-item">
                                    <i className="fa fa-chevron-right"></i>
                                    <a>C??n h??? Sarina</a>
                                </li> */}
                                </ul>
                            </div>
                            <div className="list-name">
                                <h1 className="project-name">{product.name}</h1>
                            </div>
                            <div className="list-basic-infor">
                                <ul className="about-infor">
                                    <li>
                                        <div className="icon bg-selection"></div>
                                        <p>{product.area.split(" ",1)}  m<sup>2</sup></p>
                                    </li>
                                    <li>
                                        <div className="icon bg-hotel"></div>
                                        <p>{product.num_bedroom}</p>
                                    </li>
                                    <li>
                                        <div className="icon bg-bathroom"></div>
                                        <p>{product.num_wc}</p>
                                    </li>
                                    {/* <li>
                                        <div className="icon bg-drawer"></div>
                                        <p>2</p>
                                    </li> */}
                                </ul>
                                <div className="about-price">
                                    <strong>{product.price}</strong>
                                </div>
                            </div>
                        </div>
                        <div className="accordion" id="property-accordion">
                            <div className="property-info-item">
                                <div className="property-info-title">
                                    <img src="/images/house.png"></img>
                                    <strong>T???ng quan</strong>
                                </div>
                                <div className="property-info-content">
                                    <div className="property-content-detail">
                                        <div className="content-container">
                                            <p id="paragraph_0">{string[0]}</p>
                                            <p id="paragraph_1">{string[1]}</p>
                                            <p id="paragraph_2">{string[2]}</p>
                                            <p id="paragraph_3">{string[3]}</p>
                                            <p id="paragraph_4">{string[4]}</p>
                                            <p id="paragraph_5">{string[5]}</p>
                                            <p id="paragraph_6">{string[6]}</p>
                                            <p id="paragraph_7">{string[7]}</p>
                                            <p id="paragraph_8">{string[8]}</p>
                                            <p id="paragraph_9">{string[9]}</p>
                                            <p id="paragraph_10">{string[10]}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="property-info-item">
                                <div className="property-info-title">
                                    <img src="/images/furnitures.png"></img>
                                    <strong>N???i th???t</strong>
                                </div>
                                <div className="property-info-content">
                                    <div className="property-content-detail">
                                        <div className="property-facility">
                                            <ul className="list-unstyled">
                                                <li>
                                                    <img src="/images/checked.png"></img>
                                                    <p>Nh?? b???p</p>
                                                </li>
                                                <li>
                                                    <img src="/images/checked.png"></img>
                                                    <p>B???n t???m</p>
                                                </li>
                                                <li>
                                                    <img src="/images/checked.png"></img>
                                                    <p>H??? b??i</p>
                                                </li>
                                                <li>
                                                    <img src="/images/checked.png"></img>
                                                    <p>????? xe</p>
                                                </li>
                                                <li>
                                                    <img src="/images/checked.png"></img>
                                                    <p>Thang m??y</p>
                                                </li>
                                                <li>
                                                    <img src="/images/checked.png"></img>
                                                    <p>Tivi</p>
                                                </li>
                                                <li>
                                                    <img src="/images/checked.png"></img>
                                                    <p>Ban c??ng</p>
                                                </li>
                                                <li>
                                                    <img src="/images/checked.png"></img>
                                                    <p>M??y l???nh</p>
                                                </li>
                                                <li>
                                                    <img src="/images/checked.png"></img>
                                                    <p>M??y ph??t hi???n kh??i</p>
                                                </li>
                                                <li>
                                                    <img src="/images/checked.png"></img>
                                                    <p>M??y gi???t</p>
                                                </li>
                                                <li>
                                                    <img src="/images/checked.png"></img>
                                                    <p>M??y l???c n?????c</p>
                                                </li>
                                                <li>
                                                    <img src="/images/checked.png"></img>
                                                    <p>???ng h??t kh??i ??i???n</p>
                                                </li>
                                                <li>
                                                    <img src="/images/checked.png"></img>
                                                    <p>Nhu thi???t b???</p>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="hogi-more">
                    <div className="container">
                        <div className="property-similar">
                            <div className="property-title clearfix">
                                <h2 className="property-name">S???n ph???m t????ng t???</h2>
                                <a className="btn-view-all" href="">
                                    Xem t???t c???
                                    <em className="fa fa-angle-right"></em>
                                </a>
                            </div>
                            <div className="list-property">
                                <div className="list-items">
                                    <div className="list-item">
                                        <div className="apartment-item">
                                            <div className="item-image">
                                                <a>
                                                    <img src="https://img.hoozing.com/400/Property/106960/hoozing-66e5306d-b68f-4b2d-ad1e-f6d8cfe426f4.jpg"></img>
                                                </a>
                                            </div>
                                            <div className="item-caption">
                                                <div className="top-caption">
                                                    <div className="caption-title">
                                                        <a>B??n C??n h??? 2 PN The Sun Avenue - D???n V??o ??? Ngay</a>
                                                    </div>
                                                    <div className="caption-address">
                                                        <address>Ph?????ng An Ph??, Qu???n 2, H??? Ch?? Minh</address>
                                                    </div>
                                                    <ul className="caption-list-infor">
                                                        <li>
                                                            <div className="icon bg-selection"></div>
                                                            <p>76 m<sup>2</sup></p>
                                                        </li>
                                                        <li>
                                                            <div className="icon bg-hotel"></div>
                                                            <p>2</p>
                                                        </li>
                                                        <li>
                                                            <div className="icon bg-bathroom"></div>
                                                            <p>2</p>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div className="bottom-caption">
                                                    <div className="caption-price">
                                                        <p>4 t???</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="view-details">
                                                <a>Xem chi ti???t</a>
                                            </div>
                                        </div>
                                        <div className="apartment-item">
                                            <div className="item-image">
                                                <a>
                                                    <img src="https://img.hoozing.com/400/Property/106960/hoozing-66e5306d-b68f-4b2d-ad1e-f6d8cfe426f4.jpg"></img>
                                                </a>
                                            </div>
                                            <div className="item-caption">
                                                <div className="top-caption">
                                                    <div className="caption-title">
                                                        <a>B??n C??n h??? 2 PN The Sun Avenue - D???n V??o ??? Ngay</a>
                                                    </div>
                                                    <div className="caption-address">
                                                        <address>Ph?????ng An Ph??, Qu???n 2, H??? Ch?? Minh</address>
                                                    </div>
                                                    <ul className="caption-list-infor">
                                                        <li>
                                                            <div className="icon bg-selection"></div>
                                                            <p>76 m<sup>2</sup></p>
                                                        </li>
                                                        <li>
                                                            <div className="icon bg-hotel"></div>
                                                            <p>2</p>
                                                        </li>
                                                        <li>
                                                            <div className="icon bg-bathroom"></div>
                                                            <p>2</p>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div className="bottom-caption">
                                                    <div className="caption-price">
                                                        <p>4 t???</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="view-details">
                                                <a>Xem chi ti???t</a>
                                            </div>
                                        </div>
                                        <div className="apartment-item">
                                            <div className="item-image">
                                                <a>
                                                    <img src="https://img.hoozing.com/400/Property/106960/hoozing-66e5306d-b68f-4b2d-ad1e-f6d8cfe426f4.jpg"></img>
                                                </a>
                                            </div>
                                            <div className="item-caption">
                                                <div className="top-caption">
                                                    <div className="caption-title">
                                                        <a>B??n C??n h??? 2 PN The Sun Avenue - D???n V??o ??? Ngay</a>
                                                    </div>
                                                    <div className="caption-address">
                                                        <address>Ph?????ng An Ph??, Qu???n 2, H??? Ch?? Minh</address>
                                                    </div>
                                                    <ul className="caption-list-infor">
                                                        <li>
                                                            <div className="icon bg-selection"></div>
                                                            <p>76 m<sup>2</sup></p>
                                                        </li>
                                                        <li>
                                                            <div className="icon bg-hotel"></div>
                                                            <p>2</p>
                                                        </li>
                                                        <li>
                                                            <div className="icon bg-bathroom"></div>
                                                            <p>2</p>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div className="bottom-caption">
                                                    <div className="caption-price">
                                                        <p>4 t???</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="view-details">
                                                <a>Xem chi ti???t</a>
                                            </div>
                                        </div>
                                        <div className="apartment-item">
                                            <div className="item-image">
                                                <a>
                                                    <img src="https://img.hoozing.com/400/Property/106960/hoozing-66e5306d-b68f-4b2d-ad1e-f6d8cfe426f4.jpg"></img>
                                                </a>
                                            </div>
                                            <div className="item-caption">
                                                <div className="top-caption">
                                                    <div className="caption-title">
                                                        <a>B??n C??n h??? 2 PN The Sun Avenue - D???n V??o ??? Ngay</a>
                                                    </div>
                                                    <div className="caption-address">
                                                        <address>Ph?????ng An Ph??, Qu???n 2, H??? Ch?? Minh</address>
                                                    </div>
                                                    <ul className="caption-list-infor">
                                                        <li>
                                                            <div className="icon bg-selection"></div>
                                                            <p>76 m<sup>2</sup></p>
                                                        </li>
                                                        <li>
                                                            <div className="icon bg-hotel"></div>
                                                            <p>2</p>
                                                        </li>
                                                        <li>
                                                            <div className="icon bg-bathroom"></div>
                                                            <p>2</p>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div className="bottom-caption">
                                                    <div className="caption-price">
                                                        <p>4 t???</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="view-details">
                                                <a>Xem chi ti???t</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        )
    }
}

export default Detail;