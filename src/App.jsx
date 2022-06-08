import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import cntl from "cntl";
import Button from "./stories/Components/Button/Button";
import CollapsibleSection from "./stories/Components/CollapsibleSection/CollapsibleSection";
import Input from "./stories/Components/Input/Input";
import Dropdown from "./stories/Components/Dropdown/Dropdown";
import ProgressTracker from "./stories/Components/ProgressTracker/ProgressTracker";
import NavBar from "./stories/Components/NavBar/NavBar";
import Chevron from "./stories/Components/Chevron/Chevron";

const divStyle = cntl`
w-2/3
m-3
`;
let label;
const App = () => {
  const [formState, setFormState] = useState({
    eSpaceName: "",
    companyName: "",
    subscription: "",
    ownername: "",
    ownerphone: "",
    owneremail: "",
    locationstreet: "",
    locationsuite: "",
    locationcity: "",
    locationcountry: "",
    locationpostalcode: "",
  });

  const [selectedOptions, setSelectedOptions] = useState();

  const handleChange = (event) => {
    setFormState({
      ...formState,
      [event.target.id]: event.target.value,
    });
  };

  const handleDropdownChange = (options) => {
    // temp = options.value.split(" ")[0];
    setSelectedOptions(options.value);
    label = options?.label;
  };

  useEffect(() => {
    setFormState({
      ...formState,
      [selectedOptions]: label,
    });
  }, [selectedOptions]);

  const structuredForm = {
    eSpaceName: formState.eSpaceName,
    companyName: formState.companyName,
    subscription: formState.subscription,
    owner: {
      name: formState.ownername,
      phone: formState.ownerphone,
      email: formState.owneremail,
    },
    location: {
      street: formState.locationstreet,
      suite: formState.locationsuite,
      city: formState.locationcity,
      country: formState.locationcountry,
      postalCode: formState.locationpostalcode,
    },
  };

  const submitForm = () => {
    console.log(structuredForm);
  };

  return (
    <div className="bg-black h-full w-full justify-center overflow-auto">
      <NavBar />
      <div className={divStyle}>
        <button className="flex items-center" type="button">
          <Chevron className="w-4 transform rotate-180 m-3" />
          <p>Back</p>
        </button>
        <p className="font-semibold m-3">ADD NEW CLIENT</p>
        <ProgressTracker
          steps={["client info", "logo", "branding", "app store"]}
        />
        <form>
          <CollapsibleSection title="Overview">
            <div className="flex flex-row justify-between items-center">
              <Dropdown
                id="companyName"
                className={divStyle}
                label="Company Name"
                onChange={handleDropdownChange}
                options={Array(5)
                  .fill()
                  .map((a, index) => ({
                    label: `Option ${index + 1}`,
                    value: `companyName`,
                  }))}
              />
              <Input
                id="eSpaceName"
                className={divStyle}
                label="eSpace Name"
                onChange={handleChange}
                value={formState.eSpaceName}
                placeholder="type name"
                type="input"
                isRequired
              />
            </div>
            <Dropdown
              id="subscription"
              className={divStyle}
              label="Subscription"
              onChange={handleDropdownChange}
              options={Array(5)
                .fill()
                .map((a, index) => ({
                  label: `subscription ${index + 1}`,
                  value: `subscription`,
                }))}
            />
          </CollapsibleSection>
          <CollapsibleSection title="Owner Information">
            <div className="flex flex-row-2 justify-between items-center">
              <Input
                id="ownername"
                type="input"
                className={divStyle}
                label="Primary Owner"
                onChange={handleChange}
                value={formState.ownername}
                placeholder="Primary Owner..."
                isRequired
              />
              <Input
                id="owneremail"
                type="input"
                className={divStyle}
                label="Primary Owner's Email"
                onChange={handleChange}
                value={formState.owneremail}
                placeholder="PO Email..."
                isRequired
              />
            </div>
            <Input
              id="ownerphone"
              type="input"
              className={divStyle}
              label="Primary Owner's Phone"
              onChange={handleChange}
              value={formState.ownerphone}
              placeholder="PO Phone.."
              isRequired
            />
          </CollapsibleSection>
          <CollapsibleSection title="Owner Information">
            <div className="flex flex-row justify-between items-center">
              <Input
                id="locationstreet"
                type="input"
                className={divStyle}
                label="Street Address"
                onChange={handleChange}
                value={formState.locationstreet}
                placeholder="Street Address..."
                isRequired
              />
              <Input
                id="locationcity"
                type="input"
                className={divStyle}
                label="City"
                onChange={handleChange}
                value={formState.locationcity}
                placeholder="City..."
                isRequired
              />
            </div>
            <div className="flex flex-row jusstify-between items-center">
              <Input
                id="locationsuite"
                type="input"
                className={divStyle}
                label="Suite/Unit"
                onChange={handleChange}
                value={formState.locationsuite}
                placeholder="Suite/Unit..."
              />
              <Dropdown
                id="locationcountry"
                className={divStyle}
                label="Country"
                onChange={handleDropdownChange}
                options={Array(5)
                  .fill()
                  .map((a, index) => ({
                    label: `locationcountry ${index + 1}`,
                    value: `locationcountry`,
                  }))}
              />
            </div>
            <Input
              id="locationpostalcode"
              type="input"
              className={divStyle}
              label="Postal Code"
              onChange={handleChange}
              value={formState.locationpostalcode}
              placeholder="Postal Code..."
              isRequired
            />
          </CollapsibleSection>
          <div>
            <Button type="submit" onClick={submitForm} title="Save" />
          </div>
        </form>
      </div>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("app"));
