import * as React from "react";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import { Divider, Grid, Typography } from "@mui/material";
import { themePalette } from "../config/theme.config";
import { ListComponent } from "../components/List";

interface IBasicListProps {
  name: string;
  list: string[];
  selectBreed: Function;
}

export const BasicList: React.FC<IBasicListProps> = ({
  name,
  list,
  selectBreed,
}) => {
  return (
    <Box
      sx={{
        width: "100%",
        bgcolor: themePalette.BEAU_BLUE,
        height: "100%",
      }}
    >
      <nav aria-label="main mailbox folders">
        <Grid p={"15px"}>
          <Box
            component="img"
            src="https://dog.ceo/img/dog-api-logo.svg"
            alt="Dog API logo"
            sx={{
              maxWidth: "70px",
              display: "block",
              marginRight: "auto",
              marginLeft: "auto",
              marginTop: "auto",
            }}
          />
          <Typography
            variant="h6"
            noWrap
            component="div"
            color={"black"}
            textAlign={"center"}
          >
            {name}
          </Typography>
        </Grid>
        <Divider />
        <List sx={{height: "100vh", overflow: "auto"}}>
          {list.map((b: string) => (
            <ListComponent breed={b} key={b} selectBreed={selectBreed} />
          ))}
        </List>
      </nav>
    </Box>
  );
};
