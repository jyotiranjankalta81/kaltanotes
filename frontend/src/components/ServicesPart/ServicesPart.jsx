import React, { useState } from 'react'
import './ServicesPart.css'
import cp1 from '../../Assets/HomeImages/s-part-1.png'
import cp2 from '../../Assets/HomeImages/s-part-2.png'
import cp3 from '../../Assets/HomeImages/s-part-3.png'
import cp4 from '../../Assets/HomeImages/s-part-4.png'
import serviceSelector from '../../Assets/HomeImages/service-selector.png'
import semCircle from '../../Assets/HomeImages/service-semi-circle.png'
import { AiOutlineClose } from 'react-icons/ai'
import servicesCollection from '../../JSONCollection/servicesCollection'

export default function ServicesPart() {
    const [popupContent, setPopupContent] = useState(false)

    const handleServiceClick = (content) => {
        setPopupContent(content)
    }
    return (
        <div className="service-wrapper">
            <h1 className="title--primary">Our Services</h1>
            <img src={semCircle} alt="" className="circle-design" />
            <div className="services-part">
                <div className="part1">
                    <img src={cp1} alt="" className="part-img" />
                    <div className="service-selector-wrapper" onClick={() => handleServiceClick("gcms")}>
                        <p className="service-title">GCMS Notes</p>
                        <img src={serviceSelector} alt="" className="service-selector" />
                    </div>
                </div>
                <div className="part2">
                    <img src={cp2} alt="" className="part-img" />
                    <div className="service-selector-wrapper" onClick={() => handleServiceClick("cbsa")}>
                        <p className="service-title">CBSA Notes</p>
                        <img src={serviceSelector} alt="" className="service-selector" />
                    </div>
                </div>
                <div className="part3">
                    <img src={cp3} alt="" className="part-img" />
                    <div className="service-selector-wrapper" onClick={() => handleServiceClick("csis")}>
                        <img src={serviceSelector} alt="" className="service-selector" />
                        <p className="service-title">CSIS Notes</p>
                    </div>
                </div>
                <div className="part4">
                    <img src={cp4} alt="" className="part-img" />
                    <div className="service-selector-wrapper" onClick={() => handleServiceClick("notes")}>
                        <p className="service-title">Notes Review</p>
                        <img src={serviceSelector} alt="" className="service-selector" />
                    </div>
                    <div className="service-selector-wrapper-1" onClick={() => handleServiceClick("pan")}>
                        <p className="service-title">PNP Application Status</p>
                        <img src={serviceSelector} alt="" className="service-selector" />
                    </div>
                </div>
            </div>
            <div className="service-part--mobile">
                <div className="services--mobile" onClick={() => handleServiceClick("gcms")}>
                    <img src={serviceSelector} alt="" className="service-selector" />
                    <p className="service-title">GCMS Notes</p>
                </div>
                <div className="services--mobile" onClick={() => handleServiceClick("cbsa")}>
                    <img src={serviceSelector} alt="" className="service-selector" />
                    <p className="service-title">CBSA Notes</p>
                </div>
                <div className="services--mobile" onClick={() => handleServiceClick("csis")}>
                    <img src={serviceSelector} alt="" className="service-selector" />
                    <p className="service-title">CSIS Notes</p>
                </div>
                <div className="services--mobile" onClick={() => handleServiceClick("notes")}>
                    <img src={serviceSelector} alt="" className="service-selector" />
                    <p className="service-title">Notes Review</p>
                </div>
                <div className="services--mobile" onClick={() => handleServiceClick("pan")}>
                    <img src={serviceSelector} alt="" className="service-selector" />
                    <p className="service-title">PNP Application Status</p>
                </div>
            </div>

            {
                popupContent &&
                <div className="service-part-popup">
                    <div className="service-popup-container">
                        <AiOutlineClose className='popup-close-icon' onClick={() => handleServiceClick(false)}/>
                        <h2 className="service-popup-title">{servicesCollection[popupContent].title}</h2>
                        <p className="service-popup-description">{servicesCollection[popupContent].content}</p>
                        <ul>
                            {
                                servicesCollection[popupContent].points&&
                                servicesCollection[popupContent].points.map((point,index) => (
                                    <li key={index}>{point}</li>
                                ))
                            }
                        </ul>
                    </div>
                </div>
            }
        </div>
    )
}
