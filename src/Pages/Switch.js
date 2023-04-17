import React, { useState } from "react";
import { Container } from "@mui/material";
import Switch from "@mui/material/Switch";

export default function SwitchLayout() {
  const [checked, setChecked] = useState(false);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  return (
    <Container maxWidth="sm">
          <Switch
          checked={checked}
          onChange={handleChange}
          color="primary"
        />
    </Container>
  );
}