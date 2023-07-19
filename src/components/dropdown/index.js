import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import "./dropdown.scss";
import PropTypes from "prop-types";
import Checkbox from "@mui/material/Checkbox";
import ListItemText from "@mui/material/ListItemText";
import userContext from "../useContext";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const Dropdown = ({ options, placeholder, width = 300, setSelectSport, setSelectState,setSelectCost,setSelectAge,setSelectSkill, name }) => {

  const [selectedValue , setSelectedValue] =useContext(userContext)

  const handleChanges = (e) => {

    if (e.target.name === 'sports') {

      setSelectedValue(e.target.value)
      setSelectSport(e.target.value)
    }
    else if (e.target.name === 'state') {
      setSelectedValue(e.target.value);
      setSelectState(e.target.value);
    }
    else if (e.target.name === 'skill') {
      setSelectedValue(e.target.value);
      setSelectSkill(e.target.value);
    }
    else if (e.target.name === 'age') {
      setSelectedValue(e.target.value);
      setSelectAge(e.target.value);
    }
    else if (e.target.name === 'cost') {
      setSelectedValue(e.target.value);
      setSelectCost(e.target.value);
    }
  }



  let optionsCurrent = options?.filter((item) => item.isComing === false);
  let optionsComing = options?.filter((item) => item.isComing === true);
  return (

    <FormControl sx={{ width: '100%', height: '100%' }}>
      {selectedValue == '' ? <InputLabel className="input_Label" shrink={false} focused={false}>{placeholder}</InputLabel> : ''}
      <Select
        labelId="demo-multiple-checkbox-label"
        id="demo-multiple-checkbox"
        name={name}
        multiple
        placeholder={placeholder}
        value={selectedValue}
        renderValue={(selected) => selected.join(", ")}
        MenuProps={MenuProps}
        displayEmpty
        sx={{ height: '100%' }}
        onChange={handleChanges}
      >
        {optionsCurrent?.map((item) => (
          <MenuItem
            value={item.name}
            key={item.name}
            className="search-menu-item"
          >
            <Checkbox checked={selectedValue.indexOf(item.name) > -1} />
            <ListItemText primary={item.name} />
          </MenuItem>
        ))}
        {optionsComing.length > 0 && (
          <>
            <MenuItem style={{ justifyContent: "center" }}>
              — Coming Soon —
            </MenuItem>
            {optionsComing?.map((item) => (
              <MenuItem
                value={item.name}
                key={item.name}
                className="search-item-future"
                style={{ paddingLeft: "42px !important;" }}

              >
                <ListItemText primary={item.name} />
              </MenuItem>
            ))}
          </>
        )}
      </Select>
    </FormControl>

  );
};
Dropdown.propTypes = {
  options: PropTypes.array,
  placeholder: PropTypes.string,
  name: PropTypes.string,
  selectedValue: PropTypes.string,
  setSelectSport: PropTypes.string,
  setSelectState: PropTypes.string,
  setSelectCost: PropTypes.string,
  setSelectAge: PropTypes.string,
  setSelectSkill: PropTypes.string,
  setSelectedValue: PropTypes.string,
  selectedValue: PropTypes.string
};

export default Dropdown;
