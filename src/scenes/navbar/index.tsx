import { useState } from "react";
import { Link } from "react-router-dom";
import { Box, Typography, useTheme } from "@mui/material";
import FlextBetween from "@/components/FlexBetween";
import PixIcon from "@mui/icons-material/Pix";

const ROUTES = {
  DASHBOARD: "dashboard",
  PREDICTIONS: "predictions",
};

const Navbar = () => {
  const { palette } = useTheme();
  const [selected, setSelected] = useState(ROUTES.DASHBOARD);

  return (
    <FlextBetween mb={"0.25rem"} p={"0.5rem 0rem"} color={palette.grey[300]}>
      {/* LEFT SIDE */}
      <FlextBetween gap={"0.75rem"}>
        <PixIcon
          sx={{
            fontSize: "28px",
          }}
        />
        <Typography variant="h4" fontSize="16px">
          Finanseer
        </Typography>
      </FlextBetween>
      {/* RIGHT SIDE */}
      <FlextBetween gap="2rem">
        <Box sx={{ "&:hover": { color: palette.primary[100] } }}>
          <Link
            to={"/"}
            onClick={() => setSelected(ROUTES.DASHBOARD)}
            style={{
              color:
                selected === ROUTES.DASHBOARD ? "inherit" : palette.grey[700],
              textDecoration: "inherit",
            }}
          >
            dashboard
          </Link>
        </Box>
        <Box sx={{ "&:hover": { color: palette.primary[100] } }}>
          <Link
            to={"/predictions"}
            onClick={() => setSelected(ROUTES.PREDICTIONS)}
            style={{
              color:
                selected === ROUTES.PREDICTIONS ? "inherit" : palette.grey[700],
              textDecoration: "inherit",
            }}
          >
            predictions
          </Link>
        </Box>
      </FlextBetween>
    </FlextBetween>
  );
};

export default Navbar;
