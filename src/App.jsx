import React from "react";
import ReactDOM from "react-dom";
import cntl from "cntl";
import { useFormik } from "formik";
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

const App = () => {
  const formik = useFormik({
    initialValues: {
      eSpaceName: "",
      companyName: "",
      subscription: "",
      owner: {
        name: "",
        phone: "",
        email: "",
      },
      location: {
        street: "",
        suite: "",
        city: "",
        country: "",
        postalCode: "",
      },
    },
    onSubmit: (values) => {
      console.log(JSON.stringify(values, null, 2));
    },
  });

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
        <form onSubmit={formik.handleSubmit}>
          <CollapsibleSection title="Overview">
            <div className="flex flex-row justify-between items-center">
              <Dropdown
                id="companyName"
                name="companyName"
                className={divStyle}
                label="Company Name"
                onChange={formik.handleChange}
                value={formik.values.companyName}
                options={Array(5)
                  .fill()
                  .map((a, index) => ({
                    label: `Option ${index + 1}`,
                    value: `Option ${index + 1}`,
                  }))}
              />
              <Input
                id="eSpaceName"
                name="eSpaceName"
                className={divStyle}
                label="eSpace Name"
                placeholder="type name"
                type="input"
                onChange={formik.handleChange}
                value={formik.values.eSpaceName}
              />
            </div>
            <Dropdown
              id="subscription"
              name="subscription"
              className={divStyle}
              onChange={formik.handleChange}
              value={formik.values.subscription}
              label="Subscription"
              options={Array(5)
                .fill()
                .map((a, index) => ({
                  label: `Option ${index + 1}`,
                  value: `Option ${index + 1}`,
                }))}
            />
          </CollapsibleSection>
          <CollapsibleSection title="Owner Information">
            <div className="flex flex-row-2 justify-between items-center">
              <Input
                id="ownerName"
                name="ownerName"
                type="input"
                onChange={formik.handleChange}
                value={formik.values.owner}
                className={divStyle}
                label="Primary Owner"
                placeholder="Primary Owner..."
              />
              <Input
                id="ownerEmail"
                name="ownerEmail"
                type="input"
                onChange={formik.handleChange}
                value={formik.values.owner.email}
                className={divStyle}
                label="Primary Owner's Email"
                placeholder="PO Email..."
              />
            </div>
            <Input
              id="ownerName"
              name="ownerName"
              type="input"
              onChange={formik.handleChange}
              value={formik.values.owner.phone}
              className={divStyle}
              label="Primary Owner's Phone"
              placeholder="PO Phone.."
            />
          </CollapsibleSection>
          <CollapsibleSection title="Owner Information">
            <div className="flex flex-row justify-between items-center">
              <Input
                id="streetaddress"
                name="streetaddress"
                type="input"
                onChange={formik.handleChange}
                value={formik.values.location.street}
                className={divStyle}
                label="Street Address"
                placeholder="Street Address..."
              />
              <Input
                id="city"
                name="city"
                type="input"
                onChange={formik.handleChange}
                value={formik.values.location.city}
                className={divStyle}
                label="City"
                placeholder="City..."
              />
            </div>
            <div className="flex flex-row justify-between items-center">
              <Input
                id="suite"
                name="suite"
                type="input"
                onChange={formik.handleChange}
                value={formik.values.location.suite}
                className={divStyle}
                label="Suite/Unit"
                placeholder="Suite/Unit..."
              />
              <Dropdown
                id="country"
                name="country"
                className={divStyle}
                onChange={formik.handleChange}
                value={formik.values.county}
                label="Country"
                options={Array(5)
                  .fill()
                  .map((a, index) => ({
                    label: `Option ${index + 1}`,
                    value: `Option ${index + 1}`,
                  }))}
              />
            </div>
            <Input
              id="postalcode"
              name="postalcode"
              type="input"
              onChange={formik.handleChange}
              value={formik.values.location.postalCode}
              className={divStyle}
              label="Postal Code"
              placeholder="Postal Code..."
            />
          </CollapsibleSection>
          <div>
            <Button type="submit" onClick={formik.handleSubmit} title="Save" />
          </div>
        </form>
      </div>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("app"));
