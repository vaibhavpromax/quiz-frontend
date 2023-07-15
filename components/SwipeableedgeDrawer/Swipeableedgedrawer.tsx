import * as React from "react";
import { Global } from "@emotion/react";
import { styled } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { grey } from "@mui/material/colors";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Skeleton from "@mui/material/Skeleton";
import Typography from "@mui/material/Typography";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import { deflate } from "zlib";

const drawerBleeding = 60;

interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  children: React.ReactNode;
  // window?: () => Window;
}

const Root = styled("div")(({ theme }) => ({
  height: "100%",
  backgroundColor:
    theme.palette.mode === "light"
      ? grey[100]
      : theme.palette.background.default,
}));

const StyledBox = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "light" ? "#fff" : grey[800],
}));

const Puller = styled(Box)(({ theme }) => ({
  width: 40,
  height: 30,
  backgroundColor: "white",
  borderRadius: " 60px 60px 0 0",
  position: "absolute",
  top: "-15px",
  left: "calc(50% - 20px)",
}));

const SwipeableEdgeDrawer: React.FunctionComponent<Props> = ({ children }) => {
  // const { window } = props;
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  // This is used only for the example
  // const container =
  //   window !== undefined ? () => window().document.body : undefined;

  return (
    <Root>
      <CssBaseline />
      <Global
        styles={{
          ".MuiDrawer-root > .MuiPaper-root": {
            // height: `calc(50% - ${drawerBleeding}px)`,
            height: "80%",
            overflow: "visible",
          },
        }}
      />

      <SwipeableDrawer
        anchor="bottom"
        open={open}
        onClose={toggleDrawer(false)}
        onOpen={toggleDrawer(true)}
        swipeAreaWidth={drawerBleeding}
        disableSwipeToOpen={false}
        // allowSwipeInChildren={true}
        ModalProps={{
          keepMounted: true,
        }}
      >
        <StyledBox
          sx={{
            position: "absolute",
            top: -drawerBleeding,
            borderTopLeftRadius: 30,
            borderTopRightRadius: 30,
            visibility: "visible",
            right: 0,
            left: 0,
          }}
        >
          <Puller />
          {/* <Typography sx={{ p: 2, color: "text.secondary" }}>
            51 results
          </Typography> */}
          {children}
        </StyledBox>
      </SwipeableDrawer>
    </Root>
  );
};

export default SwipeableEdgeDrawer;
