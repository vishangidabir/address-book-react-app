import React, { useState, useEffect } from 'react'
import './AddressBookForm.css'
import { Link, useParams } from 'react-router-dom';
import AddressBookService from '../../service/AddressBookService'

function AddressBookForm() {

    const [formValue, setForm] = useState({
        firstName: "",
        lastName: "",
        address: "",
        city: "",
        state: "",
        zip: "",
        phoneNumber: "",
        isUpdate: false,
    });

    const onReset = () => {
        setForm({
        firstName: "",
        lastName: "",
        address: "",
        city: "",
        state: "",
        zip: "",
        phoneNumber: ""
        });
    };

    const onNameChange = (event) => {
        setForm({ ...formValue, [event.target.name]: event.target.value });
        console.log('value for', event.target.name, event.target.value);
    }

    const params = useParams();
    useEffect(() => {
        console.log(params.id)
        if (params.id) {
            getPersonId(params.id)
            console.log(params.id)
        }
    }, [params.id]);

    const getPersonId = (addressbookId) => {
        console.log("Data Found")
        AddressBookService.getPersonById(addressbookId).then((data) => {
            let obj = data.data.data;
            console.log(obj);
            setData(obj);
        });
    };

    const setData = (obj) => {
        console.log(obj)
        setForm({
            ...formValue,
            ...obj,
            id: obj.id,
            firstName: obj.firstName,
            lastName: obj.lastName,
            address: obj.address,
            city: obj.city,
            state: obj.state,
            zip: obj.zip,
            phoneNumber: obj.phoneNumber,
            isUpdate: true,
        });
    };

    const save = async (event) => {
        event.preventDefault();

        let bookObject = {
            id: formValue.id,
            firstName: formValue.firstName,
            lastName: formValue.lastName,
            address: formValue.address,
            city: formValue.city,
            state: formValue.state,
            zip: formValue.zip,
            phoneNumber: formValue.phoneNumber,
        };
        console.log(bookObject);
        if (formValue.isUpdate) {
            AddressBookService.updatePerson(params.id, bookObject)
                .then((data) => {
                    var value = window.confirm(data);
                    if (value === true) {
                        alert("update successfull!");
                        // this.props.history.push("");
                    } else {
                        window.location.reload();
                    }
                });
        } else {
            console.log(bookObject);
            AddressBookService.addPerson(bookObject).then((response) => {
                console.log(response);
                alert("Data Added!!", response)
            })
        }
    }

    return (
        <div>
            <div className="form-content">
                <div className="form-head">
                    <span> PERSON ADDRESS FORM </span>
                </div>

                <form className="form" action="#" onSubmit={(e) =>save(e)}>
                    <label className="label text" htmlFor="name">First Name</label>
                    <div className="row-content">
                        <input className="input" type="text" id="firstName" name="firstName" placeholder="Enter First Name"
                            onChange={onNameChange} value={formValue.firstName} required />
                        <error-output className="firstName-error" htmlFor="name"></error-output>
                    </div>

                    <label className="label text" htmlFor="name">Last Name</label>
                    <div className="row-content">
                        <input className="input" type="text" id="lastName" name="lastName" placeholder="Enter Last Name"
                            onChange={onNameChange} value={formValue.lastName} required />
                        <error-output className="lastName-error" htmlFor="name"></error-output>
                    </div>

                    <label className="label text" htmlFor="address">Address</label>
                    <div className="row-content">
                        <textarea className="input" name="address" id="address" rows="4" placeholder="Enter Address"
                            onChange={onNameChange} value={formValue.address} ></textarea>
                    </div>

                    <div className="row">
                        <div className="input-content">
                            <label className="label text" htmlFor="city">City</label>
                            <div className="row-content">
                                <select className="input" name="city" id="city" value={formValue.city} onChange={onNameChange} >
                                    <option value="">Select City</option>
                                    <option value="Achalpur">Achalpur</option>
                                    <option value="Ahiri">Ahiri</option>
                                    <option value="Ahmadnagar">Ahmadnagar</option>
                                    <option value="Ahmadpur">Ahmadpur</option>
                                    <option value="Airoli">Airoli</option>
                                    <option value="Ajra">Ajra</option>
                                    <option value="Akalkot">Akalkot</option>
                                    <option value="Akola">Akola</option>
                                    <option value="Akot">Akot</option>
                                    <option value="Alandi">Alandi</option>
                                    <option value="Alibag">Alibag</option>
                                    <option value="Allapalli">Allapalli</option>
                                    <option value="Amalner">Amalner</option>
                                    <option value="Amarnath">Amarnath</option>
                                    <option value="Ambad">Ambad</option>
                                    <option value="Ambajogai">Ambajogai</option>
                                    <option value="Amravati">Amravati</option>
                                    <option value="Amravati Division">Amravati Division</option>
                                    <option value="Anjangaon">Anjangaon</option>
                                    <option value="Anshing">Anshing</option>
                                    <option value="Arangaon">Arangaon</option>
                                    <option value="Artist Village">Artist Village</option>
                                    <option value="Arvi">Arvi</option>
                                    <option value="Ashta">Ashta</option>
                                    <option value="Ashti">Ashti</option>
                                    <option value="Aurangabad">Aurangabad</option>
                                    <option value="Ausa">Ausa</option>
                                    <option value="Badlapur">Badlapur</option>
                                    <option value="Balapur">Balapur</option>
                                    <option value="Ballalpur">Ballalpur</option>
                                    <option value="Baramati">Baramati</option>
                                    <option value="Barsi">Barsi</option>
                                    <option value="Basmat">Basmat</option>
                                    <option value="Beed">Beed</option>
                                    <option value="Bhandara">Bhandara</option>
                                    <option value="Bhayandar">Bhayandar</option>
                                    <option value="Bhigvan">Bhigvan</option>
                                    <option value="Bhiwandi">Bhiwandi</option>
                                    <option value="Bhor">Bhor</option>
                                    <option value="Bhudgaon">Bhudgaon</option>
                                    <option value="Bhum">Bhum</option>
                                    <option value="Bhusaval">Bhusaval</option>
                                    <option value="Bid">Bid</option>
                                    <option value="Biloli">Biloli</option>
                                    <option value="Boisar">Boisar</option>
                                    <option value="Borivli">Borivli</option>
                                    <option value="Buldana">Buldana</option>
                                    <option value="Chakan">Chakan</option>
                                    <option value="Chalisgaon">Chalisgaon</option>
                                    <option value="Chanda">Chanda</option>
                                    <option value="Chandor">Chandor</option>
                                    <option value="Chandrapur">Chandrapur</option>
                                    <option value="Chandur">Chandur</option>
                                    <option value="Chandur Bazar">Chandur Bazar</option>
                                    <option value="Chicholi">Chicholi</option>
                                    <option value="Chikhli">Chikhli</option>
                                    <option value="Chinchani">Chinchani</option>
                                    <option value="Chiplun">Chiplun</option>
                                    <option value="Chopda">Chopda</option>
                                    <option value="Dabhol">Dabhol</option>
                                    <option value="Dahanu">Dahanu</option>
                                    <option value="Darwha">Darwha</option>
                                    <option value="Daryapur">Daryapur</option>
                                    <option value="Dattapur">Dattapur</option>
                                    <option value="Daulatabad">Daulatabad</option>
                                    <option value="Daund">Daund</option>
                                    <option value="Dehu">Dehu</option>
                                    <option value="Deolali">Deolali</option>
                                    <option value="Deoli">Deoli</option>
                                    <option value="Deulgaon Raja">Deulgaon Raja</option>
                                    <option value="Dharangaon">Dharangaon</option>
                                    <option value="Dharmabad">Dharmabad</option>
                                    <option value="Dharur">Dharur</option>
                                    <option value="Dhule">Dhule</option>
                                    <option value="Dhulia">Dhulia</option>
                                    <option value="Diglur">Diglur</option>
                                    <option value="Digras">Digras</option>
                                    <option value="Dombivli">Dombivli</option>
                                    <option value="Dondaicha">Dondaicha</option>
                                    <option value="Dudhani">Dudhani</option>
                                    <option value="Durgapur">Durgapur</option>
                                    <option value="Erandol">Erandol</option>
                                    <option value="Faizpur">Faizpur</option>
                                    <option value="Gadchiroli">Gadchiroli</option>
                                    <option value="Gadhinglaj">Gadhinglaj</option>
                                    <option value="Gangakher">Gangakher</option>
                                    <option value="Gangapur">Gangapur</option>
                                    <option value="Gevrai">Gevrai</option>
                                    <option value="Ghatanji">Ghatanji</option>
                                    <option value="Ghoti Budrukh">Ghoti Budrukh</option>
                                    <option value="Ghugus">Ghugus</option>
                                    <option value="Gondiya">Gondiya</option>
                                    <option value="Goregaon">Goregaon</option>
                                    <option value="Guhagar">Guhagar</option>
                                    <option value="Hadgaon">Hadgaon</option>
                                    <option value="Harnai">Harnai</option>
                                    <option value="Hinganghat">Hinganghat</option>
                                    <option value="Hingoli">Hingoli</option>
                                    <option value="Hirapur Hamesha">Hirapur Hamesha</option>
                                    <option value="Ichalkaranji">Ichalkaranji</option>
                                    <option value="Igatpuri">Igatpuri</option>
                                    <option value="Indapur">Indapur</option>
                                    <option value="Jaisingpur">Jaisingpur</option>
                                    <option value="Jalgaon">Jalgaon</option>
                                    <option value="Jalgaon Jamod">Jalgaon Jamod</option>
                                    <option value="Jalna">Jalna</option>
                                    <option value="Jawhar">Jawhar</option>
                                    <option value="Jejuri">Jejuri</option>
                                    <option value="Jintur">Jintur</option>
                                    <option value="Junnar">Junnar</option>
                                    <option value="Kagal">Kagal</option>
                                    <option value="Kalamb">Kalamb</option>
                                    <option value="Kalamnuri">Kalamnuri</option>
                                    <option value="Kalas">Kalas</option>
                                    <option value="Kalmeshwar">Kalmeshwar</option>
                                    <option value="Kalundri">Kalundri</option>
                                    <option value="Kalyan">Kalyan</option>
                                    <option value="Kamthi">Kamthi</option>
                                    <option value="Kandri">Kandri</option>
                                    <option value="Kankauli">Kankauli</option>
                                    <option value="Kannad">Kannad</option>
                                    <option value="Karad">Karad</option>
                                    <option value="Karanja">Karanja</option>
                                    <option value="Karjat">Karjat</option>
                                    <option value="Karmala">Karmala</option>
                                    <option value="Kati">Kati</option>
                                    <option value="Katol">Katol</option>
                                    <option value="Khadki">Khadki</option>
                                    <option value="Khamgaon">Khamgaon</option>
                                    <option value="Khapa">Khapa</option>
                                    <option value="Kharakvasla">Kharakvasla</option>
                                    <option value="Khed">Khed</option>
                                    <option value="Khetia">Khetia</option>
                                    <option value="Khopoli">Khopoli</option>
                                    <option value="Khuldabad">Khuldabad</option>
                                    <option value="Kinwat">Kinwat</option>
                                    <option value="Kodoli">Kodoli</option>
                                    <option value="Kolhapur">Kolhapur</option>
                                    <option value="Kondalwadi">Kondalwadi</option>
                                    <option value="Kopargaon">Kopargaon</option>
                                    <option value="Koradi">Koradi</option>
                                    <option value="Koregaon">Koregaon</option>
                                    <option value="Koynanagar">Koynanagar</option>
                                    <option value="Kudal">Kudal</option>
                                    <option value="Kurandvad">Kurandvad</option>
                                    <option value="Kurduvadi">Kurduvadi</option>
                                    <option value="Lanja">Lanja</option>
                                    <option value="Lasalgaon">Lasalgaon</option>
                                    <option value="Latur">Latur</option>
                                    <option value="Lohogaon">Lohogaon</option>
                                    <option value="Lonar">Lonar</option>
                                    <option value="Lonavla">Lonavla</option>
                                    <option value="Mahabaleshwar">Mahabaleshwar</option>
                                    <option value="Mahad">Mahad</option>
                                    <option value="Maindargi">Maindargi</option>
                                    <option value="Majalgaon">Majalgaon</option>
                                    <option value="Makhjan">Makhjan</option>
                                    <option value="Malegaon">Malegaon</option>
                                    <option value="Malkapur">Malkapur</option>
                                    <option value="Malvan">Malvan</option>
                                    <option value="Manchar">Manchar</option>
                                    <option value="Mangrul Pir">Mangrul Pir</option>
                                    <option value="Manmad">Manmad</option>
                                    <option value="Manor">Manor</option>
                                    <option value="Mansar">Mansar</option>
                                    <option value="Manwat">Manwat</option>
                                    <option value="Matheran">Matheran</option>
                                    <option value="Mehekar">Mehekar</option>
                                    <option value="Mhasla">Mhasla</option>
                                    <option value="Mhasvad">Mhasvad</option>
                                    <option value="Mohpa">Mohpa</option>
                                    <option value="Moram">Moram</option>
                                    <option value="Morsi">Morsi</option>
                                    <option value="Mowad">Mowad</option>
                                    <option value="Mudkhed">Mudkhed</option>
                                    <option value="Mukher">Mukher</option>
                                    <option value="Mul">Mul</option>
                                    <option value="Mumbai">Mumbai</option>
                                    <option value="Mumbai Suburban">Mumbai Suburban</option>
                                    <option value="Murbad">Murbad</option>
                                    <option value="Murgud">Murgud</option>
                                    <option value="Murtajapur">Murtajapur</option>
                                    <option value="Murud">Murud</option>
                                    <option value="Nagothana">Nagothana</option>
                                    <option value="Nagpur">Nagpur</option>
                                    <option value="Nagpur Division">Nagpur Division</option>
                                    <option value="Naldurg">Naldurg</option>
                                    <option value="Nanded">Nanded</option>
                                    <option value="Nandgaon">Nandgaon</option>
                                    <option value="Nandura Buzurg">Nandura Buzurg</option>
                                    <option value="Nandurbar">Nandurbar</option>
                                    <option value="Nashik">Nashik</option>
                                    <option value="Nashik Division">Nashik Division</option>
                                    <option value="Navi Mumbai">Navi Mumbai</option>
                                    <option value="Neral">Neral</option>
                                    <option value="Nilanga">Nilanga</option>
                                    <option value="Nipani">Nipani</option>
                                    <option value="Osmanabad">Osmanabad</option>
                                    <option value="Ozar">Ozar</option>
                                    <option value="Pachora">Pachora</option>
                                    <option value="Paithan">Paithan</option>
                                    <option value="Palghar">Palghar</option>
                                    <option value="Panchgani">Panchgani</option>
                                    <option value="Pandharpur">Pandharpur</option>
                                    <option value="Panhala">Panhala</option>
                                    <option value="Panvel">Panvel</option>
                                    <option value="Parbhani">Parbhani</option>
                                    <option value="Parli Vaijnath">Parli Vaijnath</option>
                                    <option value="Parola">Parola</option>
                                    <option value="Partur">Partur</option>
                                    <option value="Patan">Patan</option>
                                    <option value="Pathardi">Pathardi</option>
                                    <option value="Pathri">Pathri</option>
                                    <option value="Patur">Patur</option>
                                    <option value="Pawni">Pawni</option>
                                    <option value="Pen">Pen</option>
                                    <option value="Phaltan">Phaltan</option>
                                    <option value="Pimpri">Pimpri</option>
                                    <option value="Pipri">Pipri</option>
                                    <option value="Powai">Powai</option>
                                    <option value="Pulgaon">Pulgaon</option>
                                    <option value="Pune">Pune</option>
                                    <option value="Pune Division">Pune Division</option>
                                    <option value="Purna">Purna</option>
                                    <option value="Pusad">Pusad</option>
                                    <option value="Rahimatpur">Rahimatpur</option>
                                    <option value="Rahuri">Rahuri</option>
                                    <option value="Raigarh">Raigarh</option>
                                    <option value="Rajapur">Rajapur</option>
                                    <option value="Rajgurunagar">Rajgurunagar</option>
                                    <option value="Rajur">Rajur</option>
                                    <option value="Rajura">Rajura</option>
                                    <option value="Ramtek">Ramtek</option>
                                    <option value="Ratnagiri">Ratnagiri</option>
                                    <option value="Raver">Raver</option>
                                    <option value="Revadanda">Revadanda</option>
                                    <option value="Risod">Risod</option>
                                    <option value="Roha">Roha</option>
                                    <option value="Sangamner">Sangamner</option>
                                    <option value="Sangli">Sangli</option>
                                    <option value="Sangola">Sangola</option>
                                    <option value="Saoner">Saoner</option>
                                    <option value="Sasvad">Sasvad</option>
                                    <option value="Satana">Satana</option>
                                    <option value="Satara">Satara</option>
                                    <option value="Satara Division">Satara Division</option>
                                    <option value="Savantvadi">Savantvadi</option>
                                    <option value="Savda">Savda</option>
                                    <option value="Selu">Selu</option>
                                    <option value="Shahada">Shahada</option>
                                    <option value="Shahapur">Shahapur</option>
                                    <option value="Shegaon">Shegaon</option>
                                    <option value="Shiraguppi">Shiraguppi</option>
                                    <option value="Shirdi">Shirdi</option>
                                    <option value="Shirgaon">Shirgaon</option>
                                    <option value="Shirpur">Shirpur</option>
                                    <option value="Shirwal">Shirwal</option>
                                    <option value="Shivaji Nagar">Shivaji Nagar</option>
                                    <option value="Shrigonda">Shrigonda</option>
                                    <option value="Sillod">Sillod</option>
                                    <option value="Sindhudurg">Sindhudurg</option>
                                    <option value="Sindi">Sindi</option>
                                    <option value="Sinnar">Sinnar</option>
                                    <option value="Sirur">Sirur</option>
                                    <option value="Solapur">Solapur</option>
                                    <option value="Sonegaon">Sonegaon</option>
                                    <option value="Soygaon">Soygaon</option>
                                    <option value="Srivardhan">Srivardhan</option>
                                    <option value="Surgana">Surgana</option>
                                    <option value="Talegaon Dabhade">Talegaon Dabhade</option>
                                    <option value="Taloda">Taloda</option>
                                    <option value="Tarapur">Tarapur</option>
                                    <option value="Tasgaon">Tasgaon</option>
                                    <option value="Telhara">Telhara</option>
                                    <option value="Thane">Thane</option>
                                    <option value="Trimbak">Trimbak</option>
                                    <option value="Tuljapur">Tuljapur</option>
                                    <option value="Tumsar">Tumsar</option>
                                    <option value="Udgir">Udgir</option>
                                    <option value="Ulhasnagar">Ulhasnagar</option>
                                    <option value="Umarga">Umarga</option>
                                    <option value="Umarkhed">Umarkhed</option>
                                    <option value="Umred">Umred</option>
                                    <option value="Uran">Uran</option>
                                    <option value="Vada">Vada</option>
                                    <option value="Vaijapur">Vaijapur</option>
                                    <option value="Varangaon">Varangaon</option>
                                    <option value="Vasind">Vasind</option>
                                    <option value="Vengurla">Vengurla</option>
                                    <option value="Virar">Virar</option>
                                    <option value="Vite">Vite</option>
                                    <option value="Wadgaon">Wadgaon</option>
                                    <option value="Wai">Wai</option>
                                    <option value="Wani">Wani</option>
                                    <option value="Wardha">Wardha</option>
                                    <option value="Warora">Warora</option>
                                    <option value="Warud">Warud</option>
                                    <option value="Washim">Washim</option>
                                    <option value="Yaval">Yaval</option>
                                    <option value="Yavatmal">Yavatmal</option>
                                    <option value="Yeola">Yeola</option>
                                </select>
                            </div>
                        </div>
                        <div className="input-content">
                            <label className="label text" htmlFor="state">State</label>
                            <div className="row-content">
                                <select className="input" name="state" id="state" onChange={onNameChange} value={formValue.state}>
                                    <option value="">Select State</option>
                                    <option value="AP">Andra Pradesh</option>
                                    <option value="AR">Arunachal Pradesh</option>
                                    <option value="AS">Assam</option>
                                    <option value="BR">Bihar</option>
                                    <option value="CG">Chhattisgarh</option>
                                    <option value="GA">Goa</option>
                                    <option value="GJ">Gujarat</option>
                                    <option value="HR">Haryana</option>
                                    <option value="HP">Himachal Pradesh</option>
                                    <option value="JK">Jammu and Kashmir</option>
                                    <option value="JH">Jharkhand</option>
                                    <option value="KA">Karnataka</option>
                                    <option value="KL">Kerala</option>
                                    <option value="MP">Madhya Pradesh</option>
                                    <option value="MH">Maharashtra</option>
                                    <option value="MN">Manipur</option>
                                    <option value="ML">Meghalaya</option>
                                    <option value="MZ">Mizoram</option>
                                    <option value="NL">Nagaland</option>
                                    <option value="OR">Odisha</option>
                                    <option value="PB">Punjab</option>
                                    <option value="RJ">Rajasthan</option>
                                    <option value="SK">Sikkim</option>
                                    <option value="TN">Tamil Nadu</option>
                                    <option value="TE">Telangana</option>
                                    <option value="TR">Tripura</option>
                                    <option value="UK">Uttarakhand</option>
                                    <option value="UP">Uttar Pradesh</option>
                                    <option value="WB">West Bengal</option>
                                    <option value="AN">Andaman and Nicobar</option>
                                    <option value="CH">Chandigarh</option>
                                    <option value="DH">Dadara and Nagar Haveli</option>
                                    <option value="DD">Daman and Diu</option>
                                    <option value="DL">Delhi</option>
                                    <option value="LK">Ladakh</option>
                                    <option value="LD">Lakshadweep</option>
                                    <option value="PY">Puducherry</option>
                                </select>
                            </div>
                        </div>
                        <div className="input-content">
                            <label className="label text" htmlFor="zip">ZipCode</label>
                            <div className="row-content">
                                <input className="input" type="text" id="zip" name="zip" placeholder="Enter Zip Code"
                                    onChange={onNameChange} value={formValue.zip} required />
                                <error-output className="zip-error" htmlFor="number"></error-output>
                            </div>
                        </div>
                    </div>

                    <label className="label text" htmlFor="phone">Phone Number</label>
                    <div className="row-content">
                        <input className="input" type="text" id="phoneNumber" name="phoneNumber" placeholder="Enter Phone Number"
                            onChange={onNameChange} value={formValue.phoneNumber} required />
                        <error-output className="phone-error" htmlFor="number"></error-output>
                    </div>

                    <div className="buttonParent">
                        <div className="add-reset">
                            <button type="submit" className="button addButton" id="addButton">{formValue.isUpdate ? 'Update' : 'Submit'}</button>
                            <button type="reset" className="resetButton button" id="resetButton" onClick={onReset}>Reset</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default AddressBookForm;
