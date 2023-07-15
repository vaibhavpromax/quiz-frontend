import React, { useState } from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";

interface SelectProps {
  children: React.ReactNode;
  className?: string;
}

export default function BasicSelect() {
  const [userClass, setUserClass] = useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setUserClass(event.target.value as string);
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <Select
          // labelId="demo-simple-select-label"
          // id="demo-simple-select"
          value={userClass}
          label="Age"
          sx={{
            width: 100,
            height: 40,
            borderRadius: "50px",
            border: "1px solid darkgrey",
            background: "#3bbd3b",
            fontSize: "20px",
            fontWeight: "500",
            fontFamily: "Gilroy",
            color: "white",
            "& .MuiSvgIcon-root": {
              color: "white",
            },
          }}
          onChange={handleChange}
        >
          <MenuItem value={10}>1st</MenuItem>
          <MenuItem value={20}>2nd</MenuItem>
          <MenuItem value={30}>3rd</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
