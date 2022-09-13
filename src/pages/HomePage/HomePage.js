import * as React from "react";
import Box from "@mui/material/Box";

import Button from "@mui/material/Button";

import { useLocation, useNavigate } from "react-router-dom";

const steps = [
  "Select campaign settings",
  "Create an ad group",
  "Create an ad",
];

export default function HomePage() {
  const [name] = React.useState("John");
  const navigate = useNavigate();
  const location = useLocation();

  console.log(location);

  return (
    <Box sx={{ width: "100%" }}>
      HOME
      <Button
        variant="contained"
        onClick={() =>
          navigate("/news", {
            state: {
              name,
            },
          })
        }
      >
        Go to Team
      </Button>
    </Box>
  );
}