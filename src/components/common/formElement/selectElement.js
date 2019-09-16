import React, { Component } from "react";
import { FormGroup, Label, Input } from "reactstrap";
import validator from "validator";
import classNames from "classnames";

class SelectElement extends Component {
  constructor(props) {
    super(props);
    this.state = {
      options: ""
    };
  }
  onChange = e => {
    const val = e.target.value;
    const name = e.target.name;
    if (!validator.isEmpty(val)) {
      const element = document.getElementById(name);
      element.classList.remove("is-invalid");
    }
    this.props.selectOnChange(val, name);
  };

  render() {
    var selectClass = classNames({
      w100: this.props.id === "title"
    });
    const id = this.props.id;
    const options = this.state.options;
    return (
      <FormGroup className="form-element">
        <Label for={this.props.id}>
          {this.props.name}
          <span>*</span>
        </Label>
        {options !== null ? (
          <Input
            className={selectClass}
            type={this.props.type}
            name={this.props.id}
            id={this.props.id}
            onChange={this.onChange}
          >
            {this.props.stateList !== undefined ? (
              <React.Fragment>
                {this.props.stateList.map((item, index) => (
                  <option value={item} key={index}>
                    {item}
                  </option>
                ))}
              </React.Fragment>
            ) : null}
            {id === "title" ? (
              <React.Fragment>
                <option value="Select">--Please Select--</option>
                <option value="Mr">Mr</option>
                <option value="Mrs">Mrs</option>
                <option value="Madam">Madam</option>
                <option value="Dr">Dr</option>
                <option value="Prof">Prof</option>
                <option value="Others">Others</option>
              </React.Fragment>
            ) : null}
            {id === "highestLevelofEducation" ? (
              <React.Fragment>
                <option value="">--Please Select--</option>
                <option value="dn">Diploma/NCE</option>
                <option value="h">HND</option>
                <option value="d">Degree</option>
                <option value="p">Post Graduate</option>
              </React.Fragment>
            ) : null}
            {id === "preferedValidationCenter" ? (
              <React.Fragment>
                <option value="Select">--Please Select--</option>
                <option value="Abuja">Abuja</option>
                <option value="Kano">Kano</option>
                <option value="Lagos">Lagos</option>
                <option value="Port Harcourt">Port Harcourt</option>
              </React.Fragment>
            ) : null}
            {id === "freightForwardingAssociationAffiliation" ? (
              <React.Fragment>
                <option value="Select">--Please Select--</option>
                <option value="ancla">ANCLA</option>
                <option value="nagaff">NAGAFF</option>
                <option value="ncmdla">NCMDLA</option>
                <option value="naffac">NAFFAC</option>
                <option value="areffn">AREFFN</option>
                <option value="Others">Others</option>
              </React.Fragment>
            ) : null}
            {id === "category" ? (
              <React.Fragment>
                <option value="Select">--Please Select--</option>
                <option value="sff">Staff Freight Forwarder</option>
                <option value="eff">Executive Freight Forwarder</option>
              </React.Fragment>
            ) : null}
            {id === "countryofOrigin" ? (
              <React.Fragment>
                <option value="Select">--Please Select--</option>
                <option value="436">Afghanistan</option>
                <option value="437">Albania</option>
                <option value="438">Algeria</option>
                <option value="439">American Samoa</option>
                <option value="440">Andorra</option>
                <option value="441">Angola</option>
                <option value="442">Anguilla</option>
                <option value="443">Antarctica</option>
                <option value="444">Antigua and Barbuda</option>
                <option value="445">Argentina</option>
                <option value="446">Armenia</option>
                <option value="447">Aruba</option>
                <option value="448">Australia</option>
                <option value="449">Austria</option>
                <option value="450">Azerbaijan</option>
                <option value="451">Bahamas</option>
                <option value="452">Bahrain</option>
                <option value="453">Bangladesh</option>
                <option value="454">Barbados</option>
                <option value="455">Belarus</option>
                <option value="456">Belgium</option>
                <option value="457">Belize</option>
                <option value="458">Benin</option>
                <option value="459">Bermuda</option>
                <option value="460">Bhutan</option>
                <option value="461">Bolivia</option>
                <option value="462">Bosnia and Herzegovina</option>
                <option value="463">Botswana</option>
                <option value="464">Bouvet Island</option>
                <option value="465">Brazil</option>
                <option value="466">British Indian Ocean Territory</option>
                <option value="467">British Virgin Islands</option>
                <option value="468">Brunei</option>
                <option value="469">Bulgaria</option>
                <option value="470">Burkina Faso</option>
                <option value="471">Burundi</option>
                <option value="472">Cambodia</option>
                <option value="473">Cameroon</option>
                <option value="474">Canada</option>
                <option value="475">Cape Verde</option>
                <option value="476">Cayman Islands</option>
                <option value="477">Central African Republic</option>
                <option value="478">Chad</option>
                <option value="479">Chile</option>
                <option value="480">China</option>
                <option value="481">Christmas Island</option>
                <option value="482">Cocos (Keeling) Islands</option>
                <option value="483">Colombia</option>
                <option value="484">Comoros</option>
                <option value="485">Congo</option>
                <option value="486">Cook Islands</option>
                <option value="487">Costa Rica</option>
                <option value="492">Cote dlvorie</option>
                <option value="488">Croatia</option>
                <option value="489">Cuba</option>
                <option value="490">Cyprus</option>
                <option value="491">Czech Republic</option>
                <option value="493">Democratic Republic of the Congo</option>
                <option value="494">Denmark</option>
                <option value="495">Djibouti</option>
                <option value="496">Dominica</option>
                <option value="497">Dominican Republic</option>
                <option value="498">Ecuador</option>
                <option value="499">Egypt</option>
                <option value="500">El Salvador</option>
                <option value="501">Equatorial Guinea</option>
                <option value="502">Eritrea</option>
                <option value="503">Estonia</option>
                <option value="504">Ethiopia</option>
                <option value="505">Falkland Islands</option>
                <option value="506">Faroe Islands</option>
                <option value="507">Fiji</option>
                <option value="508">Finland</option>
                <option value="509">France</option>
                <option value="510">French Guiana</option>
                <option value="511">French Polynesia</option>
                <option value="512">French Southern Territories</option>
                <option value="513">Gabon</option>
                <option value="514">Gambia</option>
                <option value="515">Georgia</option>
                <option value="516">Germany</option>
                <option value="517">Ghana</option>
                <option value="518">Gibraltar</option>
                <option value="519">Greece</option>
                <option value="520">Greenland</option>
                <option value="521">Grenada</option>
                <option value="522">Guadeloupe</option>
                <option value="523">Guam</option>
                <option value="524">Guatemala</option>
                <option value="525">Guinea</option>
                <option value="526">Guinea-Bissau</option>
                <option value="527">Guyana</option>
                <option value="528">Haiti</option>
                <option value="529">Heard Island and McDonald Islands</option>
                <option value="530">Honduras</option>
                <option value="531">Hong Kong S.A.R., China</option>
                <option value="532">Hungary</option>
                <option value="533">Iceland</option>
                <option value="534">India</option>
                <option value="535">Indonesia</option>
                <option value="536">Iran</option>
                <option value="537">Iraq</option>
                <option value="538">Ireland</option>
                <option value="539">Israel</option>
                <option value="540">Italy</option>
                <option value="541">Jamaica</option>
                <option value="542">Japan</option>
                <option value="543">Jordan</option>
                <option value="544">Kazakhstan</option>
                <option value="545">Kenya</option>
                <option value="546">Kiribati</option>
                <option value="547">Kuwait</option>
                <option value="548">Kyrgyzstan</option>
                <option value="549">Laos</option>
                <option value="550">Latvia</option>
                <option value="551">Lebanon</option>
                <option value="552">Lesotho</option>
                <option value="553">Liberia</option>
                <option value="554">Libya</option>
                <option value="555">Liechtenstein</option>
                <option value="556">Lithuania</option>
                <option value="557">Luxembourg</option>
                <option value="558">Macao S.A.R., China</option>
                <option value="559">Macedonia</option>
                <option value="560">Madagascar</option>
                <option value="561">Malawi</option>
                <option value="562">Malaysia</option>
                <option value="563">Maldives</option>
                <option value="564">Mali</option>
                <option value="565">Malta</option>
                <option value="566">Marshall Islands</option>
                <option value="567">Martinique</option>
                <option value="568">Mauritania</option>
                <option value="569">Mauritius</option>
                <option value="570">Mayotte</option>
                <option value="571">Mexico</option>
                <option value="572">Micronesia</option>
                <option value="573">Moldova</option>
                <option value="574">Monaco</option>
                <option value="575">Mongolia</option>
                <option value="576">Montserrat</option>
                <option value="577">Morocco</option>
                <option value="578">Mozambique</option>
                <option value="579">Myanmar</option>
                <option value="580">Namibia</option>
                <option value="581">Nauru</option>
                <option value="582">Nepal</option>
                <option value="583">Netherlands</option>
                <option value="584">Netherlands Antilles</option>
                <option value="585">New Caledonia</option>
                <option value="586">New Zealand</option>
                <option value="587">Nicaragua</option>
                <option value="588">Niger</option>
                <option value="128">Nigeria</option>
                <option value="590">Niue</option>
                <option value="591">Norfolk Island</option>
                <option value="592">North Korea</option>
                <option value="593">Northern Mariana Islands</option>
                <option value="594">Norway</option>
                <option value="595">Oman</option>
                <option value="596">Pakistan</option>
                <option value="597">Palau</option>
                <option value="598">Palestinian Territory</option>
                <option value="599">Panama</option>
                <option value="600">Papua New Guinea</option>
                <option value="601">Paraguay</option>
                <option value="602">Peru</option>
                <option value="603">Philippines</option>
                <option value="604">Pitcairn</option>
                <option value="605">Poland</option>
                <option value="606">Portugal</option>
                <option value="607">Puerto Rico</option>
                <option value="608">Qatar</option>
                <option value="612">RÃ©union</option>
                <option value="609">Romania</option>
                <option value="610">Russia</option>
                <option value="611">Rwanda</option>
                <option value="613">Saint Helena</option>
                <option value="614">Saint Kitts and Nevis</option>
                <option value="615">Saint Lucia</option>
                <option value="616">Saint Pierre and Miquelon</option>
                <option value="617">Saint Vincent and the Grenadines</option>
                <option value="618">Samoa</option>
                <option value="619">San Marino</option>
                <option value="620">Sao Tome and Principe</option>
                <option value="621">Saudi Arabia</option>
                <option value="622">Senegal</option>
                <option value="623">Serbia</option>
                <option value="624">Seychelles</option>
                <option value="625">Sierra Leone</option>
                <option value="626">Singapore</option>
                <option value="627">Slovakia</option>
                <option value="628">Slovenia</option>
                <option value="629">Solomon Islands</option>
                <option value="630">Somalia</option>
                <option value="631">South Africa</option>
                <option value="632">
                  South Georgia and the South Sandwich Islands
                </option>
                <option value="633">South Korea</option>
                <option value="634">Spain</option>
                <option value="635">Sri Lanka</option>
                <option value="636">Sudan</option>
                <option value="637">Suriname</option>
                <option value="638">Svalbard and Jan Mayen</option>
                <option value="639">Swaziland</option>
                <option value="640">Sweden</option>
                <option value="641">Switzerland</option>
                <option value="642">Syria</option>
                <option value="643">Taiwan</option>
                <option value="644">Tajikistan</option>
                <option value="645">Tanzania</option>
                <option value="676">test1</option>
                <option value="646">Thailand</option>
                <option value="647">Timor-Leste</option>
                <option value="648">Togo</option>
                <option value="649">Tokelau</option>
                <option value="650">Tonga</option>
                <option value="651">Trinidad and Tobago</option>
                <option value="652">Tunisia</option>
                <option value="653">Turkey</option>
                <option value="654">Turkmenistan</option>
                <option value="655">Turks and Caicos Islands</option>
                <option value="656">Tuvalu</option>
                <option value="657">U.S. Virgin Islands</option>
                <option value="658">Uganda</option>
                <option value="659">Ukraine</option>
                <option value="660">United Arab Emirates</option>
                <option value="661">United Kingdom</option>
                <option value="662">United States</option>
                <option value="663">
                  United States Minor Outlying Islands
                </option>
                <option value="664">Uruguay</option>
                <option value="665">Uzbekistan</option>
                <option value="666">Vanuatu</option>
                <option value="667">Vatican</option>
                <option value="668">Venezuela</option>
                <option value="669">Vietnam</option>
                <option value="670">Wallis and Futuna</option>
                <option value="671">Western Sahara</option>
                <option value="672">Yemen</option>
                <option value="673">Yugoslavia</option>
                <option value="674">Zambia</option>
                <option value="675">Zimbabwe</option>
              </React.Fragment>
            ) : null}
          </Input>
        ) : null}
      </FormGroup>
    );
  }
}

export default SelectElement;
