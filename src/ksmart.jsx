import React, { useState, useEffect } from 'react';
import Swal from 'sweetalert2'

const KSmart = () => {

    const [district, setDistrict] = useState([]);
    const [localbodytype, setLocalBodyType] = useState([]);
    const [localbodyname, setLocalBodyName] = useState([]);
    const [zonalofficedata, setZonalOfficeData] = useState([]);
    const [allwards, setAllWards] = useState([]);
    const [postdata, setPostData] = useState({
        district: '',
        local_body_type: '',
        local_body_name: '',
        zonal_office_id: '',
        ward_id: '',
      });
    useEffect(() => {
        // Simulated JSON data
        const dist = [
          { id: 1, name: "Thiruvananthapuram" },
          { id: 2, name: "Kollam" },
          { id: 3, name: "Pathanamthitta" },
          { id: 4, name: "Alappuzha" },
          { id: 5, name: "Kottayam" },
          { id: 6, name: "Idukki" },
          { id: 7, name: "Eranakulam" },
          { id: 8, name: "Thrissur" },
          { id: 9, name: "Palakkad" },
          { id: 10, name: "Malappuram" },
          { id: 11, name: "Kozhikode" },
          { id: 12, name: "Wayanad" },
          { id: 13, name: "Kannur" },
          { id: 14, name: "Kasaragod" },
        ];
        setDistrict(dist);

        const local = [
            {id:1, name: "Municipal Corporation"},
            {id:2, name: "Municipality"},
            {id:3, name: "Grama Panchayat"},
        ]
        setLocalBodyType(local);

        const localname = [
            {id:1, name: "Kochi Corporation"},
            {id:2, name: "Thiruvananthapuram Corporation"},
            {id:3, name: "Thodupuzha Municipality"},
        ]
        setLocalBodyName(localname);

        const zonaloffice = [
            {id:1, name: "Kochi Main office"},
            {id:2, name: "Mattanchery"},
            {id:3, name: "Fort Kochi"},
        ]
        setZonalOfficeData(zonaloffice);
        const wards = [
            { id: 1, name: "Ward 1" },
            { id: 2, name: "Ward 2" },
            { id: 3, name: "Ward 3" },
            { id: 4, name: "Ward 4" },
            { id: 5, name: "Ward 5" },
            { id: 6, name: "Ward 6" },
            { id: 7, name: "Ward 7" },
            { id: 8, name: "Ward 8" },
            { id: 9, name: "Ward 9" },
          ];
          setAllWards(wards);
      }, []);

      const handleChange = (event) => {
        const { name, value } = event.target;
        setPostData((prevSelectedOptions) => ({
          ...prevSelectedOptions,
          [name]: value
        }));
      };

      const postData = async () => {
      
        const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(postdata)
        });
      
        const result = await response.json();
        console.log(result);
        Swal.fire('Data Added Successfully!!!')
      };
      
    return (
      <>
        <section>
                <h1>LOGO</h1>
        </section>
        <header>
            <nav>
                <ul>
                <li><a href="#">Tax / Proprty Tax / New Tax Assessment Other than BR / Form-2 </a></li>

                </ul>
            </nav>
        </header>
        <div className="container">

        <div className="row">
            <div className="col-lg-3">
            <nav className="nav flex-column">
                <a className="nav-link" href="#section1Heading">Local Body Details</a>
                <a className="nav-link" href="#">Permit & Occupancy Details</a>
                <a className="nav-link" href="#">Survey Details | Village Details</a>
            </nav>
            </div>
            <div className="col-lg-9">
            <div id="accordion" role="tablist">
                <div className="card">
                <div className="card-header" role="tab" id="section1Heading">
                    <h5 className="mb-0">
                    <a data-toggle="collapse" href="#section1Collapse" className="btn btn-link" aria-expanded="true" aria-controls="section1Collapse">
                    Local Body Details
                    </a>
                    </h5>
                </div>
                <div id="section1Collapse" className="collapse show" role="tabpanel" aria-labelledby="section1Heading" data-parent="#accordion">
                    <div className="card-body">
                    <form>
                        <div className="form-row row">
                            <div className="col-4 col-div">
                            <label htmlFor="district">District</label>
                            <select name="district" value={postdata.district} className="form-control" onChange={handleChange}>
                            {district.map((item) => (
                                <option key={item.id} value={item.id}>{item.name}</option>
                            ))}
                            </select>
                            </div>
                            <div className="col-4 col-div">
                            <label htmlFor="local_body_type">Local body type</label>
                            <select className="form-control" name="local_body_type" value={postdata.local_body_type} onChange={handleChange}>
                            {localbodytype.map((item) => (
                                <option key={item.id} value={item.id}>{item.name}</option>
                            ))}
                            </select>
                            </div>
                            <div className="col-4 col-div">
                            <label htmlFor="local_body_name">Local body name</label>
                            <select className="form-control" name="local_body_name" value={postdata.local_body_name} onChange={handleChange}>
                            {localbodyname.map((item) => (
                                <option key={item.id} value={item.id}>{item.name}</option>
                            ))}
                            </select>
                            </div>
                            <div className="col-4 col-div">
                            <label htmlFor="zonal_office">Zonal Office</label>
                            <select className="form-control" name="zonal_office_id" value={postdata.zonal_office_id} onChange={handleChange}>
                            {zonalofficedata.map((item) => (
                                <option key={item.id} value={item.id}>{item.name}</option>
                            ))}
                            </select>
                            </div>
                            <div className="col-4 col-div">
                            <label htmlFor="ward_name">Ward No/ Name</label>
                            <select className="form-control" name="ward_id" value={postdata.ward_id} onChange={handleChange}>
                            {allwards.map((item) => (
                                <option key={item.id} value={item.id}>{item.name}</option>
                            ))}
                            </select>
                            </div>

                            <div className="col-4 col-btn">
                                <button className="form-control btn btn-submit" type='button' onClick={postData}>Submit</button>
                            </div>
                        </div>
                    </form>


                    </div>
                </div>
                </div>
                <div className="card">
                <div className="card-header" role="tab" id="section2Heading">
                    <h5 className="mb-0">
                    <a className="collapsed" data-toggle="collapse" href="#section2Collapse" aria-expanded="false" aria-controls="section2Collapse">
                    Permit & Occupancy Details
                    </a>
                    </h5>
                </div>
                <div id="section2Collapse" className="collapse" role="tabpanel" aria-labelledby="section2Heading" data-parent="#accordion">
                    <div className="card-body">
                    Content for Section 2
                    </div>
                </div>
                </div>
                <div className="card">
                <div className="card-header" role="tab" id="section3Heading">
                    <h5 className="mb-0">
                    <a className="collapsed" data-toggle="collapse" href="#section3Collapse" aria-expanded="false" aria-controls="section3Collapse">
                    Survey Details | Village Details
                    </a>
                    </h5>
                </div>
                <div id="section3Collapse" className="collapse" role="tabpanel" aria-labelledby="section3Heading" data-parent="#accordion">
                    <div className="card-body">
                    Content for Section 3
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
        </div>


        

      </>
      )
}

export default KSmart;